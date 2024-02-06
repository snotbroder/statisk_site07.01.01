const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  //Produkttekst
  console.log(product);
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".subcategory").textContent = product.subcategory;
  //   document.querySelector(".productDescription").textContent = product.description;
  document.querySelector(".productPrice").textContent = product.price;
  document.querySelector(".productId").textContent = product.id;
  document.querySelector(".productBrand span").textContent = product.brandname;
  document.querySelector(".productDescription").textContent = product.description;

  document.querySelector(".brandBio span").textContent = product.brandbio;

  //Billeder
  document.querySelector(".productImage1").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".productImage2").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productImage3").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".brandImage").src = product.brandimage;

  //Links/kategorier
  document.querySelector(".l1 span").textContent = product.subcategory;
  document.querySelector(".l2 span").textContent = product.season;
  document.querySelector(".l3 span").textContent = product.gender;
  document.querySelector(".l4 span").textContent = product.usagetype;
  document.querySelector(".l5 span").textContent = product.brandname;
  document.querySelector(".l6 span").textContent = product.articletype;
}

//{"id":1525,"gender":"Unisex","category":"Accessories","subcategory":"Bags","articletype":"Backpacks","basecolour":"Navy Blue","season":"Fall","productionyear":2010,"usagetype":"Casual","productdisplayname":"Deck Navy Blue Backpack","parsed":1,"soldout":0,"relid":1525,"price":1299,"discount":55,"variantname":"Deck Backpack","brandname":"Puma","brandbio":"PUMA is the World's Fastest Sports Brand","brandimage":"http:\/\/assets.myntassets.com\/assets\/images\/2015\/11\/17\/11447736932686-113016-3ff8sf.jpg","agegroup":"Adults-Unisex","colour1":"NA","colour2":"NA","fashiontype":"Fashion","materialcaredesc":null,"sizefitdesc":null,"description":"<p>asfafaf<br> kasjhdkashd<\/p>","styledesc":null}
