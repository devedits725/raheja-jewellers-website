// Smooth Scroll to Catalogue
function scrollToCatalogue() {
    const catalogueSection = document.getElementById('catalogue');
    catalogueSection.scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');

mobileToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileToggle.querySelectorAll('span');
    if (navList.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation - Optimized
let ticking = false;

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Throttle scroll events for better performance
function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            revealOnScroll();
            ticking = false;
        });
        ticking = true;
    }
}

// Initial reveal check
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', handleScroll);

// Image Popup Functions
function openImagePopup(imageSrc, imageTitle) {
    console.log('Opening popup with image:', imageSrc);
    
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('popupTitle');
    const popupLoading = document.getElementById('popupLoading');
    
    // Show popup with loading state
    popup.classList.add('active');
    popupLoading.style.display = 'flex';
    popupImage.style.display = 'none';
    popupTitle.textContent = imageTitle;
    
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
    
    // Clear previous image
    popupImage.src = '';
    
    // Create new image to preload
    const tempImg = new Image();
    
    tempImg.onload = function() {
        console.log('Image loaded successfully:', imageSrc);
        popupImage.src = imageSrc;
        popupImage.alt = imageTitle;
        popupLoading.style.display = 'none';
        popupImage.style.display = 'block';
    };
    
    tempImg.onerror = function() {
        console.error('Failed to load image:', imageSrc);
        popupLoading.innerHTML = '<p style="color: #ff6b6b;">Failed to load image. Please try again.</p>';
        setTimeout(() => {
            closeImagePopup();
        }, 2000);
    };
    
    // Start loading
    tempImg.src = imageSrc;
}

function closeImagePopup() {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const popupLoading = document.getElementById('popupLoading');
    
    popup.classList.remove('active');
    
    // Reset loading state
    popupLoading.style.display = 'flex';
    popupLoading.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';
    popupImage.style.display = 'none';
    popupImage.src = '';
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImagePopup();
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Stagger animation for product cards - Removed for better performance
// Performance optimized version
window.addEventListener('load', () => {
    // Simpler load handler
    revealOnScroll();
});

// Prevent default behavior for View Details buttons
document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Add loading optimization for images - prevent layout shift
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.product-image');
    
    images.forEach(img => {
        // Set loading attribute for better performance
        img.loading = 'lazy';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.3s ease';
                img.style.opacity = '1';
            });
        }
    });
});

// Console welcome message
console.log('%cWelcome to Raheja Jewellers', 'color: #E1C16E; font-size: 24px; font-weight: bold;');
console.log('%cCrafting Excellence Since Generations', 'color: #1a2332; font-size: 14px;');
