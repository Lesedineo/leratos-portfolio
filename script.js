// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Active link highlighting on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Simple validation
    if (name && email && message) {
      // Show success message
      alert(
        `Thank you, ${name}! Your message has been sent. I'll get back to you soon!`,
      );

      // Reset form
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideInLeft 0.8s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.animation = "none";
  observer.observe(card);
});

// Image Modal/Lightbox Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

// Initialize lightbox
function initLightbox() {
  console.log("Initializing lightbox...");
  
  // Get all project images
  const projectImages = document.querySelectorAll(".project-image-placeholder img");
  console.log("Found " + projectImages.length + " project images");
  
  projectImages.forEach((img, index) => {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Image " + index + " clicked");
      
      modal.classList.add("active");
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = "hidden";
    });
  });
  
  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  
  // Click outside to close
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Escape key to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLightbox);
} else {
  initLightbox();
}
