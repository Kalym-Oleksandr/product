(function (){
    const slides = document.querySelectorAll('.multiple-items-cabernet');
  
  
      let currentSlide = 0; 
  
      function renderCarrousel() {
          const carrouselContainer = document.querySelector('.main-products-carrousel');
          carrouselContainer.innerHTML = slides[currentSlide].outerHTML;
      }
  
      function nextSlide() {
          currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
          renderCarrousel();
      }
  
      setInterval(nextSlide, 3000);
      renderCarrousel();
  })();
