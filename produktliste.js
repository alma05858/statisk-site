console.log("page loaded...");
const productcontainer = document.querySelector(".product-container");

getData("https://kea-alt-del.dk/t7/api/products");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products: ", products);
  products.forEach((product) => {
    console.log("productname: ", product.productdisplayname);
    productcontainer.innerHTML += `<article>
    <div>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt=" placeholder">
    </div>
    <h2>${product.productdisplayname}</h2>
    <h3>${product.price}</h3>

    <a href="produkt.html">
        <h4>Read More</h4>
    </a>

</article>`;
  });
}
