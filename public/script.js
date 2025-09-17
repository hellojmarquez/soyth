// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
    }

    // Add smooth scrolling to all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                scrollToSection(href.substring(1));
            }
        });
    });

    // Make scrollToSection globally available
    window.scrollToSection = scrollToSection;

    // Generate opportunity cards
    const opportunities = [
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
            title: "Frontend Developer",
            description: "Create beautiful, responsive user interfaces using React, Vue, or Angular. Work on user experience and accessibility.",
            skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"],
            commitment: "10-15 hrs/week",
            team: "Design & UX",
            level: "Beginner to Advanced"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>`,
            title: "Backend Developer",
            description: "Build robust APIs and server-side applications. Work with databases, authentication, and scalable architecture.",
            skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
            commitment: "10-20 hrs/week",
            team: "Platform Team",
            level: "Intermediate to Advanced"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
            title: "Mobile Developer",
            description: "Develop cross-platform mobile applications that reach users everywhere. Focus on native and hybrid solutions.",
            skills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
            commitment: "15-25 hrs/week",
            team: "Mobile Team",
            level: "Intermediate to Advanced"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2H7z"/>`,
            title: "UI/UX Designer",
            description: "Design intuitive interfaces and user experiences. Create wireframes, prototypes, and design systems.",
            skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
            commitment: "8-12 hrs/week",
            team: "Design & UX",
            level: "Beginner to Advanced"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>`,
            title: "DevOps Engineer",
            description: "Manage deployment pipelines, cloud infrastructure, and monitoring systems. Ensure scalability and reliability.",
            skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Monitoring"],
            commitment: "12-18 hrs/week",
            team: "Infrastructure",
            level: "Advanced"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
            title: "Security Specialist",
            description: "Implement security best practices, conduct audits, and ensure data protection across all projects.",
            skills: ["Security Auditing", "Penetration Testing", "OWASP", "Encryption"],
            commitment: "8-15 hrs/week",
            team: "Security Team",
            level: "Intermediate to Advanced"
        }
    ];

    const opportunitiesGrid = document.getElementById('opportunities-grid');
    opportunities.forEach((role, index) => {
        const skillsBadges = role.skills.map(skill => 
            `<span class="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">${skill}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 group';
        card.setAttribute('data-testid', `opportunity-card-${index}`);
        card.innerHTML = `
            <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${role.icon}
                </svg>
            </div>
            
            <h3 class="text-xl font-semibold text-card-foreground mb-3">${role.title}</h3>
            <p class="text-muted-foreground mb-4 leading-relaxed text-sm">${role.description}</p>
            
            <div class="space-y-3 mb-6">
                <div class="flex items-center gap-2 text-sm">
                    <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span class="text-muted-foreground">${role.commitment}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                    <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    <span class="text-muted-foreground">${role.team}</span>
                </div>
                <div class="text-sm">
                    <span class="text-muted-foreground">Level: </span>
                    <span class="font-medium text-card-foreground">${role.level}</span>
                </div>
            </div>

            <div class="flex flex-wrap gap-1 mb-6">
                ${skillsBadges}
            </div>

            <button class="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 group-hover:bg-primary/90" data-testid="button-apply-${index}" onclick="scrollToSection('apply')">
                Apply for Role
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </button>
        `;
        opportunitiesGrid.appendChild(card);
    });

    // Generate application steps
    const steps = [
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>`,
            title: "Join Our Community",
            description: "Fill out our application form with your background, skills, and interests. Tell us what motivates you to volunteer.",
            action: "Apply Now",
            estimated: "5 mins"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`,
            title: "Portfolio Review",
            description: "Share your work with us - GitHub projects, design portfolios, or any relevant experience you'd like to showcase.",
            action: "Upload Portfolio",
            estimated: "10 mins"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>`,
            title: "Community Meet & Greet",
            description: "Join a casual video call with our team and other new volunteers. Get to know the community and ask questions.",
            action: "Schedule Call",
            estimated: "30 mins"
        },
        {
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
            title: "Start Contributing",
            description: "Get matched with your first project based on your skills and interests. Begin making an impact from day one.",
            action: "Begin Project",
            estimated: "Ongoing"
        }
    ];

    const stepsGrid = document.getElementById('steps-grid');
    steps.forEach((step, index) => {
        const stepCard = document.createElement('div');
        stepCard.className = 'relative';
        stepCard.innerHTML = `
            ${index < steps.length - 1 ? 
                '<div class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent z-0"></div>' 
                : ''}
            
            <div class="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 relative z-10 h-full flex flex-col" data-testid="step-card-${index}">
                <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${step.icon}
                    </svg>
                </div>
                
                <div class="text-center mb-4 flex-grow">
                    <div class="text-sm text-primary font-semibold mb-2">Step ${index + 1}</div>
                    <h3 class="text-lg font-semibold text-card-foreground mb-2">${step.title}</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed mb-3">${step.description}</p>
                    <div class="text-xs text-muted-foreground mb-4">
                        Estimated time: ${step.estimated}
                    </div>
                </div>

                <div class="mt-auto">
                    <button class="w-full border border-border text-foreground hover:bg-muted px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2" data-testid="button-step-${index}" onclick="console.log('${step.action} clicked')">
                        ${step.action}
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        stepsGrid.appendChild(stepCard);
    });

    // Enhanced form validation functions
    function isValidName(name) {
        // Check for valid name format: requires at least one letter, allows spaces, hyphens, apostrophes
        // Minimum 2 characters, maximum 50 characters, no leading/trailing separators or consecutive separators
        const nameRegex = /^(?=.{2,50}$)[A-Za-zÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+(?:[ .'-][A-Za-zÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]+)*$/;
        return nameRegex.test(name.trim());
    }

    function isValidEmail(email) {
        // Enhanced email validation with domain checking
        if (email.length > 254) return false; // RFC 5321 limit
        
        // Use browser's built-in validation first
        const tempInput = document.createElement('input');
        tempInput.type = 'email';
        tempInput.value = email;
        if (!tempInput.validity.valid) return false;
        
        // Additional checks for robust validation
        const parts = email.split('@');
        if (parts.length !== 2) return false;
        
        const [localPart, domain] = parts;
        if (localPart.length > 64 || domain.length > 253) return false;
        
        // Check for consecutive dots and proper domain format
        if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) return false;
        
        // Check domain labels
        const domainParts = domain.split('.');
        if (domainParts.length < 2) return false;
        
        for (const part of domainParts) {
            if (part.length === 0 || part.length > 63) return false;
            if (part.startsWith('-') || part.endsWith('-')) return false;
        }
        
        // Check TLD (last part) has at least 2 letters
        const tld = domainParts[domainParts.length - 1];
        return /^[a-zA-Z]{2,}$/.test(tld);
    }

    function isValidSubject(subject) {
        // Subject is optional, but if provided should be reasonable length
        return subject.length <= 100;
    }

    function isValidMessage(message) {
        // Message should be at least 10 characters and not too long
        return message.length >= 10 && message.length <= 2000;
    }

    function validateField(fieldId, value, validationFn, errorMessage, showToast = true) {
        const field = document.getElementById(fieldId);
        const isValid = validationFn(value);
        
        // Remove existing error styling and messages
        field.classList.remove('border-red-500', 'focus:ring-red-500');
        field.removeAttribute('aria-invalid');
        
        // Remove any existing error message
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        if (!isValid) {
            // Add error styling and accessibility attributes
            field.classList.add('border-red-500', 'focus:ring-red-500');
            field.setAttribute('aria-invalid', 'true');
            
            // Add inline error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message text-red-500 text-xs mt-1';
            errorDiv.textContent = errorMessage;
            field.parentElement.appendChild(errorDiv);
            
            // Only show toast notification if explicitly requested (e.g., on form submit)
            if (showToast) {
                showNotification(errorMessage, 'error');
                field.focus();
            }
            return false;
        } else {
            field.setAttribute('aria-invalid', 'false');
        }
        return true;
    }

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Trim all input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset form styling
        const fields = ['name', 'email', 'subject', 'message'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.classList.remove('border-red-500', 'focus:ring-red-500');
        });

        // Comprehensive validation
        if (!name) {
            validateField('name', name, () => false, 'Name is required.');
            return;
        }
        
        if (!isValidName(name)) {
            validateField('name', name, isValidName, 'Please enter a valid name (2-50 characters; letters with spaces, hyphens, apostrophes, periods allowed).');
            return;
        }
        
        if (!email) {
            validateField('email', email, () => false, 'Email address is required.');
            return;
        }
        
        if (!isValidEmail(email)) {
            validateField('email', email, isValidEmail, 'Please enter a valid email address (e.g., name@example.com).');
            return;
        }
        
        if (subject && !isValidSubject(subject)) {
            validateField('subject', subject, isValidSubject, 'Subject should be no more than 100 characters.');
            return;
        }
        
        if (!message) {
            validateField('message', message, () => false, 'Message is required.');
            return;
        }
        
        if (!isValidMessage(message)) {
            validateField('message', message, isValidMessage, 'Message should be between 10 and 2000 characters.');
            return;
        }
        
        // All validation passed - submit the form
        submitForm({ name, email, subject, message });
    });

    function submitForm(formData) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Update button state
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            showNotification('Thanks for reaching out! We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            
            // Reset any error styling
            const fields = ['name', 'email', 'subject', 'message'];
            fields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                field.classList.remove('border-red-500', 'focus:ring-red-500');
            });
            
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    }

    // Add subtle real-time validation feedback on blur (no toast notifications)
    document.getElementById('name').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && !isValidName(value)) {
            validateField('name', value, isValidName, 'Please enter a valid name (letters, spaces, hyphens, apostrophes allowed)', false);
        } else if (value) {
            validateField('name', value, () => true, '', false);
        }
    });

    document.getElementById('email').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && !isValidEmail(value)) {
            validateField('email', value, isValidEmail, 'Please enter a valid email address (e.g., name@example.com)', false);
        } else if (value) {
            validateField('email', value, () => true, '', false);
        }
    });

    document.getElementById('subject').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && !isValidSubject(value)) {
            validateField('subject', value, isValidSubject, 'Subject should be no more than 100 characters', false);
        } else {
            validateField('subject', value, () => true, '', false);
        }
    });

    document.getElementById('message').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && !isValidMessage(value)) {
            validateField('message', value, isValidMessage, 'Message should be between 10 and 2000 characters', false);
        } else if (value) {
            validateField('message', value, () => true, '', false);
        }
    });

    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all transform translate-x-full opacity-0 ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${type === 'success' ? 
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>' :
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'
                    }
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full', 'opacity-0');
        }, 100);
        
        // Animate out after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(el => {
        observer.observe(el);
    });

    // Particle System
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        particle.style.animationDelay = Math.random() * 4 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (parseFloat(particle.style.animationDuration) + parseFloat(particle.style.animationDelay)) * 1000);
    }

    // Create particles for hero section
    const heroParticles = document.getElementById('particles-hero');
    if (heroParticles) {
        setInterval(() => {
            createParticle(heroParticles);
        }, 2000);
        
        // Create initial particles
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createParticle(heroParticles), i * 500);
        }
    }

    // Advanced hover effects for cards
    document.querySelectorAll('.glass-card, .feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Add glow effect
            const glowElement = this.querySelector('.sphere-mini, .cube-mini');
            if (glowElement) {
                glowElement.style.boxShadow = '0 0 20px hsl(270, 100%, 70%), 0 0 40px hsl(270, 100%, 70%)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Remove glow effect
            const glowElement = this.querySelector('.sphere-mini, .cube-mini');
            if (glowElement) {
                glowElement.style.boxShadow = '';
            }
        });
    });

    // Typing animation restart
    function restartTypingAnimation() {
        const typingElements = document.querySelectorAll('.typing-text');
        typingElements.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = 'typing 4s steps(40, end), blink 1s step-end infinite';
        });
    }

    // Restart typing animation every 8 seconds
    setInterval(restartTypingAnimation, 8000);

    // Interactive 3D shapes that respond to mouse movement
    const shapes3D = document.querySelectorAll('.sphere-3d, .cube-3d, .hexagon-3d, .pyramid-3d');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;
        
        shapes3D.forEach((shape, index) => {
            const intensity = 0.1 + (index * 0.05); // Different intensity for each shape
            const rotateX = (mouseY - 50) * intensity;
            const rotateY = (mouseX - 50) * intensity;
            
            shape.style.transform = `perspective(1000px) rotateX(${15 + rotateX}deg) rotateY(${15 + rotateY}deg)`;
        });
    });

    // Parallax scrolling effect for background elements
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.dots-pattern-1, .dots-pattern-2, .dots-pattern-3');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestParallaxTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxTick);

    // Stagger animation for feature cards
    const featureCards = document.querySelectorAll('#feature-cards .glass-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.2) + 's';
        card.classList.add('scroll-reveal-scale');
    });

    // Dynamic background color changes based on scroll position
    function updateBackgroundOnScroll() {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // Add subtle color variations based on section
                const colors = [
                    'from-primary/5 to-secondary/5',
                    'from-secondary/5 to-accent/5',
                    'from-accent/5 to-primary/5',
                    'from-primary/8 to-background'
                ];
                
                document.body.className = `font-sans antialiased bg-gradient-to-br ${colors[index % colors.length]} text-foreground`;
            }
        });
    }
    
    window.addEventListener('scroll', updateBackgroundOnScroll);
    
    // Initialize background
    updateBackgroundOnScroll();
    
    // Loading animation complete - fade in page content
    setTimeout(() => {
        document.body.classList.add('animate-fade-in');
    }, 500);

    // Enhanced button animations
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});