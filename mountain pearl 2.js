
Index · HTML
<!DOCTYPE html>
<html lang="ro" class="scroll-smooth"
x-data="{
darkMode: localStorage.getItem('mp-dark-mode') === 'true',
    scrolled: false,
    navHidden: false,
    lastScroll: 0,
    mobileMenuOpen: false,
    onScroll() {
    const y = window.pageYOffset;
    this.scrolled = y > 50;
    this.navHidden = (y > this.lastScroll && y > 150 && !this.mobileMenuOpen);
    this.lastScroll = y;
},
init() {
    this.$watch('darkMode', value => localStorage.setItem('mp-dark-mode', value));
    this.$watch('mobileMenuOpen', value => {
        document.body.style.overflow = value ? 'hidden' : '';
        if (value) this.$nextTick(() => this.$refs.mobileCloseBtn && this.$refs.mobileCloseBtn.focus());
    });
}
}"
:class="{ 'dark': darkMode }"
@scroll.window.throttle.150ms="onScroll()"
@keydown.escape.window="mobileMenuOpen = false">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Inline theme-detector: runs before Tailwind/Alpine parse the DOM so the
correct 'dark' class (from localStorage) is present on first paint and
there is no flash of the wrong theme. Kept in sync with the darkMode
value initialised in the x-data above. -->
<script>
(function () {
    try {
        if (localStorage.getItem('mp-dark-mode') === 'true') {
            document.documentElement.classList.add('dark');
        }
    } catch (e) { /* localStorage unavailable (private mode, etc.) */ }
})();
</script>

<title>Pensiunea Mountain Pearl | Confort Premium în Izvoare, Maramureș</title>

<!-- SEO Meta Tags -->
<meta name="description" content="Refugiul tău montan de lux în Izvoare, Maramureș. Experimentează tihna, piscina interioară încălzită, spa-ul privat și bucatele noastre tradiționale.">
    <meta name="keywords" content="Pensiunea Mountain Pearl, Mountain Pearl Maramureș, Guesthouse Maramureș, Cazare Izvoare, Mountain Resort Romania, Hotel Izvoare, Vacanta Maramures, Ignis Maramures">
        <meta name="theme-color" content="#234032">

            <!-- Open Graph -->
            <meta property="og:type" content="website">
                <meta property="og:title" content="Pensiunea Mountain Pearl | Tihnă și Ospitalitate în Maramureș">
                    <meta property="og:description" content="Piscina interioară încălzită, spa, terasă panoramică și camere elegante în Desești, Maramureș.">
                        <meta property="og:image" content="pensiune-exterior-front.jpg">

                            <!-- Fonts -->
                            <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Pinyon+Script&display=swap" rel="stylesheet">

                                        <!-- Tailwind CSS & Lucide Icons -->
                                        <script src="https://cdn.tailwindcss.com"></script>
                                        <script src="https://unpkg.com/lucide@latest"></script>

                                        <!-- GSAP for Advanced Cinematic Animations -->
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

                                        <!-- Alpine.js -->
                                        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

                                        <script>
                                            tailwind.config = {
                                            darkMode: 'class',
                                            theme: {
                                            extend: {
                                            colors: {
                                            forest: '#234032',
                                            sage: '#8DAA91',
                                            beige: '#F6F1EA',
                                            charcoal: '#1A1A1A',
                                            gold: '#C8A96A',
                                        },
                                            fontFamily: {
                                            serif: ['Playfair Display', 'serif'],
                                            sans: ['Inter', 'sans-serif'],
                                            hand: ['Pinyon Script', 'cursive'],
                                        }
                                        }
                                        }
                                        }
                                        </script>

                                        <style>
                                            .no-scrollbar::-webkit-scrollbar { display: none; }
                                            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                                            /* Premium custom glass effect */
                                            .glass-nav {
                                            background-color: rgba(35, 64, 50, 0.9);
                                            backdrop-filter: blur(16px);
                                            -webkit-backdrop-filter: blur(16px);
                                        }

                                            /* Calligraphy script styling */
                                            .signature-font {
                                            font-family: 'Pinyon Script', cursive;
                                        }

                                            /* Cinematic sun rays animation */
                                            @keyframes sun-drift {
                                            0%, 100% { opacity: 0.1; transform: scale(1) translate(0px, 0px); }
                                            50% { opacity: 0.25; transform: scale(1.1) translate(15px, -10px); }
                                        }
                                            .sun-ray {
                                            animation: sun-drift 12s ease-in-out infinite;
                                        }

                                            /* Rolling mist animation */
                                            @keyframes mist-drift {
                                            0% { transform: translate3d(0, 0, 0); }
                                            50% { transform: translate3d(-3%, 1%, 0); }
                                            100% { transform: translate3d(0, 0, 0); }
                                        }
                                            .mist-layer {
                                            animation: mist-drift 35s ease-in-out infinite;
                                        }

                                            /* Custom link hover effect */
                                            .hover-underline-gold {
                                            position: relative;
                                        }
                                            .hover-underline-gold::after {
                                            content: '';
                                            position: absolute;
                                            width: 100%;
                                            transform: scaleX(0);
                                            height: 2px;
                                            bottom: -4px;
                                            left: 0;
                                            background-color: #C8A96A;
                                            transform-origin: bottom right;
                                            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                                        }
                                            .hover-underline-gold:hover::after {
                                            transform: scaleX(1);
                                            transform-origin: bottom left;
                                        }
                                            /* Persistent underline + colour for the active nav section */
                                            .hover-underline-gold.active-link {
                                            color: #C8A96A;
                                        }
                                            .hover-underline-gold.active-link::after {
                                            transform: scaleX(1);
                                            transform-origin: bottom left;
                                        }

                                            /* Animated character split classes (final state only; the actual
                                            tween is driven by GSAP so there is no dueling CSS transition). */
                                            .char-span {
                                            display: inline-block;
                                            transform: translateY(1.2em);
                                            opacity: 0;
                                        }

                                            /* Custom lag cursor styling */
                                            #custom-cursor {
                                            mix-blend-mode: difference;
                                            will-change: transform;
                                        }

                                            /* Offset anchor-scroll targets so the fixed header never covers the
                                            top of a section when navigating via nav links / smooth scroll. */
                                            section[id] {
                                            scroll-margin-top: 110px;
                                        }

                                            /* Visible, on-brand focus ring for keyboard users (does not alter
                                            the default resting appearance of any element). */
                                            a:focus-visible,
                                            button:focus-visible,
                                            input:focus-visible,
                                            select:focus-visible,
                                            textarea:focus-visible {
                                            outline: 2px solid #C8A96A;
                                            outline-offset: 3px;
                                            border-radius: 2px;
                                        }

                                            /* Accessible Reduced Motion Support */
                                            @media (prefers-reduced-motion: reduce) {
                                            * {
                                            animation-delay: 0s !important;
                                            animation-duration: 0s !important;
                                            animation-iteration-count: 1 !important;
                                            transition-duration: 0s !important;
                                            scroll-behavior: auto !important;
                                        }
                                            .mist-layer, .sun-ray, #hero-canvas, #spa-canvas, #custom-cursor, .svg-noise {
                                            display: none !important;
                                        }
                                        }
                                        </style>
                                    </head>
                                    <body class="bg-beige text-charcoal dark:bg-charcoal dark:text-beige font-sans antialiased transition-colors duration-300">

                                    <!-- Interactive Custom Lag Cursor (Desktop Only) -->
                                    <div id="custom-cursor" class="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[100]" aria-hidden="true"></div>

                                    <!-- SVG Noise/Linen Texture Overlay -->
                                    <svg class="svg-noise fixed inset-0 w-full h-full opacity-[0.025] pointer-events-none z-[99]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <filter id="noise">
                                            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
                                        </filter>
                                        <rect width="100%" height="100%" filter="url(#noise)"/>
                                    </svg>

                                    <!-- Sticky Navigation Header -->
                                    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
                                    :class="[scrolled ? 'glass-nav text-white shadow-lg py-4' : 'bg-transparent text-white py-6', navHidden ? '-translate-y-full' : 'translate-y-0']">
                                    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
                                        <!-- Logo -->
                                        <a href="#hero" class="flex items-center space-x-2 group relative">
                                            <span class="font-serif text-2xl font-bold tracking-wide text-gold transition-transform duration-300 group-hover:scale-105">Mountain Pearl</span>
                                        </a>

                                        <!-- Desktop Nav Menu -->
                                        <nav class="hidden lg:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium" aria-label="Navigare principală">
                                            <a href="#about" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Despre noi</a>
                                            <a href="#rooms" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Camere</a>
                                            <a href="#spa" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Wellness Spa</a>
                                            <a href="#amenities" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Facilități</a>
                                            <a href="#gallery" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Galerie</a>
                                            <a href="#attractions" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Atracții</a>
                                            <a href="#contact" class="nav-link hover-underline-gold hover:text-gold transition-colors duration-300">Contact</a>
                                        </nav>

                                        <!-- Utility Elements -->
                                        <div class="flex items-center space-x-4">
                                            <!-- Dark Mode Toggle -->
                                            <button @click="darkMode = !darkMode" :aria-pressed="darkMode" class="p-2 rounded-full hover:bg-white/10 transition-colors duration-300" aria-label="Schimbă tema">
                                            <i data-lucide="sun" class="h-5 w-5 block dark:hidden" aria-hidden="true"></i>
                                            <i data-lucide="moon" class="h-5 w-5 hidden dark:block text-gold" aria-hidden="true"></i>
                                        </button>

                                        <a href="#booking" class="hidden sm:inline-flex relative group overflow-hidden bg-gold text-forest font-semibold px-6 py-2.5 rounded text-sm transition-transform duration-300 hover:scale-105 tracking-wider uppercase">
                                            <span class="relative z-10">Rezervă</span>
                                        </a>

                                        <!-- Mobile Menu Button -->
                                        <button class="lg:hidden p-2" @click="mobileMenuOpen = true" :aria-expanded="mobileMenuOpen" aria-controls="mobile-menu" aria-label="Deschide meniul de navigare">
                                        <i data-lucide="menu" class="h-6 w-6" aria-hidden="true"></i>
                                    </button>
                                    </div>
                                </div>

                                <!-- Mobile Drawer Menu -->
                                <div id="mobile-menu"
                                     x-show="mobileMenuOpen"
                                     x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
                                     x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
                                     class="fixed inset-0 bg-forest/95 backdrop-blur-md z-50 flex flex-col justify-center items-center space-y-8 text-2xl text-white font-serif"
                                     style="display: none;"
                                     role="dialog" aria-modal="true" aria-label="Meniu de navigare">
                                    <button x-ref="mobileCloseBtn" @click="mobileMenuOpen = false" class="absolute top-6 right-6 p-2 text-gold" aria-label="Închide meniul">
                                    <i data-lucide="x" class="h-8 w-8" aria-hidden="true"></i>
                                </button>
                                <a href="#about" @click="mobileMenuOpen = false" class="hover:text-gold">Despre noi</a>
                            <a href="#rooms" @click="mobileMenuOpen = false" class="hover:text-gold">Camere</a>
                        <a href="#spa" @click="mobileMenuOpen = false" class="hover:text-gold">Wellness Spa</a>
                    <a href="#amenities" @click="mobileMenuOpen = false" class="hover:text-gold">Facilități</a>
                <a href="#gallery" @click="mobileMenuOpen = false" class="hover:text-gold">Galerie</a>
            <a href="#attractions" @click="mobileMenuOpen = false" class="hover:text-gold">Atracții</a>
        <a href="#contact" @click="mobileMenuOpen = false" class="hover:text-gold">Contact</a>
    <a href="#booking" @click="mobileMenuOpen = false" class="bg-gold text-forest font-bold px-8 py-3 rounded tracking-wider uppercase">Rezervă Acum</a>
</div>
</header>

<!-- Hero Section -->
<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Parallax Background Image -->
    <div class="absolute inset-0 scale-110 bg-cover bg-center -z-10" id="hero-bg" style="background-image: linear-gradient(rgba(35, 64, 50, 0.4), rgba(44, 44, 44, 0.65)), url('pensiune-terrace-view.jpg');"></div>

    <!-- Sun Ray Layer -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,rgba(253,224,71,0.12),transparent_70%)] sun-ray" aria-hidden="true"></div>

    <!-- Drifting Mist Layer -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -z-10 mist-layer scale-125" aria-hidden="true"></div>

    <!-- Dynamic Particle Canvas -->
    <canvas id="hero-canvas" class="absolute inset-0 pointer-events-none -z-10" aria-hidden="true"></canvas>

    <div class="relative max-w-4xl mx-auto text-center px-6 mt-16 z-10">
        <div class="hero-reveal inline-flex items-center space-x-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 text-gold text-xs sm:text-sm tracking-widest uppercase">
            <span aria-hidden="true">★★★★★</span>
            <span class="text-white">| Evaluare 4.9+ (Peste 480 de Recenzii)</span>
        </div>

        <h1 class="hero-reveal font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-semibold leading-tight mb-6 split-text">
            Evadează la Mountain Pearl
        </h1>

        <p class="hero-reveal text-lg sm:text-xl text-beige/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Descoperiți confortul rafinat, vederile montane spectaculoase și ospitalitatea autentică din inima stațiunii Izvoare, Maramureș.
        </p>

        <div class="hero-reveal flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#booking" class="w-full sm:w-auto relative group overflow-hidden bg-gold text-forest font-semibold px-8 py-4 rounded shadow-lg transition-transform duration-300 hover:scale-105 tracking-wider uppercase text-center flex items-center justify-center space-x-2">
                <span>Planifică Sejurul</span>
                <i data-lucide="arrow-right" class="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true"></i>
            </a>
            <a href="#rooms" class="w-full sm:w-auto border border-white/60 hover:border-gold hover:text-gold text-white font-semibold px-8 py-4 rounded backdrop-blur-sm transition-all duration-300 tracking-wider uppercase text-center flex items-center justify-center space-x-2">
                <span>Explorează Camerele</span>
            </a>
        </div>
    </div>

    <!-- Animated Scrolling Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden="true">
        <span class="text-[10px] tracking-widest text-white/50 uppercase mb-2">Glisează în jos</span>
        <div class="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
            <div class="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-32 max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        <!-- Side Images with Overlaps -->
        <div class="lg:col-span-7 relative">
            <div class="relative z-10 w-4/5 overflow-hidden rounded-xl shadow-2xl border-4 border-white dark:border-neutral-800">
                <img src="pensiune-exterior-front.jpg" alt="Fațada exterioară a Pensiunii Mountain Pearl" loading="lazy" decoding="async" class="scroll-zoom w-full h-[400px] object-cover">
            </div>
            <div class="absolute right-0 bottom-[-40px] z-20 w-3/5 overflow-hidden rounded-xl shadow-2xl border-4 border-white dark:border-neutral-800">
                <img src="pensiune-terrace-view.jpg" alt="Terasă cu vedere panoramică spre munte" loading="lazy" decoding="async" class="scroll-zoom w-full h-80 object-cover">
            </div>
        </div>

        <!-- About Content -->
        <div class="lg:col-span-5 space-y-6 scroll-reveal lg:pl-6">
            <span class="text-gold font-medium tracking-widest uppercase text-sm block">Ospitalitate Caldă</span>
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white leading-tight split-text">
                Unde tihna întâlnește măreția munților
            </h2>
            <p class="text-lg leading-relaxed text-charcoal/80 dark:text-beige/80 font-light">
                Pensiunea Mountain Pearl este amplasată în zona turistică Izvoare din comuna Desești. Proprietatea noastră îmbină perfect elementele moderne cu ospitalitatea caldă maramureșeană pentru a vă oferi o experiență montană cu totul deosebită.
            </p>
            <p class="text-charcoal/70 dark:text-beige/70 leading-relaxed font-light">
                Relaxați-vă pe terasa noastră exterioară spațioasă cu vedere directă spre culmile muntoase, explorați cărările pitorești din jur sau bucurați-vă de piscina noastră interioară. Fie că plănuiți o escapadă romantică în doi sau o vacanță activă cu familia, vă punem la dispoziție servicii de calitate la standarde premium.
            </p>

            <!-- Key Highlights -->
            <div class="grid grid-cols-2 gap-6 pt-4">
                <div class="flex items-start space-x-3 group">
                    <div class="p-2.5 bg-forest/5 dark:bg-white/5 rounded-lg group-hover:scale-110 transition-all duration-300">
                        <i data-lucide="compass" class="h-6 w-6 text-gold" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h4 class="font-semibold text-forest dark:text-white">Aventuri Active</h4>
                        <p class="text-sm text-charcoal/60 dark:text-beige/60 font-light">Pârtie de schi (50m) și trasee spre Vârful Igniș</p>
                    </div>
                </div>
                <div class="flex items-start space-x-3 group">
                    <div class="p-2.5 bg-forest/5 dark:bg-white/5 rounded-lg group-hover:scale-110 transition-all duration-300">
                        <i data-lucide="heart" class="h-6 w-6 text-gold" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h4 class="font-semibold text-forest dark:text-white">Relaxare Deplină</h4>
                        <p class="text-sm text-charcoal/60 dark:text-beige/60 font-light">Piscină interioară încălzită, jacuzzi și saune</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- Hosts Signature Letter Section -->
<section class="py-24 bg-forest text-beige relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,64,50,0.5),transparent_70%)] pointer-events-none" aria-hidden="true"></div>
    <div class="max-w-4xl mx-auto px-6 text-center relative z-10 scroll-reveal">
        <span class="text-gold font-medium tracking-widest uppercase text-xs block mb-4">Gânduri de la gazde</span>
        <i data-lucide="quote" class="h-8 w-8 text-gold/30 mx-auto mb-6" aria-hidden="true"></i>
        <h3 class="font-serif text-3xl sm:text-4xl italic leading-relaxed text-white mb-6">
            „Am construit Mountain Pearl nu doar ca pe un loc de cazare, ci ca pe un cămin deschis în inima pădurilor. Ne-am dorit un loc în care mirosul lemnului ars în șemineu, clipocitul apei calde și liniștea serii să vă reconecteze cu ceea ce contează cu adevărat.”
        </h3>
        <p class="text-sm text-beige/70 max-w-xl mx-auto mb-8 font-light">
            Vă așteptăm cu drag să ne treceți pragul, să povestim pe terasă la un pahar de afinată de casă și să vă bucurați de tot ce are mai frumos de oferit Maramureșul nostru.
        </p>
        <div>
            <p class="text-gold tracking-wide text-sm uppercase">Cu dragoste și respect,</p>
            <p class="signature-font text-5xl text-gold mt-2">Tudor și Maria</p>
        </div>
    </div>
</section>

<!-- Rooms Section -->
<section id="rooms" class="py-32 bg-white dark:bg-[#1A1A1A] transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-20 scroll-reveal">
            <span class="text-gold font-medium tracking-widest uppercase text-sm block">Opțiuni de Cazare</span>
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white mt-2 split-text">Camere Elegante și Confortabile</h2>
            <p class="text-charcoal/60 dark:text-beige/60 mt-4">Fiecare cameră este dotată cu baie proprie modernă, încălzire centrală, televizoare cu ecran plat, internet de mare viteză și vederi deosebite spre natură.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Room 1 (Turquoise) -->
            <div class="tilt-card bg-beige dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col justify-between scroll-reveal">
                <div>
                    <div class="relative overflow-hidden group">
                        <img src="pensiune-camera-turcoaz.jpg" alt="Cameră Dublă Deluxe cu accente turcoaz" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1.2s]">
                            <span class="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">Deluxe King</span>
                    </div>
                    <div class="p-8">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="font-serif text-2xl font-semibold text-forest dark:text-white">Cameră Dublă Deluxe</h3>
                            <div class="flex items-center space-x-1 text-gold">
                                <i data-lucide="users" class="h-4 w-4" aria-hidden="true"></i>
                                <span class="text-sm">2 Oaspeți</span>
                            </div>
                        </div>
                        <p class="text-sm text-charcoal/70 dark:text-beige/70 mb-4 font-light leading-relaxed">O cameră dublă elegantă amenajată în nuanțe relaxante de turcoaz, cu pat matrimonial confortabil, lămpi delicate pentru citit și lenjerie premium.</p>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Vedere la Munte</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Baie Privată</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Smart TV</span>
                        </div>
                    </div>
                </div>
                <div class="p-8 pt-0">
                    <a href="#booking" class="block text-center border border-gold text-forest dark:text-white hover:bg-gold hover:text-forest font-semibold py-3 rounded transition-all duration-300 tracking-wider uppercase text-xs">Cere Ofertă</a>
                </div>
            </div>

            <!-- Room 2 (Gold/Brown) -->
            <div class="tilt-card bg-beige dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col justify-between scroll-reveal">
                <div>
                    <div class="relative overflow-hidden group">
                        <img src="pensiune-camera-aurie.jpg" alt="Cameră King Executive cu nuanțe calde" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1.2s]">
                            <span class="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">Executive King</span>
                    </div>
                    <div class="p-8">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="font-serif text-2xl font-semibold text-forest dark:text-white">Cameră King Executive</h3>
                            <div class="flex items-center space-x-1 text-gold">
                                <i data-lucide="users" class="h-4 w-4" aria-hidden="true"></i>
                                <span class="text-sm">2-3 Oaspeți</span>
                            </div>
                        </div>
                        <p class="text-sm text-charcoal/70 dark:text-beige/70 mb-4 font-light leading-relaxed">Cameră dublă spațioasă, decorată cu tonuri calde de auriu și maro catifelat, dotată cu ferestre mari luminoase și vedere directă spre pădurea de brazi.</p>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Acces Balcon</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Wi-Fi Gratuit</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Încălzire</span>
                        </div>
                    </div>
                </div>
                <div class="p-8 pt-0">
                    <a href="#booking" class="block text-center border border-gold text-forest dark:text-white hover:bg-gold hover:text-forest font-semibold py-3 rounded transition-all duration-300 tracking-wider uppercase text-xs">Cere Ofertă</a>
                </div>
            </div>

            <!-- Room 3 (Bathroom) -->
            <div class="tilt-card bg-beige dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col justify-between scroll-reveal">
                <div>
                    <div class="relative overflow-hidden group">
                        <img src="pensiune-baie-moderna.jpg" alt="Baie modernă cu duș walk-in" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-[1.2s]">
                            <span class="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">Băi de Lux</span>
                    </div>
                    <div class="p-8">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="font-serif text-2xl font-semibold text-forest dark:text-white">Băi Moderne Private</h3>
                            <div class="flex items-center space-x-1 text-gold">
                                <i data-lucide="sparkles" class="h-4 w-4" aria-hidden="true"></i>
                                <span class="text-sm">Finisaje Premium</span>
                            </div>
                        </div>
                        <p class="text-sm text-charcoal/70 dark:text-beige/70 mb-4 font-light leading-relaxed">Bucurați-vă de mobilier elegant din lemn, dușuri spațioase walk-in cu sticlă securizată și efect de ploaie, finisaje de calitate și prosoape moale.</p>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Duș de Ploaie</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Cosmetice</span>
                            <span class="bg-forest/5 dark:bg-white/5 text-xs px-2.5 py-1 rounded text-forest dark:text-beige">Oglindă LED</span>
                        </div>
                    </div>
                </div>
                <div class="p-8 pt-0">
                    <a href="#booking" class="block text-center border border-gold text-forest dark:text-white hover:bg-gold hover:text-forest font-semibold py-3 rounded transition-all duration-300 tracking-wider uppercase text-xs">Cere Ofertă</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Wellness Spa Section -->
<section id="spa" class="relative py-32 bg-beige dark:bg-charcoal text-charcoal dark:text-beige transition-colors duration-300 overflow-hidden">

    <!-- Spa Particle Canvas Overlay -->
    <canvas id="spa-canvas" class="absolute inset-0 pointer-events-none z-10" aria-hidden="true"></canvas>

    <div class="max-w-7xl mx-auto px-6 relative z-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <!-- Spa Content -->
            <div class="lg:col-span-5 space-y-6 scroll-reveal">
                <span class="text-gold font-medium tracking-widest uppercase text-sm block">Sănătate & Armonie</span>
                <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white leading-tight split-text">
                    Oaza Noastră de Spa și Piscină Interioară
                </h2>
                <p class="text-lg leading-relaxed text-charcoal/80 dark:text-beige/80 font-light">
                    Răsfățați-vă cu momente de relaxare profundă pe tot parcursul anului. Pensiunea Mountain Pearl vă pune la dispoziție o piscină interioară încălzită, un tavan superb cu grinzi din lemn și cascade moderne de apă.
                </p>

                <div class="space-y-4">
                    <div class="flex items-center space-x-3 group">
                        <i data-lucide="waves" class="h-6 w-6 text-gold group-hover:scale-[1.15] transition-transform duration-300" aria-hidden="true"></i>
                        <span class="font-medium text-forest dark:text-white font-light">Piscină Interioară Încălzită cu Cascadă</span>
                    </div>
                    <div class="flex items-center space-x-3 group">
                        <i data-lucide="sparkles" class="h-6 w-6 text-gold group-hover:scale-[1.15] transition-transform duration-300" aria-hidden="true"></i>
                        <span class="font-medium text-forest dark:text-white font-light">Iluminat Ambiental Albastru pe Timpul Nopții</span>
                    </div>
                    <div class="flex items-center space-x-3 group">
                        <i data-lucide="flame" class="h-6 w-6 text-gold group-hover:scale-[1.15] transition-transform duration-300" aria-hidden="true"></i>
                        <span class="font-medium text-forest dark:text-white font-light">Jacuzzi Premium & Saune</span>
                    </div>
                </div>
            </div>

            <!-- Spa Image -->
            <div class="lg:col-span-7 scroll-reveal">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="pensiune-spa-pool.jpg" alt="Piscina interioară încălzită și jacuzzi la Mountain Pearl" loading="lazy" decoding="async" class="scroll-zoom w-full h-[500px] object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Amenities Section -->
<section id="amenities" class="py-32 bg-white dark:bg-[#1A1A1A]">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-20 scroll-reveal">
            <span class="text-gold font-medium tracking-widest uppercase text-sm block">Facilități de Top</span>
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white mt-2 split-text">Dotările Pensiunii</h2>
            <p class="text-charcoal/60 dark:text-beige/60 mt-4">Ne dorim ca fiecare moment petrecut la noi să fie marcat de confort și amintiri frumoase.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="wifi" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Wi-Fi Gratuit</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="car" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Parcare Privată</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="coffee" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Mic Dejun Casnic</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="utensils" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Bucătărie Caldă</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="sun" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Terasă de vară</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="snowflake" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Pârtie Schi (50m)</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="smile" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Pentru Familii</h4>
            </div>
            <div class="bg-beige dark:bg-charcoal p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 scroll-reveal">
                <i data-lucide="compass" class="h-8 w-8 text-gold mx-auto mb-4" aria-hidden="true"></i>
                <h4 class="font-medium text-forest dark:text-white text-sm tracking-wide uppercase">Ghid Vârful Igniș</h4>
            </div>
        </div>
    </div>
</section>

<!-- Dining/Restaurant Section -->
<section id="restaurant" class="py-32 bg-beige dark:bg-charcoal text-charcoal dark:text-beige transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <!-- Dining Image -->
            <div class="lg:col-span-7 scroll-reveal">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="pensiune-restaurant.jpg" alt="Salonul de dining elegant de la Pensiunea Mountain Pearl" loading="lazy" decoding="async" class="scroll-zoom w-full h-96 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent"></div>
                </div>
            </div>

            <!-- Dining Content -->
            <div class="lg:col-span-5 space-y-6 scroll-reveal">
                <span class="text-gold font-medium tracking-widest uppercase text-sm block">Experiențe Culinare</span>
                <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white leading-tight split-text">
                    Restaurantul Nostru Tradițional
                </h2>
                <p class="text-lg leading-relaxed text-charcoal/80 dark:text-beige/80 font-light">
                    Savorați preparate delicioase, gătite cu drag și ingrediente alese, în restaurantul nostru proaspăt reamenajat. Scaunele confortabile din catifea bleumarin, corpurile de iluminat moderne aurii și atmosfera primitoare vă vor oferi momente deosebite alături de cei dragi.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section id="gallery" class="py-32 bg-white dark:bg-[#1A1A1A]"
         x-data="{
                activeFilter: 'all',
                lightboxImg: null,
                lightboxIndex: 0,
                images: [
                    { src: 'pensiune-exterior-front.jpg', category: 'exterior' },
                    { src: 'pensiune-spa-pool.jpg', category: 'interior' },
                    { src: 'pensiune-terrace-view.jpg', category: 'exterior' },
                    { src: 'pensiune-camera-turcoaz.jpg', category: 'rooms' },
                    { src: 'pensiune-baie-moderna.jpg', category: 'rooms' },
                    { src: 'pensiune-camera-aurie.jpg', category: 'rooms' },
                    { src: 'pensiune-restaurant.jpg', category: 'interior' }
                ],
                get filteredImages() {
                    return this.activeFilter === 'all' ? this.images : this.images.filter(img => img.category === this.activeFilter);
                },
                openLightbox(src) {
                    this.lightboxIndex = this.filteredImages.findIndex(img => img.src === src);
                    this.lightboxImg = src;
                },
                closeLightbox() {
                    this.lightboxImg = null;
                },
                nextImage() {
                    if (this.lightboxImg === null || !this.filteredImages.length) return;
                    this.lightboxIndex = (this.lightboxIndex + 1) % this.filteredImages.length;
                    this.lightboxImg = this.filteredImages[this.lightboxIndex].src;
                },
                prevImage() {
                    if (this.lightboxImg === null || !this.filteredImages.length) return;
                    this.lightboxIndex = (this.lightboxIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
                    this.lightboxImg = this.filteredImages[this.lightboxIndex].src;
                },
                init() {
                    this.$watch('lightboxImg', value => { document.body.style.overflow = value ? 'hidden' : ''; });
                }
             }">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 scroll-reveal">
            <div>
                <span class="text-gold font-medium tracking-widest uppercase text-sm block">Descoperiți Mountain Pearl</span>
                <h2 class="font-serif text-4xl font-bold text-forest dark:text-white mt-2 split-text">Galerie Foto</h2>
            </div>
            <div class="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                <button @click="activeFilter = 'all'" :aria-pressed="activeFilter === 'all'" :class="activeFilter === 'all' ? 'bg-forest text-gold border-forest' : 'bg-beige dark:bg-neutral-800 text-charcoal dark:text-beige border-transparent'" class="border px-5 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap">Toate Pozele</button>
            <button @click="activeFilter = 'exterior'" :aria-pressed="activeFilter === 'exterior'" :class="activeFilter === 'exterior' ? 'bg-forest text-gold border-forest' : 'bg-beige dark:bg-neutral-800 text-charcoal dark:text-beige border-transparent'" class="border px-5 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap">Exterior & Peisaj</button>
        <button @click="activeFilter = 'rooms'" :aria-pressed="activeFilter === 'rooms'" :class="activeFilter === 'rooms' ? 'bg-forest text-gold border-forest' : 'bg-beige dark:bg-neutral-800 text-charcoal dark:text-beige border-transparent'" class="border px-5 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap">Camere & Băi</button>
    <button @click="activeFilter = 'interior'" :aria-pressed="activeFilter === 'interior'" :class="activeFilter === 'interior' ? 'bg-forest text-gold border-forest' : 'bg-beige dark:bg-neutral-800 text-charcoal dark:text-beige border-transparent'" class="border px-5 py-2 rounded text-sm font-medium transition-all duration-300 whitespace-nowrap">Dining & Spa</button>
</div>
</div>

<!-- Gallery Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div x-show="activeFilter === 'all' || activeFilter === 'exterior'"
         x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
         x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
         class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
    @click="openLightbox('pensiune-exterior-front.jpg')" @keydown.enter="openLightbox('pensiune-exterior-front.jpg')" @keydown.space.prevent="openLightbox('pensiune-exterior-front.jpg')">
    <img src="pensiune-exterior-front.jpg" alt="Exterior Pensiune" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'interior'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-spa-pool.jpg')" @keydown.enter="openLightbox('pensiune-spa-pool.jpg')" @keydown.space.prevent="openLightbox('pensiune-spa-pool.jpg')">
<img src="pensiune-spa-pool.jpg" alt="Piscina interioară cu hidromasaj" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'exterior'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-terrace-view.jpg')" @keydown.enter="openLightbox('pensiune-terrace-view.jpg')" @keydown.space.prevent="openLightbox('pensiune-terrace-view.jpg')">
<img src="pensiune-terrace-view.jpg" alt="Terasa pensiunii cu vedere la munți" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'rooms'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-camera-turcoaz.jpg')" @keydown.enter="openLightbox('pensiune-camera-turcoaz.jpg')" @keydown.space.prevent="openLightbox('pensiune-camera-turcoaz.jpg')">
<img src="pensiune-camera-turcoaz.jpg" alt="Dormitor de lux nuanțe turcoaz" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'rooms'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-baie-moderna.jpg')" @keydown.enter="openLightbox('pensiune-baie-moderna.jpg')" @keydown.space.prevent="openLightbox('pensiune-baie-moderna.jpg')">
<img src="pensiune-baie-moderna.jpg" alt="Detalii baie modernă" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'rooms'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-camera-aurie.jpg')" @keydown.enter="openLightbox('pensiune-camera-aurie.jpg')" @keydown.space.prevent="openLightbox('pensiune-camera-aurie.jpg')">
<img src="pensiune-camera-aurie.jpg" alt="Dormitor elegant auriu" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>

<div x-show="activeFilter === 'all' || activeFilter === 'interior'"
     x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
     x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
     class="overflow-hidden rounded-lg shadow cursor-pointer group scroll-reveal" role="button" tabindex="0" aria-label="Deschide imaginea mărită"
                     @click="openLightbox('pensiune-restaurant.jpg')" @keydown.enter="openLightbox('pensiune-restaurant.jpg')" @keydown.space.prevent="openLightbox('pensiune-restaurant.jpg')">
<img src="pensiune-restaurant.jpg" alt="Restaurantul interior" loading="lazy" decoding="async" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700">
</div>
</div>
</div>

<!-- Lightbox -->
<div x-show="lightboxImg"
     x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
     x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
     class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" style="display: none;"
             @click.self="closeLightbox()"
@keydown.escape.window="closeLightbox()"
@keydown.arrow-right.window="nextImage()"
@keydown.arrow-left.window="prevImage()"
role="dialog" aria-modal="true" aria-label="Vizualizator imagini galerie">
<button @click="closeLightbox()" class="absolute top-6 right-6 text-white text-3xl font-light hover:text-gold z-10" aria-label="Închide Galeria">&times;</button>
<button @click="prevImage()" class="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold p-2" aria-label="Imaginea anterioară">
<i data-lucide="chevron-left" class="h-8 w-8" aria-hidden="true"></i>
</button>
<img :src="lightboxImg" alt="Imagine mărită din galeria Mountain Pearl" class="max-w-full max-h-[85vh] rounded shadow-2xl select-none">
<button @click="nextImage()" class="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold p-2" aria-label="Imaginea următoare">
<i data-lucide="chevron-right" class="h-8 w-8" aria-hidden="true"></i>
</button>
</div>
</section>

<!-- Attractions Section -->
<section id="attractions" class="py-32 max-w-7xl mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-20 scroll-reveal">
        <span class="text-gold font-medium tracking-widest uppercase text-sm block">Activități în Zonă</span>
        <h2 class="font-serif text-4xl sm:text-5xl font-bold text-forest dark:text-white mt-2 split-text">Explorează Stațiunea Izvoare și Maramureșul</h2>
        <p class="text-charcoal/60 dark:text-beige/60 mt-4">Pensiunea noastră este perfect poziționată pentru a vă ofereri acces rapid la principalele poteci montane și obiective turistice din regiune.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div class="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow scroll-reveal">
            <div class="h-56 overflow-hidden">
                <img src="pensiune-terrace-view.jpg" alt="Vârful Igniș" loading="lazy" decoding="async" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-8">
                <h3 class="font-serif text-2xl font-semibold mb-2 text-forest dark:text-white">Vârful Igniș</h3>
                <p class="text-sm text-charcoal/75 dark:text-beige/75 font-light leading-relaxed">Bucurați-vă de o drumeție deosebită ce pornește chiar de la Pensiunea Mountain Pearl și urcă până pe platoul înalt al Vârfului Igniș pentru o panoramă de neuitat.</p>
            </div>
        </div>

        <div class="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow scroll-reveal">
            <div class="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" alt="Biserica de Lemn Desești" loading="lazy" decoding="async" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-8">
                <h3 class="font-serif text-2xl font-semibold mb-2 text-forest dark:text-white">Biserica de Lemn din Desești</h3>
                <p class="text-sm text-charcoal/75 dark:text-beige/75 font-light leading-relaxed">Vizitați monumentul istoric inclus în patrimoniul UNESCO din Desești, recunoscut la nivel mondial pentru arhitectura sa tradițională din lemn și picturile sale interioare.</p>
            </div>
        </div>

        <div class="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow scroll-reveal">
            <div class="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" alt="Mocănița Vaser" loading="lazy" decoding="async" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-8">
                <h3 class="font-serif text-2xl font-semibold mb-2 text-forest dark:text-white">Mocănița din Vișeu</h3>
                <p class="text-sm text-charcoal/75 dark:text-beige/75 font-light leading-relaxed">Planifică o excursie de o zi pentru a trăi experiența faimosului tren cu aburi istoric ce șerpuiește prin sălbăticia neatinsă a Văii Vaserului.</p>
            </div>
        </div>
    </div>

    <!-- Location Map Element -->
    <div class="w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-gold/10 relative scroll-reveal">
        <div class="absolute inset-0 bg-neutral-300 dark:bg-neutral-800 flex flex-col items-center justify-center p-6 text-center">
            <i data-lucide="map-pin" class="h-12 w-12 text-gold animate-bounce mb-4" aria-hidden="true"></i>
            <h4 class="font-serif text-2xl font-bold text-forest dark:text-white">Locația Noastră exactă</h4>
            <p class="text-charcoal/60 dark:text-beige/60 max-w-md mt-2 font-light">Zona Turistică Izvoare nr. 10A, Desești, Maramureș, România.</p>
            <a href="https://maps.google.com/?q=Pensiunea+Mountain+Pearl+Desesti" target="_blank" rel="noopener noreferrer" class="mt-6 bg-forest text-gold px-6 py-2.5 rounded font-medium tracking-wide uppercase text-xs hover:bg-opacity-95 shadow transition-all duration-300 hover:scale-105">Deschide Google Maps</a>
        </div>
    </div>
</section>

<!-- Booking Form Section -->
<section id="booking" class="py-32 max-w-5xl mx-auto px-6 scroll-reveal">
    <div class="bg-white dark:bg-charcoal rounded-2xl shadow-2xl overflow-hidden border border-gold/10">
        <div class="grid grid-cols-1 lg:grid-cols-12" x-data="{
                checkIn: '',
                checkOut: '',
                roomType: 'double-turquoise',
                guests: 2,
                addBreakfast: false,
                addSpa: false,
                loading: false,
                success: false,
                todayStr: new Date().toISOString().split('T')[0],
                getNights() {
                    if (!this.checkIn || !this.checkOut) return 1;
                    const d1 = new Date(this.checkIn);
                    const d2 = new Date(this.checkOut);
                    const diff = d2 - d1;
                    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 1;
                },
                getRoomPrice() {
                    return this.roomType === 'double-turquoise' ? 180 : 220;
                },
                getTotal() {
                    const nights = this.getNights();
                    const roomCost = this.getRoomPrice() * nights;
                    const bfastCost = this.addBreakfast ? (15 * this.guests * nights) : 0;
                    const spaCost = this.addSpa ? 35 : 0;
                    return roomCost + bfastCost + spaCost;
                },
                validateDates() {
                    if (this.checkIn && this.checkOut && this.checkOut <= this.checkIn) {
                        const next = new Date(this.checkIn);
                        next.setDate(next.getDate() + 1);
                        this.checkOut = next.toISOString().split('T')[0];
                    }
                },
                clampGuests() {
                    const g = parseInt(this.guests, 10);
                    this.guests = Math.min(4, Math.max(1, isNaN(g) ? 1 : g));
                },
                handleSubmit() {
                    if (this.loading) return;
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.success = true;
                    }, 1500);
                },
                resetForm() {
                    this.checkIn = '';
                    this.checkOut = '';
                    this.roomType = 'double-turquoise';
                    this.guests = 2;
                    this.addBreakfast = false;
                    this.addSpa = false;
                    this.success = false;
                },
                init() {
                    this.$watch('success', value => { document.body.style.overflow = value ? 'hidden' : ''; });
                }
            }">

            <!-- Dynamic Sidebar / Live Receipt -->
            <div class="lg:col-span-5 bg-forest text-beige p-8 lg:p-12 flex flex-col justify-between">
                <div>
                    <span class="text-gold font-medium tracking-widest uppercase text-xs block mb-2">Bonul tău direct</span>
                    <h3 class="font-serif text-3xl font-bold leading-tight mb-6 text-white">Detaliile Sejurului</h3>

                    <!-- Living Slip Structure -->
                    <div class="border-t border-b border-beige/10 py-6 space-y-4 text-sm font-light">
                        <div class="flex justify-between">
                            <span class="text-beige/60">Cazare:</span>
                            <span class="font-medium text-white" x-text="roomType === 'double-turquoise' ? 'Cam. Deluxe (Turcoaz)' : 'Cam. Executive (Auriu)'"></span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-beige/60">Durată:</span>
                            <span class="font-medium text-white" x-text="getNights() + ' nopți'"></span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-beige/60">Oaspeți:</span>
                            <span class="font-medium text-white" x-text="guests + ' persoane'"></span>
                        </div>
                        <div class="flex justify-between" x-show="addBreakfast">
                            <span class="text-beige/60">Mic dejun tradițional:</span>
                            <span class="font-medium text-gold">Inclus (+15€/zi)</span>
                        </div>
                        <div class="flex justify-between" x-show="addSpa">
                            <span class="text-beige/60">Slot privat Wellness:</span>
                            <span class="font-medium text-gold">Activat (+35€)</span>
                        </div>
                    </div>
                </div>
                <div class="mt-8 pt-6">
                    <p class="text-xs text-beige/50 uppercase tracking-wide">Total Estimativ Direct</p>
                    <p class="font-serif text-4xl text-gold mt-1 font-bold">€<span x-text="getTotal()"></span></p>
                    <p class="text-[10px] text-beige/40 mt-1">Cel mai bun preț garantat direct.</p>
                </div>
            </div>

            <!-- Input Workspace -->
            <div class="lg:col-span-7 p-8 lg:p-12">
                <h4 class="font-serif text-2xl font-bold text-forest dark:text-white mb-6">Rezervă Fără Intermediari</h4>

                <form @submit.prevent="handleSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label for="checkin-date" class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Data Sosirii</label>
                        <input id="checkin-date" type="date" required :min="todayStr" x-model="checkIn" @change="validateDates()" class="w-full bg-beige dark:bg-[#333] border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300">
                    </div>
                    <div>
                        <label for="checkout-date" class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Data Plecării</label>
                        <input id="checkout-date" type="date" required :min="checkIn || todayStr" x-model="checkOut" @change="validateDates()" class="w-full bg-beige dark:bg-[#333] border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label for="room-type" class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Alege Camera</label>
                        <select id="room-type" x-model="roomType" class="w-full bg-beige dark:bg-[#333] border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300">
                            <option value="double-turquoise">Cameră Dublă Deluxe (Turcoaz)</option>
                            <option value="double-gold">Cameră King Executive (Auriu)</option>
                        </select>
                    </div>
                    <div>
                        <label for="guest-count" class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Număr Oaspeți</label>
                        <input id="guest-count" type="number" inputmode="numeric" min="1" max="4" required x-model.number="guests" @blur="clampGuests()" class="w-full bg-beige dark:bg-[#333] border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300">
                    </div>
                </div>

                <!-- Add-ons -->
                <div class="space-y-3 pt-2">
                    <label class="block text-xs uppercase tracking-wider font-semibold text-charcoal/70 dark:text-beige/70 mb-1">Servicii Suplimentare</label>

                    <label class="flex items-center space-x-3 cursor-pointer p-3 bg-beige/30 dark:bg-white/5 rounded-lg hover:bg-beige/50 transition">
                        <input type="checkbox" x-model="addBreakfast" class="h-4 w-4 rounded border-gray-300 text-forest focus:ring-gold">
                            <span class="text-sm font-light text-charcoal/80 dark:text-beige/80">Adaugă mic dejun tradițional maramureșean (+15€ / zi / pers)</span>
                    </label>

                    <label class="flex items-center space-x-3 cursor-pointer p-3 bg-beige/30 dark:bg-white/5 rounded-lg hover:bg-beige/50 transition">
                        <input type="checkbox" x-model="addSpa" class="h-4 w-4 rounded border-gray-300 text-forest focus:ring-gold">
                            <span class="text-sm font-light text-charcoal/80 dark:text-beige/80">Rezervă slot privat Spa &amp; Piscină de 2 ore (+35€ flat)</span>
                    </label>
                </div>

                <button type="submit" :disabled="loading" :class="loading ? 'opacity-70 cursor-not-allowed' : ''" class="w-full relative group overflow-hidden bg-gold text-forest font-semibold py-4 rounded transition-all duration-300 hover:scale-[1.01] tracking-wider uppercase text-sm flex items-center justify-center space-x-2">
                <span x-show="!loading">Trimite Solicitarea</span>
                <span x-show="loading" class="flex items-center space-x-2">
                                <svg class="animate-spin h-5 w-5 text-forest" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Verificare locuri libere...</span>
                            </span>
            </button>
        </form>

        <!-- Success Modal -->
        <div x-show="success" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" style="display: none;"
             x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
             x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
        @keydown.escape.window="if (success) resetForm()"
        @click.self="resetForm()"
        role="dialog" aria-modal="true" aria-label="Confirmare solicitare">
        <div class="bg-white dark:bg-charcoal max-w-md p-8 rounded-xl text-center shadow-2xl scale-105 transition-transform duration-300">
            <i data-lucide="check-circle" class="h-16 w-16 text-gold mx-auto mb-4 animate-bounce" aria-hidden="true"></i>
            <h3 class="font-serif text-3xl font-bold mb-2 text-forest dark:text-white">Solicitare Trimisă!</h3>
            <p class="text-sm text-charcoal/70 dark:text-beige/70 mb-6 font-light">Vă mulțumim. Solicitarea dumneavoastră a fost înregistrată direct în sistem. Un membru al echipei noastre vă va contacta în cel mai scurt timp pentru a stabili detaliile.</p>
            <button @click="resetForm()" class="bg-forest text-gold px-8 py-2 rounded font-semibold tracking-wider uppercase text-xs hover:bg-opacity-95 transition-all duration-300">Închide</button>
    </div>
</div>
</div>

</div>
</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-32 bg-white dark:bg-charcoal text-charcoal dark:text-beige transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

        <div className="lg:col-span-5 space-y-8 scroll-reveal">
            <div>
                <span className="text-gold font-medium tracking-widest uppercase text-sm block">Contact</span>
                <h2 class="font-serif text-4xl font-bold text-forest dark:text-white mt-2 split-text">Să începem
                    povestea</h2>
            </div>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <i data-lucide="map-pin" className="h-6 w-6 text-gold mt-1 flex-shrink-0" aria-hidden="true"></i>
                    <div>
                        <h4 class="font-semibold text-forest dark:text-white">Locație</h4>
                        <p className="text-sm text-charcoal/75 dark:text-beige/75 leading-relaxed font-light">Zona
                            Turistică Izvoare nr. 10A, Desești, Maramureș, România</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <i data-lucide="phone" className="h-6 w-6 text-gold mt-1 flex-shrink-0" aria-hidden="true"></i>
                    <div>
                        <h4 class="font-semibold text-forest dark:text-white">Telefon direct</h4>
                        <p className="text-sm text-charcoal/75 dark:text-beige/75 leading-relaxed font-light"><a
                            href="tel:+40739866600" className="hover:text-gold transition-colors">+40 739 866 600</a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <i data-lucide="mail" className="h-6 w-6 text-gold mt-1 flex-shrink-0" aria-hidden="true"></i>
                    <div>
                        <h4 class="font-semibold text-forest dark:text-white">Adresă de e-mail</h4>
                        <a href="mailto:office@mountainpearl.ro"
                           className="text-sm text-gold hover:underline font-light">office@mountainpearl.ro</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Message Form -->
        <div
            className="lg:col-span-7 bg-beige dark:bg-[#222222] p-8 rounded-2xl shadow border border-gold/5 scroll-reveal">
            <h4 class="font-serif text-2xl font-bold mb-6 text-forest dark:text-white">Trimite-ne un Mesaj</h4>
            <form x-data="{ submitting: false, sent: false }"
            @submit.prevent="submitting = true; setTimeout(() => {submitting = false; sent = true; $el.reset();}, 1200)"
            class="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label for="contact-name"
                           class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Nume
                        Complet</label>
                    <input id="contact-name" type="text" required
                           class="w-full bg-white dark:bg-charcoal border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300"/>
                </div>
                <div>
                    <label for="contact-email"
                           class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Adresă
                        de E-mail</label>
                    <input id="contact-email" type="email" required
                           class="w-full bg-white dark:bg-charcoal border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300"/>
                </div>
            </div>
            <div>
                <label for="contact-message"
                       class="block text-xs uppercase tracking-wider font-semibold mb-2 text-charcoal/70 dark:text-beige/70">Mesaj</label>
                <textarea id="contact-message" rows="4" required
                          class="w-full bg-white dark:bg-charcoal border-none rounded p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal dark:text-white transition-all duration-300"></textarea>
            </div>
            <button type="submit"
            :disabled="submitting" :class="submitting ? 'opacity-70 cursor-not-allowed' : ''" class="bg-forest text-gold
            font-semibold px-8 py-3.5 rounded transition-all duration-300 hover:scale-105 uppercase text-xs w-full
            sm:w-auto">
            <span x-show="!submitting">Trimite Mesajul</span>
            <span x-show="submitting">Se trimite...</span>
        </button>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            <!-- Camera 1 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-deluxe.jpg" alt="Cameră Dublă Deluxe"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">
                Best Seller
            </span>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white">
                            Cameră Dublă Deluxe
                        </h3>

                        <div className="flex items-center space-x-1 text-gold">
                            <i data-lucide="sparkles" className="h-4 w-4"></i>
                            <span className="text-sm">Premium</span>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking"
                       className="inline-flex items-center text-gold font-semibold hover:gap-3 transition-all">
                        Rezervă acum
                        <i data-lucide="arrow-right" className="ml-2 h-4 w-4"></i>
                    </a>
                </div>
            </article>

            <!-- Camera 2 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-deluxe-twin.jpg" alt="Cameră Deluxe Twin"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-gold text-forest text-xs font-semibold px-4 py-2 rounded-full">
                Twin
            </span>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white">
                            Cameră Deluxe dublă sau twin
                        </h3>

                        <div className="flex items-center space-x-1 text-gold">
                            <i data-lucide="bed-double" className="h-4 w-4"></i>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking" className="inline-flex items-center text-gold font-semibold">
                        Rezervă acum
                    </a>
                </div>
            </article>

            <!-- Camera 3 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-tripla.jpg" alt="Cameră triplă de lux"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">
                Family
            </span>
                </div>

                <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white mb-3">
                        Cameră triplă de lux
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking" className="inline-flex items-center text-gold font-semibold">
                        Rezervă acum
                    </a>
                </div>
            </article>

            <!-- Camera 4 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-king-balcon.jpg" alt="Cameră King cu balcon"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-gold text-forest text-xs font-semibold px-4 py-2 rounded-full">
                Mountain View
            </span>
                </div>

                <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white mb-3">
                        Cameră King cu balcon
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking" className="inline-flex items-center text-gold font-semibold">
                        Rezervă acum
                    </a>
                </div>
            </article>

            <!-- Camera 5 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-tripla-balcon.jpg" alt="Cameră triplă cu balcon"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-forest text-gold text-xs font-semibold px-4 py-2 rounded-full">
                Family Choice
            </span>
                </div>

                <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white mb-3">
                        Cameră triplă cu balcon
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking" className="inline-flex items-center text-gold font-semibold">
                        Rezervă acum
                    </a>
                </div>
            </article>

            <!-- Camera 6 -->
            <article
                className="group bg-white dark:bg-charcoal rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                    <img src="camera-twin-balcon.jpg" alt="Cameră Deluxe Twin cu balcon"
                         className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"/>

                    <span
                        className="absolute top-4 right-4 bg-gold text-forest text-xs font-semibold px-4 py-2 rounded-full">
                Balcony
            </span>
                </div>

                <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-forest dark:text-white mb-3">
                        Cameră dublă sau twin Deluxe cu balcon
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Descriere cameră...
                    </p>

                    <a href="#booking" className="inline-flex items-center text-gold font-semibold">
                        Rezervă acum
                    </a>
                </div>
            </article>

        </div>
        <p x-show="sent" x-transition className="text-sm text-forest dark:text-gold font-medium" role="status">Mulțumim!
            Mesajul dumneavoastră a fost trimis.</p>
    </form>
</div>

</div>
</section>

<!-- Footer -->
<footer class="bg-forest text-beige py-16 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div class="space-y-4">
            <span class="font-serif text-3xl font-bold text-gold">Mountain Pearl</span>
            <p class="text-sm text-beige/60 leading-relaxed font-light">Pensiune de tip boutique axată pe relaxare și
                wellness, situată în zona turistică montană Izvoare, Maramureș.</p>
        </div>
        <div class="space-y-4">
            <h4 class="font-bold uppercase text-xs tracking-wider text-gold">Navigare</h4>
            <ul class="space-y-2 text-sm text-beige/80 font-light">
                <li><a href="#about" class="hover:underline">Despre noi</a></li>
                <li><a href="#rooms" class="hover:underline">Camere</a></li>
                <li><a href="#spa" class="hover:underline">Wellness Spa</a></li>
                <li><a href="#gallery" class="hover:underline">Galerie</a></li>
            </ul>
        </div>
        <div class="space-y-4">
            <h4 class="font-bold uppercase text-xs tracking-wider text-gold">Link-uri Utile</h4>
            <ul class="space-y-2 text-sm text-beige/80 font-light">
                <li><a href="#attractions" class="hover:underline">Atracții</a></li>
                <li><a href="#booking" class="hover:underline">Rezervare Directă</a></li>
                <li><a href="#contact" class="hover:underline">Contact &amp; Indicații</a></li>
            </ul>
        </div>
        <div class="space-y-4">
            <h4 class="font-bold uppercase text-xs tracking-wider text-gold">Legal</h4>
            <ul class="space-y-2 text-sm text-beige/80 font-light">
                <li><a href="#" class="hover:underline">Politică de Confidențialitate</a></li>
                <li><a href="#" class="hover:underline">Termeni &amp; Condiții</a></li>
            </ul>
        </div>
    </div>
    <div
        class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-beige/50">
        <p>&copy; 2026 Pensiunea Mountain Pearl. Toate drepturile rezervate.</p>
        <p class="mt-2 sm:mt-0 font-light">Desești, Maramureș, România.</p>
    </div>
</footer>

<script>
    /* =====================================================================
    Mountain Pearl — front-end behaviour
    Organised into small, named functions; every animated section is
    wrapped in gsap.matchMedia() so prefers-reduced-motion is honoured
    consistently (not just for the canvases/cursor/tilt as before).
    ===================================================================== */

    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);

    /* ---------------------------------------------------------------
    * 1. Split headline text into per-character spans (structural —
    * runs once regardless of motion preference; the reduced-motion
    * branch below just reveals the spans instantly).
    * ------------------------------------------------------------- */
    function splitTextIntoChars() {
    document.querySelectorAll('.split-text').forEach(el => {
        const text = el.innerText;
        el.innerHTML = '';
        el.classList.add('char-container');
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.className = 'char-span';
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            el.appendChild(span);
        });
    });
}
    splitTextIntoChars();

    /* ---------------------------------------------------------------
    * 2. Custom lag cursor (desktop only). GSAP owns the transform
    * entirely (position + centring via xPercent/yPercent) so there
    * is no competing CSS transition fighting the per-frame update.
    * ------------------------------------------------------------- */
    function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    gsap.set(cursor, {x: posX, y: posY, xPercent: -50, yPercent: -50});
});

    window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

    const hoverTargets = document.querySelectorAll('a, button, select, input, textarea, [role="button"]');
    hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
    gsap.to(cursor, {scale: 1.5, borderColor: '#C8A96A', duration: 0.3});
});
    target.addEventListener('mouseleave', () => {
    gsap.to(cursor, {scale: 1, borderColor: '#C8A96A', duration: 0.3});
});
});
}

    /* ---------------------------------------------------------------
    * 3. 3D tilt effect for room cards, driven by gsap.quickTo for
    * smooth, hardware-accelerated, 60fps-friendly updates instead
    * of writing to el.style on every mousemove.
    * ------------------------------------------------------------- */
    function initTilt() {
    document.querySelectorAll('.tilt-card').forEach(card => {
        gsap.set(card, {transformPerspective: 1000, transformStyle: 'preserve-3d'});
        const setRotateX = gsap.quickTo(card, 'rotateX', {duration: 0.4, ease: 'power3.out'});
        const setRotateY = gsap.quickTo(card, 'rotateY', {duration: 0.4, ease: 'power3.out'});
        const setScale = gsap.quickTo(card, 'scale', {duration: 0.4, ease: 'power3.out'});

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setRotateX(-(y / rect.height) * 10);
            setRotateY((x / rect.width) * 10);
            setScale(1.01);
        });

        card.addEventListener('mouseleave', () => {
            setRotateX(0);
            setRotateY(0);
            setScale(1);
        });
    });
}

    /* ---------------------------------------------------------------
    * 4. Scroll-driven reveals, parallax and zoom — gated behind
    * prefers-reduced-motion via gsap.matchMedia().
    * ------------------------------------------------------------- */
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
    // Character-by-character headline reveal, once per element.
    document.querySelectorAll('.split-text').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                el.classList.add('show-chars');
                gsap.to(el.querySelectorAll('.char-span'), {
                    y: 0,
                    opacity: 1,
                    stagger: 0.02,
                    duration: 1,
                    ease: 'power3.out',
                    overwrite: 'auto'
                });
            }
        });
    });

    // Hero entrance.
    gsap.from('.hero-reveal', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out'
});

    // Hero background parallax.
    gsap.to('#hero-bg', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
}
});

    // Section reveals — each trigger self-destructs after firing once.
    gsap.utils.toArray('.scroll-reveal').forEach(element => {
    gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
    trigger: element,
    start: 'top 85%',
    once: true
}
});
});

    // Image zoom-out on scroll.
    gsap.utils.toArray('.scroll-zoom').forEach(img => {
    gsap.fromTo(img,
{ scale: 1.1 },
{
    scale: 1,
    scrollTrigger: {
    trigger: img,
    start: 'top 95%',
    end: 'bottom 15%',
    scrub: 1
}
}
    );
});

    initCursor();
    initTilt();
});

    mm.add('(prefers-reduced-motion: reduce)', () => {
    // Skip straight to the final, fully visible state.
    document.querySelectorAll('.split-text').forEach(el => el.classList.add('show-chars'));
    gsap.set('.char-span, .hero-reveal, .scroll-reveal', { opacity: 1, y: 0, x: 0, scale: 1 });
});

    /* ---------------------------------------------------------------
    * 5. Active-section nav highlighting via IntersectionObserver.
    *    Independent of the motion preference (it only toggles a
    *    class, it doesn't animate).
    * ------------------------------------------------------------- */
    function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const setActive = (id) => {
    navLinks.forEach(link => {
    link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
});
};

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
});
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}
    initActiveNavHighlight();

    /* ---------------------------------------------------------------
    * 6. Lightweight canvas particle systems (golden dust in the hero,
    *    cool vapour in the spa section). Self-contained; respects
    *    prefers-reduced-motion by simply never starting the rAF loop.
    * ------------------------------------------------------------- */
    function createParticleSystem(canvasId, color, maxParticles) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
};
    window.addEventListener('resize', resize);
    resize();

    class Particle {
    constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * -0.4 - 0.1;
    this.alpha = Math.random() * 0.5 + 0.1;
}
    update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < 0) {
    this.y = canvas.height;
    this.x = Math.random() * canvas.width;
}
}
    draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;
    ctx.fill();
    ctx.restore();
}
}

    for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
}

    const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
    p.update();
    p.draw();
});
    requestAnimationFrame(animate);
};

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
}
}

    /* ---------------------------------------------------------------
    * 7. Boot everything that needs the page fully loaded (images,
    *    fonts) and refresh ScrollTrigger afterwards so any layout
    *    shift from late-loading assets doesn't leave stale trigger
    *    positions behind.
    * ------------------------------------------------------------- */
    window.addEventListener('load', () => {
    createParticleSystem('hero-canvas', '#C8A96A', 40);
    createParticleSystem('spa-canvas', '#A5F3FC', 25);
    ScrollTrigger.refresh();
});
</script>
</body>
</html>