 // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize AOS with adjusted settings
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                mirror: false,
                offset: 50
            });
            
   
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Enhanced Device Detection and Performance Optimization
const isMobile = window.innerWidth <= 768;
const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
const isDesktop = window.innerWidth > 1024;



// Global variables
let mouseX = 0;
let mouseY = 0;
let lastScroll = 0;

// Get DOM elements with null checks
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const heroTitle = document.querySelector('.hero-title');
const titleWords = gsap.utils.toArray('.title-word');
const cube = document.querySelector('.cube');

// Enhanced Custom Cursor (Desktop only, with hover detection)
if (!isMobile  && cursor && cursorFollower && !prefersReducedMotion) {
    // Mouse movement tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0,
            ease: "none"
        });
        
        gsap.to(cursorFollower, {
            x: mouseX,
            y: mouseY,
            duration: 0.15,
            ease: "power2.out"
        });
    });

 const hoverElements = document.querySelectorAll(
        'button, .feature-item, .media-stack, .nav-arrow, .play-button, ' +
        '.excellence-insignia, .highlight-badge, .excellence-manifesto, ' +
        '.showcase-subtitle, .media-frame, .carousel-navigation, ' +
        '.training-features, .media-info-panel, .credential-medallion, ' +
        '.visual-card, .magnetic-button, .magnetic-link, .hero-title, ' +
        '.hero-cta, .hero-description, .media-content, .media-video, ' +
        '.sparkle, .geo-shape, .floating-orb, .light-beam, ' +
        '.service-constellation, .category-tab, .services-insignia, ' +
        '.service-emblem, .service-action, .cta-button-primary, .cta-button-secondary, ' +
        '.services-manifesto, .service-title, .feature-bullet, .services-cta-nexus, ' +
        '.nav-link, .cta-button, .primary-button, .secondary-button, ' +
        '.portrait-frame, .visual-3d-object, .scroll-indicator, a' +   '.gallery-prism, .filter-crystal, .gallery-insignia, ' +
                '.lightbox-close, .lightbox-nav, .gallery-manifesto, ' +
                '.prism-expand, .metric-crystal-g' +             '.social-crystal, .footer-link a, .logo-constellation, ' +
                ' .policy-link, .contact-item, ' +
                ' .footer-title .back-to-top-nexus'

    );
    
    hoverElements.forEach(element => {
        if (element) {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    scale: 2,
                    backgroundColor: 'var(--primary-peach)',
                    mixBlendMode: 'normal',
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(cursorFollower, {
                    scale: 1.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    mixBlendMode: 'difference',
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(cursorFollower, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }
    });
            }

            // Magnetic Buttons with GSAP
            const magneticElements = document.querySelectorAll('.magnetic-button, .magnetic-link');
            magneticElements.forEach(element => {
                if (window.innerWidth > 768) {
                    element.addEventListener('mousemove', (e) => {
                        const rect = element.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        
                        gsap.to(element, {
                            x: x * 0.3,
                            y: y * 0.3,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                    
                    element.addEventListener('mouseleave', () => {
                        gsap.to(element, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "elastic.out(1, 0.3)"
                        });
                    });
                }
            });

            // Navbar Scroll Effect with GSAP - Fixed with null check
            if (navbar) {
                ScrollTrigger.create({
                    start: "top -80",
                    end: 99999,
                    onUpdate: (self) => {
                        let scroll = self.scroll();
                        if (scroll > lastScroll && scroll > 100) {
                            gsap.to(navbar, {
                                y: -100,
                                duration: 0.3,
                                ease: "power2.inOut"
                            });
                        } else {
                            gsap.to(navbar, {
                                y: 0,
                                duration: 0.3,
                                ease: "power2.inOut"
                            });
                        }
                        
                        // Safe classList operations
                        if (scroll > 50) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }
                        
                        lastScroll = scroll;
                    }
                });
            }

            // Improved Hero Title Animation with GSAP
            if (titleWords.length > 0) {
                gsap.set(titleWords, {
                    opacity: 0,
                    y: 100,
                    rotationX: -90
                });

                gsap.to(titleWords, {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    delay: 0.3
                });
            }

            // Parallax Scroll Effects - Less aggressive to prevent content disappearing
            gsap.utils.toArray('.gradient-orb').forEach((orb, index) => {
                if (orb) {
                    gsap.to(orb, {
                        y: -100 * (index + 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".hero",
                            start: "top top",
                            end: "bottom top",
                            scrub: 1 + index * 0.3
                        }
                    });
                }
            });

            // Floating Elements Animation
            const floatingElements = document.querySelectorAll('.float-element');
            floatingElements.forEach((element, index) => {
                if (element) {
                    gsap.to(element, {
                        y: "random(-30, 30)",
                        x: "random(-30, 30)",
                        rotation: "random(-15, 15)",
                        duration: "random(3, 5)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: index * 0.2
                    });
                }
            });

            // 3D Cube Advanced Animation
            if (cube) {
                gsap.timeline({ repeat: -1 })
                    .to(cube, {
                        rotationY: 360,
                        rotationX: 360,
                        duration: 20,
                        ease: "none"
                    });

                // Scroll-triggered cube speed
                ScrollTrigger.create({
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        const velocity = self.getVelocity();
                        const speed = Math.abs(velocity) / 1000;
                        gsap.to(cube, {
                            rotationY: `+=${speed * 50}`,
                            rotationX: `+=${speed * 30}`,
                            duration: 0.5
                        });
                    }
                });
            }
// Enhanced Visual Cards 3D Tilt with GSAP (Desktop Only)
const visualCards = document.querySelectorAll('.visual-card');
if (visualCards.length > 0 && !isMobile && !prefersReducedMotion) {
    visualCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            gsap.to(card, {
                rotationX: (y - 0.5) * 20,
                rotationY: (x - 0.5) * -20,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: card.classList.contains('card-1') ? 5 : -5,
                rotationY: card.classList.contains('card-1') ? -10 : 10,
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

            // Animated Counter with GSAP - Fixed to count UP from 0
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter) {
                    const target = parseInt(counter.getAttribute('data-value')) || 0;
                    
                    ScrollTrigger.create({
                        trigger: counter,
                        start: "top 80%",
                        once: true,
                        onEnter: () => {
                            // Set initial value to 0
                            counter.textContent = '0+';
                            
                            // Animate from 0 to target
                            gsap.to({ value: 0 }, {
                                value: target,
                                duration: 2,
                                ease: "power2.out",
                                onUpdate: function() {
                                    const currentValue = Math.floor(this.targets()[0].value);
                                    counter.textContent = currentValue + '+';
                                }
                            });
                        }
                    });
                }
            });

            // Mobile Menu Toggle with GSAP - Fixed to not affect desktop nav
            if (navToggle && navMenu) {
                const navTimeline = gsap.timeline({ paused: true });

                // Only animate mobile menu, not individual nav links on desktop
                navTimeline.to(navMenu, {
                    right: 0,
                    duration: 0.5,
                    ease: "power3.inOut"
                });

                // Only animate nav links when in mobile menu mode
                if (window.innerWidth <= 768) {
                    navTimeline.from('.nav-link', {
                        x: 50,
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: "power2.out"
                    }, "-=0.3");
                }

                navToggle.addEventListener('click', () => {
                    navToggle.classList.toggle('active');
                    if (navToggle.classList.contains('active')) {
                        navTimeline.play();
                        document.body.style.overflow = 'hidden';
                    } else {
                        navTimeline.reverse();
                        document.body.style.overflow = '';
                    }
                });

                // Close mobile menu when clicking nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navToggle.classList.contains('active')) {
                            navToggle.classList.remove('active');
                            navTimeline.reverse();
                            document.body.style.overflow = '';
                        }
                    });
                });

                // Ensure nav links are always visible on desktop
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768) {
                        document.querySelectorAll('.nav-link').forEach(link => {
                            gsap.set(link, {
                                opacity: 1,
                                x: 0,
                                clearProps: "all"
                            });
                        });
                        document.body.style.overflow = '';
                        if (navToggle.classList.contains('active')) {
                            navToggle.classList.remove('active');
                            navTimeline.reverse();
                        }
                    }
                });
            }

            // Fixed scroll-based animations - prevent content from disappearing
            const heroBadge = document.querySelector('.hero-badge');
            const heroDescription = document.querySelector('.hero-description');
            const heroCta = document.querySelector('.hero-cta');
            const heroStats = document.querySelector('.hero-stats');

            if (heroBadge) {
                gsap.from(heroBadge, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out"
                });
            }

            if (heroDescription) {
                gsap.from(heroDescription, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.6,
                    ease: "power3.out"
                });
            }

            if (heroCta) {
                gsap.from(heroCta, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 0.8,
                    ease: "power3.out"
                });
            }

            if (heroStats) {
                gsap.from(heroStats, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: 1.0,
                    ease: "power3.out"
                });
            }

            // Button Hover Effects with GSAP
            document.querySelectorAll('.primary-button, .secondary-button').forEach(button => {
                if (button) {
                    const timeline = gsap.timeline({ paused: true });
                    const buttonArrow = button.querySelector('.button-arrow');
                    
                    timeline.to(button, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });

                    if (buttonArrow) {
                        timeline.to(buttonArrow, {
                            x: 5,
                            duration: 0.3,
                            ease: "power2.out"
                        }, 0);
                    }
                    
                    button.addEventListener('mouseenter', () => timeline.play());
                    button.addEventListener('mouseleave', () => timeline.reverse());

                    // Button ripple effect
                    const buttonRipple = button.querySelector('.button-ripple');
                    if (buttonRipple) {
                        button.addEventListener('click', () => {
                            gsap.fromTo(buttonRipple, 
                                { scale: 0, opacity: 1 },
                                { scale: 4, opacity: 0, duration: 0.6, ease: "power2.out" }
                            );
                        });
                    }
                }
            });

            // Page Load Animation - Fixed to not affect nav link visibility
            const loadTimeline = gsap.timeline();
            
            loadTimeline
                .from('body', {
                    opacity: 0,
                    duration: 0.5
                });

            const navLogo = document.querySelector('.nav-logo');
            const navLinks = document.querySelectorAll('.nav-link');
            const navCta = document.querySelector('.nav-cta');

            if (navLogo) {
                loadTimeline.from(navLogo, {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.3");
            }

            // Fixed nav links animation - doesn't affect final visibility
            if (navLinks.length > 0) {
                loadTimeline.from(navLinks, {
                    y: -30,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power3.out",
                    onComplete: () => {
                        // Ensure nav links remain visible after animation
                        navLinks.forEach(link => {
                            gsap.set(link, {
                                opacity: 1,
                                y: 0,
                                clearProps: "all"
                            });
                        });
                    }
                }, "-=0.4");
            }

            if (navCta) {
                loadTimeline.from(navCta, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                }, "-=0.2");
            }

            // Scroll Progress Indicator
            const scrollProgress = document.createElement('div');
            scrollProgress.className = 'scroll-progress';
            scrollProgress.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, var(--primary-peach), var(--primary-taupe));
                z-index: 1001;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(scrollProgress);

            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    scrollProgress.style.width = `${self.progress * 100}%`;
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: {
                                y: target,
                                offsetY: 80
                            },
                            ease: "power2.inOut"
                        });
                    }
                });
            });

            // Refresh ScrollTrigger on resize
            window.addEventListener('resize', () => {
                ScrollTrigger.refresh();
            });

            // Performance optimization
            ScrollTrigger.config({
                limitCallbacks: true,
                ignoreMobileResize: true
            });

            // Initialize ScrollTrigger
            ScrollTrigger.refresh();

            // Final safeguard - ensure nav links are always visible
            setTimeout(() => {
                document.querySelectorAll('.nav-link').forEach(link => {
                    if (window.innerWidth > 768) {
                        gsap.set(link, {
                            opacity: 1,
                            visibility: 'visible',
                            clearProps: "transform,x,y"
                        });
                    }
                });
            }, 100);
        });

        // Fallback for older browsers
        if (document.readyState === 'loading') {
            // DOM is still loading
        } else {
            // DOM is already loaded
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    mirror: false,
                    offset: 50
                });
            }
        }







  // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Manifesto Words Animation
        const manifestoWords = document.querySelectorAll('.manifesto-word');
        
        gsap.set(manifestoWords, {
            y: 100,
            rotation: 8,
            opacity: 0
        });

        gsap.to(manifestoWords, {
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: ".legacy-manifesto",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            onComplete: function() {
                // Animate highlight underline
                document.querySelector('.manifesto-highlight').classList.add('animate');
            }
        });

        // Scroll Reveal Animations
        gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.1
                }
            );
        });

        gsap.utils.toArray('.scroll-reveal-left').forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    x: -80,
                    rotation: -2
                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });

        gsap.utils.toArray('.scroll-reveal-right').forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    x: 80,
                    rotation: 2
                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });

        gsap.utils.toArray('.scroll-reveal-scale').forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    scale: 0.6,
                    y: 40
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.15
                }
            );
        });

        // Expertise Verses Stagger Animation
        const expertiseVerses = document.querySelectorAll('.expertise-verse');
        gsap.fromTo(expertiseVerses,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".expertise-anthology",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Corporate Visualization 3D Interaction
        const visualizationFrame = document.querySelector('.visualization-frame');
        const visualizationCanvas = document.querySelector('.visualization-canvas');

        if (visualizationFrame) {
            visualizationFrame.addEventListener('mousemove', (e) => {
                const rect = visualizationFrame.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                gsap.to(visualizationFrame, {
                    rotationY: (x - 0.5) * 15,
                    rotationX: (y - 0.5) * -10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            visualizationFrame.addEventListener('mouseleave', () => {
                gsap.to(visualizationFrame, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        }

        // Metric Cards Animation
        const metricCards = document.querySelectorAll('.metric-card');
        gsap.fromTo(metricCards,
            {
                opacity: 0,
                y: 30,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: ".corporate-metrics",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Chart Bars Animation (triggered by scroll)
        const chartBars = document.querySelectorAll('.chart-bar');
        gsap.set(chartBars, { scaleY: 0, transformOrigin: "bottom" });
        
        gsap.to(chartBars, {
            scaleY: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
                trigger: ".corporate-chart",
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });

        // Metric Cards Hover Effects
        metricCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -8,
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                gsap.to(card.querySelector('.metric-icon'), {
                    rotation: 10,
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                gsap.to(card.querySelector('.metric-icon'), {
                    rotation: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Credential Medallions Hover Effects
        const medallions = document.querySelectorAll('.credential-medallion');
        medallions.forEach(medallion => {
            medallion.addEventListener('mouseenter', () => {
                gsap.to(medallion, {
                    y: -15,
                    scale: 1.02,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });

            medallion.addEventListener('mouseleave', () => {
                gsap.to(medallion, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        });

        // Geometric Elements Animation
        gsap.utils.toArray('.geo-element').forEach((element, index) => {
            gsap.to(element, {
                rotation: 360,
                duration: 20 + (index * 5),
                repeat: -1,
                ease: "none"
            });

            gsap.to(element, {
                y: "random(-50, 50)",
                x: "random(-30, 30)",
                duration: "random(8, 12)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 1
            });
        });

        // Parallax Background Grid
        gsap.to('.architectural-grid', {
            y: -100,
            rotation: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-genesis",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // White Zone Professional Effects
        gsap.to('.micro-grid-overlay', {
            x: 15,
            y: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".white-zone-effects",
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        });

        gsap.to('.gradient-waves', {
            x: -20,
            y: 10,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: ".white-zone-effects",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Professional accent lines scroll trigger
        gsap.utils.toArray('.accent-line').forEach((line, index) => {
            gsap.fromTo(line,
                {
                    scaleX: 0,
                    opacity: 0
                },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: line,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.5
                }
            );
        });

        // Floating specs subtle movement
        gsap.utils.toArray('.spec-element').forEach((spec, index) => {
            gsap.to(spec, {
                y: "random(-20, 20)",
                x: "random(-15, 15)",
                scale: "random(0.8, 1.5)",
                duration: "random(8, 12)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.8
            });
        });

        // Particle system scroll interaction
        gsap.to('.particle-dot', {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".white-zone-effects",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });

        // Vision Manifesto Border Animation
        const visionBorder = document.querySelector('.vision-manifesto::before');
        gsap.to('.vision-manifesto', {
            '--border-rotation': '360deg',
            duration: 8,
            repeat: -1,
            ease: "none"
        });

        // Heritage Badge Pulse
        gsap.to('.heritage-icon', {
            scale: 1.2,
            opacity: 0.7,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Smooth Scroll Integration
        ScrollTrigger.refresh();





        
        // Excellence Manifesto Words Animation
        const manifestoTerms = document.querySelectorAll('.manifesto-term');
        
        gsap.set(manifestoTerms, {
            y: 100,
            rotation: 8,
            opacity: 0
        });

        gsap.to(manifestoTerms, {
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: ".excellence-manifesto",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Scroll Reveal Animations
        gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.1
                }
            );
        });

        gsap.utils.toArray('.scroll-reveal-left').forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    x: -80,
                    rotation: -2
                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });

        gsap.utils.toArray('.scroll-reveal-right').forEach((element, index) => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    x: 80,
                    rotation: 2
                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
        });

        // Feature Items Stagger Animation
        const featureItems = document.querySelectorAll('.feature-item');
        gsap.fromTo(featureItems,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".training-features",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 3D Media Carousel
        let currentIndex = 0;
        const mediaStacks = document.querySelectorAll('.media-stack');
        const totalStacks = mediaStacks.length;

        function updateCarousel() {
            mediaStacks.forEach((stack, index) => {
                stack.classList.remove('active');
                
                let position = index - currentIndex;
                if (position < 0) position += totalStacks;
                
                gsap.to(stack, {
                    duration: 0.8,
                    ease: "power3.out",
                    zIndex: totalStacks - position,
                    rotationY: position * -5,
                    x: position * 30,
                    z: position * -50,
                    opacity: Math.max(0.2, 1 - position * 0.2),
                    scale: Math.max(0.8, 1 - position * 0.05)
                });
                
                if (position === 0) {
                    stack.classList.add('active');
                }
            });
        }

        // Navigation Events
        document.getElementById('navNext').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalStacks;
            updateCarousel();
        });

        document.getElementById('navPrev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalStacks) % totalStacks;
            updateCarousel();
        });

        // Auto-rotation
        let autoRotate = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalStacks;
            updateCarousel();
        }, 10000);

        // Pause auto-rotation on hover
        const carouselViewport = document.getElementById('carouselViewport');
        carouselViewport.addEventListener('mouseenter', () => {
            clearInterval(autoRotate);
        });

        carouselViewport.addEventListener('mouseleave', () => {
            autoRotate = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalStacks;
                updateCarousel();
            }, 10000);
        });

        // Initialize carousel
        updateCarousel();

        // 3D Carousel Interaction
        mediaStacks.forEach(stack => {
            stack.addEventListener('mousemove', (e) => {
                if (!stack.classList.contains('active')) return;
                
                const rect = stack.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                gsap.to(stack, {
                    rotationX: (y - 0.5) * 10,
                    rotationY: (x - 0.5) * 10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            stack.addEventListener('mouseleave', () => {
                gsap.to(stack, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // Video Play/Pause
        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const video = button.closest('.media-frame').querySelector('video');
                if (video) {
                    if (video.paused) {
                        video.play();
                        button.innerHTML = '<i class="fas fa-pause"></i>';
                    } else {
                        video.pause();
                        button.innerHTML = '<i class="fas fa-play"></i>';
                    }
                }
            });
        });

        // Background Effects Animations
        gsap.to('.refined-gradient-mesh', {
            scale: 1.1,
            rotation: 2,
            ease: "none",
            scrollTrigger: {
                trigger: ".training-excellence-realm",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.precision-dots', {
            x: 20,
            y: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".training-excellence-realm",
                start: "top bottom",
                end: "bottom top",
                scrub: 2
            }
        });

        // Enhanced Dynamic Background Animations
        
        // Dynamic Orbs Parallax
        gsap.utils.toArray('.floating-orb').forEach((orb, index) => {
            gsap.to(orb, {
                y: (index + 1) * -100,
                x: Math.sin(index) * 50,
                ease: "none",
                scrollTrigger: {
                    trigger: ".training-excellence-realm",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1 + index * 0.5
                }
            });
        });

        // Light Beams Scroll Animation
        gsap.utils.toArray('.light-beam').forEach((beam, index) => {
            gsap.fromTo(beam,
                {
                    opacity: 0,
                    scaleY: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    scaleY: 1,
                    y: 0,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: beam,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.3
                }
            );
            
            // Continuous floating animation
            gsap.to(beam, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "+=random(-5, 5)",
                duration: "random(4, 8)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 1
            });
        });

        // Geometric Shapes Advanced Animation
        gsap.utils.toArray('.geo-shape').forEach((shape, index) => {
            // Scroll-triggered reveal
            gsap.fromTo(shape,
                {
                    opacity: 0,
                    scale: 0,
                    rotation: -180
                },
                {
                    opacity: 0.15,
                    scale: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: shape,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.2
                }
            );
            
            // Continuous morphing animation
            gsap.to(shape, {
                y: "random(-30, 30)",
                x: "random(-20, 20)",
                rotation: "+=360",
                scale: "random(0.8, 1.3)",
                duration: "random(15, 25)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 2
            });
        });

        // Particle Streams Enhanced
        gsap.utils.toArray('.particle-stream').forEach((particle, index) => {
            gsap.to(particle, {
                y: -50,
                x: "random(-20, 20)",
                scale: "random(1, 3)",
                ease: "none",
                scrollTrigger: {
                    trigger: ".training-excellence-realm",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5 + index * 0.1
                }
            });
        });

        // Wave Lines Scroll Interaction
        gsap.utils.toArray('.wave-line').forEach((wave, index) => {
            gsap.fromTo(wave,
                {
                    scaleX: 0,
                    transformOrigin: "left"
                },
                {
                    scaleX: 1,
                    duration: 2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: wave,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.4
                }
            );
        });

        // Morphing Blobs Parallax
        gsap.utils.toArray('.blob').forEach((blob, index) => {
            gsap.to(blob, {
                y: (index + 1) * -80,
                x: Math.cos(index) * 40,
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: ".training-excellence-realm",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2 + index
                }
            });
        });

        // Network Grid Animation
        gsap.to('.network-grid', {
            opacity: 0.5,
            backgroundPosition: "50px 50px",
            ease: "none",
            scrollTrigger: {
                trigger: ".training-excellence-realm",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Sparkles Interactive Animation
        gsap.utils.toArray('.sparkle').forEach((sparkle, index) => {
            // Initial reveal
            gsap.fromTo(sparkle,
                {
                    opacity: 0,
                    scale: 0
                },
                {
                    opacity: 0.8,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sparkle,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.1
                }
            );
            
            // Continuous twinkling
            gsap.to(sparkle, {
                opacity: "random(0.2, 1)",
                scale: "random(0.5, 2)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3
            });
            
            // Gentle floating
            gsap.to(sparkle, {
                y: "random(-15, 15)",
                x: "random(-10, 10)",
                duration: "random(6, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.5
            });
        });

        // Advanced Scroll-Triggered Background Choreography
        ScrollTrigger.create({
            trigger: ".training-excellence-realm",
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                // Intensify animations when section is in view
                gsap.to('.floating-orb', {
                    filter: "blur(30px)",
                    duration: 2,
                    ease: "power2.inOut"
                });
                
                gsap.to('.light-beam', {
                    opacity: 0.8,
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            },
            onLeave: () => {
                // Reduce intensity when leaving
                gsap.to('.floating-orb', {
                    filter: "blur(40px)",
                    duration: 2,
                    ease: "power2.inOut"
                });
                
                gsap.to('.light-beam', {
                    opacity: 0.4,
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            }
        });

        // Feature Items Hover Effects
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    x: 15,
                    backgroundColor: "rgba(208, 150, 131, 0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                gsap.to(item.querySelector('.feature-icon'), {
                    rotation: 10,
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    x: 0,
                    backgroundColor: "transparent",
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                gsap.to(item.querySelector('.feature-icon'), {
                    rotation: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Excellence Symbol Animation
        gsap.to('.excellence-symbol', {
            scale: 1.3,
            opacity: 0.7,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();


const isMobile = window.innerWidth <= 768;
const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
const isDesktop = window.innerWidth > 1024;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

         // Services Manifesto Words Animation
        const servicesWords = document.querySelectorAll('.services-word');
        
        if (!prefersReducedMotion) {
            gsap.set(servicesWords, {
                y: 100,
                rotation: isMobile ? 0 : 8,
                opacity: 0
            });

            gsap.to(servicesWords, {
                y: 0,
                rotation: 0,
                opacity: 1,
                duration: isMobile ? 0.8 : 1.2,
                stagger: isMobile ? 0.05 : 0.15,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: ".services-manifesto",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        } else {
            gsap.set(servicesWords, { opacity: 1 });
        }

        // Optimized Scroll Reveal Animations
        if (!prefersReducedMotion) {
            gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
                gsap.fromTo(element, 
                    {
                        opacity: 0,
                        y: isMobile ? 30 : 60,
                        scale: 0.98
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: isMobile ? 0.6 : 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? 0 : index * 0.1
                    }
                );
            });

            gsap.utils.toArray('.scroll-reveal-left, .scroll-reveal-right').forEach((element, index) => {
                const direction = element.classList.contains('scroll-reveal-left') ? -1 : 1;
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        x: direction * (isMobile ? 30 : 60),
                        rotation: isMobile ? 0 : direction * -1
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotation: 0,
                        duration: isMobile ? 0.8 : 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? 0 : index * 0.2
                    }
                );
            });

            gsap.utils.toArray('.scroll-reveal-scale').forEach((element, index) => {
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        scale: isMobile ? 0.95 : 0.9,
                        y: isMobile ? 20 : 40
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: isMobile ? 0.6 : 0.8,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? index * 0.05 : index * 0.1
                    }
                );
            });
        } else {
            gsap.set('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale', { opacity: 1 });
        }

        // Service Category Tabs Functionality
        const categoryTabs = document.querySelectorAll('.category-tab');
        const serviceConstellations = document.querySelectorAll('.service-constellation');

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');
                
                // Update active tab
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter services with animation
                serviceConstellations.forEach(service => {
                    const serviceCategory = service.getAttribute('data-category');
                    
                    if (category === 'all' || serviceCategory === category) {
                        gsap.to(service, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power3.out",
                            display: 'block'
                        });
                    } else {
                        gsap.to(service, {
                            opacity: 0,
                            scale: 0.9,
                            y: 20,
                            duration: 0.3,
                            ease: "power3.out",
                            onComplete: () => {
                                service.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });

        // Service Constellation Hover Effects - Desktop Only
        if (!isMobile && !prefersReducedMotion) {
            serviceConstellations.forEach(service => {
                service.addEventListener('mouseenter', () => {
                    gsap.to(service, {
                        y: -15,
                        scale: 1.02,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    gsap.to(service.querySelector('.service-emblem'), {
                        rotation: 10,
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                service.addEventListener('mouseleave', () => {
                    gsap.to(service, {
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    gsap.to(service.querySelector('.service-emblem'), {
                        rotation: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
            });
        }

        // Optimized Background Effects
        if (!isMobile && !prefersReducedMotion) {
            // Atmospheric canvas parallax
            gsap.to('.atmospheric-canvas', {
                y: -50,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: ".services-excellence-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Service orbiters parallax
            gsap.utils.toArray('.service-orbiter').forEach((orbiter, index) => {
                gsap.to(orbiter, {
                    y: (index + 1) * -80,
                    x: Math.sin(index) * 40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".services-excellence-universe",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1 + index * 0.3
                    }
                });
            });

            // Connector lines animation
            gsap.utils.toArray('.connector-line').forEach((line, index) => {
                gsap.fromTo(line,
                    {
                        scaleX: 0,
                        opacity: 0
                    },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 2,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * 0.5
                    }
                );
            });
        }

        // Precision matrix mobile optimization
        if (isMobile) {
            gsap.to('.precision-matrix', {
                x: 15,
                y: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".services-excellence-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3
                }
            });
        } else {
            gsap.to('.precision-matrix', {
                x: 30,
                y: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".services-excellence-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        // Services Icon Animation
        if (!prefersReducedMotion) {
            gsap.to('.services-icon', {
                scale: isMobile ? 1.1 : 1.3,
                opacity: 0.7,
                duration: isMobile ? 2 : 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        // CTA Section Border Animation
        // if (!prefersReducedMotion) {
        //     gsap.to('.services-cta-nexus::before', {
        //         rotation: 360,
        //         duration: 8,
        //         repeat: -1,
        //         ease: "none"
        //     });
        // }
// CTA Section Animation (FIXED)
const ctaNexus = document.querySelector('.services-cta-nexus');
if (ctaNexus && !prefersReducedMotion) {
    // Subtle glow effect instead of border rotation
    gsap.to(ctaNexus, {
        filter: "drop-shadow(0 0 30px rgba(208, 150, 131, 0.4))",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}
        // Touch/Click Events for Mobile
        if (isMobile) {
            serviceConstellations.forEach(service => {
                service.addEventListener('touchstart', () => {
                    gsap.to(service, {
                        scale: 0.98,
                        duration: 0.1
                    });
                }, { passive: true });
                
                service.addEventListener('touchend', () => {
                    gsap.to(service, {
                        scale: 1,
                        duration: 0.2
                    });
                }, { passive: true });
            });
        }

        // Refresh ScrollTrigger with Debounce
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        });

        // Initial ScrollTrigger refresh
        ScrollTrigger.refresh();





        // Gallery Manifesto Words Animation
        const galleryWords = document.querySelectorAll('.gallery-word');
        
        if (!prefersReducedMotion) {
            gsap.set(galleryWords, {
                y: 100,
                rotation: isMobile ? 0 : 8,
                opacity: 0
            });

            gsap.to(galleryWords, {
                y: 0,
                rotation: 0,
                opacity: 1,
                duration: isMobile ? 0.8 : 1.2,
                stagger: isMobile ? 0.05 : 0.15,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: ".gallery-manifesto",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        } else {
            gsap.set(galleryWords, { opacity: 1 });
        }

        // Optimized Scroll Reveal Animations
        if (!prefersReducedMotion) {
            gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
                gsap.fromTo(element, 
                    {
                        opacity: 0,
                        y: isMobile ? 30 : 60,
                        scale: 0.98
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: isMobile ? 0.6 : 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? 0 : index * 0.1
                    }
                );
            });

            gsap.utils.toArray('.scroll-reveal-scale').forEach((element, index) => {
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        scale: isMobile ? 0.95 : 0.9,
                        y: isMobile ? 20 : 40
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: isMobile ? 0.6 : 0.8,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? index * 0.05 : index * 0.1
                    }
                );
            });
        } else {
            gsap.set('.scroll-reveal, .scroll-reveal-scale', { opacity: 1 });
        }

        // Gallery Filter Functionality
        const filterCrystals = document.querySelectorAll('.filter-crystal');
        const galleryPrisms = document.querySelectorAll('.gallery-prism');

        filterCrystals.forEach(filter => {
            filter.addEventListener('click', () => {
                const filterValue = filter.getAttribute('data-filter');
                
                // Update active filter
                filterCrystals.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                
                // Filter gallery items with animation
                galleryPrisms.forEach(prism => {
                    const category = prism.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        prism.classList.remove('hidden');
                        prism.classList.add('show');
                        gsap.to(prism, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power3.out"
                        });
                    } else {
                        prism.classList.add('hidden');
                        prism.classList.remove('show');
                        gsap.to(prism, {
                            opacity: 0,
                            scale: 0.8,
                            y: 30,
                            duration: 0.3,
                            ease: "power3.out"
                        });
                    }
                });
            });
        });

        // Lightbox Functionality
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxCategory = document.getElementById('lightboxCategory');
        const lightboxDescription = document.getElementById('lightboxDescription');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');

        let currentImageIndex = 0;
        let currentGalleryItems = [];

        function openLightbox(prism) {
            const img = prism.querySelector('.prism-image');
            const overlay = prism.querySelector('.prism-overlay');
            
            currentGalleryItems = Array.from(document.querySelectorAll('.gallery-prism.show'));
            currentImageIndex = currentGalleryItems.indexOf(prism);
            
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightboxTitle.textContent = overlay.querySelector('.prism-title').textContent;
            lightboxCategory.textContent = overlay.querySelector('.prism-category').textContent;
            lightboxDescription.textContent = overlay.querySelector('.prism-description').textContent;
            
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % currentGalleryItems.length;
            openLightbox(currentGalleryItems[currentImageIndex]);
        }

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
            openLightbox(currentGalleryItems[currentImageIndex]);
        }

        // Event Listeners
        galleryPrisms.forEach(prism => {
            prism.addEventListener('click', () => openLightbox(prism));
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', showNextImage);
        lightboxPrev.addEventListener('click', showPrevImage);

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightboxModal.classList.contains('active')) {
                switch(e.key) {
                    case 'Escape':
                        closeLightbox();
                        break;
                    case 'ArrowRight':
                        showNextImage();
                        break;
                    case 'ArrowLeft':
                        showPrevImage();
                        break;
                }
            }
        });

        // Animated Counter for Gallery Metrics
        const metricValues = document.querySelectorAll('.metric-value-g');
        metricValues.forEach(metric => {
            const target = parseInt(metric.getAttribute('data-value'));
            
            if (target && !prefersReducedMotion) {
                ScrollTrigger.create({
                    trigger: metric,
                    start: "top 80%",
                    once: true,
                    onEnter: () => {
                        gsap.from(metric, {
                            textContent: 0,
                            duration: isMobile ? 1.5 : 2,
                            ease: "power2.out",
                            snap: { textContent: 1 },
                            onUpdate: function() {
                                metric.textContent = Math.floor(this.targets()[0].textContent);
                            },
                            onComplete: () => {
                                metric.textContent = target + '+';
                            }
                        });
                    }
                });
            } else if (target) {
                metric.textContent = target + '+';
            }
        });

        // Optimized Background Effects
        if (!isMobile && !prefersReducedMotion) {
            // Atmospheric layers parallax
            gsap.to('.atmospheric-layers', {
                y: -80,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Particle clusters parallax
            gsap.utils.toArray('.particle-cluster').forEach((cluster, index) => {
                gsap.to(cluster, {
                    y: (index + 1) * -100,
                    x: Math.sin(index) * 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".gallery-universe",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1 + index * 0.3
                    }
                });
            });

            // Connector beams animation
            gsap.utils.toArray('.connector-beam').forEach((beam, index) => {
                gsap.fromTo(beam,
                    {
                        scaleX: 0,
                        opacity: 0
                    },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 2.5,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: beam,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * 0.8
                    }
                );
            });
        }

        // Precision lattice mobile optimization
        if (isMobile) {
            gsap.to('.precision-lattice', {
                x: 20,
                y: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3
                }
            });
        } else {
            gsap.to('.precision-lattice', {
                x: 40,
                y: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        // Gallery Emblem Animation
        if (!prefersReducedMotion) {
            gsap.to('.gallery-emblem', {
                scale: isMobile ? 1.1 : 1.3,
                opacity: 0.7,
                duration: isMobile ? 2 : 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        // Touch Events for Mobile
        if (isMobile || isTouchDevice) {
            galleryPrisms.forEach(prism => {
                prism.addEventListener('touchstart', (e) => {
                    gsap.to(prism, {
                        scale: 0.98,
                        duration: 0.1
                    });
                }, { passive: true });
                
                prism.addEventListener('touchend', (e) => {
                    gsap.to(prism, {
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)"
                    });
                }, { passive: true });
            });

            // Swipe functionality for lightbox
            let startX, startY;
            
            lightboxModal.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, { passive: true });
            
            lightboxModal.addEventListener('touchend', (e) => {
                if (!startX || !startY) return;
                
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                
                const deltaX = startX - endX;
                const deltaY = startY - endY;
                
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        showNextImage();
                    } else {
                        showPrevImage();
                    }
                }
                
                startX = startY = null;
            }, { passive: true });
        }

        // Lazy Loading for Images
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.prism-image').forEach(img => {
            imageObserver.observe(img);
        });

 

        // Initialize all gallery items as visible
        galleryPrisms.forEach(prism => {
            prism.classList.add('show');
        });

        // Initial ScrollTrigger refresh
        ScrollTrigger.refresh();


        // Optimized Scroll Reveal Animations
        if (!prefersReducedMotion) {
            gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
                gsap.fromTo(element, 
                    {
                        opacity: 0,
                        y: isMobile ? 20 : 40,
                        scale: 0.98
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: isMobile ? 0.6 : 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? 0 : index * 0.1
                    }
                );
            });

            gsap.utils.toArray('.scroll-reveal-left, .scroll-reveal-right').forEach((element, index) => {
                const direction = element.classList.contains('scroll-reveal-left') ? -1 : 1;
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        x: direction * (isMobile ? 20 : 40),
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: isMobile ? 0.8 : 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? 0 : index * 0.2
                    }
                );
            });

            gsap.utils.toArray('.scroll-reveal-scale').forEach((element, index) => {
                gsap.fromTo(element,
                    {
                        opacity: 0,
                        scale: isMobile ? 0.95 : 0.9,
                        y: isMobile ? 15 : 30
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: isMobile ? 0.6 : 0.8,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: isMobile ? index * 0.05 : index * 0.1
                    }
                );
            });
        } else {
            gsap.set('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale', { opacity: 1 });
        }

        // Social Crystal Hover Effects - Desktop Only
        if (!isMobile && !prefersReducedMotion) {
            const socialCrystals = document.querySelectorAll('.social-crystal');
            socialCrystals.forEach(crystal => {
                crystal.addEventListener('mouseenter', () => {
                    gsap.to(crystal, {
                        y: -8,
                        scale: 1.1,
                        rotation: 5,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                crystal.addEventListener('mouseleave', () => {
                    gsap.to(crystal, {
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
            });
        }

        // Footer Link Animations
        const footerLinks = document.querySelectorAll('.footer-link a');
        footerLinks.forEach(link => {
            if (!isMobile) {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        x: 15,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        x: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });

        // Logo Animation
        const logoConstellation = document.querySelector('.logo-constellation');
        if (logoConstellation && !prefersReducedMotion) {
            logoConstellation.addEventListener('mouseenter', () => {
                gsap.to('.logo-text', {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to('.logo-subtitle', {
                    letterSpacing: '0.5em',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            logoConstellation.addEventListener('mouseleave', () => {
                gsap.to('.logo-text', {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to('.logo-subtitle', {
                    letterSpacing: '0.3em',
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

        // Newsletter Form Handling
        const newsletterForm = document.querySelector('.newsletter-form');
        const newsletterInput = document.querySelector('.newsletter-input');
        const newsletterSubmit = document.querySelector('.newsletter-submit');

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                if (newsletterInput.value) {
                    // Animate button feedback
                    gsap.to(newsletterSubmit, {
                        scale: 0.95,
                        duration: 0.1,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(newsletterSubmit, {
                                scale: 1,
                                duration: 0.2,
                                ease: "back.out(1.7)"
                            });
                        }
                    });
                    
                    // Show success feedback
                    newsletterSubmit.textContent = 'Subscribed!';
                    setTimeout(() => {
                        newsletterSubmit.textContent = 'Subscribe';
                        newsletterInput.value = '';
                    }, 2000);
                }
            });
        }

        // Optimized Background Effects
        if (!isMobile && !prefersReducedMotion) {
            // Atmospheric gradient parallax
            gsap.to('.atmospheric-gradient', {
                y: -50,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: ".footer-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Footer orbs parallax
            gsap.utils.toArray('.footer-orb').forEach((orb, index) => {
                gsap.to(orb, {
                    y: (index + 1) * -60,
                    x: Math.sin(index) * 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".footer-universe",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1 + index * 0.3
                    }
                });
            });

            // Wave lines animation
            gsap.utils.toArray('.wave-line').forEach((wave, index) => {
                gsap.fromTo(wave,
                    {
                        scaleX: 0,
                        opacity: 0
                    },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 2,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: wave,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index * 0.5
                    }
                );
            });
        }

        // Footer lattice mobile optimization
        if (isMobile) {
            gsap.to('.footer-lattice', {
                x: 15,
                y: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".footer-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3
                }
            });
        } else {
            gsap.to('.footer-lattice', {
                x: 30,
                y: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".footer-universe",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });
        }

        // Contact Item Hover Effects
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            if (!isMobile) {
                item.addEventListener('mouseenter', () => {
                    gsap.to(item.querySelector('.contact-icon'), {
                        scale: 1.1,
                        rotation: 5,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(item.querySelector('.contact-icon'), {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });

        // Touch Events for Mobile
        if (isMobile || isTouchDevice) {
            const touchElements = document.querySelectorAll('.social-crystal, .newsletter-submit, .back-to-top-crystal');
            touchElements.forEach(element => {
                element.addEventListener('touchstart', (e) => {
                    gsap.to(element, {
                        scale: 0.95,
                        duration: 0.1
                    });
                }, { passive: true });
                
                element.addEventListener('touchend', (e) => {
                    gsap.to(element, {
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)"
                    });
                }, { passive: true });
            });
        }

        // Smooth scroll for footer links
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        // Use native smooth scroll with GSAP animation
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                        
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: targetPosition,
                            ease: "power2.inOut"
                        });
                    }
                }
            });
        });

        // Sophisticated Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        const progressRingCircle = document.querySelector('.progress-ring-circle');
        const backToTopCrystal = document.querySelector('.back-to-top-crystal');
        
        if (backToTopButton && progressRingCircle) {
            let isVisible = false;
            
            // Calculate progress ring circumference for different screen sizes
            const getCircumference = () => {
                const radius = window.innerWidth <= 480 ? 28 : 
                              window.innerWidth <= 768 ? 30 : 
                              window.innerWidth <= 1024 ? 31 : 36;
                return 2 * Math.PI * radius;
            };
            
            // Update progress ring stroke-dasharray for responsive sizing
            const updateProgressRing = () => {
                const circumference = getCircumference();
                progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
                progressRingCircle.style.strokeDashoffset = circumference;
            };
            
            // Initialize progress ring
            updateProgressRing();
            
            // Scroll event handler with throttling
            let ticking = false;
            const handleScroll = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                        const scrollProgress = scrollTop / scrollHeight;
                        
                        // Show/hide button based on scroll position
                        const shouldShowButton = scrollTop > 300;
                        
                        if (shouldShowButton && !isVisible) {
                            isVisible = true;
                            backToTopButton.classList.add('visible');
                            
                            // Entrance animation
                            gsap.fromTo(backToTopButton, 
                                {
                                    scale: 0.8,
                                    y: 100,
                                    opacity: 0
                                },
                                {
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.6,
                                    ease: "back.out(1.7)"
                                }
                            );
                        } else if (!shouldShowButton && isVisible) {
                            isVisible = false;
                            
                            // Exit animation
                            gsap.to(backToTopButton, {
                                scale: 0.8,
                                y: 100,
                                opacity: 0,
                                duration: 0.4,
                                ease: "power2.in",
                                onComplete: () => {
                                    backToTopButton.classList.remove('visible');
                                }
                            });
                        }
                        
                        // Update progress ring
                        if (isVisible) {
                            const circumference = getCircumference();
                            const offset = circumference - (scrollProgress * circumference);
                            progressRingCircle.style.strokeDashoffset = offset;
                        }
                        
                        ticking = false;
                    });
                    ticking = true;
                }
            };
            
            // Back to top functionality with native smooth scroll
            const scrollToTop = () => {
                // Click animation
                gsap.to(backToTopCrystal, {
                    scale: 0.9,
                    duration: 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(backToTopCrystal, {
                            scale: 1,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        });
                    }
                });
                
                // Native smooth scroll to top
                const startPosition = window.pageYOffset;
                const distance = startPosition;
                const duration = 1500; // 1.5 seconds
                let startTime = null;
                
                const easeInOutQuad = (t) => {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                };
                
                const animateScroll = (currentTime) => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const easeProgress = easeInOutQuad(progress);
                    
                    window.scrollTo(0, startPosition - (distance * easeProgress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                };
                
                requestAnimationFrame(animateScroll);
                
                // Particle burst effect
                if (!prefersReducedMotion) {
                    const particles = document.querySelectorAll('.particle');
                    particles.forEach((particle, index) => {
                        gsap.set(particle, { opacity: 1, scale: 1 });
                        gsap.to(particle, {
                            y: -50,
                            x: `random(-30, 30)`,
                            scale: 0,
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            delay: index * 0.1
                        });
                    });
                }
            };
            
            // Event listeners
            backToTopButton.addEventListener('click', scrollToTop);
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Hover effects for desktop
            if (!isMobile && !prefersReducedMotion) {
                backToTopButton.addEventListener('mouseenter', () => {
                    gsap.to(backToTopCrystal, {
                        y: -8,
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    gsap.to('.back-to-top-icon', {
                        y: -3,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    // Enhance particle animation on hover
                    const particles = document.querySelectorAll('.particle');
                    particles.forEach((particle, index) => {
                        gsap.to(particle, {
                            opacity: 0.8,
                            scale: 1.5,
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "power2.out"
                        });
                    });
                });
                
                backToTopButton.addEventListener('mouseleave', () => {
                    gsap.to(backToTopCrystal, {
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    gsap.to('.back-to-top-icon', {
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                    
                    // Reset particles
                    const particles = document.querySelectorAll('.particle');
                    particles.forEach(particle => {
                        gsap.to(particle, {
                            opacity: 0,
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                });
            }
            
            // Touch feedback for mobile
            if (isMobile || isTouchDevice) {
                backToTopButton.addEventListener('touchstart', (e) => {
                    gsap.to(backToTopCrystal, {
                        scale: 0.95,
                        duration: 0.1
                    });
                }, { passive: true });
                
                backToTopButton.addEventListener('touchend', (e) => {
                    gsap.to(backToTopCrystal, {
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)"
                    });
                }, { passive: true });
            }
            
            // Update progress ring on resize
            window.addEventListener('resize', () => {
                updateProgressRing();
            });
            
            // Keyboard accessibility
            backToTopButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToTop();
                }
            });
            
            // Add focus styles for accessibility
            backToTopButton.setAttribute('tabindex', '0');
            backToTopButton.setAttribute('aria-label', 'Back to top');
            backToTopButton.setAttribute('role', 'button');
        }

    

        // Initial ScrollTrigger refresh
        ScrollTrigger.refresh();