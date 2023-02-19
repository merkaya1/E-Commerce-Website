const searchFunc = (data) => {
  console.log(data);
  const modalWrapper = document.querySelector('.results');
  let result = '';
  data.map((product) => {
    result += `
    <a href="#" class="result-item" data-id=${product.id}>
            <img src=${product.img.singleImage} class="search-thumb" alt="" />
            <div class="search-info">
              <h4>${product.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${product.price.newPrice}</span>
            </div>
          </a>
    `;
    modalWrapper.innerHTML = result;
    productRoute();
  });

  function productRoute() {
    const productItem = document.querySelectorAll('.result-item');
    console.log(productItem);
    productItem.forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        localStorage.setItem('productId', JSON.stringify(id));
        window.location.href = 'single-product.html';
      });
    });
  }

  const searchProduct = () => {
    const searchInput = document.querySelector('.search-form input');

    searchInput.addEventListener('input', function () {
      let filtered = data.filter((product) => product.name.toLowerCase().includes(this.value.trim().toLowerCase()));
      console.log(this.value);
      console.log(filtered);
      let result = '';
      if (filtered.length == 0) {
        modalWrapper.style.gridTemplateColumns = '1fr';
        modalWrapper.style.textAlign = 'center';
        result = `
        😔Aradığınız Ürün Bulunamadı😔
        `;
        modalWrapper.innerHTML = result;
      } else if (filtered.length < 2) {
        modalWrapper.style.gridTemplateColumns = '1fr';
        filtered.map((product) => {
          result += `
            <a href="#" class="result-item" data-id=${product.id}>
                <img src=${product.img.singleImage} class="search-thumb" alt="" />
                <div class="search-info">
                    <h4>${product.name}</h4>
                    <span class="search-sku">SKU: PD0016</span>
                    <span class="search-price">$${product.price.newPrice}</span>
                 </div>
            </a>
    `;
        });
      } else {
        filtered.map((product) => {
          result += `
            <a href="#" class="result-item" data-id=${product.id}>
                <img src=${product.img.singleImage} class="search-thumb" alt="" />
                <div class="search-info">
                    <h4>${product.name}</h4>
                    <span class="search-sku">SKU: PD0016</span>
                    <span class="search-price">$${product.price.newPrice}</span>
                 </div>
            </a>
    `;
        });
      }

      modalWrapper.innerHTML = result;
      productRoute();
    });
  };

  searchProduct();
};

export default searchFunc;
