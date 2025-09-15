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
            
            <div class="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 relative z-10" data-testid="step-card-${index}">
                <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${step.icon}
                    </svg>
                </div>
                
                <div class="text-center mb-4">
                    <div class="text-sm text-primary font-semibold mb-2">Step ${index + 1}</div>
                    <h3 class="text-lg font-semibold text-card-foreground mb-2">${step.title}</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed mb-3">${step.description}</p>
                    <div class="text-xs text-muted-foreground mb-4">
                        Estimated time: ${step.estimated}
                    </div>
                </div>

                <button class="w-full border border-border text-foreground hover:bg-muted px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2" data-testid="button-step-${index}" onclick="console.log('${step.action} clicked')">
                    ${step.action}
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                </button>
            </div>
        `;
        stepsGrid.appendChild(stepCard);
    });

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            console.log('Form submitted:', { name, email, message });
            showNotification('Thanks for reaching out! We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

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
});