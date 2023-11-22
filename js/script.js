import { data } from "./../data.js";

function displayData(data) {
  let product = document.querySelector(".products");

  data.map((ele, idx, arr) => {
    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "contentDiv");

    let productNameTag = document.createElement("h1");
    productNameTag.innerText = ele.product;
    productNameTag.setAttribute("class", "productName");

    let typeDataTag = document.createElement("h2");
    typeDataTag.innerText = ele.type;
    typeDataTag.setAttribute("class", "typeData");

    let colorDataTag = document.createElement("h4");
    colorDataTag.innerText = ele.color;
    colorDataTag.setAttribute("class", "color");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");

    let imagesTag = document.createElement("img");
    imagesTag.setAttribute("src", ele.img);
    imagesTag.setAttribute("class", "produdctImg");

    imgDiv.append(imagesTag);

    let priceData = document.createElement("p");
    priceData.innerText = `price ₹ ${ele.price}`;
    priceData.setAttribute("class", "priceData");

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "add";
    addToCartBtn.setAttribute("class", "addBtn");

    contentDiv.append(
      productNameTag,
      typeDataTag,
      colorDataTag,
      imgDiv,
      priceData,
      addToCartBtn
    );
    product.append(contentDiv);
  });
}

displayData(data);
