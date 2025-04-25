document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    setupMobileMenu();
    
    // Hero section 3D effect
    setupHero3DEffect();
    
    // Populate tech cards
    populateTechCards();
    
    // Populate benefits
    populateBenefits();
    
    // Populate business model
    populateBusinessModel();
    
    // Populate team cards
    populateTeamCards();
    
    // Populate pricing features
    populatePricingFeatures();
    
    // Set up chatbot
    setupChatbot();
    
    // Set up intersection observers for animations
    setupIntersectionObservers();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
});

// Mobile Menu
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-nav-active');
        });
    }
}

// Hero 3D Effect
function setupHero3DEffect() {
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    
    if (heroImageWrapper) {
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth >= 768) { // Only on desktop
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 10;
                const y = (clientY / window.innerHeight - 0.5) * 10;
                
                heroImageWrapper.style.transform = `rotateY(${x * 0.1}deg) rotateX(${-y * 0.1}deg)`;
            }
        });
    }
}

// Technology Cards
function populateTechCards() {
    const techCardsContainer = document.querySelector('.tech-cards');
    
    if (techCardsContainer && technologies) {
        technologies.forEach((tech, index) => {
            const iconName = tech.icon || 'code';
            
            const card = document.createElement('div');
            card.className = 'tech-card';
            card.style.transitionDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="tech-card-glow"></div>
                <div class="tech-card-content">
                    <div class="tech-icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="gold-icon tech-icon" data-icon="${iconName}"></svg>
                    </div>
                    <h3 class="tech-card-title">${tech.title}</h3>
                    <p class="tech-card-description">${tech.description}</p>
                </div>
                <div class="tech-card-corner">
                    <div class="tech-card-corner-inner"></div>
                </div>
            `;
            
            techCardsContainer.appendChild(card);
        });
        
        // Initialize SVG icons
        document.querySelectorAll('.tech-icon').forEach(icon => {
            const iconName = icon.getAttribute('data-icon');
            insertSVGPathByName(icon, iconName);
        });
    }
}

// Benefits
function populateBenefits() {
    const benefitsList1 = document.getElementById('benefits-list-1');
    const benefitsList2 = document.getElementById('benefits-list-2');
    
    if (benefitsList1 && benefitsList2 && benefits && moreBenefits) {
        // First benefits list
        benefits.forEach((benefit, index) => {
            const item = document.createElement('div');
            item.className = 'benefit-item';
            item.setAttribute('data-index', index);
            
            item.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="benefit-icon" data-icon="${benefit.icon}"></svg>
                <div class="benefit-content">
                    <h3>${benefit.title} <span class="benefit-star"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="gold-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span></h3>
                    <p>${benefit.description}</p>
                </div>
            `;
            
            benefitsList1.appendChild(item);
        });
        
        // Second benefits list
        moreBenefits.forEach((benefit, index) => {
            const item = document.createElement('div');
            item.className = 'benefit-item alt';
            item.setAttribute('data-index', index + benefits.length);
            
            item.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="benefit-icon" data-icon="${benefit.icon}"></svg>
                <div class="benefit-content">
                    <h3>${benefit.title} <span class="benefit-star"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--red);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span></h3>
                    <p>${benefit.description}</p>
                </div>
            `;
            
            benefitsList2.appendChild(item);
        });
        
        // Initialize SVG icons
        document.querySelectorAll('.benefit-icon').forEach(icon => {
            const iconName = icon.getAttribute('data-icon');
            insertSVGPathByName(icon, iconName);
        });
    }
}

// Business Model
function populateBusinessModel() {
    const businessModelCards = document.getElementById('business-model-cards');
    const modelBars = document.getElementById('model-bars');
    
    if (businessModelCards && modelBars && businessModel) {
        businessModel.forEach((step, index) => {
            // Add model bars
            const bar = document.createElement('div');
            bar.className = 'model-bar';
            bar.style.height = `${200 + index * 50}px`;
            bar.style.left = `${(index + 1) * 15}%`;
            bar.style.opacity = index === 0 ? '0.4' : '0.1';
            bar.style.transform = index === 0 ? 'scaleY(1.2)' : 'scaleY(1)';
            modelBars.appendChild(bar);
            
            // Add model cards
            const card = document.createElement('div');
            card.className = 'model-card';
            card.style.transitionDelay = `${index * 0.15}s`;
            
            const iconName = step.icon.toLowerCase();
            
            card.innerHTML = `
                <div class="model-icon-wrapper">
                    <div class="model-icon-circle"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="model-icon" data-icon="${iconName}"></svg>
                    <div class="model-number">${index + 1}</div>
                </div>
                <h3 class="model-title">${step.title}</h3>
                <p class="model-description">${step.description}</p>
                <div class="model-accent"></div>
            `;
            
            businessModelCards.appendChild(card);
            
            // Add hover effect to highlight corresponding bar
            card.addEventListener('mouseenter', () => {
                document.querySelectorAll('.model-bar').forEach((bar, barIndex) => {
                    bar.style.opacity = barIndex === index ? '0.4' : '0.1';
                    bar.style.transform = barIndex === index ? 'scaleY(1.2)' : 'scaleY(1)';
                });
                
                document.querySelectorAll('.model-card').forEach((c, cardIndex) => {
                    c.style.borderColor = cardIndex === index ? 'var(--gold)' : 'var(--gray)';
                    c.style.boxShadow = cardIndex === index ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none';
                });
            });
        });
        
        // Initialize SVG icons for model cards
        document.querySelectorAll('.model-icon').forEach(icon => {
            const iconName = icon.getAttribute('data-icon');
            insertSVGPathByName(icon, iconName);
        });
    }
}

// Team Cards
function populateTeamCards() {
    const teamCardsContainer = document.getElementById('team-cards');
    
    if (teamCardsContainer && teamMembers) {
        teamMembers.forEach((member, index) => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.style.animationDelay = `${index * 0.15}s`;
            
            const initials = member.name.substring(0, 2);
            
            card.innerHTML = `
                <div class="team-card-bar"></div>
                <div class="team-card-content">
                    <div class="team-card-corner">
                        <div class="team-card-corner-inner"></div>
                    </div>
                    
                    <div class="team-header">
                        <div class="team-avatar">${initials}</div>
                        <div class="team-info">
                            <h3>${member.name}</h3>
                            <p>${member.position}</p>
                        </div>
                    </div>
                    
                    <p class="team-description">${member.description}</p>
                    <div class="team-quote-container">
                        <div class="team-quote-line"></div>
                        <p class="team-quote">"${member.quote}"</p>
                    </div>
                    
                    <div class="team-card-overlay"></div>
                </div>
            `;
            
            teamCardsContainer.appendChild(card);
        });
    }
}

// Pricing Features
function populatePricingFeatures() {
    const pricingFeaturesList = document.getElementById('pricing-features');
    
    if (pricingFeaturesList && pricingFeatures) {
        pricingFeatures.forEach((feature, index) => {
            const item = document.createElement('div');
            item.className = 'feature-item';
            item.style.transitionDelay = `${index * 0.1}s`;
            
            item.innerHTML = `
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="feature-text">${feature}</span>
            `;
            
            pricingFeaturesList.appendChild(item);
        });
    }
}

// Chatbot
function setupChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatFormContainer = document.getElementById('chat-form-container');
    
    if (chatbot && chatbotToggle && chatbotWindow && chatbotClose && chatMessages && chatFormContainer) {
        // Initial message
        const initialMessage = {
            text: "Hi there! I'm the TRAInS assistant. I can help you get started with our programs. Could you share your name, email, and contact number?",
            sender: "bot"
        };
        
        // Add initial message
        addMessage(initialMessage);
        
        // Show user form
        showChatForm();
        
        // Toggle chatbot window
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
            chatbotToggle.classList.remove('pulsing');
        });
        
        // Close chatbot window
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.style.display = 'none';
        });
        
        // Set periodic pulsing
        setInterval(() => {
            if (chatbotWindow.style.display !== 'block') {
                chatbotToggle.classList.add('pulsing');
                setTimeout(() => {
                    chatbotToggle.classList.remove('pulsing');
                }, 1000);
            }
        }, 5000);
    }
    
    // Function to add message to chat
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.sender}`;
        
        messageElement.innerHTML = `
            <div class="message-bubble">${message.text}</div>
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to show chat form
    function showChatForm() {
        chatFormContainer.innerHTML = `
            <form class="chat-form" id="chat-form">
                <div class="chat-form-field">
                    <input type="text" class="chat-input" id="chat-name" placeholder="Your Name" required>
                    <div class="form-error" id="name-error"></div>
                </div>
                <div class="chat-form-field">
                    <input type="email" class="chat-input" id="chat-email" placeholder="Your Email" required>
                    <div class="form-error" id="email-error"></div>
                </div>
                <div class="chat-form-field">
                    <input type="tel" class="chat-input" id="chat-phone" placeholder="Your Contact Number" required>
                    <div class="form-error" id="phone-error"></div>
                </div>
                <button type="submit" class="chat-submit-btn" id="chat-submit">Submit</button>
            </form>
        `;
        
        // Form submission
        const chatForm = document.getElementById('chat-form');
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('chat-name');
            const emailInput = document.getElementById('chat-email');
            const phoneInput = document.getElementById('chat-phone');
            
            const name = nameInput.value;
            const email = emailInput.value;
            const phone = phoneInput.value;
            
            // Validate inputs
            let isValid = true;
            
            if (!name) {
                document.getElementById('name-error').textContent = 'Please enter your name';
                isValid = false;
            } else {
                document.getElementById('name-error').textContent = '';
            }
            
            if (!email || !isValidEmail(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                document.getElementById('email-error').textContent = '';
            }
            
            if (!phone) {
                document.getElementById('phone-error').textContent = 'Please enter your contact number';
                isValid = false;
            } else {
                document.getElementById('phone-error').textContent = '';
            }
            
            if (isValid) {
                // Add user message
                addMessage({
                    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
                    sender: 'user'
                });
                
                // Add bot response after a delay
                setTimeout(() => {
                    addMessage({
                        text: `Thanks, ${name}! We've received your details. Our team will contact you shortly with more information about our programs.`,
                        sender: 'bot'
                    });
                    
                    // Show chat input instead of form
                    showChatInput();
                }, 500);
            }
        });
    }
    
    // Function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Function to show chat input
    function showChatInput() {
        chatFormContainer.innerHTML = `
            <form class="chat-message-form" id="chat-message-form">
                <input type="text" class="chat-message-input" id="chat-message-input" placeholder="Type a message...">
                <button type="submit" class="chat-send-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </form>
        `;
        
        // Message submission
        const chatMessageForm = document.getElementById('chat-message-form');
        const chatMessageInput = document.getElementById('chat-message-input');
        
        chatMessageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const message = chatMessageInput.value;
            
            if (message.trim()) {
                // Add user message
                addMessage({
                    text: message,
                    sender: 'user'
                });
                
                chatMessageInput.value = '';
                
                // Add bot response after a delay
                setTimeout(() => {
                    addMessage({
                        text: "Thank you for your message. Our team will get back to you soon. Is there anything else I can help you with?",
                        sender: 'bot'
                    });
                }, 500);
            }
        });
    }
}

// Intersection Observers
function setupIntersectionObservers() {
    // Tech cards
    observeElements('.tech-card', (element) => {
        element.classList.add('visible');
    });
    
    // Benefits
    observeElements('.benefit-item', (element) => {
        element.classList.add('visible');
    });
    
    // Business model cards
    observeElements('.model-card', (element) => {
        element.classList.add('visible');
    });
    
    // Team cards
    observeElements('.team-card', (element) => {
        element.classList.add('visible');
    });
    
    // Pricing card
    observeElements('.pricing-card', (element) => {
        element.classList.add('visible');
    });
    
    // Pricing features
    observeElements('.feature-item', (element) => {
        element.classList.add('visible');
    });
}

// Helper for intersection observer
function observeElements(selector, callback) {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('mobile-nav-active');
                
                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Helper function to insert SVG paths by icon name
function insertSVGPathByName(element, iconName) {
    switch (iconName) {
        case 'brain':
            element.innerHTML = '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4.5 17v-2.5a2.5 2.5 0 0 1 0-5V7a2.5 2.5 0 0 1 5-5Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 19.5 17v-2.5a2.5 2.5 0 0 0 0-5V7a2.5 2.5 0 0 0-5-5Z"></path>';
            break;
        case 'link':
            element.innerHTML = '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>';
            break;
        case 'cloud':
            element.innerHTML = '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>';
            break;
        case 'shield':
            element.innerHTML = '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>';
            break;
        case 'bar-chart-2':
            element.innerHTML = '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>';
            break;
        case 'cpu':
            element.innerHTML = '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>';
            break;
        case 'smartphone':
            element.innerHTML = '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>';
            break;
        case 'code':
            element.innerHTML = '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>';
            break;
        case 'check-circle':
            element.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';
            break;
        case 'star':
            element.innerHTML = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
            break;
        case 'zap':
            element.innerHTML = '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>';
            break;
        case 'users':
            element.innerHTML = '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>';
            break;
        case 'trending-up':
            element.innerHTML = '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>';
            break;
        case 'rocket':
            element.innerHTML = '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>';
            break;
        case 'award':
            element.innerHTML = '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>';
            break;
        case 'globe':
            element.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>';
            break;
        case 'graduation-cap':
            element.innerHTML = '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>';
            break;
        case 'laptop':
            element.innerHTML = '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>';
            break;
        case 'dollar-sign':
            element.innerHTML = '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>';
            break;
        default:
            element.innerHTML = '<path d="M12 12h.01"></path>';
    }
}
fetch('/submit_contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})