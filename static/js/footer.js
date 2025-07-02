
        // Footer Link Animations
        const isMobile = window.innerWidth <= 768;
const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
const isDesktop = window.innerWidth > 1024;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
       
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