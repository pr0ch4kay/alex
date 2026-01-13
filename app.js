// ===== Application State =====
const AppState = {
    currentTestimonial: 0,
    isMenuOpen: false,
    isLoading: false,
    services: [
        {
            id: 1,
            icon: 'fas fa-spa',
            title: 'Эстетическая косметология',
            description: 'Современные методы коррекции и омоложения лица',
            features: ['Ботокс', 'Филлеры', 'Биоревитализация', 'Плазмотерапия'],
            price: 'от 8 000 ₽'
        },
        {
            id: 2,
            icon: 'fas fa-microchip',
            title: 'Аппаратная косметология',
            description: 'Высокотехнологичные процедуры без операции',
            features: ['Лазерные процедуры', 'RF-лифтинг', 'Фототерапия', 'Ультразвук'],
            price: 'от 12 000 ₽'
        },
        {
            id: 3,
            icon: 'fas fa-syringe',
            title: 'Инъекционная косметология',
            description: 'Индивидуальные программы омоложения и коррекции',
            features: ['Мезотерапия', 'Биорепарирование', 'Липолитики', 'Нитьевой лифтинг'],
            price: 'от 15 000 ₽'
        },
        {
            id: 4,
            icon: 'fas fa-face-smile',
            title: 'Уходовые процедуры',
            description: 'Профессиональный уход за кожей лица и тела',
            features: ['Чистка лица', 'Пилинги', 'Массаж лица', 'Уходовые маски'],
            price: 'от 5 000 ₽'
        },
        {
            id: 5,
            icon: 'fas fa-heart-pulse',
            title: 'Массаж и СПА',
            description: 'Расслабляющие и лечебные массажные программы',
            features: ['Лимфодренажный', 'Антицеллюлитный', 'Релаксирующий', 'Лечебный'],
            price: 'от 3 000 ₽'
        },
        {
            id: 6,
            icon: 'fas fa-user-md',
            title: 'Консультация специалиста',
            description: 'Персональная консультация и подбор процедур',
            features: ['Диагностика кожи', 'Составление плана', 'Рекомендации', 'Контроль'],
            price: 'бесплатно'
        }
    ],
    specialists: [
        {
            id: 1,
            name: 'Анна Петрова',
            position: 'Врач-косметолог',
            experience: '12 лет опыта',
            skills: ['Инъекции', 'Лазер', 'Плазмотерапия', 'Диагностика']
        },
        {
            id: 2,
            name: 'Мария Иванова',
            position: 'Дерматовенеролог',
            experience: '8 лет опыта',
            skills: ['Лечение акне', 'Пилинги', 'Биоревитализация', 'Мезотерапия']
        },
        {
            id: 3,
            name: 'Елена Сидорова',
            position: 'Массажист-реабилитолог',
            experience: '15 лет опыта',
            skills: ['Лимфодренаж', 'Антицеллюлитный массаж', 'Релаксация', 'Коррекция фигуры']
        },
        {
            id: 4,
            name: 'Ольга Николаева',
            position: 'Эстетист',
            experience: '6 лет опыта',
            skills: ['Чистка лица', 'Уходовые процедуры', 'Аппаратный уход', 'Депиляция']
        }
    ],
    testimonials: [
        {
            id: 1,
            name: 'Анна К.',
            avatar: 'АК',
            rating: 5,
            text: 'Результат превзошел все ожидания! Кожа стала сияющей, морщины заметно уменьшились. Спасибо специалистам за профессиональный подход.',
            date: '15.12.2023',
            service: 'Курс процедур по омоложению'
        },
        {
            id: 2,
            name: 'Мария И.',
            avatar: 'МИ',
            rating: 5,
            text: 'Очень деликатная работа, естественный результат. Чувствую себя помолодевшей на 10 лет! Процедуры безболезненные и эффективные.',
            date: '03.11.2023',
            service: 'Контурная пластика'
        },
        {
            id: 3,
            name: 'Елена С.',
            avatar: 'ЕС',
            rating: 5,
            text: 'После многолетней борьбы с проблемной кожей наконец-то нашла решение. Кожа чистая и ухоженная. Спасибо за профессионализм!',
            date: '22.10.2023',
            service: 'Лечение акне'
        },
        {
            id: 4,
            name: 'Ольга Н.',
            avatar: 'ОН',
            rating: 5,
            text: 'Отличный сервис, внимательные врачи, современное оборудование. Результат виден после первой процедуры. Рекомендую всем!',
            date: '10.09.2023',
            service: 'RF-лифтинг'
        }
    ]
};

// ===== DOM Elements =====
const DOM = {
    // Navigation
    navLinks: document.getElementById('navLinks'),
    menuToggle: document.getElementById('menuToggle'),
    header: document.getElementById('header'),
    
    // Buttons
    bookBtn: document.getElementById('bookBtn'),
    consultBtn: document.getElementById('consultBtn'),
    watchVideo: document.getElementById('watchVideo'),
    viewAllServices: document.getElementById('viewAllServices'),
    learnMore: document.getElementById('learnMore'),
    priceBtn: document.getElementById('priceBtn'),
    
    // Containers
    servicesContainer: document.getElementById('servicesContainer'),
    specialistsContainer: document.getElementById('specialistsContainer'),
    testimonialsTrack: document.getElementById('testimonialsTrack'),
    sliderDots: document.getElementById('sliderDots'),
    
    // Testimonials slider
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    
    // Modal
    bookingModal: document.getElementById('bookingModal'),
    closeModal: document.getElementById('closeModal'),
    callBtn: document.getElementById('callBtn'),
    whatsappBtn: document.getElementById('whatsappBtn'),
    telegramBtn: document.getElementById('telegramBtn'),
    
    // Form
    bookingForm: document.getElementById('bookingForm'),
    submitForm: document.getElementById('submitForm'),
    successMessage: document.getElementById('successMessage'),
    
    // Back to top
    backToTop: document.getElementById('backToTop'),
    
    // Loading
    loadingOverlay: document.getElementById('loadingOverlay')
};

// ===== Utility Functions =====
const Utils = {
    // Show loading overlay
    showLoading() {
        AppState.isLoading = true;
        DOM.loadingOverlay.classList.add('active');
    },
    
    // Hide loading overlay
    hideLoading() {
        AppState.isLoading = false;
        DOM.loadingOverlay.classList.remove('active');
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Format phone number
    formatPhone(phone) {
        return phone.replace(/\D/g, '');
    },
    
    // Validate email
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate phone
    validatePhone(phone) {
        const re = /^[\+]?[7-8]?[0-9\s\-\(\)]{10,15}$/;
        return re.test(phone);
    }
};

// ===== Render Functions =====
const Render = {
    // Render services
    renderServices() {
        if (!DOM.servicesContainer) return;
        
        const html = AppState.services.map(service => `
            <div class="service-card" data-id="${service.id}">
                <i class="${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul>
                    ${service.features.map(feature => `
                        <li><i class="fas fa-check"></i> ${feature}</li>
                    `).join('')}
                </ul>
                <div class="service-price">${service.price}</div>
                <button class="btn btn-secondary book-service" data-service="${service.id}">
                    <span>Записаться</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `).join('');
        
        DOM.servicesContainer.innerHTML = html;
    },
    
    // Render specialists
    renderSpecialists() {
        if (!DOM.specialistsContainer) return;
        
        const html = AppState.specialists.map(specialist => `
            <div class="specialist-card" data-id="${specialist.id}">
                <div class="specialist-image"></div>
                <div class="specialist-info">
                    <h3 class="specialist-name">${specialist.name}</h3>
                    <span class="specialist-position">${specialist.position}</span>
                    <div class="specialist-experience">
                        <i class="fas fa-briefcase"></i>
                        <span>${specialist.experience}</span>
                    </div>
                    <div class="specialist-skills">
                        ${specialist.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        DOM.specialistsContainer.innerHTML = html;
    },
    
    // Render testimonials
    renderTestimonials() {
        if (!DOM.testimonialsTrack || !DOM.sliderDots) return;
        
        // Render testimonials
        const testimonialsHtml = AppState.testimonials.map(testimonial => `
            <div class="testimonial-card" data-id="${testimonial.id}">
                <div class="testimonial-text">
                    ${testimonial.text}
                </div>
                <div class="client-info">
                    <div class="client-avatar">
                        ${testimonial.avatar}
                    </div>
                    <div class="client-details">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.service}</p>
                        <div class="rating">
                            ${Array(testimonial.rating).fill(0).map(() => 
                                '<i class="fas fa-star"></i>'
                            ).join('')}
                        </div>
                        <span class="testimonial-date">${testimonial.date}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        DOM.testimonialsTrack.innerHTML = testimonialsHtml;
        
        // Render dots
        const dotsHtml = AppState.testimonials.map((_, index) => `
            <button class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
        `).join('');
        
        DOM.sliderDots.innerHTML = dotsHtml;
        
        // Update slider position
        this.updateTestimonialSlider();
    },
    
    // Update testimonial slider position
    updateTestimonialSlider() {
        if (!DOM.testimonialsTrack) return;
        
        const width = 100 / AppState.testimonials.length;
        DOM.testimonialsTrack.style.transform = `translateX(-${AppState.currentTestimonial * 100}%)`;
        
        // Update active dot
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === AppState.currentTestimonial);
        });
    }
};

// ===== Event Handlers =====
const Events = {
    // Initialize all event listeners
    init() {
        // Navigation
        this.handleNavigation();
        
        // Mobile menu
        this.handleMobileMenu();
        
        // Modal
        this.handleModal();
        
        // Form submission
        this.handleForm();
        
        // Testimonials slider
        this.handleTestimonials();
        
        // Scroll events
        this.handleScroll();
        
        // Button clicks
        this.handleButtonClicks();
        
        // Service booking
        this.handleServiceBooking();
    },
    
    // Navigation
    handleNavigation() {
        // Smooth scroll for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(l => 
                        l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Scroll to section
                    const headerHeight = DOM.header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (AppState.isMenuOpen) {
                        Events.toggleMobileMenu();
                    }
                }
            });
        });
    },
    
    // Mobile menu
    handleMobileMenu() {
        if (!DOM.menuToggle || !DOM.navLinks) return;
        
        DOM.menuToggle.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (AppState.isMenuOpen && 
                !DOM.navLinks.contains(e.target) && 
                !DOM.menuToggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
        });
    },
    
    toggleMobileMenu() {
        AppState.isMenuOpen = !AppState.isMenuOpen;
        DOM.navLinks.classList.toggle('active', AppState.isMenuOpen);
        
        // Update menu icon
        const icon = DOM.menuToggle.querySelector('i');
        if (icon) {
            icon.className = AppState.isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = AppState.isMenuOpen ? 'hidden' : '';
    },
    
    // Modal
    handleModal() {
        // Open modal
        [DOM.bookBtn, DOM.consultBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => this.openModal());
            }
        });
        
        // Close modal
        if (DOM.closeModal) {
            DOM.closeModal.addEventListener('click', () => this.closeModal());
        }
        
        // Close modal on outside click
        DOM.bookingModal?.addEventListener('click', (e) => {
            if (e.target === DOM.bookingModal) {
                this.closeModal();
            }
        });
        
        // Contact buttons
        if (DOM.callBtn) {
            DOM.callBtn.addEventListener('click', () => {
                window.location.href = 'tel:+79991234567';
                this.closeModal();
            });
        }
        
        if (DOM.whatsappBtn) {
            DOM.whatsappBtn.addEventListener('click', () => {
                window.open('https://wa.me/79991234567', '_blank');
                this.closeModal();
            });
        }
        
        if (DOM.telegramBtn) {
            DOM.telegramBtn.addEventListener('click', () => {
                window.open('https://t.me/luxecosmetology', '_blank');
                this.closeModal();
            });
        }
    },
    
    openModal() {
        if (DOM.bookingModal) {
            DOM.bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },
    
    closeModal() {
        if (DOM.bookingModal) {
            DOM.bookingModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },
    
    // Form submission
    handleForm() {
        if (!DOM.bookingForm) return;
        
        DOM.bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form
            if (!this.validateForm()) {
                return;
            }
            
            // Get form data
            const formData = new FormData(DOM.bookingForm);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                serviceType: formData.get('serviceType'),
                message: formData.get('message'),
                privacy: formData.get('privacy') === 'on'
            };
            
            // Show loading
            Utils.showLoading();
            
            try {
                // Simulate API call
                await this.submitFormData(data);
                
                // Show success message
                this.showSuccessMessage();
                
                // Reset form
                DOM.bookingForm.reset();
                
                // Close modal if open
                this.closeModal();
                
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
            } finally {
                Utils.hideLoading();
            }
        });
        
        // Real-time validation
        this.setupFormValidation();
    },
    
    validateForm() {
        let isValid = true;
        
        // Name validation
        const nameInput = DOM.bookingForm.querySelector('#name');
        if (!nameInput.value.trim()) {
            this.showError('name', 'Введите ваше имя');
            isValid = false;
        } else {
            this.hideError('name');
        }
        
        // Phone validation
        const phoneInput = DOM.bookingForm.querySelector('#phone');
        if (!phoneInput.value.trim()) {
            this.showError('phone', 'Введите номер телефона');
            isValid = false;
        } else if (!Utils.validatePhone(phoneInput.value)) {
            this.showError('phone', 'Введите корректный номер телефона');
            isValid = false;
        } else {
            this.hideError('phone');
        }
        
        // Service validation
        const serviceInput = DOM.bookingForm.querySelector('#serviceType');
        if (!serviceInput.value) {
            this.showError('service', 'Выберите услугу');
            isValid = false;
        } else {
            this.hideError('service');
        }
        
        // Privacy validation
        const privacyInput = DOM.bookingForm.querySelector('#privacy');
        if (!privacyInput.checked) {
            this.showError('privacy', 'Необходимо согласие на обработку данных');
            isValid = false;
        } else {
            this.hideError('privacy');
        }
        
        return isValid;
    },
    
    setupFormValidation() {
        const inputs = DOM.bookingForm.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                const fieldName = input.getAttribute('id');
                const value = input.value.trim();
                
                switch (fieldName) {
                    case 'name':
                        if (!value) {
                            this.showError('name', 'Введите ваше имя');
                        } else if (value.length < 2) {
                            this.showError('name', 'Имя должно содержать минимум 2 символа');
                        } else {
                            this.hideError('name');
                        }
                        break;
                        
                    case 'phone':
                        if (!value) {
                            this.showError('phone', 'Введите номер телефона');
                        } else if (!Utils.validatePhone(value)) {
                            this.showError('phone', 'Введите корректный номер телефона');
                        } else {
                            this.hideError('phone');
                        }
                        break;
                        
                    case 'serviceType':
                        if (!value) {
                            this.showError('service', 'Выберите услугу');
                        } else {
                            this.hideError('service');
                        }
                        break;
                }
            });
            
            input.addEventListener('input', () => {
                const fieldName = input.getAttribute('id');
                this.hideError(fieldName === 'serviceType' ? 'service' : fieldName);
            });
        });
    },
    
    showError(field, message) {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },
    
    hideError(field) {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    },
    
    async submitFormData(data) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data submitted:', data);
                resolve();
            }, 1500);
        });
    },
    
    showSuccessMessage() {
        if (DOM.successMessage) {
            DOM.successMessage.style.display = 'flex';
            
            // Scroll to success message
            DOM.successMessage.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Hide after 5 seconds
            setTimeout(() => {
                DOM.successMessage.style.display = 'none';
            }, 5000);
        }
    },
    
    // Testimonials slider
    handleTestimonials() {
        // Previous button
        if (DOM.prevBtn) {
            DOM.prevBtn.addEventListener('click', () => {
                AppState.currentTestimonial = 
                    (AppState.currentTestimonial - 1 + AppState.testimonials.length) % 
                    AppState.testimonials.length;
                Render.updateTestimonialSlider();
            });
        }
        
        // Next button
        if (DOM.nextBtn) {
            DOM.nextBtn.addEventListener('click', () => {
                AppState.currentTestimonial = 
                    (AppState.currentTestimonial + 1) % AppState.testimonials.length;
                Render.updateTestimonialSlider();
            });
        }
        
        // Dot navigation
        if (DOM.sliderDots) {
            DOM.sliderDots.addEventListener('click', (e) => {
                if (e.target.classList.contains('dot')) {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    AppState.currentTestimonial = index;
                    Render.updateTestimonialSlider();
                }
            });
        }
        
        // Auto slide
        this.startAutoSlide();
    },
    
    startAutoSlide() {
        setInterval(() => {
            if (!AppState.isMenuOpen && !DOM.bookingModal.classList.contains('active')) {
                AppState.currentTestimonial = 
                    (AppState.currentTestimonial + 1) % AppState.testimonials.length;
                Render.updateTestimonialSlider();
            }
        }, 5000);
    },
    
    // Scroll events
    handleScroll() {
        // Update header on scroll
        window.addEventListener('scroll', Utils.debounce(() => {
            const scrollY = window.scrollY;
            
            // Update header class
            if (DOM.header) {
                DOM.header.classList.toggle('scrolled', scrollY > 50);
            }
            
            // Update active nav link
            this.updateActiveNavLink();
            
            // Show/hide back to top button
            if (DOM.backToTop) {
                DOM.backToTop.classList.toggle('visible', scrollY > 300);
            }
        }, 100));
        
        // Back to top button
        if (DOM.backToTop) {
            DOM.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    },
    
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => 
                    link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    },
    
    // Button clicks
    handleButtonClicks() {
        // Watch video
        if (DOM.watchVideo) {
            DOM.watchVideo.addEventListener('click', () => {
                alert('Демонстрационное видео клиники');
            });
        }
        
        // View all services
        if (DOM.viewAllServices) {
            DOM.viewAllServices.addEventListener('click', () => {
                document.querySelector('#services')?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
        
        // Learn more
        if (DOM.learnMore) {
            DOM.learnMore.addEventListener('click', () => {
                document.querySelector('#about')?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
        
        // Price list
        if (DOM.priceBtn) {
            DOM.priceBtn.addEventListener('click', () => {
                this.openModal();
            });
        }
    },
    
    // Service booking
    handleServiceBooking() {
        // Delegate events for dynamically created buttons
        document.addEventListener('click', (e) => {
            // Book service button
            if (e.target.closest('.book-service')) {
                const button = e.target.closest('.book-service');
                const serviceId = button.getAttribute('data-service');
                this.openBookingModal(serviceId);
            }
            
            // Service card click
            if (e.target.closest('.service-card')) {
                const card = e.target.closest('.service-card');
                const serviceId = card.getAttribute('data-id');
                
                // Add visual feedback
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            }
        });
    },
    
    openBookingModal(serviceId) {
        this.openModal();
        
        // Pre-select service if ID provided
        if (serviceId && DOM.bookingForm) {
            const serviceSelect = DOM.bookingForm.querySelector('#serviceType');
            if (serviceSelect) {
                // Map service ID to option value
                const serviceMap = {
                    '1': 'consultation',
                    '2': 'hardware',
                    '3': 'injections',
                    '4': 'facial',
                    '5': 'body',
                    '6': 'consultation'
                };
                
                const serviceValue = serviceMap[serviceId] || 'consultation';
                serviceSelect.value = serviceValue;
            }
        }
    }
};

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', () => {
    // Render content
    Render.renderServices();
    Render.renderSpecialists();
    Render.renderTestimonials();
    
    // Initialize events
    Events.init();
    
    // Animate hero numbers
    animateNumbers();
    
    // Add scroll animations
    setupScrollAnimations();
    
    console.log('LUXE Cosmetology website loaded successfully! 🎀');
});

// ===== Animation Functions =====
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', '').replace('%', ''));
        const duration = 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + 
                    (counter.textContent.includes('+') ? '+' : '') +
                    (counter.textContent.includes('%') ? '%' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + 
                    (counter.textContent.includes('+') ? '+' : '') +
                    (counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .specialist-card, .feature').forEach(el => {
        observer.observe(el);
    });
}

// ===== Add CSS for animations =====
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card, .specialist-card, .feature {
        opacity: 0;
    }
    
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);