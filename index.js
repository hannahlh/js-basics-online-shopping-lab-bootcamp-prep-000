var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item = generateCartItem(item);
 getCart().push(item)
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  // write your code here
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(item) {
  // write your code here
  var itemToRemove = seachCartForItemToRemove(item)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  // write your code here
}

//helper functions

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function search CartForItemToRemove(item) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].item === item) {searchResult = getCart()[i]}
  }
  return searchResult
}