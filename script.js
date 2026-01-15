// Language Management
let currentLanguage = 'el'; // Default to Greek

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'el' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    }
    
    // Apply the current language
    updateLanguage(currentLanguage);
    updateLanguageToggle();
    
    // Add click handler to language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Initialize particles animation
    initParticles();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation highlighting
    initNavigationHighlight();
    
    // Add smooth scroll for nav links
    initSmoothScroll();
});

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'el' ? 'en' : 'el';
    updateLanguage(currentLanguage);
    updateLanguageToggle();
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = currentLanguage;
}

// Update all translatable elements
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (translations[lang] && translations[lang][key]) {
            // Add fade effect during transition
            element.style.opacity = '0';
            
            setTimeout(() => {
                // Handle HTML content (like <br> tags)
                if (translations[lang][key].includes('<br>')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
                element.style.opacity = '1';
            }, 150);
        }
    });
}

// Update the visual state of language toggle
function updateLanguageToggle() {
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        
        if (lang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// ==========================================
// Particles Animation on Canvas
// ==========================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.4; // 40% width
        canvas.height = window.innerHeight;
        
        // On mobile, take full width
        if (window.innerWidth <= 1024) {
            canvas.width = window.innerWidth;
        }
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        const particleCount = 50;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections between nearby particles
        particles.forEach((particleA, indexA) => {
            particles.slice(indexA + 1).forEach(particleB => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.stroke();
                }
            });
        });
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    createParticles();
    animate();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrameId);
    });
}

// ==========================================
// Scroll Animations - Reveal on Scroll
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ==========================================
// Navigation Highlight Based on Scroll
// ==========================================
function initNavigationHighlight() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    function highlightNavigation() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial highlight
    highlightNavigation();
    
    // Update on scroll
    window.addEventListener('scroll', highlightNavigation);
}

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset (account for sidebar on desktop)
                const offset = window.innerWidth > 1024 ? 100 : 80;
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Add CSS transition for text changes
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        element.style.transition = 'opacity 0.15s ease';
    });
});

// ==========================================
// Magnetic effect for social links (optional)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-4px)`;
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});
