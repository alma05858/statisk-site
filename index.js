console.log("page loaded");

const categoryListContainer = document.querySelector(".category_list_container");

getData("https://kea-alt-del.dk/t7/api/categories");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showCategories(data)));
}

function showCategories(categories) {
  console.log("show categories: ", categories);

  categories.forEach((category) => {
    console.log("Loopet", category);
    categoryListContainer.innerHTML += `
    
    <a href="produktliste.html?category=${category.category}">${category.category}</a>
`;
  });
}
