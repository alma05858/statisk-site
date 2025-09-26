console.log("page loading....");

const id = 1536;
const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;

console.log("product ", productUrl);

function getData() {
  console.log("get data");
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("show data:", data);

  document.querySelector(".produkt").innerHTML = `
  <img src="https://kea-alt-del.dk/t7/images/webp/640/1536.webp" alt="ProducImg"> <h1>${data.productdisplayname}</h1> <p>Add to basket</p>`;
}

getData();
