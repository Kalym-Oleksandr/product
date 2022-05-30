(async function () {

    function renderProducts(products) {
        const productsContainer = document.querySelector('.multiple-items');
        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="multiple-items-cabernet">
                    <img src="${product.imgUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <button>Buy - ${product.price}</button>
            </div>
            `;
        }
    }

    const response = await fetch('/products.json');
    const products = await response.json();

    renderProducts(products);

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
