// Script.js

var storage = window.localStorage;

//how to check before your initial fetch request to see if something is first in local storage
if (storage.getItem('arrayInLS') == null) {
  window.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(array => storage.setItem('arrayInLS', JSON.stringify(array))) //downloads content of the url
  });
}

window.onload = () => {
var productList = document.getElementById("product-list");
var i;
for (i = 0; i < 20; i++) {
  var product = document.createElement('product-item'); 
  
  var title = product.shadowRoot.getElementById('title');
  title.textContent = JSON.parse(retrievedObject)[i].title;
  var price = product.shadowRoot.getElementById('price');
  price.textContent = "$"+JSON.parse(retrievedObject)[i].price;
  var image = product.shadowRoot.getElementById('image'); 
  image.setAttribute('src', JSON.parse(retrievedObject)[i].image);
  productList.appendChild(product); 
}
}


// Retrieve the object from storage
var retrievedObject = localStorage.getItem('arrayInLS');
//console.log('retrievedObject: ', JSON.parse(retrievedObject));

