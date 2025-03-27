// Main JavaScript file for Devdactyl website
document.addEventListener('DOMContentLoaded', () => {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize header scroll effect
  initHeaderScroll();
  
  // Initialize smooth scroll for navigation links
  initSmoothScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (!mobileMenuBtn || !navLinks) return;
  
  mobileMenuBtn.addEventListener('click', () => {
      // Toggle active class on button
      mobileMenuBtn.classList.toggle('active');
      
      // Toggle mobile menu visibility
      navLinks.classList.toggle('active');
      
      // Animate the hamburger icon
      const spans = mobileMenuBtn.querySelectorAll('span');
      
      if (mobileMenuBtn.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
          
          // Show the nav links as a dropdown
          navLinks.style.display = 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '80px';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.padding = '1rem';
          navLinks.style.backgroundColor = 'var(--color-bg)';
          navLinks.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
          
          // Animate each link
          const links = navLinks.querySelectorAll('.nav-link');
          links.forEach((link, index) => {
              link.style.margin = '0.5rem 0';
              link.style.opacity = '0';
              link.style.transform = 'translateY(-10px)';
              setTimeout(() => {
                  link.style.transition = 'all 0.3s ease';
                  link.style.opacity = '1';
                  link.style.transform = 'translateY(0)';
              }, 100 * index);
          });
      } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
          
          // Hide the nav links with animation
          const links = navLinks.querySelectorAll('.nav-link');
          links.forEach((link) => {
              link.style.opacity = '0';
              link.style.transform = 'translateY(-10px)';
          });
          
          setTimeout(() => {
              navLinks.style.display = '';
              navLinks.style.flexDirection = '';
              navLinks.style.position = '';
              navLinks.style.top = '';
              navLinks.style.left = '';
              navLinks.style.width = '';
              navLinks.style.padding = '';
              navLinks.style.backgroundColor = '';
              navLinks.style.boxShadow = '';
              
              links.forEach((link) => {
                  link.style.margin = '';
                  link.style.opacity = '';
                  link.style.transform = '';
                  link.style.transition = '';
              });
          }, 300);
      }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
      if (navLinks.classList.contains('active') && 
          !navLinks.contains(event.target) && 
          !mobileMenuBtn.contains(event.target)) {
          mobileMenuBtn.click();
      }
  });
  
  // Close mobile menu when resizing window to desktop
  window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && navLinks.classList.contains('active')) {
          mobileMenuBtn.click();
      }
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (!header) return;
  
  let lastScrollTop = 0;
  const scrollThreshold = 50;
  
  window.addEventListener('scroll', () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add shadow and reduce height when scrolling down
      if (currentScrollTop > scrollThreshold) {
          header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          header.style.height = '70px';
      } else {
          header.style.boxShadow = 'none';
          header.style.height = '80px';
      }
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollTop > lastScrollTop && currentScrollTop > 300) {
          header.style.transform = 'translateY(-100%)';
      } else {
          header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = currentScrollTop;
  });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          
          // Ignore if the href is just "#"
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              e.preventDefault();
              
              // Get the header height for offset
              const headerHeight = document.querySelector('.header').offsetHeight;
              
              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
              const navLinksContainer = document.querySelector('.nav-links');
              
              if (mobileMenuBtn && navLinksContainer && navLinksContainer.classList.contains('active')) {
                  mobileMenuBtn.click();
              }
              
              // Update URL
              history.pushState(null, null, targetId);
          }
      });
  });
}

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}` || 
          (link.getAttribute('href') === '/' && currentSection === '')) {
          link.classList.add('active');
      }
  });
});

// Check for dark mode preference
function initDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDarkMode) {
      document.documentElement.classList.add('dark-mode');
  }
  
  // Add dark mode toggle functionality if needed
}