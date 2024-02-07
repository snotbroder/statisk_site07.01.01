fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(oneCategory);
}

function oneCategory(cat) {
  console.log("oneCategory");
  //fang template
  const template = document.querySelector("#cataList1").content;

  //clone
  const clone = template.cloneNode(true);

  //ændre indhold
  clone.querySelector("h2").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  const urlParamsCat = new URLSearchParams(window.location.search);
  const category = urlParamsCat.get("category");
  //-ændre billede
  //clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${}.webp`;

  //append/paste
  https: document.querySelector("main .cataList1").appendChild(clone);
}

//BRANDS
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((response) => response.json())
  .then(showBrandCategories);

function showBrandCategories(brands) {
  brands.forEach(oneBrandCategory);
}

function oneBrandCategory(brand) {
  console.log("oneBrandCategory");
  //fang template
  const template = document.querySelector("#cataList2").content;

  //clone
  const clone = template.cloneNode(true);

  //ændre indhold
  clone.querySelector("h2").textContent = brand.brandname;
  clone.querySelector("a").href = `produktliste.html?brands=${brand.brandname}`;

  const urlParamsBrand = new URLSearchParamsBrands(window.location.search);
  const brands = urlParamsBrand.get("brandname");
  //-ændre billede
  //clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${}.webp`;

  //append/paste
  document.querySelector("main .cataList2").appendChild(clone);
}
