
const isMobile = window.innerWidth <= 768;

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