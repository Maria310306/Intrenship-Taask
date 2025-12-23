const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        const targetSection = document.getElementById(dot.getAttribute('data-section'));

        // Smooth scroll with polyfill for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            // Fallback for older browsers
            window.scrollTo(0, targetSection.offsetTop);
        }
    });
});

// Add event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        dots.forEach(d => d.classList.remove('active'));
        const activeDot = document.querySelector(`.dot[data-section="${targetId}"]`);
        if (activeDot) activeDot.classList.add('active');

        // Smooth scroll with polyfill for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            // Fallback for older browsers
            window.scrollTo(0, targetSection.offsetTop);
        }

        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Handle scroll events to update activedot
function updateActiveDot() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => dot.classList.remove('active'));

    if (current) {
        const activeDot = document.querySelector(`.dot[data-section="${current}"]`);
        if (activeDot) activeDot.classList.add('active');
    } else {
        // If no section is active (at the very top), make the first dot active
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }
    }
}

// Update on scroll
window.addEventListener('scroll', updateActiveDot);

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link.
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

//Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

//Initialize active dot & subcategory logic
document.addEventListener('DOMContentLoaded', () => {

    if (dots.length > 0) dots[0].classList.add('active');

    /* =================SUBCATEGORY DROPDOWN (UP/DOWN LOGIC) ================= */

    const subcategoryContainers = document.querySelectorAll('.subcategory-container');

    subcategoryContainers.forEach(container => {
        const button = container.querySelector('.btn-subcategory');
        const dropdown = container.querySelector('.subcategory-list');
        const card = container.closest('.program-card');

        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const isOpen = container.classList.contains('active');

            //Close all dropdowns first
            subcategoryContainers.forEach(c => {
                c.classList.remove('active');
                const cCard = c.closest('.program-card');
                if (cCard) cCard.style.zIndex = '1';
            });

            if (!isOpen) {
                // Show dropdown to measure it
                dropdown.style.display = 'block';
                dropdown.style.visibility = 'hidden';

                const dropdownRect = dropdown.getBoundingClientRect();
                const buttonRect = button.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                //Reset visibility
                dropdown.style.visibility = '';
                dropdown.style.display = '';

                // Calculate if dropdown would go below viewport
                const spaceBelow = viewportHeight - buttonRect.bottom;
                const wouldGoBottom = spaceBelow < dropdownRect.height + 20;

                if (wouldGoBottom) {
                    // Position above the button
                    dropdown.style.bottom = '100%';
                    dropdown.style.top = 'auto';
                    dropdown.style.marginBottom = '8px';
                    dropdown.style.marginTop = '0';
                } else {
                    // Position below the button
                    dropdown.style.top = '100%';
                    dropdown.style.bottom = 'auto';
                    dropdown.style.marginTop = '8px';
                    dropdown.style.marginBottom = '0';
                }

                // Open the dropdown
                container.classList.add('active');
                // Increase z-index of the card
                if (card) card.style.zIndex = '1000';
            }
        });
    });

// Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.subcategory-container')) {
            subcategoryContainers.forEach(container => {
                container.classList.remove('active');
                const card = container.closest('.program-card');
                if (card) card.style.zIndex = '1';
            });
        }
    });

// Close dropdown when clicking a subcategory item
    document.querySelectorAll('.subcategory-list li').forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const container = this.closest('.subcategory-container');
            const card = this.closest('.program-card');

            container.classList.remove('active');
            if (card) card.style.zIndex = '1';
        });
    });

//Achieveents

    const statsTabs = document.querySelectorAll('.stats-tab');
    statsTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Initialize Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');

                // Remove observer after animation is triggered to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    function updateActiveDot() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        dots.forEach(dot => dot.classList.remove('active'));

        if (current) {
            const activeDot = document.querySelector(`.dot[data-section="${current}"]`);
            if (activeDot) activeDot.classList.add('active');
        } else {
            // If no section is active (at the very top), make the first dot active
            if (dots.length > 0) {
                dots[0].classList.add('active');
            }
        }
    }
    updateActiveDot();
    window.addEventListener('resize', () => {
        updateActiveDot();
    });
});