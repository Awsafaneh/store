// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Contact form submission (only relevant for contact.html)
// Ensure this script is only loaded or this part is executed on contact.html
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server (e.g., via Fetch API)
        console.log('Form Data:', data);

        // Show success message
        alert('تم إرسال رسالتكم بنجاح! سنتواصل معكم قريباً.');

        // Reset form
        this.reset();
    });
}

// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all cards on all pages that might have them
    const cards = document.querySelectorAll('.product-card, .catalog-item, .contact-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Set active link in navigation based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});
