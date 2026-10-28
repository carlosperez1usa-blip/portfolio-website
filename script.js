/**
 * Carlos Perez Portfolio - Interactive Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // 2. Track Tabs (Filter between Real Estate & Corporate IT)
  const tabButtons = document.querySelectorAll('.track-tab-btn');
  const trackSections = document.querySelectorAll('.track-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const targetTrack = button.getAttribute('data-track');

      trackSections.forEach(section => {
        if (targetTrack === 'all' || section.id === targetTrack) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // 3. Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value;

      // Friendly simulated confirmation with mailto trigger
      formFeedback.innerHTML = `Thank you, <strong>${name}</strong>! Your message regarding <em>${interest}</em> has been prepared. Opening your email app to send...`;
      formFeedback.className = 'form-feedback success';
      formFeedback.style.display = 'block';

      const mailtoLink = `mailto:carlosperez1usa@gmail.com?subject=${encodeURIComponent('Inquiry from Website: ' + interest + ' - ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nInterest: ' + interest + '\n\nMessage:\n' + message)}`;

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 800);

      contactForm.reset();
    });
  }
});

