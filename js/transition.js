// ==========================================
// CINEMATIC INTRO
// ==========================================

gsap.registerPlugin(ScrollTrigger);

// Timeline principal
const intro = gsap.timeline({

    scrollTrigger:{

        trigger:"#cinematicIntro",

        start:"top top",

        end:"+=180%",

        scrub:1.4,

        pin:true,

        anticipatePin:1

    }

});

// ==========================================
// CEAȚA FUNDAL
// ==========================================

intro.to(".fog-back-1",{

    y:-180,
    x:-60,
    opacity:0.05,
    ease:"none"

},0);

intro.to(".fog-back-2",{

    y:-220,
    x:80,
    opacity:0,
    ease:"none"

},0);

// ==========================================
// CEAȚA MIJLOC
// ==========================================

intro.to(".fog-middle-1",{

    y:-260,
    x:-100,
    opacity:0,
    ease:"none"

},0);

intro.to(".fog-middle-2",{

    y:-320,
    x:120,
    opacity:0,
    ease:"none"

},0);

// ==========================================
// CEAȚA APROPIATĂ
// ==========================================

intro.to(".fog-front-1",{

    y:-380,
    x:-160,
    opacity:0,
    ease:"none"

},0);

intro.to(".fog-front-2",{

    y:-420,
    x:180,
    opacity:0,
    ease:"none"

},0);

intro.to(".fog-front-3",{

    y:-500,
    opacity:0,
    ease:"none"

},0);

// ==========================================
// LUMINA
// ==========================================

intro.to(".intro-light",{

    opacity:1,
    scale:1.25,
    duration:1

},0.2);

intro.to(".center-glow",{

    opacity:1,
    scale:1.4,
    duration:1.2

},0.25);

// ==========================================
// MUNTE STÂNGA
// ==========================================

intro.to(".mountain-left",{

    x:"-120%",
    rotation:-3,
    ease:"power2.out"

},0.15);

// ==========================================
// MUNTE DREAPTA
// ==========================================

intro.to(".mountain-right",{

    x:"120%",
    rotation:3,
    ease:"power2.out"

},0.15);

// ==========================================
// MUNȚII DIN FUNDAL
// ==========================================

intro.to(".mountain-bg-left",{

    x:-200,
    opacity:0

},0.1);

intro.to(".mountain-bg-right",{

    x:200,
    opacity:0

},0.1);

// ==========================================
// VIGNETTE
// ==========================================

intro.to(".intro-vignette",{

    opacity:0

},0.65);

// ==========================================
// INTRO DISPARĂ
// ==========================================

intro.to("#cinematicIntro",{

    opacity:0,
    pointerEvents:"none"

},0.92);

// ==========================================
// ELIMINĂ INTRO
// ==========================================

intro.call(()=>{

    document.getElementById("cinematicIntro").remove();

});