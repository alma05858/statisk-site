console.log("page loaded...");

const category = new URLSearchParams(window.location.search).get("category");
console.log("category", category);
let allData;
const productcontainer = document.querySelector(".product-container");

const overskrift = document.querySelector("h1");
overskrift.innerHTML = category;

document.querySelectorAll(".buttons button").forEach((btn) => {
  console.log("BTN", btn);

  btn.addEventListener("click", clickButton);
});

function clickButton(evt) {
  console.log("ggggggg", evt.currentTarget.dataset.brandname);
  showFilter(evt.currentTarget.dataset.brandname);
}

function showFilter(filter) {
  if (filter === "All") {
    showProducts(allData);
    console.log("alle på filter");
  } else {
    const filteredData = allData.filter((product) => product.brandname === filter);
    console.log("mere data med filte", filteredData);
    showProducts(filteredData);
  }

  console.log("showfilter", filter);
  console.log(allData.filter((product) => product.brandname === filter));
}

getData(`https://kea-alt-del.dk/t7/api/products?category=${category}`);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });
}

function showProducts(products) {
  console.log("products: ", products);

  productcontainer.innerHTML = "";

  products.forEach((product) => {
    // console.log("productname: ", product.productdisplayname);
    productcontainer.innerHTML += `
         <article class="card ${product.soldout ? "soldOut" : ""} ${product.discount ? "discount" : ""}" >

    <a href="produkt.html?id=${product.id}">
      <div class="imageContainer">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        ${product.soldout ? `<p class="soldout-badge">SOLD OUT</p>` : ``}
      </div>
          <h2>${product.productdisplayname}</h2>
          <h3>${product.price} DKK</h3>
           <div class="discounted_container">
        <p>
          Now DKK <span>${product.price - (product.price * product.discount) / 100}</span>,-
        </p>
        <p>
          <span>${product.discount}</span> %
        </p>
      </div>
           <p>Read more</p>
        </a>
      </article>`;
  });
}
