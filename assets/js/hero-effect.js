// Interactive highlight effect for the hero section
document.addEventListener('DOMContentLoaded', () => {
  const highlightElements = document.querySelectorAll('.highlight');
  
  // Mouse move animation for each highlight element
  highlightElements.forEach(element => {
      // Add a span inside the highlight for the glowing effect
      const glowElement = document.createElement('span');
      glowElement.classList.add('highlight-glow');
      element.appendChild(glowElement);
      
      // Initial style for the glow element
      element.style.position = 'relative';
      element.style.zIndex = '1';
      
      glowElement.style.position = 'absolute';
      glowElement.style.top = '0';
      glowElement.style.left = '0';
      glowElement.style.width = '100%';
      glowElement.style.height = '100%';
      glowElement.style.background = 'radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.8), transparent 60%)';
      glowElement.style.opacity = '0';
      glowElement.style.zIndex = '-1';
      glowElement.style.transition = 'opacity 0.3s ease';
      
      // Use CSS to add a subtle highlight under the text
      const afterElement = document.createElement('span');
      afterElement.classList.add('highlight-underline');
      element.appendChild(afterElement);
      
      afterElement.style.position = 'absolute';
      afterElement.style.bottom = '0';
      afterElement.style.left = '0';
      afterElement.style.width = '100%';
      afterElement.style.height = '40%';
      afterElement.style.background = 'rgba(99, 102, 241, 0.2)';
      afterElement.style.zIndex = '-2';
      afterElement.style.transform = 'skew(-12deg)';
  });
  
  // Add mousemove event to the document
  document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e;
      
      highlightElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Distance from mouse to center of element
          const distance = Math.sqrt(
              Math.pow(clientX - centerX, 2) + 
              Math.pow(clientY - centerY, 2)
          );
          
          // Check if mouse is close to the element
          const isClose = distance < 300;
          
          // Find the glow element within this highlight
          const glowElement = element.querySelector('.highlight-glow');
          
          if (isClose) {
              // Show glow and position it based on mouse
              glowElement.style.opacity = '1';
              
              // Calculate the position of the mouse relative to the element
              const mouseX = clientX - rect.left;
              const mouseY = clientY - rect.top;
              
              // Update the radial gradient position
              glowElement.style.background = `radial-gradient(
                  circle at ${mouseX}px ${mouseY}px, 
                  rgba(99, 102, 241, 0.8), 
                  transparent 60%
              )`;
          } else {
              // Hide glow when mouse is far away
              glowElement.style.opacity = '0';
          }
      });
  });
  
  // Add hover effect to enhance the glow when directly hovering
  highlightElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
          const glowElement = element.querySelector('.highlight-glow');
          glowElement.style.opacity = '1';
          
          // Make the underline more pronounced
          const underline = element.querySelector('.highlight-underline');
          underline.style.height = '45%';
          underline.style.background = 'rgba(99, 102, 241, 0.3)';
      });
      
      element.addEventListener('mouseleave', () => {
          const underline = element.querySelector('.highlight-underline');
          underline.style.height = '40%';
          underline.style.background = 'rgba(99, 102, 241, 0.2)';
      });
  });
  
  // Add parallax effect to the hero section
  const heroSection = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
          heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
          heroContent.style.opacity = 1 - (scrollPosition * 0.002);
      }
  });
});