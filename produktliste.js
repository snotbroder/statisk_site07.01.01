const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(listProducts);
}

function listProducts(oneProduct) {
  console.log("listProduct");
  const product = document.querySelector("template").content;

  //lave kopi
  const myClone = product.cloneNode(true);

  //ændre indholdet
  myClone.querySelector(".myProductName").textContent = oneProduct.productdisplayname;
  myClone.querySelector(".myPrice span").textContent = oneProduct.price;
  myClone.querySelector(".brand").textContent = oneProduct.brandname;
  myClone.querySelector(".discount").textContent = `Spar ${oneProduct.discount}%`;
  //   myClone.querySelector(".discount span").textContent = oneProduct.discount;

  if (oneProduct.soldout) {
    //udsolgt
    myClone.querySelector("article").classList.add("udsolgt");
    myClone.querySelector(".udsolgtbanner").classList.add("display");

    //vis ikke rabat

    myClone.querySelector(".rabatbanner").classList.add("hide");
    myClone.querySelector(".discount").classList.add("hide");
  }

  //Beregn rabatPrice

  if (oneProduct.discount) {
    oneProduct.rabatPrice = oneProduct.price * (1 - oneProduct.discount / 100);
    //rabat
    myClone.querySelector(".myPrice").classList.add("rabat");
    myClone.querySelector(".rabatbanner").classList.add("display");
    // myClone.querySelector(".discount").classList.add("display");
    myClone.querySelector(".rabatPrice").classList.add("display");
    myClone.querySelector(".discount").textContent = `NYPRIS ${oneProduct.rabatPrice},-`;
  }

  console.log("paste");
  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}

//[{ id: 1163, gender: "Men", category: "Apparel", subcategory: "Topwear", articletype: "Tshirts", season: "Summer", productionyear: 2011, usagetype: "Sports", productdisplayname: "Sahara Team India Fanwear Round Neck Jersey", price: 895, discount: null, brandname: "Nike", soldout: 0 }];
