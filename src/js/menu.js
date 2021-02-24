 (() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
    
  })();

  /*(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.getAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
  
      $('.header, .hero, .product-section, .section-tradition').click(function () {
        mobileMenuRef.classList.remove('is-open'),
          menuBtnRef.classList.remove('is-open');
      });
    });
  })();*/