document.addEventListener('DOMContentLoaded', () => {
    renderDynamicContent();
    initMobileMenu();
    initContactForm();
    initCardLinks();
    initFiltering();
    initLightbox();
    refreshAos();
});

function renderDynamicContent() {
    const data = window.MSG_DATA;
    if (!data) return;

    renderGlobalNavigation(data);
    renderFooterLinks(data);
    renderUnitDetailPage(data);
    renderNewsPreview(data);
    renderNewsList(data);
    renderNewsDetailPage(data);
    renderBusinessCategoryNav(data);
    renderBusinessSections(data);
    renderGalleryFilters(data);
    renderGalleryGrid(data);
}

function renderGlobalNavigation(data) {
    if (!Array.isArray(data.navigation)) return;

    const activeHref = getActiveNavHref(data);
    const desktopNav = document.querySelector('#main-nav .hidden.md\\:flex.items-center.justify-center.flex-1');
    const mobileMenu = document.getElementById('mobile-menu');

    if (desktopNav) {
        desktopNav.innerHTML = data.navigation.map(item => {
            const isActive = item.href === activeHref;
            const className = isActive
                ? 'text-[#D90429]'
                : 'text-zinc-500 hover:text-zinc-900 transition-colors';

            return `<a class="${className}" href="${escapeAttr(item.href)}">${escapeHTML(item.label)}</a>`;
        }).join('');
    }

    if (mobileMenu) {
        mobileMenu.innerHTML = `
            ${data.navigation.map(item => {
            const isActive = item.href === activeHref;
            const className = isActive
                ? 'text-[#D90429] font-bold text-lg block'
                : 'text-zinc-600 font-bold text-lg hover:text-[#D90429] block';

            return `<a class="${className}" href="${escapeAttr(item.href)}">${escapeHTML(item.label)}</a>`;
        }).join('')}
            <div class="pt-6 mt-2 border-t border-zinc-100">
                <button onclick="window.location.href='contact.html'" class="w-full bg-[#D90429] text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg active:scale-[0.98] transition-transform">Hubungi Kami</button>
            </div>
        `;
    }
}

function renderFooterLinks(data) {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const menuContainer = getFooterColumnContainer(footer, 'Menu Utama');
    if (menuContainer && Array.isArray(data.navigation)) {
        const links = [...data.navigation, { label: 'Hubungi Kami', href: 'contact.html' }];
        menuContainer.innerHTML = links.map(item => `
            <a class="text-gray-600 hover:text-[#D90429] font-medium transition-colors" href="${escapeAttr(item.href)}">${escapeHTML(item.label)}</a>
        `).join('');
    }

    const socialContainer = getFooterColumnContainer(footer, 'Jaringan Sosial Media')
        || createFooterSocialColumn(footer);
    if (socialContainer && Array.isArray(data.businessUnits)) {
        const units = data.businessUnits.filter(unit => unit.visible !== false);
        socialContainer.innerHTML = units.map(unit => `
            <a class="text-gray-600 hover:text-[#D90429] font-medium transition-colors flex items-center gap-1" href="${escapeAttr(unit.socialUrl || unit.url || 'javascript:void(0)')}">
                <span class="material-symbols-outlined text-[14px]">link</span> ${escapeHTML(unit.name)}
            </a>
        `).join('');
    }
}

function renderUnitDetailPage(data) {
    const unitTitle = document.getElementById('unit-title');
    if (!unitTitle || !Array.isArray(data.businessUnits)) return;

    const baseUnit = getCurrentBusinessUnit(data);
    if (!baseUnit) {
        renderUnitNotFound(data);
        return;
    }

    const unit = {
        ...baseUnit,
        ...(data.unitDetails?.[baseUnit.id] || {}),
    };
    const cover = unit.coverImage || unit.image;
    const displayLocation = hasPlaceholderText(unit.location) ? unit.fullAddress : unit.location;

    document.title = `${unit.name} | ${data.site?.companyName || 'PT. Mari Sukses Gemilang'}`;

    const coverImg = document.getElementById('unit-cover');
    const category = document.getElementById('unit-category');
    const location = document.querySelector('#unit-location span:last-child');

    if (coverImg && cover) {
        coverImg.src = cover;
        coverImg.alt = unit.name;
    }

    if (category) category.textContent = unit.label || '';
    unitTitle.textContent = unit.name;
    if (location) location.textContent = displayLocation || unit.fullAddress || '[Detail Alamat Menyusul]';

    renderUnitDescription(unit);
    renderUnitMedia(unit);
    renderUnitInfoCard(unit);
}

function renderBusinessCategoryNav(data) {
    const nav = document.querySelector('[data-business-category-nav]');
    if (!nav || !Array.isArray(data.businessCategories)) return;

    nav.innerHTML = data.businessCategories.map((category, index) => `
        <a href="#kategori-${escapeAttr(category.id)}" class="px-6 py-2 rounded-full ${index === 0 ? 'bg-[#D90429] text-white font-bold shadow-sm hover:bg-[#B00020]' : 'bg-zinc-100 text-zinc-600 font-medium hover:bg-zinc-200'} text-sm transition-all">
            ${escapeHTML(category.navLabel || category.title)}
        </a>
    `).join('');
}

function renderBusinessSections(data) {
    const containers = document.querySelectorAll('[data-business-sections]');
    if (!containers.length || !Array.isArray(data.businessCategories) || !Array.isArray(data.businessUnits)) return;

    containers.forEach(container => {
        const isHome = container.getAttribute('data-business-sections') === 'home';
        const visibleUnits = data.businessUnits.filter(unit => unit.visible !== false);
        const categories = data.businessCategories.filter(category =>
            visibleUnits.some(unit => unit.categoryId === category.id)
        );

        container.innerHTML = categories.map((category, categoryIndex) => {
            const units = visibleUnits.filter(unit => unit.categoryId === category.id);
            const sectionClass = isHome
                ? (categoryIndex === 0 ? '' : 'pt-8')
                : `scroll-mt-32${categoryIndex === 0 ? '' : ' pt-8'}`;
            const titleClass = isHome
                ? 'font-heading font-bold text-2xl text-zinc-900'
                : 'font-heading font-bold text-3xl text-zinc-900';
            const headingTag = isHome ? 'h3' : 'h2';
            const gridClass = isHome
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

            return `
                <div id="kategori-${escapeAttr(category.id)}" class="${sectionClass}">
                    <div class="flex items-center gap-4 mb-8 border-b border-zinc-100 pb-4">
                        <div class="w-12 h-12 bg-[#D90429]/10 rounded-xl flex items-center justify-center text-[#D90429]">
                            <span class="material-symbols-outlined text-2xl">${escapeHTML(category.icon)}</span>
                        </div>
                        <div>
                            <${headingTag} class="${titleClass}">${escapeHTML(category.title)}</${headingTag}>
                            <p class="text-zinc-500 text-sm mt-1">${escapeHTML(category.description)}</p>
                        </div>
                    </div>
                    <div class="${gridClass}">
                        ${units.map((unit, unitIndex) => renderBusinessCard(unit, { compact: isHome, index: unitIndex })).join('')}
                    </div>
                </div>
            `;
        }).join('');
    });
}

function renderBusinessCard(unit, options = {}) {
    const tag = options.compact ? 'div' : 'article';
    const imageHeight = options.compact ? 'h-48' : 'h-56';
    const titleClass = options.compact
        ? 'font-heading font-bold text-xl text-zinc-900 mb-2'
        : 'font-bold text-xl text-zinc-900 mb-2';
    const aosDelay = 100 + ((options.index || 0) % 8) * 50;
    const isPending = isTbc(unit.hours);
    const hasStatus = Boolean(unit.status);
    const cardStateClass = hasStatus ? ' opacity-80' : '';
    const imageStateClass = hasStatus ? ' bg-zinc-200' : '';
    const imageClass = hasStatus ? ' mix-blend-luminosity opacity-70' : '';
    const labelClass = hasStatus ? 'bg-zinc-800/90 text-white' : 'bg-white/90 text-[#D90429]';
    const statusOverlay = hasStatus ? `
        <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <span class="text-white font-bold tracking-widest text-sm uppercase px-4 py-2 border-2 border-white rounded-lg">${escapeHTML(unit.status)}</span>
        </div>
    ` : '';

    return `
        <${tag} role="link" tabindex="0" data-card-link="${escapeAttr(unit.url || '404.html')}" class="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-zinc-100 flex flex-col h-full${cardStateClass}" data-aos="fade-up" data-aos-delay="${aosDelay}">
            <div class="relative ${imageHeight} overflow-hidden${imageStateClass}">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105${imageClass}" src="${escapeAttr(unit.image)}" alt="${escapeAttr(unit.name)}" loading="lazy">
                ${statusOverlay}
                <div class="absolute top-4 left-4 ${labelClass} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">${escapeHTML(unit.label)}</div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="${titleClass}">${escapeHTML(unit.name)}</h3>
                <p class="text-zinc-500 text-sm mb-4 flex items-start gap-2">
                    <span class="material-symbols-outlined text-base mt-0.5">location_on</span>
                    <span>${escapeHTML(unit.location || '[Detail Alamat Menyusul]')}</span>
                </p>
                <div class="mt-auto pt-4 border-t border-zinc-100">
                    <p class="text-zinc-600 text-sm flex items-center gap-2 font-medium">
                        <span class="material-symbols-outlined text-base text-zinc-400">schedule</span>
                        <span class="${isPending ? 'italic text-zinc-400' : ''}">${escapeHTML(unit.hours || 'Jam Operasional: TBC')}</span>
                    </p>
                </div>
            </div>
        </${tag}>
    `;
}

function renderGalleryFilters(data) {
    const container = document.querySelector('[data-gallery-filters]');
    if (!container || !Array.isArray(data.galleryFilters)) return;

    container.innerHTML = data.galleryFilters.map((filter, index) => `
        <button data-filter="${escapeAttr(filter.id)}" class="filter-btn px-6 py-2 ${index === 0 ? 'bg-[#D90429] text-white shadow-sm' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'} rounded-full font-medium transition-colors">
            ${escapeHTML(filter.label)}
        </button>
    `).join('');
}

function renderGalleryGrid(data) {
    const grid = document.querySelector('[data-gallery-grid]');
    if (!grid || !Array.isArray(data.galleryItems)) return;

    grid.innerHTML = data.galleryItems.map(item => `
        <div data-category="${escapeAttr(item.categoryId)}" class="gallery-item cursor-pointer mb-md group relative overflow-hidden rounded-xl bg-white border border-zinc-100 transition-all hover:shadow-xl">
            <img class="gallery-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" alt="${escapeAttr(item.alt || item.title)}" data-alt="${escapeAttr(item.alt || item.title)}" src="${escapeAttr(item.image)}" loading="lazy"/>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
            </div>
            <div class="p-md">
                <span class="text-primary font-label-sm block mb-xs">${escapeHTML(item.categoryLabel)}</span>
                <h4 class="font-h4 text-h4 text-on-background">${escapeHTML(item.title)}</h4>
            </div>
        </div>
    `).join('');
}

function renderNewsPreview(data) {
    const grid = document.querySelector('[data-news-preview-grid]');
    if (!grid || !Array.isArray(data.newsArticles)) return;

    grid.innerHTML = data.newsArticles.slice(0, 3).map((article, index) =>
        renderNewsCard(article, {
            imageHeight: 'h-64',
            imageRounded: 'rounded-xl mb-6',
            border: false,
            delay: 100 + index * 100,
        })
    ).join('');
}

function renderNewsList(data) {
    const grid = document.querySelector('[data-news-list]');
    if (!grid || !Array.isArray(data.newsArticles)) return;

    document.title = `Berita | ${data.site?.companyName || 'PT. Mari Sukses Gemilang'}`;
    grid.innerHTML = data.newsArticles.map((article, index) =>
        renderNewsCard(article, {
            imageHeight: 'h-56',
            imageRounded: '',
            border: true,
            delay: 100 + (index % 3) * 100,
        })
    ).join('');
}

function renderNewsCard(article, options = {}) {
    const href = getNewsDetailUrl(article.id);
    const borderClass = options.border ? 'border border-zinc-100 shadow-sm hover:shadow-xl' : '';
    const imageRounded = options.imageRounded || '';
    const delay = options.delay || 100;

    return `
        <article class="bg-white rounded-xl overflow-hidden group cursor-pointer ${borderClass} transition-all" data-card-link="${escapeAttr(href)}" role="link" tabindex="0" data-aos="fade-up" data-aos-delay="${delay}" data-aos-duration="600">
            <div class="${options.imageHeight || 'h-56'} overflow-hidden ${imageRounded}">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${escapeAttr(article.alt || article.title)}" src="${escapeAttr(article.image)}" loading="lazy">
            </div>
            <div class="${options.border ? 'p-6' : ''}">
                <div class="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                    <span class="text-[#D90429] font-bold">${escapeHTML(article.category)}</span>
                    <span>${escapeHTML(article.date)}</span>
                </div>
                <h4 class="font-heading font-bold text-xl mb-3 text-zinc-900 group-hover:text-[#D90429] transition-colors line-clamp-2">${escapeHTML(article.title)}</h4>
                <p class="text-zinc-500 text-sm line-clamp-2 mb-4 leading-relaxed">${escapeHTML(article.excerpt)}</p>
                <a class="text-sm font-bold text-[#D90429] flex items-center gap-1 group-hover:gap-2 transition-all" href="${escapeAttr(href)}">
                    Baca Selengkapnya <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </article>
    `;
}

function renderNewsDetailPage(data) {
    if (getCurrentFile() !== 'news-detail.html' || !Array.isArray(data.newsArticles)) return;

    const article = getCurrentNewsArticle(data) || data.newsArticles[0];
    if (!article) return;

    document.title = `${article.title} | ${data.site?.companyName || 'PT. Mari Sukses Gemilang'}`;

    const header = document.querySelector('header.pt-32');
    const heroImage = document.querySelector('main img');
    const articleBody = document.querySelector('main article');
    const tagContainer = document.querySelector('main article + div');
    const relatedGrid = document.querySelector('section.bg-zinc-50 .grid');
    const relatedAllLink = document.querySelector('section.bg-zinc-50 a[href]');

    if (header) {
        header.innerHTML = `
            <div class="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
                <div class="flex items-center justify-center gap-3 text-sm mb-6">
                    <a href="news.html" class="text-zinc-500 hover:text-red-600 transition-colors">Berita Utama</a>
                    <span class="text-zinc-300">/</span>
                    <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold text-xs tracking-wider uppercase">${escapeHTML(article.category)}</span>
                    <span class="text-zinc-300">/</span>
                    <span class="text-zinc-500">${escapeHTML(article.date)}</span>
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight mb-8 tracking-tight">${escapeHTML(article.title)}</h1>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm border-t border-zinc-200 pt-8 mt-8">
                    <div class="flex items-center gap-3">
                        <img src="${escapeAttr(article.authorAvatar || getAuthorAvatar(article.author))}" alt="${escapeAttr(article.author)}" class="w-10 h-10 rounded-full">
                        <div class="text-left">
                            <div class="font-bold text-zinc-900">${escapeHTML(article.author)}</div>
                            <div class="text-zinc-500">${escapeHTML(article.authorRole || data.site?.companyName || '')}</div>
                        </div>
                    </div>
                    <div class="hidden sm:block w-px h-10 bg-zinc-200"></div>
                    <div class="flex items-center gap-3">
                        <span class="text-zinc-500 font-medium">Bagikan Artikel:</span>
                        <button class="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-50 text-zinc-600 hover:text-[#D90429] flex items-center justify-center transition-all" type="button"><span class="material-symbols-outlined text-sm">link</span></button>
                        <button class="w-8 h-8 rounded-full bg-zinc-100 hover:bg-blue-50 text-zinc-600 hover:text-blue-600 flex items-center justify-center transition-all" type="button"><span class="material-symbols-outlined text-sm">share</span></button>
                    </div>
                </div>
            </div>
        `;
    }

    if (heroImage) {
        heroImage.src = article.image;
        heroImage.alt = article.alt || article.title;
    }

    if (articleBody) {
        articleBody.innerHTML = renderNewsArticleBody(article);
    }

    if (tagContainer) {
        tagContainer.innerHTML = (article.tags || []).map(tag => `
            <span class="px-4 py-2 bg-zinc-100 text-zinc-600 text-sm rounded-full font-medium cursor-pointer hover:bg-zinc-200 transition-colors">${escapeHTML(tag)}</span>
        `).join('');
    }

    if (relatedGrid) {
        relatedGrid.innerHTML = data.newsArticles
            .filter(item => item.id !== article.id)
            .slice(0, 3)
            .map((item, index) => renderRelatedNewsCard(item, index))
            .join('');
    }

    if (relatedAllLink) relatedAllLink.href = 'news.html';
}

function renderNewsArticleBody(article) {
    const firstLetter = article.lead?.trim().charAt(0) || '';
    const leadRest = article.lead?.trim().slice(1) || '';
    const lead = article.lead ? `
        <p class="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light mb-10">
            <span class="float-left text-7xl font-black text-[#D90429] mr-4 mt-2 leading-[0.8]">${escapeHTML(firstLetter)}</span>${escapeHTML(leadRest)}
        </p>
    ` : '';
    const content = (article.content || []).map(paragraph => `<p class="mb-8">${escapeHTML(paragraph)}</p>`).join('');
    const quote = article.quote ? `
        <div class="my-16 pl-8 py-4 border-l-4 border-[#D90429] bg-red-50/50 rounded-r-xl">
            <blockquote class="text-2xl font-semibold italic text-zinc-800 m-0 leading-snug">"${escapeHTML(article.quote.text)}"</blockquote>
            <div class="mt-4 font-bold text-zinc-900">- ${escapeHTML(article.quote.by)}</div>
        </div>
    ` : '';

    return `${lead}${content}${quote}`;
}

function renderRelatedNewsCard(article, index) {
    const href = getNewsDetailUrl(article.id);

    return `
        <article class="bg-white rounded-xl overflow-hidden border border-zinc-100 group shadow-sm hover:shadow-xl transition-all" data-card-link="${escapeAttr(href)}" role="link" tabindex="0" data-aos="fade-up" data-aos-delay="${100 + index * 100}" data-aos-duration="600">
            <div class="h-48 overflow-hidden relative">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${escapeAttr(article.image)}" alt="${escapeAttr(article.alt || article.title)}" loading="lazy">
            </div>
            <div class="p-6">
                <div class="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                    <span class="bg-red-50 text-[#D90429] px-3 py-1 rounded-full font-semibold">${escapeHTML(article.category)}</span>
                    <span>${escapeHTML(article.date)}</span>
                </div>
                <h4 class="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#D90429] transition-colors line-clamp-2">${escapeHTML(article.title)}</h4>
                <p class="text-zinc-500 text-sm line-clamp-3 mb-6">${escapeHTML(article.excerpt)}</p>
                <a class="text-sm font-bold text-[#D90429] flex items-center gap-1" href="${escapeAttr(href)}">Baca Selengkapnya <span class="material-symbols-outlined text-sm">chevron_right</span></a>
            </div>
        </article>
    `;
}

function renderUnitDescription(unit) {
    if (!Array.isArray(unit.description)) return;

    const description = document.querySelector('.lg\\:col-span-2 .prose');
    if (!description) return;

    description.innerHTML = unit.description.map(paragraph => `<p>${paragraph}</p>`).join('');
}

function renderUnitMedia(unit) {
    const leftColumn = document.querySelector('.lg\\:col-span-2');
    if (!leftColumn) return;

    const galleryHeading = Array.from(leftColumn.children).find(child =>
        child.tagName === 'H2' && child.textContent.trim().includes('Galeri')
    );
    if (!galleryHeading) return;

    let sibling = galleryHeading.nextSibling;
    while (sibling) {
        const nextSibling = sibling.nextSibling;
        sibling.remove();
        sibling = nextSibling;
    }

    galleryHeading.insertAdjacentHTML('afterend', renderUnitMediaMarkup(unit));
}

function renderUnitMediaMarkup(unit) {
    const poster = unit.coverImage || unit.image;
    const videos = Array.isArray(unit.videos) ? unit.videos : [];
    const photos = Array.isArray(unit.photos) && unit.photos.length ? unit.photos : [poster].filter(Boolean);
    const videoSection = videos.length ? `
        <div class="mb-10">
            <h3 class="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-[#D90429]">play_circle</span>
                Video Profil
            </h3>
            <div class="space-y-4">
                ${videos.map(video => `
                    <div class="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video group border border-zinc-200">
                        <video class="w-full h-full object-contain" controls poster="${escapeAttr(poster)}">
                            <source src="${escapeAttr(video)}" type="video/mp4">
                            Browser Anda tidak mendukung pemutar video.
                        </video>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    return `
        ${videoSection}
        <div>
            <h3 class="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-[#D90429]">photo_library</span>
                Foto Bisnis
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                ${photos.map((photo, index) => `
                    <div class="gallery-item aspect-square rounded-2xl overflow-hidden cursor-pointer relative group shadow-md border border-zinc-100">
                        <img src="${escapeAttr(photo)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${escapeAttr(`${unit.name} photo ${index + 1}`)}" loading="lazy">
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderUnitInfoCard(unit) {
    const infoCard = Array.from(document.querySelectorAll('.bg-zinc-50')).find(card =>
        card.textContent.includes('Informasi Operasional')
    );
    if (!infoCard) return;

    const address = unit.fullAddress || unit.location || '[Detail Alamat Menyusul]';
    const mapQuery = unit.mapQuery || `${unit.name} ${address}`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    const facilitySection = renderFacilitySection(unit.facilities);
    const bookingSection = renderBookingSection(unit.bookingLinks);

    infoCard.innerHTML = `
        <h3 class="font-bold text-xl text-zinc-900 mb-6">Informasi Operasional</h3>
        <div class="space-y-6">
            ${renderInfoRow('schedule', 'Jam Buka', unit.hours || 'Jam Operasional: TBC')}
            ${renderInfoRow('call', 'Kontak', unit.contact || 'Kontak: TBC')}
            ${renderInfoRow('map', 'Alamat Lengkap', address)}
        </div>
        ${facilitySection}
        ${bookingSection}
        <a href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" class="w-full mt-8 bg-[#D90429] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#B00020] transition-colors shadow-sm flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-lg" aria-hidden="true">directions</span>
            Buka di Maps
        </a>
    `;
}

function renderFacilitySection(facilities) {
    if (!Array.isArray(facilities) || !facilities.length) return '';

    return `
        <div class="mt-8 pt-8 border-t border-zinc-200">
            <h4 class="font-bold text-sm text-zinc-900 mb-4 uppercase tracking-wider">Fasilitas</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                ${facilities.map(facility => `
                    <div class="flex items-center gap-3 text-sm text-zinc-600">
                        <span class="material-symbols-outlined text-base text-[#D90429]" aria-hidden="true">check_circle</span>
                        <span>${escapeHTML(facility)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderBookingSection(bookingLinks) {
    if (!Array.isArray(bookingLinks) || !bookingLinks.length) return '';

    return `
        <div class="mt-8 pt-8 border-t border-zinc-200">
            <h4 class="font-bold text-sm text-zinc-900 mb-4 uppercase tracking-wider">Booking</h4>
            <div class="space-y-3">
                ${bookingLinks.map(link => `
                    <a href="${escapeAttr(link.href)}" target="_blank" rel="noopener noreferrer" class="w-full bg-white border border-zinc-200 text-zinc-800 font-bold py-3 px-4 rounded-xl hover:border-[#D90429] hover:text-[#D90429] transition-colors shadow-sm flex items-center justify-between gap-3">
                        <span class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-lg text-[#D90429]" aria-hidden="true">${escapeHTML(link.icon || 'arrow_outward')}</span>
                            <span>${escapeHTML(link.label)}</span>
                        </span>
                        <span class="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderUnitNotFound(data) {
    document.title = `Unit Tidak Ditemukan | ${data.site?.companyName || 'PT. Mari Sukses Gemilang'}`;

    const unitTitle = document.getElementById('unit-title');
    const category = document.getElementById('unit-category');
    const location = document.querySelector('#unit-location span:last-child');
    const description = document.querySelector('.lg\\:col-span-2 .prose');
    const infoCard = Array.from(document.querySelectorAll('.bg-zinc-50')).find(card =>
        card.textContent.includes('Informasi Operasional')
    );

    if (category) category.textContent = 'Tidak tersedia';
    if (unitTitle) unitTitle.textContent = 'Unit Bisnis Tidak Ditemukan';
    if (location) location.textContent = 'Pilih unit bisnis dari halaman portofolio.';
    if (description) {
        description.innerHTML = '<p>Data unit bisnis belum tersedia atau ID pada URL tidak sesuai dengan data di site-data.</p>';
    }
    if (infoCard) {
        infoCard.innerHTML = `
            <h3 class="font-bold text-xl text-zinc-900 mb-4">Informasi Tidak Tersedia</h3>
            <p class="text-zinc-600 text-sm leading-relaxed mb-6">Kembali ke halaman Unit Bisnis untuk memilih outlet yang tersedia.</p>
            <button onclick="window.location.href='business.html'" class="w-full bg-[#D90429] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#B00020] transition-colors shadow-sm">
                Lihat Unit Bisnis
            </button>
        `;
    }
}

function renderInfoRow(icon, title, value) {
    return `
        <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-[#D90429]/10 flex items-center justify-center text-[#D90429] shrink-0">
                <span class="material-symbols-outlined">${escapeHTML(icon)}</span>
            </div>
            <div>
                <h4 class="font-bold text-sm text-zinc-900">${escapeHTML(title)}</h4>
                <p class="text-zinc-600 text-sm mt-1">${formatMultiline(value)}</p>
            </div>
        </div>
    `;
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Pesan berhasil terkirim! Kami akan segera menghubungi Anda.', 'success');
        contactForm.reset();
    });
}

function initCardLinks(scope = document) {
    const cards = scope.querySelectorAll('[data-card-link]');

    cards.forEach(card => {
        const href = card.getAttribute('data-card-link');
        if (!href) return;

        const navigate = () => {
            window.location.href = href;
        };

        card.addEventListener('click', (e) => {
            if (e.target.closest('a, button, video')) return;
            navigate();
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate();
            }
        });
    });
}

function initFiltering() {
    const filterBtns = document.querySelectorAll('.b-filter-btn, .filter-btn');
    const filterItems = document.querySelectorAll('.b-item, .gallery-item');

    if (!filterBtns.length || !filterItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(button => setFilterButtonState(button, false));
            setFilterButtonState(btn, true);

            const filter = btn.getAttribute('data-filter');

            filterItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = '';
                    item.style.opacity = '';
                    item.style.transform = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function setFilterButtonState(button, isActive) {
    button.classList.toggle('bg-[#D90429]', isActive);
    button.classList.toggle('bg-red-600', false);
    button.classList.toggle('hover:bg-[#B00020]', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('shadow-sm', isActive);
    button.classList.toggle('bg-zinc-100', !isActive);
    button.classList.toggle('hover:bg-zinc-200', !isActive);
    button.classList.toggle('text-zinc-600', !isActive);
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    if (!lightbox || !lightboxImg || !lightboxClose || !galleryImages.length) return;

    galleryImages.forEach(img => {
        const item = img.closest('.gallery-item');
        if (!item) return;

        item.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || img.getAttribute('data-alt') || 'Gallery image';
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');

            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightboxImg.classList.remove('scale-95');
            }, 10);
        });
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

function refreshAos() {
    if (window.AOS?.refreshHard) {
        window.AOS.refreshHard();
    } else if (window.AOS?.refresh) {
        window.AOS.refresh();
    }
}

function getActiveNavHref(data) {
    const currentFile = getCurrentFile();

    if (currentFile === 'unit-detail.html' || data.businessUnits?.some(unit => unit.url === currentFile)) {
        return 'business.html';
    }

    if (currentFile === 'news-detail.html') {
        return 'news.html';
    }

    return data.navigation?.some(item => item.href === currentFile) ? currentFile : 'index.html';
}

function getCurrentBusinessUnit(data) {
    const unitId = new URLSearchParams(window.location.search).get('id');
    if (unitId) {
        return data.businessUnits.find(unit => unit.id === unitId);
    }

    const currentFile = getCurrentFile();
    return data.businessUnits.find(unit => getUrlPath(unit.url) === currentFile);
}

function getCurrentNewsArticle(data) {
    const articleId = new URLSearchParams(window.location.search).get('id');
    if (!articleId) return null;

    return data.newsArticles.find(article => article.id === articleId);
}

function getNewsDetailUrl(id) {
    return `news-detail.html?id=${encodeURIComponent(id)}`;
}

function getAuthorAvatar(name = 'Corporate Communications') {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=ef4444&color=fff`;
}

function getCurrentFile() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

function getUrlPath(url = '') {
    return url.split('?')[0];
}

function getFooterColumnContainer(footer, title) {
    const heading = Array.from(footer.querySelectorAll('h4')).find(element =>
        element.textContent.trim().toLowerCase() === title.toLowerCase()
    );

    return heading?.nextElementSibling || null;
}

function createFooterSocialColumn(footer) {
    const footerRow = Array.from(footer.querySelectorAll('div')).find(element => {
        const className = element.className || '';
        return className.includes('py-16')
            && className.includes('md:flex-row')
            && className.includes('relative');
    });

    if (!footerRow) return null;

    footerRow.insertAdjacentHTML('beforeend', `
        <div class="w-full md:w-2/4 flex flex-col space-y-4">
            <h4 class="font-bold text-[#1e293b] text-sm tracking-wide mb-2 uppercase">Jaringan Sosial Media</h4>
            <div class="grid grid-cols-2 gap-y-3 gap-x-4 text-xs"></div>
        </div>
    `);

    return getFooterColumnContainer(footer, 'Jaringan Sosial Media');
}

function hasPlaceholderText(value) {
    return !value || value.includes('[Detail Alamat') || value.toLowerCase().includes('tbc');
}

function isTbc(value) {
    return !value || value.toLowerCase().includes('tbc');
}

function formatMultiline(value = '') {
    return escapeHTML(value).replaceAll('\n', '<br>');
}

function escapeHTML(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function escapeAttr(value = '') {
    return escapeHTML(value);
}

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
