document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('opacity-0');
                menuIcon.classList.toggle('rotate-90');
                closeIcon.classList.toggle('opacity-0');
                closeIcon.classList.toggle('-rotate-90');
            }
        });
    }

    // 2. Custom Toast Notification for Forms
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Pesan berhasil terkirim! Kami akan segera menghubungi Anda.', 'success');
            contactForm.reset();
        });
    }

    // 3. Business & Gallery Filtering
    const filterBtns = document.querySelectorAll('.b-filter-btn, .filter-btn');
    const filterItems = document.querySelectorAll('.b-item, .gallery-item');

    if (filterBtns.length > 0 && filterItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update Active State
                filterBtns.forEach(b => {
                    b.classList.remove('bg-[#D90429]', 'text-white', 'shadow-sm', 'bg-red-600');
                    b.classList.add('bg-zinc-100', 'text-zinc-600');
                });
                btn.classList.remove('bg-zinc-100', 'text-zinc-600');
                btn.classList.add('bg-[#D90429]', 'text-white', 'shadow-sm');

                const filter = btn.getAttribute('data-filter');

                filterItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // Hapus inline styles yang mungkin bentrok dengan AOS atau CSS Tailwind
                        item.style.opacity = '';
                        item.style.transform = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Gallery Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    if (lightbox && lightboxImg && lightboxClose && galleryImages.length > 0) {
        galleryImages.forEach(img => {
            const item = img.closest('.gallery-item');
            if (item) {
                item.addEventListener('click', () => {
                    lightboxImg.src = img.src;
                    lightbox.classList.remove('hidden');
                    lightbox.classList.add('flex');
                    
                    setTimeout(() => {
                        lightbox.classList.remove('opacity-0');
                        lightboxImg.classList.remove('scale-95');
                    }, 10);
                });
            }
        });

        const closeLightbox = () => {
            lightbox.classList.add('opacity-0');
            lightboxImg.classList.add('scale-95');
            setTimeout(() => {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
            }, 300);
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
});

// Helper Function: Show Custom Toast
function showToast(message, type = 'success') {
    // Check if toast container exists, if not create it
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed bottom-5 right-5 z-[100] flex flex-col gap-3';
        document.body.appendChild(toastContainer);
    }

    // Create Toast Element
    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    
    toast.className = `flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-500 translate-y-10 opacity-0 ${isSuccess ? 'bg-zinc-900 text-white' : 'bg-red-600 text-white'}`;
    
    toast.innerHTML = `
        <span class="material-symbols-outlined">${isSuccess ? 'check_circle' : 'error'}</span>
        <span class="font-medium text-sm">${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-4 text-zinc-400 hover:text-white transition-colors">
            <span class="material-symbols-outlined text-sm">close</span>
        </button>
    `;

    toastContainer.appendChild(toast);

    // Animate In
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    });

    // Auto Remove after 4 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}
