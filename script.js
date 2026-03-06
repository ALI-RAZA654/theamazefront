// 🚀 THE AMAZE - CONVERSION & AESTHETIC ENGINE v2026.1

const AMAZE_EMAIL_KEY = 'the_amaze_email_2026';
const ADMIN_KEYS = {
    PRODUCTS: 'the_amaze_products_2026',
    SALE: 'the_amaze_sale_2026',
    HERO: 'the_amaze_hero_2026',
    PROMO: 'the_amaze_promo_2026',
    ORDERS: 'the_amaze_orders_2026',
    PAYMENTS: 'the_amaze_payments_2026',
    SOCIAL: 'the_amaze_social_2026',
    REVIEWS: 'the_amaze_reviews_2026',
    CONTACT: 'the_amaze_contact_2026',
    SETTINGS: 'the_amaze_settings_2026'
};

const AMAZE = {
    state: {
        cart: JSON.parse(localStorage.getItem('the_amaze_cart_2026')) || [],
        favorites: JSON.parse(localStorage.getItem('the_amaze_favorites_2026')) || [],
        reviews: JSON.parse(localStorage.getItem(ADMIN_KEYS.REVIEWS)) || [],
        selectedSizes: {},
        selectedColors: {},
        products: JSON.parse(localStorage.getItem(ADMIN_KEYS.PRODUCTS)) || [
            {
                id: 1,
                name: 'VANGUARD SILK TEE',
                price: 180,
                original: 250,
                badge: 'Drop 01',
                category: 'vanguard',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1483393458019-411bc6bd104e?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1520975682031-a6adf98c9a3a?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 4,
                description: "Engineered from bio-synthetic silk strands, the Vanguard Tee offers frictionless movement and climatic adaptation. Designed for the urban operator who demands stealth and style.",
                sizes: ['S', 'M', 'L', 'XL'],
                colors: [
                    { name: 'Void Black', hex: '#050505', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Glitch White', hex: '#F0F0F0', image: 'https://images.unsplash.com/photo-1520975958225-0f4a25f2f5ee?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'Bio-Synthetic Silk',
                sizeChart: {
                    'S': { chest: '36-38"', length: '27"' },
                    'M': { chest: '38-40"', length: '28"' },
                    'L': { chest: '40-42"', length: '29"' },
                    'XL': { chest: '42-44"', length: '30"' }
                }
            },
            {
                id: 2,
                name: 'TECH-SHELL JACKET',
                price: 450,
                original: 600,
                badge: 'New Gen',
                category: 'vanguard',
                image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1520975958225-0f4a25f2f5ee?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 2,
                description: "A triple-layer defense matrix against environmental hostility. The Tech-Shell features self-healing polymer fabrics and integrated data-ports for seamless connectivity.",
                sizes: ['M', 'L', 'XL'],
                colors: [
                    { name: 'Cyber Onyx', hex: '#1A1A1A', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Signal Red', hex: '#EF4444', image: 'https://images.unsplash.com/photo-1520975948225-0f4a25f2f5ee?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'Self-Healing Polymer',
                sizeChart: {
                    'M': { chest: '38-40"', length: '28"' },
                    'L': { chest: '40-42"', length: '29"' },
                    'XL': { chest: '42-44"', length: '30"' }
                }
            },
            {
                id: 3,
                name: 'ARCTICA WOOL COAT',
                price: 899,
                original: 1200,
                badge: 'Exclusive',
                category: 'essentials',
                image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 12,
                description: "Harvested from the high-altitude plateaus, Arctica Wool provides unmatched thermal regulation. The silhouette is cut for command presence in sub-zero protocols.",
                sizes: ['S', 'M', 'L'],
                colors: [
                    { name: 'Slate Grey', hex: '#64748B', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Deep Navy', hex: '#1E293B', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'High-Altitude Wool',
                sizeChart: {
                    'S': { chest: '36-38"', length: '38"' },
                    'M': { chest: '38-40"', length: '39"' },
                    'L': { chest: '40-42"', length: '40"' }
                }
            },
            {
                id: 4,
                name: 'METAL-REINFORCED DENIM',
                price: 320,
                original: 450,
                badge: 'Archive',
                category: 'essentials',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 7,
                description: "Denim woven with microscopic titanium filaments. Indestructible, adaptive, and relentlessly stylish. A classic form factor updated for the kinetic age.",
                sizes: ['30', '32', '34', '36'],
                colors: [
                    { name: 'Raw Indigo', hex: '#312E81', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Carbon Black', hex: '#000000', image: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'Titanium-Thread Denim',
                sizeChart: {
                    '30': { waist: '30"', inseam: '32"' },
                    '32': { waist: '32"', inseam: '32"' },
                    '34': { waist: '34"', inseam: '34"' },
                    '36': { waist: '36"', inseam: '34"' }
                }
            },
            {
                id: 5,
                name: 'NEON-REACTIVE HOODIE',
                price: 210,
                original: 300,
                badge: 'Limited',
                category: 'essentials',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 5,
                description: "Fabric responding to UV radiation and sound waves. The Neon-Reactive Hoodie is a living entity that shifts visual states based on your environment.",
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: [
                    { name: 'Neon Lime', hex: '#84CC16', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Electric Purple', hex: '#A855F7', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'UV-Reactive Polymer Blend',
                sizeChart: {
                    'S': { chest: '36-38"', length: '26"' },
                    'M': { chest: '38-40"', length: '27"' },
                    'L': { chest: '40-42"', length: '28"' },
                    'XL': { chest: '42-44"', length: '29"' },
                    'XXL': { chest: '44-46"', length: '30"' }
                }
            },
            {
                id: 6,
                name: 'SENSORY KNIT WEAR',
                price: 160,
                original: 220,
                badge: 'Studio',
                category: 'essentials',
                image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 9,
                description: "Tactile feedback interface woven into a garment. The Sensory Knit adapts to body temperature and provides haptic comfort during high-stress intervals.",
                sizes: ['One Size'],
                colors: [
                    { name: 'Sand', hex: '#D6D3D1', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Charcoal', hex: '#44403C', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'Thermal-Adaptive Knit',
                sizeChart: { 'One Size': { chest: '38-42"', length: '26"' } }
            },
            {
                id: 7,
                name: 'BIO-HYBRID SNEAKERS',
                price: 420,
                original: 550,
                badge: 'Tech',
                category: 'accessories',
                image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 3,
                description: "Grown, not manufactured. The sole utilizes mycelium structures for perfect shock absorption, while the upper mesh breathes like organic skin.",
                sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
                colors: [
                    { name: 'Bone White', hex: '#F5F5F4', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80' },
                    { name: 'Moss Green', hex: '#3F6212', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'Mycelium Sole, Organic Mesh Upper',
                sizeChart: {
                    'US 8': { length: '10"', width: '4"' },
                    'US 9': { length: '10.5"', width: '4.25"' },
                    'US 10': { length: '11"', width: '4.5"' },
                    'US 11': { length: '11.5"', width: '4.75"' }
                }
            },
            {
                id: 8,
                name: 'CRYPTO-SIGNATURE BAG',
                price: 1200,
                original: 1500,
                badge: 'One/One',
                category: 'accessories',
                image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
                hoverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
                gallery: [
                    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
                ],
                stock: 1,
                description: "Embedded with an NFC chip authenticating ownership on the blockchain. Carry your physical and digital assets in absolute security and luxury.",
                sizes: ['Standard'],
                colors: [
                    { name: 'Matte Black', hex: '#000000', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80' }
                ],
                fabric: 'NFC-Embedded Leather',
                sizeChart: { 'Standard': { width: '16"', height: '12"', depth: '5"' } }
            }
        ],
        filter: 'all',
        pulseMessages: [
            "Someone in Tokyo just secured VANGUARD SILK.",
            "Arctic Wool inventory dropped to 1 piece.",
            "Exclusive drop 2026.v1 is 84% Sold Out.",
            "New VIP member joined THE AMAZE elite.",
            "London Archive request processed."
        ]
    },

    async init() {
        this.cacheDOM();
        this.bindEvents();

        // Initial UI Feedback
        if (this.dom.productGrid) {
            this.dom.productGrid.innerHTML = `
                <div class="col-span-full py-24 text-center">
                    <span class="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse text-white/20">Establishing Neural Connection...</span>
                </div>
            `;
        }

        try {
            await this.fetchInitialData();
            this.applyAdminSettings();
        } catch (err) {
            console.error('Core Protocol Failure:', err);
            // Fallback to local cache if available or continue with defaults
        }

        // Maintenance Mode Check
        if (this.state.settings && this.state.settings.maintenanceMode) {
            document.body.innerHTML = `
                <div style="height: 100vh; background: #000; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: monospace;">
                    <h1 style="font-size: 2rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem; color: #06b6d4;">System Update In Progress</h1>
                    <p style="opacity: 0.5; text-transform: uppercase; letter-spacing: 0.1em;">The Amaze Protocol is currently enhancing its core infrastructure.</p>
                    <p style="margin-top: 2rem; font-size: 0.8rem; opacity: 0.3;">ErrorCode: MAINTENANCE_MODE_ACTIVE</p>
                </div>
            `;
            return;
        }

        // Parse URL parameters for filters
        const params = new URLSearchParams(window.location.search);
        const filterParam = params.get('filter') || params.get('category');
        if (filterParam) {
            this.state.filter = filterParam;
        }

        // Page-specific render
        const path = (window.location.pathname || '').toLowerCase();
        const href = (window.location.href || '').toLowerCase();
        const isProductPage = path.includes('product') || href.includes('product.html');
        const isArchivePage = path.includes('archive') || href.includes('archive');

        if (isArchivePage) {
            this.renderArchive();
        } else if (isProductPage) {
            this.renderProductDetails();
        } else {
            this.renderProducts();
        }

        this.updateCart();
        this.updateFavoritesCount();
        this.syncFavoriteIcons();
        this.initReveal();
        this.initCursor();
        this.startPulse();
    },

    async fetchInitialData() {
        console.log('Initiating Data Acquisition Protocol...');

        const fetchSafe = async (url) => {
            try {
                return await API.get(url);
            } catch (e) {
                console.warn(`Protocol Warning: ${url} failed`, e);
                return null;
            }
        };

        const [
            products,
            hero,
            promo,
            sale,
            footer,
            lookbook,
            categories,
            museData,
            contactSubjects,
            trust,
            reviewsData
        ] = await Promise.all([
            fetchSafe('/products'),
            fetchSafe('/hero'),
            fetchSafe('/promo/public'),
            fetchSafe('/flash-sale'),
            fetchSafe('/footer'),
            fetchSafe('/lookbook'),
            fetchSafe('/category'),
            fetchSafe('/muse'),
            fetchSafe('/contact/subjects'),
            fetchSafe('/trust'),
            fetchSafe('/reviews')
        ]);

        // Map backend product structure to frontend structure with safety guard
        if (products && Array.isArray(products)) {
            this.state.products = products.map(p => ({
                id: p._id, // Use Mongo ID as internal reference
                uid: p.id, // Keep the numeric ID if needed for routing
                name: p.name,
                price: p.price,
                original: p.originalPrice,
                badge: p.badge,
                category: p.category,
                image: p.mainImage,
                hoverImage: p.hoverImage,
                gallery: p.gallery || [],
                stock: p.stock,
                description: p.description,
                sizes: p.sizes || [],
                colors: p.variants ? p.variants.map(v => ({ name: v.colorName, hex: v.colorHex || '#000000', image: v.image })) : (p.colors || []),
                fabric: p.fabric,
                sizeChart: p.sizeChart || [],
                isFlashSale: p.isFlashSale,
                salePrice: p.salePrice || 0
            }));
        }

        // Initialize state safely
        if (hero) this.state.hero = hero;
        if (promo) this.state.promo = promo;
        if (sale) this.state.sale = sale;
        if (footer) this.state.footerData = footer;
        if (lookbook) this.state.lookbook = lookbook;
        this.state.categories = (categories && Array.isArray(categories)) ? categories : this.state.categories;

        if (museData) {
            this.state.muses = museData.muses || [];
            this.state.museSettings = museData.settings || {};
        }

        if (contactSubjects) this.state.contactSubjects = contactSubjects;
        if (trust) this.state.trustStats = trust;

        if (reviewsData) {
            this.state.reviews = reviewsData.reviews?.filter(r => r.approved) || [];
            this.state.reviewSettings = reviewsData.settings || {};
        }

        // Update pulse messages from muse data
        if (this.state.muses && Array.isArray(this.state.muses) && this.state.muses.length > 0) {
            this.state.pulseMessages = this.state.muses.map(m => `${m.location}: "${m.text}"`);
        }

        console.log('Data Acquisition Complete. Matrix Synchronized.');
    },

    applyAdminSettings() {
        // 1. Hero Section
        const hero = this.state.hero;
        if (hero) {
            const h_title = document.querySelector('#home h2');
            const h_sub = document.querySelector('#home p');
            const h_video = document.querySelector('#home video source');
            const h_cta = document.querySelector('#home a[href="#products"] span');
            const h_spotlight = document.getElementById('spotlight');

            if (h_title) {
                // Ensure the last word gets the Playfair teal styling regardless of newlines
                // Converts newlines to <br> first, then wraps the final continuous string of text
                let headingText = hero.heading.replace(/\n/g, '<br>');
                // Match the last non-space/non-bracket characters and wrap them
                headingText = headingText.replace(/([^ \n<>]+)$/, '<span class="font-playfair italic font-normal text-[var(--accent-cyan)]" id="heroHeadingAccent">$1</span>');
                h_title.innerHTML = headingText;
            }
            if (h_sub) h_sub.innerText = hero.subtext;
            if (h_video) {
                h_video.src = hero.videoLink;
                h_video.parentElement.load();
            }
            if (h_cta) h_cta.innerText = hero.ctaText;
            if (h_spotlight) h_spotlight.style.display = hero.enableSpotlight ? 'block' : 'none';

            // 1.1 Hero Featured Card Sync
            const h_f_card = document.getElementById('heroFeaturedCard');
            if (hero.featuredProductId && h_f_card) {
                const featuredProduct = this.state.products.find(p => p.id === hero.featuredProductId || p.uid === hero.featuredProductId);
                if (featuredProduct) {
                    h_f_card.classList.remove('hidden');
                    const h_f_img = document.getElementById('heroFeaturedImage');
                    const h_f_name = document.getElementById('heroFeaturedName');
                    const h_f_desc = document.getElementById('heroFeaturedDesc');
                    const h_f_price = document.getElementById('heroFeaturedPrice');
                    const h_f_original = document.getElementById('heroFeaturedOriginal');
                    const h_f_badge = document.getElementById('heroFeaturedBadge');
                    const h_f_add = document.getElementById('heroFeaturedAddToCart');
                    const h_f_buy = document.getElementById('heroFeaturedBuyNow');

                    if (h_f_img) h_f_img.src = featuredProduct.image;
                    if (h_f_name) h_f_name.innerText = featuredProduct.name;
                    if (h_f_desc) h_f_desc.innerText = featuredProduct.description;
                    if (h_f_price) h_f_price.innerText = `RS.${featuredProduct.price || 0}`;
                    if (h_f_original) h_f_original.innerText = featuredProduct.original ? `RS.${featuredProduct.original}` : '';
                    if (h_f_badge) {
                        if (featuredProduct.badge) {
                            h_f_badge.innerText = featuredProduct.badge;
                            h_f_badge.style.display = 'flex';
                        } else {
                            h_f_badge.style.display = 'none';
                        }
                    }
                    if (h_f_add) h_f_add.setAttribute('onclick', `AMAZE.addToCart('${featuredProduct.id}')`);
                    if (h_f_buy) h_f_buy.setAttribute('onclick', `AMAZE.buyNow('${featuredProduct.id}', 1)`);
                } else {
                    h_f_card.classList.add('hidden');
                }
            } else if (h_f_card) {
                h_f_card.classList.add('hidden');
            }

            // 1.2 Vanguard Spotlight (Multi-Card Sync)
            const spotlightContainer = document.getElementById('spotlightContainer');
            if (spotlightContainer && hero.spotlightProductIds && hero.spotlightProductIds.length > 0) {
                const spotlightProducts = hero.spotlightProductIds
                    .map(id => this.state.products.find(p => p.id === id))
                    .filter(p => p);

                spotlightContainer.innerHTML = spotlightProducts.map((p, index) => `
                    <div class="spotlight-card group relative glass-panel rounded-[4rem] p-6 overflow-hidden scroll-reveal cursor-pointer"
                        style="transition-delay: ${0.1 * (index + 1)}s" onclick="location.href='product.html?id=${p.id}'">
                        <div class="aspect-[3/4] rounded-[3rem] overflow-hidden relative bg-white/5 mb-10">
                            ${p.badge ? `<span class="absolute top-6 left-6 z-10 text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-black/60 rounded-full border border-white/5 backdrop-blur-md">${p.badge}</span>` : ''}

                            <!-- Like Button -->
                            <button onclick="event.stopPropagation(); AMAZE.toggleFavorite('${p.id}')"
                                class="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 group/heart">
                                <i id="fav-icon-${p.id}" class="far fa-heart text-white transition-colors duration-300"></i>
                            </button>

                            <!-- Clickable Image Area -->
                            <a href="product.html?id=${p.id}" class="block absolute inset-0 z-0" onclick="event.stopPropagation();">
                                <!-- Primary Image -->
                                <img src="${p.image}" class="product-img absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:opacity-0">
                                <!-- Hover Image -->
                                <img src="${p.hoverImage || p.image}" class="product-img absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                            </a>

                            <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>

                            <!-- Floating Purchase UI -->
                            <div class="buy-trigger absolute bottom-8 left-8 right-8 z-20 opacity-0 translate-y-10 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                                <div class="flex gap-3">
                                    <button onclick="event.stopPropagation(); AMAZE.addToCart('${p.id}')"
                                        class="flex-1 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white hover:text-black transition-all">
                                        Add to Cart
                                    </button>
                                    <button onclick="event.stopPropagation(); AMAZE.buyNow('${p.id}', 1)"
                                        class="flex-1 py-5 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[var(--accent-teal)] transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="px-4">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <h4 class="text-2xl font-black tracking-tighter text-white uppercase group-hover:text-[var(--accent-cyan)] transition-colors">
                                        ${p.name}</h4>
                                    <div class="flex items-center gap-3 mt-2">
                                        <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Pieces:</span>
                                        <span class="text-[9px] font-bold uppercase tracking-[0.2em] ${p.stock < 5 ? 'text-red-500' : 'text-[var(--accent-cyan)]'}">${p.stock}</span>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="block text-3xl font-black price-protocol">RS.${p.salePrice || p.price}</span>
                                    ${p.salePrice ? `<span class="block text-[10px] text-white/20 line-through tracking-tighter">RS.${p.price}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // 2. Promo Marquee
        const promo = this.state.promo;
        if (promo) {
            const bars = document.querySelectorAll('.promo-bar');
            const marquee = document.querySelector('.animate-marquee');
            if (marquee) {
                const promoTexts = promo.texts || [promo.text];

                // Helper to format content
                const formatPromo = (text) => {
                    let content = text;
                    // 1. Highlight Price Patterns (Rs. 5,999)
                    content = content.replace(/(Rs\.\s*[\d,]+)/gi, '<span class="promo-highlight">$1</span>');
                    // 2. Highlight "SALE" (case-insensitive)
                    content = content.replace(/\b(SALE)\b/gi, '<span class="promo-highlight">$1</span>');
                    // 3. Highlight text after colon
                    content = content.replace(/(:\s*)([^<>\n]+)/g, (match, sep, text) => {
                        return `${sep}<span class="promo-highlight">${text.trim()}</span>`;
                    });
                    // 4. Highlight promo code if present
                    if (promo.code && content.includes(promo.code) && !content.includes(`>${promo.code}</span>`)) {
                        const codeRegex = new RegExp(`(${promo.code})`, 'g');
                        content = content.replace(codeRegex, '<span class="promo-highlight">$1</span>');
                    }
                    return content;
                };

                // Create items (double them for seamless loop)
                const itemsHtml = [...promoTexts, ...promoTexts].map(text => `
                    <div class="promo-item">${formatPromo(text)}</div>
                `).join('');

                marquee.innerHTML = itemsHtml;
            }
            bars.forEach(bar => bar.style.display = promo.isEnabled ? 'flex' : 'none');
            // Update Top-level margin to accommodate promo bar if visible
            if (!promo.isEnabled) {
                const nav = document.getElementById('navbar');
                if (nav) nav.style.top = '0px';
            }
        }

        // 3. Flash Sale
        const sale = this.state.sale;
        const saleSection = document.getElementById('sale');
        if (sale && saleSection) {
            const isSaleActive = sale.active;
            saleSection.style.display = isSaleActive ? 'block' : 'none';

            if (isSaleActive) {
                // Update Banner Text
                const bannerText = document.getElementById('saleBannerText');
                if (bannerText && sale.bannerText) bannerText.innerText = sale.bannerText;

                // Start Countdown
                if (sale.endTime) {
                    this.startFlashSaleCountdown(sale.endTime);
                }

                // Render Sale Products
                const saleGrid = document.getElementById('saleProductGrid');
                if (saleGrid && this.state.products && Array.isArray(this.state.products)) {
                    const saleProducts = this.state.products.filter(p => p.isFlashSale);
                    saleGrid.innerHTML = saleProducts.map(p => this.createProductCard(p)).join('');
                }
            }
        }

        // 4. Footer Section
        const footer = this.state.footerData;
        if (footer) {
            const f_desc = document.querySelector('footer p');
            const f_copy = document.querySelector('footer div span.text-white\\/20');
            const socialLinks = document.querySelectorAll('footer a');
            let f_fb, f_ig, f_tt;

            socialLinks.forEach(link => {
                const text = link.innerText.toLowerCase();
                if (text.includes('facebook')) f_fb = link;
                if (text.includes('instagram')) f_ig = link;
                if (text.includes('tiktok')) f_tt = link;
            });

            if (f_desc) f_desc.innerText = footer.description;
            if (f_copy) f_copy.innerText = footer.copyright;
            if (f_fb) f_fb.href = footer.socials.facebook;
            if (f_ig) f_ig.href = footer.socials.instagram;
            if (f_tt) f_tt.href = footer.socials.tiktok;

            // Update Contact info
            const contactLinks = document.querySelectorAll('footer ul:last-of-type span');
            if (contactLinks.length >= 3 && footer.contact) {
                contactLinks[0].innerText = footer.contact.phone;
                contactLinks[1].innerText = footer.contact.email;
                contactLinks[2].innerText = footer.contact.location;
            }

            const cols = document.querySelectorAll('footer > div > div');
            if (cols.length >= 4) {
                cols[1].style.display = footer.sections.showNavigation ? 'block' : 'none';
                cols[2].style.display = footer.sections.showDigital ? 'block' : 'none';
                cols[3].style.display = footer.sections.showLegal ? 'block' : 'none';
            }
        }

        // 5. Lookbook Section
        const lookbook = this.state.lookbook;
        if (lookbook) {
            const lb_section = document.getElementById('lookbook');
            const lb_video = lb_section?.querySelector('video source');
            if (lb_section) lb_section.style.display = lookbook.isEnabled ? 'flex' : 'none';
            if (lb_video && lookbook.videoLink) {
                if (lb_video.src !== lookbook.videoLink) {
                    lb_video.src = lookbook.videoLink;
                    lb_video.parentElement.load();
                }
            }
        }

        // 6. Categories (Bento & Menu)
        const categories = this.state.categories;
        if (categories) {
            const bentoBlocks = document.querySelectorAll('.bento-grid > div');
            if (bentoBlocks.length >= 3 && categories.length >= 3) {
                categories.forEach((cat, i) => {
                    const block = bentoBlocks[i];
                    if (!block) return;
                    const img = block.querySelector('img');
                    const name = block.querySelector('span:first-of-type');
                    if (img) img.src = cat.image;
                    if (name) name.innerText = cat.name;
                    // Update link if category has uid
                    const link = block.closest('a');
                    if (link) link.href = `archive.html?category=${cat.uid}`;
                });
            }

            const menuCatList = document.getElementById('menuCategories');
            if (menuCatList) {
                menuCatList.innerHTML = categories.map(cat => `
                    <li>
                        <a href="archive.html?category=${cat.uid}" 
                           class="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-[var(--accent-cyan)] transition-all flex items-center gap-3 group">
                            <i class="fas fa-chevron-right text-[8px] text-white/10 group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1 transition-all"></i>
                            ${cat.name}
                        </a>
                    </li>
                `).join('');
            }
        }

        // 7. Muse Archive (Social Proof)
        const muses = this.state.muses;
        if (muses && Array.isArray(muses) && muses.length >= 3) {
            const museCards = document.querySelectorAll('#muse .grid > div');
            if (museCards.length >= 3) {
                muses.forEach((muse, i) => {
                    const card = museCards[i];
                    if (!card) return;
                    const img = card.querySelector('img');
                    const role = card.querySelector('span.text-accent-cyan') || card.querySelector('span.text-xs');
                    const author = card.querySelector('h4');
                    const quote = card.querySelector('p.text-white\\/40');

                    if (img && muse.image) img.src = muse.image;
                    if (role && muse.location) role.innerText = muse.location;
                    if (author && muse.author) author.innerText = muse.author;
                    if (quote) {
                        quote.innerText = `"${muse.text}"`;
                    }
                });
            }
        }

        // 8. Trusted Worldwide Protocol
        const trustStats = this.state.trustStats;
        const trustedGrid = document.getElementById('trustedStatsGrid');
        if (trustedGrid && trustStats && trustStats.length > 0) {
            trustedGrid.innerHTML = trustStats.map((stat, i) => `
                <div class="glass-panel p-10 rounded-[2.5rem] text-center group hover:border-[var(--accent-cyan)]/30 transition-all duration-700 scroll-reveal" style="transition-delay: ${0.1 * i}s">
                    <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--accent-cyan)] transition-colors">
                        <i class="${stat.icon} text-2xl text-white group-hover:text-black transition-colors"></i>
                    </div>
                    <h4 class="text-4xl font-black text-white mb-2 tracking-tighter">${stat.value}</h4>
                    <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">${stat.label}</p>
                </div>
            `).join('');
        }

        // 8. Contact Subjects
        const contactSubjects = this.state.contactSubjects;
        if (contactSubjects) {
            const subjectSelect = document.querySelector('#contactForm select');
            if (subjectSelect) {
                subjectSelect.innerHTML = contactSubjects.map(s => `<option class="bg-black" value="${s.name}">${s.name}</option>`).join('');
            }
        }



        // 10. Social Pulse Visibility
        if (this.state.museSettings && this.dom.livePulse) {
            this.dom.livePulse.style.display = this.state.museSettings.enabled ? 'block' : 'none';
        }

        // 11. Categories Protocol
        this.renderDynamicCategories();
    },

    cacheDOM() {
        this.dom = {
            cursor: document.getElementById('cursor'),
            follower: document.getElementById('cursorFollower'),
            nav: document.getElementById('navbar'),
            productGrid: document.getElementById('productGrid'),
            cartBtn: document.getElementById('cartBtn'),
            cartModal: document.getElementById('cartModal'),
            cartPanel: document.getElementById('cartPanel'),
            closeCart: document.getElementById('closeCart'),
            cartItems: document.getElementById('cartItems'),
            cartTotal: document.getElementById('cartTotal'),
            cartCount: document.getElementById('cartCount'),
            livePulse: document.getElementById('livePulse'),
            overlay: document.getElementById('cartOverlay'),
            menuBtn: document.getElementById('menuBtn'),
            menuDrawer: document.getElementById('menuDrawer'),
            menuOverlay: document.getElementById('menuOverlay'),
            menuOverlay: document.getElementById('menuOverlay'),
            closeMenu: document.getElementById('closeMenu'),
            favBtn: document.getElementById('favBtn'),
            favCount: document.getElementById('favCount'),
            favModal: document.getElementById('favModal'),
            favPanel: document.getElementById('favPanel'),
            closeFav: document.getElementById('closeFav'),
            favItems: document.getElementById('favItems'),
            favOverlay: document.getElementById('favOverlay'),
            checkoutModal: document.getElementById('checkoutModal'),
            checkoutOverlay: document.getElementById('checkoutOverlay'),
            closeCheckout: document.getElementById('closeCheckout'),
            categoriesContainer: document.getElementById('categoriesContainer'),
            categoryFilters: document.getElementById('categoryFilters'),
            searchBtn: document.getElementById('searchBtn'),
            searchOverlay: document.getElementById('searchOverlay'),
            closeSearch: document.getElementById('closeSearch'),
            searchInput: document.getElementById('searchInput'),
            searchResults: document.getElementById('searchResults'),
        };
    },

    bindEvents() {
        this.dom.cartBtn?.addEventListener('click', () => this.toggleCart(true));
        this.dom.closeCart?.addEventListener('click', () => this.toggleCart(false));
        this.dom.overlay?.addEventListener('click', () => this.toggleCart(false));
        this.dom.favBtn?.addEventListener('click', () => this.toggleFavorites(true));
        this.dom.closeFav?.addEventListener('click', () => this.toggleFavorites(false));
        this.dom.favOverlay?.addEventListener('click', () => this.toggleFavorites(false));
        this.dom.menuBtn?.addEventListener('click', () => this.toggleMenu(true));
        this.dom.closeMenu?.addEventListener('click', () => this.toggleMenu(false));
        this.dom.menuOverlay?.addEventListener('click', () => this.toggleMenu(false));
        this.dom.searchBtn?.addEventListener('click', () => this.toggleSearch(true));
        this.dom.closeSearch?.addEventListener('click', () => this.toggleSearch(false));
        this.dom.searchInput?.addEventListener('input', (e) => this.handleSearch(e));

        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('mousemove', (e) => this.handleCursorMove(e));

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.toggleSearch(false);
                this.toggleCart(false);
                this.toggleFavorites(false);
                this.toggleMenu(false);
                this.toggleCheckout(false);
            }
        });
    },

    updateSEO(data) {
        if (!data) return;
        const title = data.name ? `${data.name} | THE AMAZE Premium Clothing` : 'THE AMAZE Fashion | 2026 Global Showroom';
        const description = data.description || 'Premium technical garments and digital sculptures.';

        document.title = title;

        const metaDesc = document.getElementById('meta-description');
        if (metaDesc) metaDesc.setAttribute('content', description);

        const ogTitle = document.getElementById('og-title');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.getElementById('og-og-description');
        if (ogDesc) ogDesc.setAttribute('content', description);

        const ogImage = document.getElementById('og-image');
        if (ogImage && (data.image || data.mainImage)) {
            ogImage.setAttribute('content', data.image || data.mainImage);
        }
    },

    handleScroll() {
        if (this.dom.nav) {
            if (window.scrollY > 80) {
                this.dom.nav.classList.add('bg-black/40', 'backdrop-blur-2xl', 'py-6');
                this.dom.nav.classList.remove('py-8');
            } else {
                this.dom.nav.classList.remove('bg-black/40', 'backdrop-blur-2xl', 'py-6');
                this.dom.nav.classList.add('py-8');
            }
        }

        // Intersection Reveal
        const reveals = document.querySelectorAll('.scroll-reveal');
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });

        // Custom Reveal Logic
        document.querySelectorAll('.reveal-container').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('revealed');
            }
        });
    },

    handleCursorMove(e) {
        const { clientX: x, clientY: y } = e;
        if (this.dom.cursor) {
            this.dom.cursor.style.left = `${x}px`;
            this.dom.cursor.style.top = `${y}px`;
        }
        if (this.dom.follower) {
            setTimeout(() => {
                this.dom.follower.style.left = `${x}px`;
                this.dom.follower.style.top = `${y}px`;
            }, 80);
        }

        const target = e.target;
        if (!this.dom.follower) return;
        if (target.closest('button') || target.closest('a') || target.closest('.group')) {
            this.dom.follower.style.width = '80px';
            this.dom.follower.style.height = '80px';
            this.dom.follower.style.background = 'rgba(255,255,255,0.05)';
            this.dom.follower.style.borderColor = 'var(--accent-cyan)';
        } else {
            this.dom.follower.style.width = '40px';
            this.dom.follower.style.height = '40px';
            this.dom.follower.style.background = 'transparent';
            this.dom.follower.style.borderColor = 'rgba(255,255,255,0.2)';
        }
    },

    renderProducts() {
        if (!this.dom.productGrid) return;
        const filtered = this.state.filter === 'all'
            ? this.state.products.slice(0, 8)
            : this.state.products.filter(p => p.category === this.state.filter);

        this.dom.productGrid.innerHTML = filtered.map(p => this.createProductCard(p)).join('');
    },

    toggleSearch(show) {
        if (!this.dom.searchOverlay) return;
        if (show) {
            this.dom.searchOverlay.classList.remove('hidden');
            setTimeout(() => {
                this.dom.searchInput?.focus();
            }, 100);
            document.body.style.overflow = 'hidden';
        } else {
            this.dom.searchOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    },

    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        const resultsContainer = this.dom.searchResults;
        if (!resultsContainer) return;

        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            resultsContainer.classList.add('hidden');
            return;
        }

        const matches = this.state.products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );

        resultsContainer.classList.remove('hidden');

        if (matches.length === 0) {
            resultsContainer.innerHTML = `
                <div class="col-span-full py-12 md:py-20 text-center">
                    <p class="text-white/20 text-xs md:text-sm font-black uppercase tracking-widest leading-loose">
                        No Protocol Matches Found<br>
                        <span class="text-[9px] lowercase opacity-50 tracking-normal italic font-light">Refine your search parameters.</span>
                    </p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = matches.map(p => `
            <div class="group cursor-pointer bg-white/[0.03] border border-white/5 p-4 rounded-2xl hover:border-[accent-cyan]/40 hover:bg-white/[0.05] transition-all duration-500" 
                 onclick="window.location.href='product.html?id=${p.id}'">
                <div class="aspect-square mb-4 overflow-hidden rounded-xl bg-black">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100">
                </div>
                <div>
                    <span class="text-[9px] font-black tracking-widest text-[accent-cyan] uppercase mb-1 block">${p.category}</span>
                    <h4 class="text-xs md:text-sm font-black text-white uppercase tracking-tighter">${p.name}</h4>
                    <p class="text-[10px] md:text-xs text-white/40 mt-1 font-bold italic">Rs. ${p.price}</p>
                </div>
            </div>
        `).join('').replace(/\[accent-cyan\]/g, 'var(--accent-cyan)');
    },

    renderProductDetails() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const product = this.state.products.find(p => p.id === id || p.uid == id);
        const container = document.getElementById('productDetail');

        if (!product || !container) {
            if (container) container.innerHTML = `<h1 class="text-white text-center text-3xl">Protocol Error: Asset Not Found</h1>`;
            return;
        }

        const isFav = this.state.favorites.includes(product.id);
        const heartClass = isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-white';

        // Pre-select first size for cart consistency
        if (product.sizes && product.sizes.length > 0 && !this.state.selectedSizes[product.id]) {
            this.state.selectedSizes[product.id] = product.sizes[0];
        }

        // Generate Size Options
        const sizesHtml = product.sizes && product.sizes.length > 0 ? `
            <div class="mb-8">
                <div class="flex items-center justify-between mb-4">
                    <span class="block text-[9px] font-black uppercase tracking-widest text-white/40">Select Size</span>
                    <button type="button" onclick="AMAZE.openSizeChart('${product.id}')" class="text-[9px] font-bold uppercase tracking-widest text-[var(--accent-cyan)] hover:underline focus:outline-none">Size Chart</button>
                </div>
                <div class="flex flex-wrap gap-3" data-size-group="${product.id}">
                    ${product.sizes.map((s, i) => {
            const isSelected = this.state.selectedSizes[product.id] === s;
            return `
                            <button type="button"
                                onclick="AMAZE.selectSize('${product.id}', '${s}', this)"
                                class="w-12 h-12 flex items-center justify-center border ${isSelected ? 'bg-white text-black border-white' : 'border-white/20 text-white/60 hover:border-white hover:text-white'} transition-all rounded-full text-[10px] font-bold uppercase tracking-widest">
                                ${s}
                            </button>
                        `;
        }).join('')}
                </div>
            </div>
        ` : '';

        // Pre-select first color
        if (product.colors && product.colors.length > 0 && !this.state.selectedColors[product.id]) {
            const first = product.colors[0];
            this.state.selectedColors[product.id] = typeof first === 'object' ? first.name : first;
        }

        // Generate Color Options
        const colorsHtml = product.colors && product.colors.length > 0 ? `
            <div class="mb-12">
                <span class="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-4">Select Pigment</span>
                <div class="flex flex-wrap gap-4" data-color-group="${product.id}">
                    ${product.colors.map((c, i) => {
            const isObj = typeof c === 'object';
            const hex = isObj ? c.hex : c;
            const name = isObj ? c.name : `Pigment ${i + 1}`;
            const img = isObj ? (c.image || product.image) : product.image;
            const isSelected = this.state.selectedColors[product.id] === name;

            return `
                        <button onclick="AMAZE.selectColor('${product.id}', '${name}', '${img}', this)" 
                            class="group relative w-8 h-8 rounded-full focus:outline-none" title="${name}">
                            <div class="w-full h-full rounded-full border border-white/20 transition-all duration-300 ${isSelected ? 'ring-2 ring-[var(--accent-cyan)] ring-offset-2 ring-offset-black scale-110' : 'group-hover:scale-110'}" style="background-color: ${hex};"></div>
                        </button>
                        `;
        }).join('')}
                </div>
            </div>
        ` : '';

        container.innerHTML = `
            <div class="max-w-[1700px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-start animate-reveal-up">
                <!-- Gallery Section -->
                <div class="relative group md:sticky md:top-40" id="mainImageContainer" style="overflow: hidden; border-radius: 3rem;">
                    <div class="aspect-[3/4] bg-white/5 border border-white/10 relative overflow-hidden">
                        <img id="mainImage" src="${product.image}" class="w-full h-full object-cover transition-transform duration-200 ease-out origin-center" style="will-change: transform;">
                        ${product.badge ? `<span class="absolute top-6 left-6 md:top-10 md:left-10 z-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 md:px-6 md:py-3 bg-black/80 backdrop-blur-md rounded-full border border-white/10 pointer-events-none">${product.badge}</span>` : ''}
                        
                        <button onclick="AMAZE.toggleFavorite('${product.id}')" class="absolute top-6 right-6 md:top-10 md:right-10 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 group/fav">
                            <i id="fav-icon-${product.id}" class="${heartClass} text-base md:text-xl group-hover/fav:scale-110 transition-transform"></i>
                        </button>
                    </div>
                    <div class="mt-6 glass-panel border border-white/10 rounded-3xl p-4">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-[9px] font-black uppercase tracking-widest text-white/40">Gallery / Looks</span>
                            <span class="text-[9px] font-bold uppercase tracking-widest text-white/20">Tap to preview</span>
                        </div>
                        <div id="productThumbs" class="flex gap-3 overflow-x-auto pr-2 custom-scrollbar"></div>
                    </div>
                </div>

                <!-- Details Section -->
            <div class="pt-0 md:pt-10">
                <div class="mb-6 md:mb-10 flex flex-wrap items-center gap-2 md:gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                    <a href="index.html" class="hover:text-[var(--accent-cyan)] transition-colors">Home</a>
                    <span class="text-[var(--accent-cyan)]">/</span>
                    <a href="#" class="hover:text-[var(--accent-cyan)] transition-colors">${product.category}</a>
                    <span class="text-[var(--accent-cyan)]">/</span>
                    <span class="text-white">${product.name}</span>
                </div>

                <h1 class="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9]">${product.name}</h1>

                <p class="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Fabric: ${product.fabric || 'Hybrid Synthetic'}</p>

                <div class="flex items-end gap-6 mb-12">
                    <span class="text-4xl font-bold text-[var(--accent-cyan)]">RS.${product.isFlashSale ? product.salePrice : product.price}</span>
                    <span class="text-xl text-white/20 line-through decoration-white/20 mb-1">RS.${product.isFlashSale ? product.price : (product.original || 0)}</span>
                </div>

                <div class="prose prose-invert mb-12">
                    <p class="text-lg text-white/70 font-light leading-relaxed">${product.description || "Specifications classified. Elite access required."}</p>
                </div>

                <!-- Variants -->
                ${sizesHtml}
                ${colorsHtml}

                <!-- Quantity -->
                <div class="mb-12">
                    <span class="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-4">Quantity</span>
                    <div class="flex items-center gap-6">
                        <button onclick="const q = document.getElementById('qty-val'); let v = parseInt(q.innerText); if(v > 1) q.innerText = v - 1;"
                            class="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition-all rounded-full">
                            <i class="fas fa-minus text-[10px]"></i>
                        </button>
                        <span id="qty-val" class="text-2xl font-black text-white w-12 text-center">1</span>
                        <button onclick="const q = document.getElementById('qty-val'); let v = parseInt(q.innerText); if(v < ${product.stock}) q.innerText = v + 1;"
                            class="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition-all rounded-full">
                            <i class="fas fa-plus text-[10px]"></i>
                        </button>
                        <span class="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-4">${product.stock} Units Available</span>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-col gap-4 mb-12">
                    <div class="flex gap-4">
                        <button onclick="AMAZE.addToCart('${product.id}', parseInt(document.getElementById('qty-val').innerText))" class="flex-1 py-5 bg-white/10 border border-white/20 text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all">
                            Add to Bag
                        </button>
                        <button onclick="AMAZE.buyNow('${product.id}', parseInt(document.getElementById('qty-val').innerText), ${product.isFlashSale ? product.salePrice : product.price}, ${product.isFlashSale})" class="flex-1 py-5 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-[var(--accent-teal)] transition-colors shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                            Buy Now
                        </button>
                    </div>
                </div>

                <!-- Tech Specs -->
                <div class="pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                    <div>
                        <span class="block text-[9px] font-black uppercase tracking-widest text-white/20 mb-2">Fabric / Materiality</span>
                        <span class="text-sm font-bold text-white">${product.fabric || 'Hybrid Synthetic'}</span>
                    </div>
                    <div>
                        <span class="block text-[9px] font-black uppercase tracking-widest text-white/20 mb-2">Availability</span>
                        <span class="text-sm font-bold ${product.stock < 5 ? 'text-red-500' : 'text-[var(--accent-cyan)]'}">${product.stock} Units</span>
                    </div>
                </div>
            </div>
            </div>
            </div>

            <!-- Reviews Section -->
            <div class="max-w-[1700px] mx-auto mt-24 mb-24 px-4">
                <div class="border-t border-white/10 pt-16" id="reviewsSection">
                    <!-- Reviews Loaded via JS -->
                </div>
            </div>

            <!-- Perfect Pairing -->
            <section id="pairingsSection" class="max-w-[1700px] mx-auto mb-32 px-4"></section>
            `;

        this.renderProductGallery(product);
        this.renderReviews(product.id);
        this.renderPairings(product);
        this.updateSEO(product);

        // Zoom Logic
        setTimeout(() => {
            const container = document.getElementById('mainImageContainer');
            const img = document.getElementById('mainImage');

            if (container && img) {
                container.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = container.getBoundingClientRect();
                    const x = ((e.clientX - left) / width) * 100;
                    const y = ((e.clientY - top) / height) * 100;

                    img.style.transformOrigin = `${x}% ${y}%`;
                    img.style.transform = 'scale(2)';
                });

                container.addEventListener('mouseleave', () => {
                    img.style.transformOrigin = 'center';
                    img.style.transform = 'scale(1)';
                });
            }
        }, 100);
    },

    setProductImage(url) {
        const img = document.getElementById('mainImage');
        if (!img || !url) return;
        if (img.getAttribute('src') === url) return;

        img.classList.add('opacity-50');
        const done = () => img.classList.remove('opacity-50');
        img.onload = done;
        img.onerror = done;
        img.src = url;

        // Sync active thumbnail ring
        document.querySelectorAll('[data-thumb-url]').forEach(el => {
            const u = el.getAttribute('data-thumb-url');
            if (u === url) {
                el.classList.add('ring-2', 'ring-[var(--accent-cyan)]', 'ring-offset-2', 'ring-offset-black');
            } else {
                el.classList.remove('ring-2', 'ring-[var(--accent-cyan)]', 'ring-offset-2', 'ring-offset-black');
            }
        });
    },

    renderDynamicCategories() {
        const categories = this.state.categories || [];

        // 1. Home Page Bento Grid (Only Active)
        if (this.dom.categoriesContainer) {
            const activeCategories = categories.filter(c => c.isActive !== false);
            this.dom.categoriesContainer.innerHTML = activeCategories.map((c, idx) => {
                // Determine grid layout based on index (bento style)
                let gridClass = "col-span-12 md:col-span-4 row-span-2"; // Secondary
                let nameClass = "text-xl md:text-3xl"; // Secondary text size

                if (idx === 0) {
                    gridClass = "col-span-12 md:col-span-8 row-span-4"; // Primary
                    nameClass = "text-2xl md:text-5xl"; // Primary text size
                }

                return `
                    <div class="${gridClass} relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] glass-panel p-3 hover:border-[var(--accent-cyan)]/30 transition-all duration-700">
                        <a href="archive.html?filter=${c.uid}"
                            class="relative block w-full h-full min-h-[300px] md:min-h-0 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
                            <img src="${c.image}"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-60"></div>
                            <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 transition-all duration-500 group-hover:translate-x-2">
                                <span class="block ${nameClass} font-black text-white mb-2 uppercase tracking-tighter group-hover:text-[var(--accent-cyan)] transition-colors">${c.name}</span>
                                <span class="text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white flex items-center gap-3">
                                    Explore Archive <i class="fas fa-arrow-right text-[10px] group-hover:translate-x-2 transition-transform"></i>
                                </span>
                            </div>
                        </a>
                    </div>
                `;
            }).join('');
        }

        // 2. Archive Page Filters (All)
        if (this.dom.categoryFilters) {
            // Keep the "All" button
            const allBtn = `
                <button onclick="AMAZE.setFilter('all')" data-filter="all"
                    class="filter-btn block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-[var(--accent-cyan)] transition-colors">00.
                    Full Archive</button>
            `;

            this.dom.categoryFilters.innerHTML = allBtn + categories.map((c, idx) => `
                <button onclick="AMAZE.setFilter('${c.uid}')" data-filter="${c.uid}"
                    class="filter-btn block text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 hover:text-[var(--accent-cyan)] transition-colors">${(idx + 1).toString().padStart(2, '0')}.
                    ${c.name}</button>
            `).join('');

            this.updateFilterUI();
        }
    },

    selectSize(productId, size, el) {
        this.state.selectedSizes[productId] = size;
        const group = el.closest('[data-size-group]');
        if (group) {
            group.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('bg-white', 'text-black', 'border-white');
                btn.classList.add('border-white/20', 'text-white/60');
            });
        }
        el.classList.remove('border-white/20', 'text-white/60');
        el.classList.add('bg-white', 'text-black', 'border-white');
    },

    selectColor(productId, colorName, image, el) {
        this.state.selectedColors[productId] = colorName;
        // Image swap handled by existing logic or here
        if (image) this.setProductImage(image);

        const group = el.closest('[data-color-group]');
        if (group) {
            group.querySelectorAll('div').forEach(d => {
                d.classList.remove('ring-2', 'ring-[var(--accent-cyan)]', 'ring-offset-2', 'ring-offset-black', 'scale-110');
            });
        }
        const inner = el.querySelector('div');
        if (inner) inner.classList.add('ring-2', 'ring-[var(--accent-cyan)]', 'ring-offset-2', 'ring-offset-black', 'scale-110');
    },

    renderProductGallery(product) {
        const thumbs = document.getElementById('productThumbs');
        if (!thumbs || !product) return;

        const all = [
            product.image,
            product.hoverImage,
            ...(product.gallery || []),
            ...((product.colors || []).map(c => c.image).filter(Boolean))
        ].filter(Boolean);

        const uniq = [];
        all.forEach(u => { if (!uniq.includes(u)) uniq.push(u); });

        thumbs.innerHTML = uniq.map((u, idx) => `
            <button type="button"
                data-thumb-url="${u}"
                onclick="AMAZE.setProductImage('${u}')"
                class="flex-shrink-0 w-20 h-24 rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-colors ${idx === 0 ? 'ring-2 ring-[var(--accent-cyan)] ring-offset-2 ring-offset-black' : ''}">
                <img src="${u}" class="w-full h-full object-cover">
            </button>
        `).join('');
    },

    renderArchive() {
        const grid = document.getElementById('archiveGrid');
        if (!grid) return;

        const filtered = this.state.filter === 'all'
            ? this.state.products
            : this.state.products.filter(p => p.category === this.state.filter);

        grid.innerHTML = filtered.map(p => this.createProductCard(p)).join('');
        this.updateFilterUI();
    },

    createProductCard(p) {
        const isFav = this.state.favorites.includes(p.id);
        const heartClass = isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-white';

        return `
            <div class="group relative glass-panel rounded-[3rem] p-4 overflow-hidden animate-reveal-up" style="animation-delay: 0.1s">
                <div class="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white/5">
                    ${p.badge ? `<span class="absolute top-6 left-6 z-10 text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-black/60 rounded-full border border-white/5 backdrop-blur-md">${p.badge}</span>` : ''}
                    
                    ${p.isFlashSale ? `
                        <div class="absolute top-6 right-6 z-30 bg-red-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl">
                            -${Math.round((1 - p.salePrice / p.price) * 100)}%
                        </div>
                    ` : ''}

                    <!-- Like Button -->
                    <button onclick="AMAZE.toggleFavorite('${p.id}')" class="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 group/heart">
                        <i id="fav-icon-${p.id}" class="${heartClass} transition-colors duration-300"></i>
                    </button>

            <!-- Clickable Image Area -->
            <a href="product.html?id=${p.id}" class="block absolute inset-0 z-0">
                <!-- Primary Image -->
                <img src="${p.image}" class="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-1000 grayscale-0 opacity-100">

                    <!-- Hover Image (Model Protocol) -->
                    <img src="${p.hoverImage}" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                    </a>

                    <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none"></div>

                    <!-- Action Bar -->
                    <div class="absolute bottom-6 left-4 right-4 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex gap-3">
                        <button onclick="AMAZE.addToCart('${p.id}')"
                            class="flex-1 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-[8px] rounded-full hover:bg-white hover:text-black transition-all">
                            Add to Bag
                        </button>
                        <button onclick="AMAZE.buyNow('${p.id}', 1, ${p.isFlashSale ? p.salePrice : p.price}, ${p.isFlashSale})"
                            class="flex-1 py-4 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-widest text-[8px] rounded-full hover:bg-[var(--accent-teal)] transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center">
                            Buy Now
                        </button>
                    </div>
                </div>

                <div class="mt-8 px-4 flex justify-between items-start">
                    <div>
                        <h4 class="text-lg font-black tracking-tighter text-white mb-2 uppercase">${p.name}</h4>
                        <div class="flex items-center space-x-4">
                            <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Pieces:</span>
                            <span class="text-[9px] font-bold uppercase tracking-[0.2em] ${p.stock < 5 ? 'text-red-500' : 'text-[var(--accent-cyan)]'}">${p.stock}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="block text-xl font-bold text-[var(--accent-cyan)]">RS.${(p.isFlashSale ? p.salePrice : p.price) || 0}</span>
                        ${p.isFlashSale ? `<span class="block text-xs text-white/20 line-through tracking-tighter">RS.${p.price || 0}</span>` : (p.original && p.original !== p.price ? `<span class="block text-[10px] text-white/20 line-through tracking-tighter">RS.${p.original}</span>` : '')}
                    </div>
                </div>
        </div>
`;
    },

    setFilter(category) {
        this.state.filter = category;
        if (window.location.pathname.includes('archive')) {
            this.renderArchive();
        } else {
            this.renderProducts();
        }
    },

    updateFilterUI() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.filter === this.state.filter) {
                btn.classList.add('text-[var(--accent-cyan)]');
                btn.classList.remove('text-white/40');
            } else {
                btn.classList.remove('text-[var(--accent-cyan)]');
                btn.classList.add('text-white/40');
            }
        });
    },

    getSavedEmail() {
        return localStorage.getItem(AMAZE_EMAIL_KEY) || '';
    },

    setSavedEmail(email) {
        if (email && typeof email === 'string') {
            localStorage.setItem(AMAZE_EMAIL_KEY, email.trim());
            this.updateSavedEmailBars();
        }
    },

    clearSavedEmail() {
        localStorage.removeItem(AMAZE_EMAIL_KEY);
        this.state.cart = [];
        this.state.favorites = [];
        localStorage.setItem('the_amaze_cart_2026', '[]');
        localStorage.setItem('the_amaze_favorites_2026', '[]');
        this.updateCart();
        this.updateFavoritesCount();
        this.updateSavedEmailBars();
        if (this.dom.favItems) this.dom.favItems.innerHTML = '<div class="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-widest">Collection Empty</div>';
        const favIcons = document.querySelectorAll('[id^="fav-icon-"]');
        favIcons.forEach(icon => { if (icon) icon.className = 'far fa-heart text-white transition-colors duration-300'; });
    },

    showEmailPrompt(onSave) {
        const existing = document.getElementById('emailPromptModal');
        if (existing) existing.remove();
        const saved = this.getSavedEmail();
        const html = `
            <div id="emailPromptModal" class="fixed inset-0 z-[9998] flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="document.getElementById('emailPromptModal').remove();"></div>
                <div class="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <h3 class="text-lg font-black text-white uppercase tracking-tight mb-2">Save Your Email</h3>
                    <p class="text-white/60 text-sm mb-6">Cart aur favourites baad mein dekhne ke liye email save karen. Isi email se aap apni choices dobara dekh sakte hain.</p>
                    <input type="email" id="emailPromptInput" placeholder="your@email.com" value="${saved ? saved.replace(/"/g, '&quot;') : ''}" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent-cyan)] mb-4">
                    <div class="flex flex-wrap gap-3">
                        <button type="button" id="emailPromptSaveBtn" class="flex-1 min-w-[100px] py-3 bg-[var(--accent-cyan)] text-black font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-[var(--accent-teal)]">Save</button>
                        <button type="button" id="emailPromptRemoveBtn" class="py-3 px-5 bg-red-500/20 text-red-400 font-bold uppercase text-xs rounded-xl hover:bg-red-500/30 border border-red-500/30">Remove</button>
                        <button type="button" onclick="document.getElementById('emailPromptModal').remove();" class="py-3 px-5 bg-white/10 text-white font-bold uppercase text-xs rounded-xl hover:bg-white/20">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
        window._emailPromptCallback = onSave;
        const input = document.getElementById('emailPromptInput');
        if (input) { input.focus(); input.select(); }
        const saveBtn = document.getElementById('emailPromptSaveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', function () {
                const v = document.getElementById('emailPromptInput').value.trim();
                if (v) {
                    AMAZE.setSavedEmail(v);
                    const modal = document.getElementById('emailPromptModal');
                    if (modal) modal.remove();
                    if (window._emailPromptCallback) window._emailPromptCallback();
                } else {
                    alert('Please enter your email.');
                }
            });
        }
        const removeBtn = document.getElementById('emailPromptRemoveBtn');
        if (removeBtn) {
            removeBtn.addEventListener('click', function () {
                AMAZE.clearSavedEmail();
                const modal = document.getElementById('emailPromptModal');
                if (modal) modal.remove();
                AMAZE.notify('Saved email removed.', 'info');
            });
        }
    },

    updateSavedEmailBars() {
        const email = this.getSavedEmail();
        [document.getElementById('cartSavedEmailBar'), document.getElementById('favSavedEmailBar')].forEach(bar => {
            if (!bar) return;
            bar.innerHTML = email
                ? `<span class="text-white/50 text-[10px] uppercase tracking-widest">Saved for:</span> <span class="text-white font-medium">${email}</span> <button type="button" onclick="AMAZE.showEmailPrompt(function(){ AMAZE.updateSavedEmailBars(); });" class="text-[var(--accent-cyan)] text-[10px] font-bold uppercase ml-2 hover:underline">Change</button>`
                : `<span class="text-white/40 text-[10px] uppercase tracking-widest">Email save karen to baad mein cart & favourites dekh sakenge</span>`;
            bar.classList.toggle('hidden', false);
        });
    },

    ensureSavedEmailBars() {
        const email = this.getSavedEmail();
        const cartItems = document.getElementById('cartItems');
        const favItems = document.getElementById('favItems');
        if (cartItems && !document.getElementById('cartSavedEmailBar')) {
            const bar = document.createElement('div');
            bar.id = 'cartSavedEmailBar';
            bar.className = 'mb-4 pb-4 border-b border-white/10 text-sm';
            cartItems.parentElement.insertBefore(bar, cartItems);
        }
        if (favItems && !document.getElementById('favSavedEmailBar')) {
            const bar = document.createElement('div');
            bar.id = 'favSavedEmailBar';
            bar.className = 'mb-4 pb-4 border-b border-white/10 text-sm';
            favItems.parentElement.insertBefore(bar, favItems);
        }
        this.updateSavedEmailBars();
    },

    addToCart(id, quantity = 1) {
        if (!this.getSavedEmail()) {
            this.showEmailPrompt(() => this.addToCart(id, quantity));
            return;
        }
        const product = this.state.products.find(p => p.id === id);

        for (let i = 0; i < quantity; i++) {
            this.state.cart.push(product);
        }

        this.saveCart();
        this.updateCart();
        this.toggleCart(true);
        this.ensureSavedEmailBars();
        this.notify(`Collection Update: ${quantity}x ${product.name} Added`, 'success');
    },

    saveCart() {
        localStorage.setItem('the_amaze_cart_2026', JSON.stringify(this.state.cart));
    },

    updateCart() {
        const count = this.state.cart.length;
        const total = this.state.cart.reduce((s, p) => s + (p.isFlashSale ? p.salePrice : p.price), 0);

        if (this.dom.cartCount) this.dom.cartCount.textContent = count;
        if (this.dom.cartTotal) this.dom.cartTotal.textContent = `RS.${total} `;

        if (count === 0) {
            if (this.dom.cartItems) this.dom.cartItems.innerHTML = `<div class="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-widest">Your Bag is Empty</div>`;
        } else if (this.dom.cartItems) {
            // Group items by ID to show quantity in cart
            const grouped = {};
            this.state.cart.forEach(item => {
                if (!grouped[item.id]) grouped[item.id] = { ...item, qty: 0 };
                grouped[item.id].qty++;
            });

            this.dom.cartItems.innerHTML = Object.values(grouped).map((item) => `
                <div class="flex items-center gap-8 mb-10 group/item">
                    <div class="w-24 h-32 rounded-3xl overflow-hidden bg-white/5 relative">
                        <img src="${item.image}" class="w-full h-full object-cover grayscale-0 opacity-100 group-hover/item:opacity-80 transition-all">
                        <span class="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10">${item.qty}</span>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-sm font-black text-white uppercase mb-2">${item.name}</h4>
                        <span class="text-2xl font-black text-[var(--accent-cyan)]">RS.${(item.isFlashSale ? item.salePrice : item.price) * item.qty}</span>
                        <div class="mt-3 flex items-center justify-between gap-4">
                            <div class="flex items-center gap-3">
                                <button onclick="AMAZE.updateCartQuantity('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white hover:text-white text-[10px]">-</button>
                                <span class="text-sm font-bold text-white w-6 text-center">${item.qty}</span>
                                <button onclick="AMAZE.updateCartQuantity('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-white hover:text-white text-[10px]">+</button>
                            </div>
                            <button onclick="AMAZE.removeFromCart('${item.id}')" class="text-[9px] font-black uppercase text-red-500/40 hover:text-red-500 transition-colors">Discard All</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    },

    removeFromCart(id) {
        // Remove all instances of this item (simplified for now)
        this.state.cart = this.state.cart.filter(p => p.id !== id);
        this.saveCart();
        this.updateCart();
    },

    updateCartQuantity(id, delta) {
        if (delta > 0) {
            const product = this.state.products.find(p => p.id === id);
            if (!product) return;
            this.state.cart.push(product);
        } else if (delta < 0) {
            const index = this.state.cart.findIndex(p => p.id === id);
            if (index !== -1) this.state.cart.splice(index, 1);
        }
        this.saveCart();
        this.updateCart();
    },

    // Favorites System
    toggleFavorite(id) {
        const index = this.state.favorites.indexOf(id);
        if (index === -1 && !this.getSavedEmail()) {
            this.showEmailPrompt(() => this.toggleFavorite(id));
            return;
        }
        const icon = document.getElementById(`fav-icon-${id}`);

        if (index === -1) {
            this.state.favorites.push(id);
            this.notify("Added to Private Collection", "success");
            if (icon) {
                icon.className = 'fas fa-heart text-red-500 transition-colors duration-300';
                // Add pulse effect
                icon.parentElement.classList.add('scale-125');
                setTimeout(() => icon.parentElement.classList.remove('scale-125'), 200);
            }
        } else {
            this.state.favorites.splice(index, 1);
            if (icon) icon.className = 'far fa-heart text-white transition-colors duration-300';
        }

        localStorage.setItem('the_amaze_favorites_2026', JSON.stringify(this.state.favorites));
        this.updateFavoritesCount();

        // Re-render favorites if drawer is open
        if (!this.dom.favModal.classList.contains('hidden')) {
            this.renderFavorites();
        }
    },

    updateFavoritesCount() {
        const count = this.state.favorites.length;
        if (this.dom.favCount) {
            this.dom.favCount.textContent = count;
            this.dom.favCount.style.opacity = count > 0 ? '1' : '0';
        }
    },

    syncFavoriteIcons() {
        // Sync all visible heart icons (static + rendered cards)
        this.state.products.forEach(p => {
            const icon = document.getElementById(`fav-icon-${p.id}`);
            if (!icon) return;
            const isFav = this.state.favorites.includes(p.id);
            icon.className = (isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-white') + ' transition-colors duration-300';
        });
    },

    cartBuyNow() {
        if (!this.state.cart.length) {
            this.notify('Your Bag is Empty', 'info');
            return;
        }
        // Group cart items to handle quantities
        const grouped = {};
        this.state.cart.forEach(item => {
            if (!grouped[item.id]) {
                grouped[item.id] = { ...item, quantity: 0 };
            }
            grouped[item.id].quantity++;
        });

        const items = Object.values(grouped);
        this.buyNow(items);
    },

    renderPairings(product) {
        const section = document.getElementById('pairingsSection');
        if (!section) return;

        const related = this.state.products
            .filter(p =>
                p.id !== product.id &&
                (p.category === product.category || p.category === 'accessories'))
            .slice(0, 3);

        if (!related.length) {
            section.innerHTML = '';
            return;
        }

        section.innerHTML = `
            <div class="border-t border-white/10 pt-16">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <span class="section-label">Perfect Pairing</span>
                        <h3 class="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
                            Complete the <span class="text-[var(--accent-cyan)] font-playfair italic">Look.</span>
                        </h3>
                        <p class="mt-3 text-sm text-white/40 max-w-xl">
                            Styled recommendations that sit perfectly with <span class="font-semibold text-white">${product.name}</span>.
                            Add a second piece and build a full look in seconds.
                        </p>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    ${related.map(r => {
            const isFav = this.state.favorites.includes(r.id);
            const heart = isFav ? 'fas fa-heart text-red-500' : 'far fa-heart text-white';
            return `
                            <article class="glass-panel rounded-3xl p-4 border border-white/10 hover:border-[var(--accent-cyan)]/60 transition-colors group">
                                <div class="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 mb-5">
                                    <button onclick="AMAZE.toggleFavorite('${r.id}')" class="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/10 backdrop-blur-md transition-all group/heart">
                                        <i id="fav-icon-${r.id}" class="${heart} text-sm transition-colors duration-300"></i>
                                    </button>
                                    <a href="product.html?id=${r.id}" class="block w-full h-full">
                                        <img src="${r.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </a>
                                    ${r.badge ? `<span class="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-black/70 text-white rounded-full border border-white/10">${r.badge}</span>` : ''}
                                </div>
                                <div class="flex items-start justify-between mb-3">
                                    <div>
                                        <p class="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 mb-1">${r.category}</p>
                                        <h4 class="text-sm font-black text-white uppercase group-hover:text-[var(--accent-cyan)] transition-colors">${r.name}</h4>
                                    </div>
                                    <div class="text-right">
                                        <span class="block text-lg font-bold text-[var(--accent-cyan)]">RS.${r.price}</span>
                                        <span class="block text-[10px] text-white/25 line-through">RS.${r.original}</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between text-[9px] text-white/40 mb-4">
                                    <span class="uppercase tracking-[0.2em]">Pieces: <span class="${r.stock < 5 ? 'text-red-500' : 'text-[var(--accent-cyan)]'} font-bold">${r.stock}</span></span>
                                    <span class="uppercase tracking-[0.2em]">Pair with look</span>
                                </div>
                                <div class="flex gap-3">
                                    <button onclick="AMAZE.addToCart('${r.id}')"
                                        class="flex-1 py-3 bg-white/8 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all">
                                        Add to Bag
                                    </button>
                                    <button onclick="AMAZE.buyNow('${r.id}', 1)"
                                        class="flex-1 py-3 bg-[var(--accent-cyan)] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[var(--accent-teal)] transition-colors">
                                        Buy Now
                                    </button>
                                </div>
                            </article>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    },

    toggleFavorites(show) {
        if (show) {
            this.ensureSavedEmailBars();
            this.renderFavorites();
            this.dom.favModal.classList.remove('hidden');
            setTimeout(() => this.dom.favPanel.style.transform = 'translateX(0)', 10);
        } else {
            this.dom.favPanel.style.transform = 'translateX(100%)';
            setTimeout(() => this.dom.favModal.classList.add('hidden'), 700);
        }
    },

    renderFavorites() {
        if (this.state.favorites.length === 0) {
            this.dom.favItems.innerHTML = `<div class="mt-20 text-center opacity-20 text-[10px] font-black uppercase tracking-widest">Collection Empty</div>`;
            return;
        }

        const favProducts = this.state.products.filter(p => this.state.favorites.includes(p.id));

        this.dom.favItems.innerHTML = favProducts.map((item) => `
            <div class="flex items-center gap-8 mb-10 group/item">
                <div class="w-24 h-32 rounded-3xl overflow-hidden bg-white/5">
                    <img src="${item.image}" class="w-full h-full object-cover grayscale-0 opacity-100 group-hover/item:opacity-80 transition-all">
                </div>
                <div class="flex-1">
                    <h4 class="text-sm font-black text-white uppercase mb-2">${item.name}</h4>
                    <span class="text-2xl font-black text-[var(--accent-cyan)]">RS.${item.price}</span>
                    <div class="mt-4 flex items-center justify-between gap-2">
                        <button onclick="AMAZE.addToCart('${item.id}')" class="flex-1 py-3 bg-white/10 text-white font-black uppercase tracking-widest text-[8px] rounded-full hover:bg-white hover:text-black transition-colors">
                            Add to Bag
                        </button>
                        <button onclick="AMAZE.buyNow('${item.id}', 1)" class="flex-1 py-3 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-widest text-[8px] rounded-full hover:bg-[var(--accent-teal)] transition-colors">
                            Buy Now
                        </button>
                        <button onclick="AMAZE.toggleFavorite('${item.id}')" class="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors shrink-0">
                            <i class="fas fa-times text-[10px]"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Review System
    renderReviews(productId) {
        const container = document.getElementById('reviewsSection');
        if (!container) return;

        const reviews = this.state.reviews.filter(r => r.productId === productId).reverse();
        const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : 0;

        container.innerHTML = `
            <div class="grid lg:grid-cols-3 gap-12">
                <!-- Summary & Form -->
                <div class="lg:col-span-1">
                    <h3 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Reviews</h3>
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-[var(--accent-cyan)] text-4xl font-bold">${avgRating}</span>
                        <div class="flex gap-1 text-[var(--accent-cyan)] text-lg">
                            ${this.generateStars(Math.round(avgRating))}
                        </div>
                        <span class="text-white/40 text-[10px] font-bold uppercase tracking-widest">(${reviews.length} Verified)</span>
                    </div>

                    <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                        <h4 class="text-lg font-bold text-white mb-6 uppercase">Write a Review</h4>
                        <form onsubmit="event.preventDefault(); AMAZE.addReview('${productId}')" class="space-y-4">
                            <div>
                                <input type="text" id="reviewName" placeholder="Ident Path / Name" required
                                    class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors text-sm">
                            </div>
                            <div class="flex gap-2 mb-4" id="starRating">
                                ${Array(5).fill(0).map((_, i) => `
                                    <button type="button" onclick="AMAZE.setRating(${i + 1})" class="text-2xl text-white/20 hover:text-[var(--accent-cyan)] transition-colors focus:outline-none group/star" data-rating="${i + 1}">
                                        ★
                                    </button>
                                `).join('')}
                            </div>
                            <input type="hidden" id="selectedRating" value="5">
                            <div>
                                <textarea id="reviewComment" rows="4" placeholder="Share your experience..." required
                                    class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors text-sm resize-none"></textarea>
                            </div>
                            <button type="submit" class="w-full py-4 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[var(--accent-teal)] transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                Submit Protocol
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Review List -->
                <div class="lg:col-span-2 space-y-6">
                    ${reviews.length === 0 ? `
                        <div class="h-full flex items-center justify-center border border-white/5 rounded-3xl p-12 text-center">
                            <div>
                                <i class="far fa-comment-alt text-4xl text-white/10 mb-4 block"></i>
                                <span class="text-white/30 text-xs font-bold uppercase tracking-widest">No Transmissions Yet</span>
                            </div>
                        </div>
                    ` : reviews.map(r => `
                        <div class="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors animate-reveal-up">
                            <div class="flex justify-between items-start mb-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-cyan)] to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                                        ${r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 class="text-white font-bold text-sm">${r.name}</h5>
                                        <div class="flex gap-1 text-[var(--accent-cyan)] text-[10px]">
                                            ${this.generateStars(r.rating)}
                                        </div>
                                    </div>
                                </div>
                                <span class="text-white/20 text-[9px] font-bold uppercase tracking-widest">${new Date(r.date).toLocaleDateString()}</span>
                            </div>
                            <p class="text-white/70 text-sm leading-relaxed">${r.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    setRating(rating) {
        document.getElementById('selectedRating').value = rating;
        const stars = document.querySelectorAll('#starRating button');
        stars.forEach((s, i) => {
            if (i < rating) {
                s.classList.add('text-[var(--accent-cyan)]');
                s.classList.remove('text-white/20');
            } else {
                s.classList.remove('text-[var(--accent-cyan)]');
                s.classList.add('text-white/20');
            }
        });
    },

    async addReview(productId) {
        const name = document.getElementById('reviewName').value;
        const rating = parseInt(document.getElementById('selectedRating').value);
        const comment = document.getElementById('reviewComment').value;

        if (!name || !comment) return;

        try {
            await API.post('/reviews', {
                product: productId,
                name,
                rating,
                comment
            });

            this.notify("Review Transmission Complete. Pending Verification.", "success");

            // Refresh reviews state
            const reviewsData = await API.get('/reviews');
            this.state.reviews = reviewsData.reviews.filter(r => r.approved) || [];
            this.renderReviews(productId);

            // Reset
            if (document.getElementById('reviewName')) document.getElementById('reviewName').value = '';
            if (document.getElementById('reviewComment')) document.getElementById('reviewComment').value = '';
            this.setRating(5);
        } catch (err) {
            console.error('Review Transmission Failed:', err);
            this.notify(err.message || "Transmission Interrupted.", "error");
        }
    },

    generateStars(rating) {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    },

    /**
     * @param {Object|Array} input - Either a single ID (for legacy) or an array of {product, quantity}
     * @param {Number} [quantity=1] - Used if input is an ID
     */
    buyNow(input, quantity = 1, customPrice = null, isSale = false) {
        let items = [];
        if (Array.isArray(input)) {
            items = input.map(item => ({
                product: item,
                quantity: item.quantity || 1,
                price: item.salePrice || item.price
            }));
        } else {
            let product = this.state.products.find(p => p.id === input);
            if (product) {
                if (customPrice) {
                    product = { ...product, price: customPrice, isSale: isSale };
                }
                items = [{
                    product: product,
                    quantity: quantity,
                    price: product.salePrice || product.price
                }];
            }
        }

        if (items.length > 0) {
            this.renderCheckoutModal(items);
        }
    },

    openSizeChart(productId) {
        const product = productId != null ? this.state.products.find(p => p.id === productId) : null;
        const list = product ? [product] : this.state.products;

        const panelHtml = list.map(p => {
            if (!p.sizes || p.sizes.length === 0) return '';

            let tableHtml = '';

            // Handle New Array Format: [{ label: 'Chest', values: '38, 40, 42' }]
            if (Array.isArray(p.sizeChart)) {
                const header = `<tr class="border-b border-white/20"><th class="py-3 text-[10px] font-black uppercase text-white/40">Measurement</th>${p.sizes.map(s => `<th class="py-3 text-[10px] font-black uppercase text-white/40 text-center">${s}</th>`).join('')}</tr>`;
                const rows = p.sizeChart.map(row => {
                    const vals = row.values.split(',').map(v => v.trim());
                    return `
                        <tr class="border-b border-white/5">
                            <td class="py-4 text-xs font-bold text-white uppercase tracking-widest">${row.label}</td>
                            ${p.sizes.map((_, idx) => `<td class="py-4 text-xs text-white/60 text-center">${vals[idx] || '—'}</td>`).join('')}
                        </tr>
                    `;
                }).join('');
                tableHtml = `<table class="w-full text-left border-collapse">${header}${rows}</table>`;
            }
            // Handle Old Object Format (Fallback)
            else if (p.sizeChart && typeof p.sizeChart === 'object') {
                const rows = Object.entries(p.sizeChart).map(([size, measures]) => {
                    const cells = Object.entries(measures).map(([k, v]) => `<span class="text-white/70 text-xs">${k}: ${v}</span>`).join('');
                    return `<tr class="border-b border-white/10"><td class="py-3 pr-6 text-sm font-bold text-white uppercase">${size}</td><td class="py-3 flex flex-wrap gap-4">${cells}</td></tr>`;
                }).join('');
                tableHtml = `<table class="w-full text-left">${rows}</table>`;
            }
            // Handle Image URL Format
            else if (typeof p.sizeChart === 'string' && (p.sizeChart.startsWith('http') || p.sizeChart.startsWith('/'))) {
                tableHtml = `
                    <div class="rounded-2xl overflow-hidden border border-white/10">
                        <img src="${p.sizeChart}" class="w-full h-auto" alt="Size Chart">
                    </div>
                `;
            }
            // Auto-generate if no chart but has sizes
            else {
                tableHtml = `
                    <div class="p-8 border border-white/5 rounded-2xl text-center">
                        <p class="text-[10px] font-bold text-white/20 uppercase tracking-widest">Size Chart Transmission Unavailable</p>
                    </div>
                `;
            }

            return `
                <div class="mb-16 last:mb-0 animate-reveal-up">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                            <img src="${p.image}" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="text-lg font-black text-white uppercase tracking-tighter">${p.name}</h4>
                            <p class="text-[9px] text-[var(--accent-cyan)] uppercase font-bold tracking-[0.3em]">Technical Prototype Archive</p>
                        </div>
                    </div>
                    <div class="glass-panel p-6 rounded-3xl overflow-hidden border border-white/5">
                        ${tableHtml}
                    </div>
                </div>
            `;
        }).join('');
        const subtitle = product ? 'Measurements in inches' : 'All products — measurements in inches';
        const existing = document.getElementById('sizeChartModal');
        if (existing) {
            existing.querySelector('#sizeChartSubtitle').textContent = subtitle;
            existing.querySelector('#sizeChartContent').innerHTML = panelHtml;
            existing.classList.remove('hidden');
            existing.querySelector('#sizeChartOverlay').classList.remove('opacity-0');
            existing.querySelector('#sizeChartPanel').classList.remove('scale-95', 'opacity-0');
            return;
        }
        const modalHtml = `
            <div id="sizeChartModal" class="fixed inset-0 z-[9999]">
                <div id="sizeChartOverlay" class="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300 opacity-60" onclick="AMAZE.closeSizeChart()"></div>
                <div id="sizeChartPanel" class="absolute inset-4 md:inset-20 bg-[#050505] border border-white/10 rounded-3xl overflow-hidden flex flex-col transform transition-all duration-300">
                    <div class="p-8 md:p-12 overflow-y-auto custom-scrollbar relative">
                        <button type="button" onclick="AMAZE.closeSizeChart()" class="absolute top-8 right-8 text-white/40 hover:text-white transition-colors focus:outline-none">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                        <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Size Chart</h2>
                        <p id="sizeChartSubtitle" class="text-[var(--accent-cyan)] text-xs font-bold uppercase tracking-widest mb-8">${subtitle}</p>
                        <div id="sizeChartContent" class="space-y-8">${panelHtml}</div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        requestAnimationFrame(() => {
            document.getElementById('sizeChartOverlay').classList.add('opacity-60');
            document.getElementById('sizeChartPanel').classList.remove('scale-95', 'opacity-0');
        });
    },

    closeSizeChart() {
        const modal = document.getElementById('sizeChartModal');
        if (!modal) return;
        modal.querySelector('#sizeChartOverlay').classList.remove('opacity-60');
        modal.querySelector('#sizeChartPanel').classList.add('scale-95', 'opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 300);
    },

    selectPayment(method) {
        const box = document.getElementById('paymentOptionsBox');
        const detailsEl = document.getElementById('paymentAccountDetails');
        const contentEl = document.getElementById('paymentAccountContent');
        if (!box || !detailsEl || !contentEl) return;

        box.querySelectorAll('.payment-label').forEach(l => {
            const isSelected = l.getAttribute('data-payment') === method;
            l.classList.remove('border-[var(--accent-cyan)]', 'bg-[var(--accent-cyan)]/5', 'opacity-100', 'border-white/10', 'bg-white/5', 'opacity-50');
            l.classList.add(isSelected ? 'border-[var(--accent-cyan)]' : 'border-white/10', isSelected ? 'bg-[var(--accent-cyan)]/5' : 'bg-white/5', isSelected ? 'opacity-100' : 'opacity-50');
            const innerDot = l.querySelector('div div');
            if (innerDot) {
                if (isSelected) {
                    innerDot.style.backgroundColor = 'var(--accent-cyan)';
                    innerDot.parentElement.style.borderColor = 'var(--accent-cyan)';
                } else {
                    innerDot.style.backgroundColor = 'transparent';
                    innerDot.parentElement.style.borderColor = 'rgba(255,255,255,0.2)';
                }
            }
        });

        const paymentInput = document.getElementById('checkoutPaymentMethod');
        if (paymentInput) paymentInput.value = method;
        if (method === 'cod') {
            detailsEl.classList.add('hidden');
            return;
        }
        detailsEl.classList.remove('hidden');
        if (method === 'easypaisa') {
            contentEl.innerHTML = '<p><span class="text-white/50">Account Title:</span> THE AMAZE</p><p><span class="text-white/50">EasyPaisa Number:</span> 03XX-XXXXXXX</p><p class="text-[10px] text-white/40 mt-2">(Apna number yahan update karen)</p>';
        } else if (method === 'jazzcash') {
            contentEl.innerHTML = '<p><span class="text-white/50">Account Title:</span> THE AMAZE</p><p><span class="text-white/50">JazzCash Number:</span> 03XX-XXXXXXX</p><p class="text-[10px] text-white/40 mt-2">(Apna number yahan update karen)</p>';
        }
    },

    renderCheckoutModal(items) {
        this.state.lastCheckoutItems = items;
        const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const shipping = subtotal >= 5000 ? 0 : 250;
        const shippingLabel = shipping === 0 ? 'Free (Order ≥ 5000)' : 'Rs. 250';
        const total = subtotal + shipping;

        // Ensure modal base exists
        if (!document.getElementById('checkoutModal')) {
            const modalBase = `
                <div id="checkoutModal" class="fixed inset-0 z-[9999] hidden">
                    <div id="checkoutOverlay" class="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 opacity-0"></div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalBase);
        } else {
            // Clear existing panel if any
            const panel = document.getElementById('checkoutPanel');
            if (panel) panel.remove();
        }

        const modalHtml = `
            <div id="checkoutPanel" class="absolute inset-2 md:inset-10 bg-[#050505] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col transform scale-95 opacity-0 transition-all duration-500">
                <div class="p-5 md:p-8 border-b border-white/10 flex justify-between items-center relative z-30 bg-[#050505]">
                    <div>
                        <h2 class="text-xl md:text-3xl font-black text-white uppercase tracking-tighter mb-0.5">Secure Transaction</h2>
                        <p class="text-[var(--accent-cyan)] text-[9px] md:text-xs font-black uppercase tracking-[0.2em]">Encrypted Pulse Protocol • ${items.length} Artifact${items.length > 1 ? 's' : ''}</p>
                    </div>
                    <button id="closeCheckout" class="text-white/40 hover:text-white transition-colors p-2">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <div class="flex-1 flex flex-col-reverse md:flex-row overflow-y-auto md:overflow-hidden custom-scrollbar">
                    <div class="flex-1 p-5 md:p-12 md:overflow-y-auto custom-scrollbar relative bg-[#050505]">
                        <form onsubmit="event.preventDefault(); AMAZE.processPayment();" class="space-y-6 md:space-y-8">
                            <div class="space-y-3 md:space-y-4">
                                <h3 class="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">Customer Ident</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    <input id="checkoutEmail" type="email" placeholder="Email Address" required class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors w-full">
                                    <input id="checkoutPhone" type="tel" placeholder="Mobile Protocol (03XX..)" required class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors w-full">
                                </div>
                            </div>

                            <div id="checkoutSpecsContainer" class="space-y-6">
                                ${items.map(item => {
            const p = item.product;
            if ((!p.sizes || p.sizes.length === 0) && (!p.variants || p.variants.length === 0)) return '';
            return `
                                    <div class="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                                        <p class="text-[10px] font-black uppercase text-white/30 tracking-widest">${p.name} Specs</p>
                                        ${p.sizes?.length > 0 ? `
                                        <div>
                                            <span class="block text-[9px] font-bold text-white/20 uppercase mb-2">Size</span>
                                            <div class="flex flex-wrap gap-2">
                                                ${p.sizes.map(s => {
                const sel = this.state.selectedSizes[p.id] === s;
                return `<button type="button" onclick="AMAZE.selectSize('${p.id}', '${s}', this)" class="w-10 h-10 border ${sel ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'} rounded-lg text-[10px] font-black transition-all">${s}</button>`;
            }).join('')}
                                            </div>
                                        </div>` : ''}
                                        ${p.variants?.length > 0 ? `
                                        <div>
                                            <span class="block text-[9px] font-bold text-white/20 uppercase mb-2">Pigment</span>
                                            <div class="flex flex-wrap gap-3">
                                                ${p.variants.map((v, i) => {
                const sel = this.state.selectedColors[p.id] === v.colorName;
                return `<button type="button" onclick="AMAZE.selectColor('${p.id}', '${v.colorName}', '${v.image}', this)" class="w-8 h-8 rounded-full"><div class="w-full h-full rounded-full border border-white/20 transition-all ${sel ? 'ring-2 ring-[var(--accent-cyan)] ring-offset-2 ring-offset-black scale-110' : ''}" style="background-color: ${v.colorHex || '#000'}"></div></button>`;
            }).join('')}
                                            </div>
                                        </div>` : ''}
                                    </div>`;
        }).join('')}
                            </div>

                            <div class="space-y-3 md:space-y-4">
                                <h3 class="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">Deployment</h3>
                                <div class="grid grid-cols-2 gap-3 md:gap-4">
                                    <input id="checkoutFirstName" type="text" placeholder="First Name" required class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors">
                                    <input id="checkoutLastName" type="text" placeholder="Last Name" required class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors">
                                </div>
                                <input id="checkoutAddress" type="text" placeholder="Address" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors">
                                <div class="grid grid-cols-2 gap-3 md:gap-4">
                                    <input id="checkoutCity" type="text" placeholder="City" required class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors">
                                    <input id="checkoutPostal" type="text" placeholder="Postal Code" class="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent-cyan)] transition-colors">
                                </div>
                            </div>

                            <div class="space-y-3 md:space-y-4">
                                <h3 class="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">Fulfillment</h3>
                                <div id="paymentOptionsBox" class="space-y-2 md:space-y-3">
                                    <label data-payment="cod" class="payment-label flex items-center gap-3 p-4 border border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5 rounded-xl cursor-pointer relative overflow-hidden group/pay" onclick="AMAZE.selectPayment('cod')">
                                        <div class="w-4 h-4 rounded-full border border-[var(--accent-cyan)] flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-[var(--accent-cyan)]"></div></div>
                                        <span class="text-[10px] md:text-sm font-black text-white uppercase tracking-widest">Cash on Delivery</span>
                                    </label>
                                    <label data-payment="easypaisa" class="payment-label flex items-center gap-3 p-4 border border-white/10 bg-white/5 rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-all relative overflow-hidden group/pay" onclick="AMAZE.selectPayment('easypaisa')">
                                        <div class="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-transparent"></div></div>
                                        <span class="text-[10px] md:text-sm font-black text-white uppercase tracking-widest">EasyPaisa</span>
                                    </label>
                                    <label data-payment="jazzcash" class="payment-label flex items-center gap-3 p-4 border border-white/10 bg-white/5 rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-all relative overflow-hidden group/pay" onclick="AMAZE.selectPayment('jazzcash')">
                                        <div class="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-transparent"></div></div>
                                        <span class="text-[10px] md:text-sm font-black text-white uppercase tracking-widest">JazzCash</span>
                                    </label>
                                </div>
                                <div id="paymentAccountDetails" class="hidden mt-4 p-4 bg-black/30 border border-[var(--accent-cyan)]/30 rounded-xl space-y-3">
                                    <div id="paymentAccountContent" class="text-xs text-white/90 space-y-1"></div>
                                </div>
                                <input type="hidden" id="checkoutPaymentMethod" value="cod">
                            </div>

                            <button type="submit" class="w-full py-5 bg-[var(--accent-cyan)] text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-[var(--accent-teal)] transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] mt-4">
                                PURCHASE • RS.${total}
                            </button>
                        </form>
                    </div>

                    <div class="w-full md:w-[400px] bg-white/5 border-t md:border-t-0 md:border-l border-white/10 p-5 md:p-12 relative md:overflow-y-auto custom-scrollbar">
                        <div class="relative z-10 space-y-8">
                            ${items.map(item => `
                                <div class="flex items-start gap-4 bg-white/5 p-4 rounded-2xl">
                                    <div class="w-16 h-20 rounded-xl overflow-hidden bg-black/20 border border-white/10 relative flex-shrink-0">
                                        <img src="${item.product.image || item.product.mainImage}" class="w-full h-full object-cover">
                                        <span class="absolute -top-1 -right-1 w-5 h-5 bg-[var(--accent-cyan)] text-black text-[10px] font-black flex items-center justify-center rounded-full shadow-lg">${item.quantity}</span>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-xs font-black text-white uppercase leading-tight mb-1">${item.product.name}</h3>
                                        <p class="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">
                                            ${this.state.selectedSizes[item.product.id] || ''} 
                                            ${this.state.selectedColors[item.product.id] ? '• ' + this.state.selectedColors[item.product.id] : ''}
                                        </p>
                                        <p class="text-sm font-black text-[var(--accent-cyan)]">RS.${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            `).join('')}

                            <div class="space-y-3 pt-6 border-t border-white/10">
                                <div class="flex justify-between text-xs">
                                    <span class="text-white/60">Subtotal</span>
                                    <span class="text-white font-bold">RS.${subtotal}</span>
                                </div>
                                <div class="flex justify-between text-xs">
                                    <span class="text-white/60">Shipping</span>
                                    <span class="text-white font-bold">${shippingLabel}</span>
                                </div>
                                <div class="pt-4 border-t border-white/10">
                                    <div class="flex gap-2">
                                        <input id="discountCodeInput" type="text" placeholder="Promo Code" class="flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[var(--accent-cyan)] uppercase">
                                        <button type="button" onclick="AMAZE.applyDiscount()" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-[9px] rounded-lg transition-all border border-white/10">Apply</button>
                                    </div>
                                    <p id="discountMsg" class="text-[9px] mt-2 hidden"></p>
                                </div>
                                <div class="flex justify-between items-end pt-6">
                                    <span class="text-white/60 text-xs">Total Due</span>
                                    <div class="text-right">
                                        <span id="checkoutTotalDisplay" class="text-2xl font-black text-white tracking-tighter">RS.${total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('checkoutModal').insertAdjacentHTML('beforeend', modalHtml);

        this.dom.checkoutModal = document.getElementById('checkoutModal');
        this.dom.checkoutOverlay = document.getElementById('checkoutOverlay');
        this.dom.checkoutPanel = document.getElementById('checkoutPanel');
        this.dom.closeCheckout = document.getElementById('closeCheckout');

        this.dom.closeCheckout?.addEventListener('click', () => this.toggleCheckout(false));
        this.dom.checkoutOverlay?.addEventListener('click', () => this.toggleCheckout(false));

        this.toggleCheckout(true);
    },

    toggleCheckout(show) {
        if (!this.dom.checkoutModal || !this.dom.checkoutOverlay || !this.dom.checkoutPanel) {
            this.dom.checkoutModal = document.getElementById('checkoutModal');
            this.dom.checkoutOverlay = document.getElementById('checkoutOverlay');
            this.dom.checkoutPanel = document.getElementById('checkoutPanel');
        }
        if (!this.dom.checkoutModal) return;

        if (show) {
            this.dom.checkoutModal.classList.remove('hidden');
            setTimeout(() => {
                this.dom.checkoutOverlay?.classList.remove('opacity-0');
                this.dom.checkoutPanel?.classList.remove('scale-95', 'opacity-0');
                this.dom.checkoutPanel?.classList.add('scale-100', 'opacity-100');
            }, 10);
        } else {
            this.dom.checkoutPanel?.classList.remove('scale-100', 'opacity-100');
            this.dom.checkoutPanel?.classList.add('scale-95', 'opacity-0');
            this.dom.checkoutOverlay?.classList.add('opacity-0');
            setTimeout(() => {
                this.dom.checkoutModal.classList.add('hidden');
            }, 500);
        }
    },

    async applyDiscount() {
        const codeInput = document.getElementById('discountCodeInput');
        const msgEl = document.getElementById('discountMsg');
        const totalDisplay = document.getElementById('checkoutTotalDisplay');
        const btn = document.querySelector('#checkoutPanel button[type="submit"]');
        if (!codeInput || !msgEl) return;

        const code = codeInput.value.trim().toUpperCase();
        if (!code) return;

        const items = this.state.lastCheckoutItems || [];
        const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const shipping = subtotal >= 5000 ? 0 : 250;
        const baseTotal = subtotal + shipping;

        msgEl.className = 'text-[10px] mt-2';
        msgEl.textContent = 'Validating...';

        try {
            const promo = await API.post('/promo/validate', { code });

            let discount = 0;
            if (promo.discountType === 'Percentage') {
                discount = Math.floor(baseTotal * promo.discountValue / 100);
            } else {
                discount = Math.min(promo.discountValue, baseTotal);
            }

            const discountedTotal = Math.max(0, baseTotal - discount);
            this.state.activeDiscount = { code, discount, discountedTotal };

            msgEl.textContent = `✓ Code applied! You save RS.${discount} (${promo.discountType === 'Percentage' ? promo.discountValue + '%' : 'RS.' + promo.discountValue} off)`;
            msgEl.classList.add('text-green-400');
            msgEl.classList.remove('text-red-400');

            if (totalDisplay) totalDisplay.textContent = `RS.${discountedTotal}`;
            if (btn) btn.textContent = `PURCHASE • RS.${discountedTotal}`;
            codeInput.disabled = true;
        } catch (err) {
            this.state.activeDiscount = null;
            msgEl.textContent = '✕ ' + (err.message || 'Invalid or expired code');
            msgEl.classList.add('text-red-400');
            msgEl.classList.remove('text-green-400');
        }
    },

    async processPayment() {
        const btn = document.querySelector('#checkoutPanel button[type="submit"]');
        const form = document.querySelector('#checkoutPanel form');
        const items = this.state.lastCheckoutItems || [];

        if (!form || items.length === 0) {
            this.notify("Checkout data missing. Please try again.", "info");
            return;
        }

        const email = document.getElementById('checkoutEmail')?.value || '';
        const phone = document.getElementById('checkoutPhone')?.value || '';
        const firstName = document.getElementById('checkoutFirstName')?.value || '';
        const lastName = document.getElementById('checkoutLastName')?.value || '';
        const address = document.getElementById('checkoutAddress')?.value || '';
        const city = document.getElementById('checkoutCity')?.value || '';
        const postalCode = document.getElementById('checkoutPostal')?.value || '';
        const paymentMethodEl = document.getElementById('checkoutPaymentMethod');
        const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'cod';

        const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const shipping = subtotal >= 5000 ? 0 : 250;
        const baseTotal = subtotal + shipping;
        const total = (this.state.activeDiscount && this.state.activeDiscount.discountedTotal != null)
            ? this.state.activeDiscount.discountedTotal
            : baseTotal;
        const orderDate = new Date().toLocaleString('en-PK', { dateStyle: 'full', timeStyle: 'short' });

        btn.innerHTML = `<i class="fas fa-circle-notch fa-spin mr-2"></i> Processing...`;
        btn.disabled = true;

        try {
            const orderItems = items.map(item => {
                const p = item.product;
                const isValidObjectId = typeof p.id === 'string' && /^[a-f\d]{24}$/i.test(p.id);
                return {
                    name: p.name,
                    qty: item.quantity,
                    image: p.image || p.mainImage,
                    price: item.price,
                    size: this.state.selectedSizes[p.id] || '',
                    color: this.state.selectedColors[p.id] || '',
                    ...(isValidObjectId && { product: p.id })
                };
            });

            const shippingAddress = {
                address: address,
                city: city,
                postalCode: postalCode,
                country: 'Pakistan'
            };

            const response = await API.post('/orders', {
                orderItems,
                shippingAddress,
                customerInfo: { firstName, lastName, email, phone },
                paymentMethod,
                totalAmount: total
            });

            this.toggleCheckout(false);

            this.showOrderReceipt({
                orderId: response.orderId,
                orderDate,
                firstName,
                lastName,
                email,
                phone,
                address,
                city,
                postalCode,
                items: orderItems,
                subtotal,
                shipping,
                total,
                paymentMethod
            });

            this.notify("Order Secured. Thank you.", "success");
            this.state.cart = [];
            this.saveCart();
            this.updateCart();

            await this.fetchInitialData();
            this.renderProducts();

        } catch (err) {
            console.error('Order Transmission Failed:', err);
            this.notify(err.message || "Order Acquisition Failed.", "error");
        } finally {
            btn.disabled = false;
            btn.innerHTML = `PURCHASE • RS.${total}`;
        }
    },

    showOrderReceipt(data) {
        const existing = document.getElementById('receiptModal');
        if (existing) existing.remove();
        const paymentLabels = { cod: 'Cash on Delivery', easypaisa: 'EasyPaisa', jazzcash: 'JazzCash' };
        const paymentLabel = paymentLabels[data.paymentMethod] || data.paymentMethod;
        const receiptHtml = `
            <div id="receiptModal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/90 backdrop-blur-md" onclick="AMAZE.closeReceipt()"></div>
                <div class="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                    <div class="bg-gradient-to-r from-[var(--accent-cyan)]/20 to-transparent border-b border-white/10 px-6 py-4 flex-shrink-0">
                        <div class="flex items-center justify-between">
                            <h2 class="text-xl font-black text-white uppercase tracking-tight">Order Receipt</h2>
                            <button type="button" onclick="AMAZE.closeReceipt()" class="text-white/50 hover:text-white p-2 -m-2 print:hidden"><i class="fas fa-times"></i></button>
                        </div>
                        <p class="text-[var(--accent-cyan)] text-[10px] font-bold uppercase tracking-widest mt-1">Order ID: ${data.orderId}</p>
                        <p class="text-white/50 text-xs mt-0.5">${data.orderDate}</p>
                    </div>
                    <div class="p-6 space-y-6 overflow-y-auto custom-scrollbar">
                        <div class="grid grid-cols-2 gap-6 text-xs">
                            <div>
                                <h3 class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Customer</h3>
                                <p class="text-white font-medium">${data.firstName} ${data.lastName}</p>
                                <p class="text-white/70">${data.email}</p>
                                ${data.phone ? `<p class="text-white/50 mt-1">${data.phone}</p>` : ''}
                            </div>
                            <div>
                                <h3 class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Address</h3>
                                <p class="text-white/90">${data.address}</p>
                                <p class="text-white/90">${data.city}${data.postalCode ? ', ' + data.postalCode : ''}</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Items</h3>
                            <div class="space-y-4">
                                ${data.items.map(item => `
                                    <div class="flex gap-4 py-3 border-b border-white/5 last:border-0">
                                        <img src="${item.image}" alt="" class="w-12 h-16 object-cover rounded bg-white/5">
                                        <div class="flex-1 min-w-0">
                                            <p class="font-bold text-white uppercase text-[11px] leading-tight">${item.name}</p>
                                            <p class="text-white/50 text-[10px] mt-0.5">Qty: ${item.qty} × RS.${item.price}</p>
                                            ${(item.size || item.color) ? `<p class="text-white/30 text-[9px] uppercase font-bold mt-1">${item.size ? 'Size: ' + item.size : ''} ${item.color ? ' • ' + item.color : ''}</p>` : ''}
                                        </div>
                                        <div class="text-right">
                                            <p class="text-white font-bold text-[11px]">RS.${item.price * item.qty}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="space-y-2 pt-2 border-t border-white/10">
                            <div class="flex justify-between text-xs text-white/60"><span>Subtotal</span><span>RS.${data.subtotal}</span></div>
                            <div class="flex justify-between text-xs text-white/60"><span>Shipping</span><span>${data.shipping === 0 ? 'Free' : 'RS.' + data.shipping}</span></div>
                            <div class="flex justify-between text-white font-black pt-3 border-t border-white/10 text-lg"><span>Total</span><span class="text-[var(--accent-cyan)]">RS.${data.total}</span></div>
                        </div>
                        <div>
                            <h3 class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Payment</h3>
                            <p class="text-white font-medium text-xs">${paymentLabel}</p>
                        </div>
                    </div>
                    <div class="px-6 py-4 bg-white/5 border-t border-white/10 flex gap-3 flex-shrink-0 print:hidden">
                        <button type="button" onclick="window.print();" class="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-[10px] tracking-widest rounded-xl border border-white/10 transition-colors">Print</button>
                        <button type="button" onclick="AMAZE.closeReceipt()" class="flex-1 py-3 bg-[var(--accent-cyan)] hover:bg-[var(--accent-teal)] text-black font-bold uppercase text-[10px] tracking-widest rounded-xl transition-colors">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', receiptHtml);
    },

    closeReceipt() {
        const el = document.getElementById('receiptModal');
        if (el) el.remove();
    },

    toggleCart(show) {
        if (show) {
            this.ensureSavedEmailBars();
            this.dom.cartModal.classList.remove('hidden');
            setTimeout(() => this.dom.cartPanel.style.transform = 'translateX(0)', 10);
        } else {
            this.dom.cartPanel.style.transform = 'translateX(100%)';
            setTimeout(() => this.dom.cartModal.classList.add('hidden'), 700);
        }
    },

    toggleMenu(show) {
        if (show) {
            this.dom.menuDrawer.classList.add('open');
            this.dom.menuOverlay.classList.remove('pointer-events-none');
            this.dom.menuOverlay.style.opacity = '1';
        } else {
            this.dom.menuDrawer.classList.remove('open');
            this.dom.menuOverlay.classList.add('pointer-events-none');
            this.dom.menuOverlay.style.opacity = '0';
        }
    },

    notify(msg, type) {
        if (!this.dom.livePulse) return;
        const div = document.createElement('div');
        div.className = `glass-panel p-6 rounded-3xl border-l-4 border-l-[var(--accent-cyan)] opacity-0 -translate-x-10 transition-all duration-500 text-xs font-bold uppercase tracking-widest`;
        div.innerHTML = `<i class="fas fa-key mr-4 text-[var(--accent-cyan)]"></i> ${msg}`;

        this.dom.livePulse.appendChild(div);
        setTimeout(() => {
            div.classList.remove('opacity-0', '-translate-x-10');
        }, 100);

        setTimeout(() => {
            div.classList.add('opacity-0', 'translate-x-20');
            setTimeout(() => div.remove(), 600);
        }, 4000);
    },

    startPulse() {
        setInterval(() => {
            const msg = this.state.pulseMessages[Math.floor(Math.random() * this.state.pulseMessages.length)];
            this.notify(msg, 'info');
        }, 15000);
    },

    initReveal() {
        this.handleScroll(); // Trigger initial
    },

    initCursor() {
        // Ensure cursor elements are visible from the start
        if (this.dom.cursor) this.dom.cursor.style.opacity = '1';
        if (this.dom.follower) this.dom.follower.style.opacity = '1';

        // Hide cursor when mouse leaves the window, show when it returns
        document.addEventListener('mouseleave', () => {
            if (this.dom.cursor) this.dom.cursor.style.opacity = '0';
            if (this.dom.follower) this.dom.follower.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            if (this.dom.cursor) this.dom.cursor.style.opacity = '1';
            if (this.dom.follower) this.dom.follower.style.opacity = '1';
        });
    },

    async subscribeNewsletter() {
        const input = document.getElementById('newsletterInput');
        const email = input.value;
        const form = input.closest('form');
        const section = document.getElementById('join');

        if (!email) return;

        // Visual Feedback
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = "Processing...";
        btn.disabled = true;
        btn.classList.add('opacity-50');

        try {
            await API.post('/subscribers', { email });
            // Success State
            section.querySelector('.scroll-reveal').innerHTML = `
                <div class="animate-reveal-up">
                    <div class="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 mb-10">
                        <i class="fas fa-check text-3xl md:text-4xl text-[var(--accent-cyan)]"></i>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">Access Authorized.</h2>
                    <p class="text-xs md:text-xl text-white/40 font-light max-w-2xl mx-auto mb-10 uppercase tracking-[0.3em] px-4">
                        Your digital address <span class="text-white">${email}</span> has been white-listed.
                    </p>
                    <div class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-cyan)]">Welcome to the inner circle.</div>
                </div>
            `;

            // Notify pulse
            this.notify("Newsletter Protocol: White-listed successfully.", "success");
        } catch (err) {
            console.error('Newsletter Protocol Failure:', err);
            this.notify(err.message || "Transmission Interrupted.", "error");
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-50');
        }
    },

    async handleContact(e) {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;

        const inputs = e.target.querySelectorAll('input, select, textarea');
        const data = {
            name: inputs[0].value,
            email: inputs[1].value,
            subject: inputs[2].value,
            message: inputs[3].value
        };

        // Visual Feedback: Transmission Protocol
        btn.innerText = "Transmitting...";
        btn.disabled = true;
        btn.classList.add('opacity-50');

        try {
            await API.post('/contact', data);
            this.notify("Protocol Initialized: Transmission Received.", "success");
            e.target.reset();

            // Close menu if it's open (contact is usually in menu or separate page)
            const drawer = document.getElementById('menuDrawer');
            if (drawer && drawer.classList.contains('open')) {
                this.toggleMenu(false);
            }
        } catch (err) {
            console.error('Transmission Failed:', err);
            this.notify("Transmission Interrupted. Please check connectivity.", "error");
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-50');
        }
    },

    startFlashSaleCountdown(endTime) {
        const hEl = document.getElementById('saleHours');
        const mEl = document.getElementById('saleMins');
        const sEl = document.getElementById('saleSecs');
        if (!hEl || !mEl || !sEl) return;

        const end = new Date(endTime).getTime();

        const update = () => {
            const now = new Date().getTime();
            const diff = end - now;

            if (diff <= 0) {
                hEl.innerText = "00";
                mEl.innerText = "00";
                sEl.innerText = "00";
                if (this.saleTimer) clearInterval(this.saleTimer);
                return;
            }

            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            hEl.innerText = h.toString().padStart(2, '0');
            mEl.innerText = m.toString().padStart(2, '0');
            sEl.innerText = s.toString().padStart(2, '0');
        };

        if (this.saleTimer) clearInterval(this.saleTimer);
        update();
        this.saleTimer = setInterval(update, 1000);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AMAZE.init());
} else {
    AMAZE.init();
}
