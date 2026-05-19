document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    initTypingEffect();
    initScrollAnimations();
    initCardInteractions();
    initParallaxEffect();
});

/**
 * System Boot Sequence - Console Glitch Simulation
 */
function initBootSequence() {
    const logs = [
        ">> ARCHITECTURE_FS_BOOT: [OK]",
        ">> LOADING MODULES: [1.1...4.5]",
        ">> NEURAL_LINK_STABLE",
        ">> DATASET: ARQUITECTURA DE CÓMPUTO",
        ">> ACCESS AUTHORIZED. WELCOME OPERATOR."
    ];

    logs.forEach((msg, index) => {
        setTimeout(() => {
            console.log(`%c${msg}`, "color: #00f2ff; font-family: 'Courier New', monospace; font-size: 11px; font-weight: bold;");
        }, index * 300);
    });
}

/**
 * Typing Effect for Hero Title
 */
function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;

    const text = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.visibility = 'visible';

    let i = 0;
    const speed = 50;

    function type() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/**
 * Intersection Observer for Card Fade-in
 */
function initScrollAnimations() {
    const cards = document.querySelectorAll('.unit-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9) translateY(20px)";
        card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        observer.observe(card);
    });
}

/**
 * Card Click Glow Effect
 */
function initCardInteractions() {
    const cards = document.querySelectorAll('.unit-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Intense glow animation
            card.style.boxShadow = "0 0 40px rgba(188, 0, 255, 0.8)";
            card.style.transition = "all 0.2s ease";
            
            setTimeout(() => {
                card.style.boxShadow = "";
                card.style.transition = "all 0.3s ease";
            }, 500);
        });
    });
}

/**
 * Mouse Parallax for Background Grid
 */
function initParallaxEffect() {
    const grid = document.querySelector('.background-grid');
    if (!grid) return;

    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        
        grid.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}
