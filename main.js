document.addEventListener('DOMContentLoaded', function() {

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      console.log('Form submitted:', { name, email, subject, message });

      const successAlert = document.getElementById('formSuccess');
      successAlert.style.display = 'block';

      contactForm.reset();

      setTimeout(() => {
        successAlert.style.display = 'none';
      }, 5000);
    });
  }

  const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const productCard = e.target.closest('.product-card');
      const productName = productCard.querySelector('.product-title').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;

      const originalText = button.textContent;
      button.textContent = 'Added!';
      button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

      console.log(`Added to cart: ${productName} - ${productPrice}`);

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
    });
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  const featureCards = document.querySelectorAll('.feature-card, .stat-card, .product-card');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';

        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  featureCards.forEach(card => {
    observer.observe(card);
  });

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = '';
    }

    lastScroll = currentScroll;
  });

  console.log('Aroma Coffee Website Loaded Successfully');
});
