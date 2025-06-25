// Main JavaScript file for DevDactyl website
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const colors = [
            { main: '#ff6b6b', shades: ['#ff8e8e', '#ffb3b3', '#ff4757', '#ff3742'] },
            { main: '#4ecdc4', shades: ['#6bccc8', '#88d8d3', '#2ed6c7', '#26d0ce'] },
            { main: '#45b7d1', shades: ['#6ac4d8', '#8fd1df', '#2eadd4', '#1e9bb8'] },
            { main: '#96ceb4', shades: ['#a6d4c1', '#b6dace', '#86c5a7', '#76bc9d'] },
            { main: '#feca57', shades: ['#fed481', '#fedeab', '#fdc830', '#fcb900'] },
            { main: '#ff9ff3', shades: ['#ffb3f5', '#ffc7f7', '#ff8bf0', '#ff77eb'] },
            { main: '#54a0ff', shades: ['#74b0ff', '#94c0ff', '#3490ff', '#1e80ff'] },
            { main: '#5f27cd', shades: ['#7c4ddb', '#9973e8', '#4834d4', '#3c29b3'] },
            { main: '#00d2d3', shades: ['#33dbdc', '#66e4e5', '#00c9ca', '#00b8b9'] }
        ];

        // Working animated underlines for both desktop and mobile
        function initDrawRandomUnderline() {
            const svgVariants = [
                `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></svg>`
            ];

            function decorateSVG(svgEl) {
                svgEl.setAttribute('class', 'text-draw__box-svg');
                svgEl.setAttribute('preserveAspectRatio', 'none');
                svgEl.querySelectorAll('path').forEach(path => {
                    path.setAttribute('stroke', 'currentColor');
                });
            }

            let nextIndex = 0;
            
            // Handle desktop nav links
            document.querySelectorAll('[data-draw-line]').forEach(link => {
                const parentLi = link.closest('li');
                const box = parentLi ? parentLi.querySelector('[data-draw-line-box]') : null;
                
                if (!box) return;
                
                link.addEventListener('mouseenter', () => {
                    box.innerHTML = svgVariants[nextIndex];
                    const svg = box.querySelector('svg');
                    if (svg) {
                        decorateSVG(svg);
                        const path = svg.querySelector('path');
                        if (path) {
                            const pathLength = path.getTotalLength();
                            path.style.strokeDasharray = pathLength;
                            path.style.strokeDashoffset = pathLength;
                            path.style.animation = 'drawIn 0.5s ease-out forwards';
                        }
                    }
                    nextIndex = (nextIndex + 1) % svgVariants.length;
                });
                
                link.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        box.innerHTML = '';
                    }, 200);
                });
            });

            // Handle mobile nav links
            document.querySelectorAll('[data-draw-line-mobile]').forEach(link => {
                const parentItem = link.closest('.mobile-nav-item');
                const box = parentItem ? parentItem.querySelector('[data-draw-line-box]') : null;
                
                if (!box) return;
                
                link.addEventListener('mouseenter', () => {
                    box.innerHTML = svgVariants[nextIndex];
                    const svg = box.querySelector('svg');
                    if (svg) {
                        decorateSVG(svg);
                        const path = svg.querySelector('path');
                        if (path) {
                            const pathLength = path.getTotalLength();
                            path.style.strokeDasharray = pathLength;
                            path.style.strokeDashoffset = pathLength;
                            path.style.animation = 'drawIn 0.5s ease-out forwards';
                        }
                    }
                    nextIndex = (nextIndex + 1) % svgVariants.length;
                });
                
                link.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        box.innerHTML = '';
                    }, 200);
                });
            });
        }

        // Animate section title underlines on scroll
        function initSectionUnderlines() {
            const sectionTitles = document.querySelectorAll('.section-title');
            
            sectionTitles.forEach((title) => {
                const underline = title.querySelector('.section-title-underline');
                const path = underline ? underline.querySelector('path') : null;
                
                if (!path) return;
                
                // Set up the path for animation
                const pathLength = path.getTotalLength();
                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;
                
                // Create ScrollTrigger animation
                ScrollTrigger.create({
                    trigger: title,
                    start: 'top 80%',
                    onEnter: () => {
                        underline.classList.add('animate');
                        gsap.to(path, {
                            strokeDashoffset: 0,
                            duration: 1.5,
                            ease: 'power2.out'
                        });
                    },
                    onLeaveBack: () => {
                        underline.classList.remove('animate');
                        gsap.set(path, {
                            strokeDashoffset: pathLength
                        });
                    }
                });
            });
        }

        // Initialize mobile menu
        function initMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                
                // Animate hamburger lines
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (mobileMenu.classList.contains('active')) {
                    gsap.to(spans[0], { rotation: 45, y: 6, duration: 0.3 });
                    gsap.to(spans[1], { opacity: 0, duration: 0.3 });
                    gsap.to(spans[2], { rotation: -45, y: -6, duration: 0.3 });
                } else {
                    gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
                    gsap.to(spans[1], { opacity: 1, duration: 0.3 });
                    gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
                }
            });

            // Close mobile menu when clicking links
            document.querySelectorAll('.mobile-menu a[data-draw-line-mobile]').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
                    gsap.to(spans[1], { opacity: 1, duration: 0.3 });
                    gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
                });
            });
        }

        // Animate portfolio cards on scroll and handle interactions
        function initPortfolioAnimation() {
            // Animate cards on scroll
            gsap.fromTo('.portfolio-option', 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.portfolio-options',
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Handle card clicking
            document.querySelectorAll('.portfolio-option').forEach(option => {
                option.addEventListener('click', () => {
                    // Remove active class from all options
                    document.querySelectorAll('.portfolio-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    // Add active class to clicked option
                    option.classList.add('active');
                });
            });
        }

        // Animate process timeline on scroll
        function initProcessAnimation() {
            gsap.fromTo('.process-step', 
                { opacity: 0, x: -50 },
                { 
                    opacity: 1, 
                    x: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.process-timeline',
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        function createParticles(x, y, color) {
            const particleContainer = document.getElementById('particles');
            
            if (!particleContainer) return;
            
            // Create dramatic triangles
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle triangle';
                particle.style.color = color.shades[Math.floor(Math.random() * color.shades.length)];
                particle.style.borderBottomColor = color.shades[Math.floor(Math.random() * color.shades.length)];
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.zIndex = '9999';
                
                const dx = (Math.random() - 0.5) * 200;
                const dy = (Math.random() - 0.5) * 200;
                const rotation = Math.random() * 720;
                
                particle.style.setProperty('--dx', dx + 'px');
                particle.style.setProperty('--dy', dy + 'px');
                particle.style.setProperty('--rotation', rotation + 'deg');
                
                particle.style.animation = `particleFloat 1.5s ease-out forwards`;
                particle.style.animationDelay = Math.random() * 0.3 + 's';
                
                particleContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2000);
            }
            
            // Create colorful circles
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle circle';
                const size = Math.random() * 8 + 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.backgroundColor = color.shades[Math.floor(Math.random() * color.shades.length)];
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.zIndex = '9999';
                
                const dx = (Math.random() - 0.5) * 180;
                const dy = (Math.random() - 0.5) * 180;
                const rotation = Math.random() * 360;
                
                particle.style.setProperty('--dx', dx + 'px');
                particle.style.setProperty('--dy', dy + 'px');
                particle.style.setProperty('--rotation', rotation + 'deg');
                
                particle.style.animation = `particlePop 1.2s ease-out forwards`;
                particle.style.animationDelay = Math.random() * 0.2 + 's';
                
                particleContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1500);
            }

            // Create splatter effects
            for (let i = 0; i < 10; i++) {
                const splatter = document.createElement('div');
                splatter.className = 'particle splatter';
                const width = Math.random() * 6 + 3;
                const height = Math.random() * 6 + 3;
                splatter.style.width = width + 'px';
                splatter.style.height = height + 'px';
                splatter.style.backgroundColor = color.main;
                splatter.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                splatter.style.left = x + (Math.random() - 0.5) * 80 + 'px';
                splatter.style.top = y + (Math.random() - 0.5) * 80 + 'px';
                splatter.style.zIndex = '9999';
                
                const dx = (Math.random() - 0.5) * 120;
                const dy = (Math.random() - 0.5) * 120;
                
                splatter.style.setProperty('--dx', dx + 'px');
                splatter.style.setProperty('--dy', dy + 'px');
                splatter.style.setProperty('--rotation', '0deg');
                
                splatter.style.animation = `particleFloat 1.8s ease-out forwards`;
                splatter.style.animationDelay = Math.random() * 0.4 + 's';
                
                particleContainer.appendChild(splatter);
                
                setTimeout(() => {
                    if (splatter.parentNode) {
                        splatter.parentNode.removeChild(splatter);
                    }
                }, 2200);
            }

            // Create star burst particles
            for (let i = 0; i < 8; i++) {
                const star = document.createElement('div');
                star.className = 'particle star';
                star.style.backgroundColor = color.main;
                star.style.left = x + 'px';
                star.style.top = y + 'px';
                star.style.transformOrigin = 'center';
                star.style.transform = `rotate(${i * 45}deg)`;
                star.style.zIndex = '9999';
                
                const angle = i * 45 * Math.PI / 180;
                const dx = Math.cos(angle) * 100;
                const dy = Math.sin(angle) * 100;
                
                star.style.setProperty('--dx', dx + 'px');
                star.style.setProperty('--dy', dy + 'px');
                star.style.setProperty('--rotation', '720deg');
                
                star.style.animation = `particleFloat 1.3s ease-out forwards`;
                star.style.animationDelay = Math.random() * 0.2 + 's';
                
                particleContainer.appendChild(star);
                
                setTimeout(() => {
                    if (star.parentNode) {
                        star.parentNode.removeChild(star);
                    }
                }, 1600);
            }
        }

        // Enhanced GSAP Letter Animation - NO GLOW
        function animateText() {
            const text = document.getElementById('text');
            const letters = 'DevDactyl';
            
            text.innerHTML = '';
            
            letters.split('').forEach((letter, index) => {
                const span = document.createElement('span');
                span.className = letter === ' ' ? 'letter space' : 'letter';
                span.textContent = letter === ' ' ? '\u00A0' : letter;
                span.style.setProperty('--delay', `${index * 0.1}s`);
                
                text.appendChild(span);
                
                // Enhanced GSAP animation for each letter - NO GLOW
                gsap.set(span, {
                    opacity: 0,
                    scale: 0,
                    rotation: -180,
                    y: 100
                });
                
                gsap.to(span, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(2)",
                    delay: index * 0.1,
                    onComplete: () => {
                        // Add shake effect after landing
                        gsap.to(span, {
                            x: "+=5",
                            duration: 0.1,
                            yoyo: true,
                            repeat: 3,
                            ease: "power2.inOut"
                        });
                        
                        // Create particles after letter animation
                        if (letter !== ' ') {
                            setTimeout(() => {
                                const rect = span.getBoundingClientRect();
                                const centerX = rect.left + rect.width / 2;
                                const centerY = rect.top + rect.height / 2;
                                createParticles(centerX, centerY, colors[index % colors.length]);
                            }, 200);
                        }
                    }
                });
                
                // Add continuous hover effects
                span.addEventListener('mouseenter', () => {
                    gsap.to(span, {
                        scale: 1.2,
                        rotation: Math.random() * 20 - 10,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Create small particle burst on hover
                    const rect = span.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            createParticles(centerX, centerY, colors[index % colors.length]);
                        }, i * 100);
                    }
                });
                
                span.addEventListener('mouseleave', () => {
                    gsap.to(span, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });
        }

        function showNavbar() {
            const navbar = document.getElementById('navbar');
            setTimeout(() => {
                navbar.classList.add('visible');
                setTimeout(initDrawRandomUnderline, 300);
                setTimeout(initSectionUnderlines, 500);
            }, 4500);
        }

        // Initialize everything when page loads
        window.addEventListener('load', () => {
            console.log('Page loaded, initializing...');
            
            // Start main animation sequence
            setTimeout(animateText, 500);
            showNavbar();
            
            // Initialize mobile menu and animations
            setTimeout(() => {
                console.log('Initializing mobile menu and animations...');
                initMobileMenu();
                initPortfolioAnimation();
                initProcessAnimation();
            }, 2000);
        });
