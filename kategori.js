fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(oneCategory);
}

function oneCategory(cat) {
  console.log("oneCategory");
  //fang template
  const template = document.querySelector("template").content;

  //clone
  const clone = template.cloneNode(true);

  //ændre indhold
  clone.querySelector("h2").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  //append/paste
  document.querySelector("main section").appendChild(clone);
}
