'use strict';

var leftImageEl = document.getElementById('left');
var centerImageEl = document.getElementById('Center');
var rightImageEl = document.getElementById('right');

var containerEl = document.getElementById('image_container');


var allProducts = [];

//constructor function of displayed items giving it a name, an image, a view count, and a vote count, then pushes it
function Product(name) {
  this.name = name;
  this.path = `Assets/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}
// making new image object which populates
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product ('wine-glass');
function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  //create an array to hold unique indexes
  var uniquePicsArray = [];
  //assign values to index 0 , 1 and 2
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  uniquePicsArray[2] = makeRandom();  
  while(uniquePicsArray[0] === uniquePicsArray[1]) {
    console.error('Duplicate found, Re-rolling!');
    uniquePicsArray[1] = makeRandom();
  }
  while(uniquePicsArray[0] === uniquePicsArray[2]) {
      uniquePicsArray[2] = makeRandom();
  }

  console.log(uniquePicsArray);
  //add views here
  allProducts[uniquePicsArray[0]].views++ ;
  //get a random index
  //display a product whose index is the random number
  leftImageEl.src = allProducts[uniquePicsArray[0]].path;
  leftImageEl.name = allProducts[uniquePicsArray[0]].name;
  leftImageEl.title = allProducts[uniquePicsArray[0]].name;
  console.log(allProducts[uniquePicsArray[1]].path);
//   allProducts[uniquePicsArray[1]].views++ ;
//   centerImageEl.src = allProducts[uniquePicsArray[1]].path;
//   centerImageEl.name = allProducts[uniquePicsArray[1]].name;
//   centerImageEl.title = allProducts[uniquePicsArray[1]].name;

  allProducts[uniquePicsArray[2]].views++ ;
  rightImageEl.src = allProducts[uniquePicsArray[2]].path;
  rightImageEl.name = allProducts[uniquePicsArray[2]].name;
  rightImageEl.title = allProducts[uniquePicsArray[2]].name;
  
  allProducts[uniquePicsArray[1]].views++ ;
    rightImageEl.src = allProducts[uniquePicsArray[1]].path;
    rightImageEl.name = allProducts[uniquePicsArray[1]].name;
    rightImageEl.title = allProducts[uniquePicsArray[1]].name;
  
}

// function updateStorageImage() {
//     var jsonString = JSON.stringify(Products.allProducts);
//     localStorage.setItem('product', jsonString);
  
//   }
//   // add to local storage after i
//   function retrieveData() {
//     var data = localStorage.getItem('product');
//     if (data) {
//       var parsedData = JSON.parse(data);
//       Products.allProducts = parsedData;
//       renderImages();
//     } else {
//       renderImages();
//     }
//     // console.log(renderImages);
//   }




// Adds the votes upon detecting click
function handleClick() {
  var chosenImage = event.target.title;
  for( var i = 0; i < allProducts.length; i++ ) {
    if(allProducts[i].name === chosenImage) {
      allProducts[i].votes++;
    //   updateStorageImage();
    }
  }
  
  renderProducts();
}

containerEl.addEventListener('click', handleClick);

renderProducts();