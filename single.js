console.log("page loading....");

const id = new URLSearchParams(window.location.search).get("id");
const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;

console.log("product ", productUrl);

function getData() {
  console.log("get data");
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("show data:", data);
  document.querySelector("#produkt").innerHTML = `
  <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="ProducImg"> <h1>${data.productdisplayname}</h1> 
  <p>${data.price}</p>             <label for="size">Choose size:</label>
            <select id="size" name="size">
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">X-Large</option>
            </select>
            <Button class="button" >Add to basket</Button>`;
}

getData();
