import os
import glob
from pathlib import Path
import re

base_dir = "c:/Users/hantu/OneDrive/Documents/PROJECT_MAGANG_WEB/PTmsg/LP-MSG"
template_path = os.path.join(base_dir, "unit-detail.html")

businesses = [
    {"id": "j-chicken-tprv", "title": "J Chicken Tuparev", "category": "F&B"},
    {"id": "ulon-signature", "title": "Ulon Signature Tuparev", "category": "Cafe"},
    {"id": "padelnis-sport", "title": "Padelnis Sport", "category": "Olahraga"},
    {"id": "grandmonde", "title": "Grandmonde", "category": "Hiburan", "folder": "GRANDMONDE"},
    {"id": "araichi-ramen", "title": "Araichi Ramen", "category": "Restoran"},
    {"id": "ulon-coffee-cld", "title": "Ulon Ciledug", "category": "Cafe"},
    {"id": "ulon-coffee-pku", "title": "Ulon Pekanbaru", "category": "Cafe"},
]

with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

for b in businesses:
    folder_name = b.get("folder", b["id"])
    asset_dir = os.path.join(base_dir, "assets", "img", folder_name)
    
    videos = glob.glob(os.path.join(asset_dir, "*.mp4"))
    images = glob.glob(os.path.join(asset_dir, "*.jpg")) + glob.glob(os.path.join(asset_dir, "*.jpeg")) + glob.glob(os.path.join(asset_dir, "*.png"))
    
    videos = [os.path.relpath(v, base_dir).replace('\\', '/') for v in videos]
    images = [os.path.relpath(img, base_dir).replace('\\', '/') for img in images]
    
    content = template.replace("<title>Detail Unit Bisnis | PT. Mari Sukses Gemilang</title>", f"<title>{b['title']} | PT. Mari Sukses Gemilang</title>")
    content = content.replace('<span id="unit-category" class="inline-block px-3 py-1 bg-[#D90429] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">F&B</span>', 
                              f'<span id="unit-category" class="inline-block px-3 py-1 bg-[#D90429] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">{b["category"]}</span>')
    content = content.replace('<h1 id="unit-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Nama Unit Bisnis</h1>',
                              f'<h1 id="unit-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{b["title"]}</h1>')
    
    if images:
        content = content.replace('src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070"', f'src="{images[0]}"')
    
    video_html = ""
    if videos:
        video_html += '<div class="mb-10"><h3 class="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-[#D90429]">play_circle</span>Video Profil</h3><div class="space-y-4">'
        for v in videos:
            video_html += f'<div class="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video group border border-zinc-200"><video class="w-full h-full object-contain" controls poster="{images[0] if images else ""}"><source src="{v}" type="video/mp4">Browser Anda tidak mendukung pemutar video.</video></div>'
        video_html += '</div></div>'
    
    content = re.sub(r'<!-- Video Section -->.*?<!-- Photo Grid Section -->', 
                     f'<!-- Video Section -->\n        {video_html}\n\n        <!-- Photo Grid Section -->', 
                     content, flags=re.DOTALL)
    
    img_html = '<div class="grid grid-cols-2 md:grid-cols-3 gap-5">'
    for img in images:
        img_html += f'''
                <div class="gallery-item aspect-square rounded-2xl overflow-hidden cursor-pointer relative group shadow-md border border-zinc-100">
                    <img src="{img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery Image">
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
                    </div>
                </div>'''
    img_html += '\n            </div>'
    
    content = re.sub(r'<div class="grid grid-cols-2 md:grid-cols-3 gap-5">.*?</div>\s*</div>\s*</div>\s*<!-- Right Column: Sidebar Info -->',
                     f'{img_html}\n        </div>\n    </div>\n\n    <!-- Right Column: Sidebar Info -->',
                     content, flags=re.DOTALL)
    
    output_path = os.path.join(base_dir, f"{b['id']}.html")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {b['id']}.html")
