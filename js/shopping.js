const cartArray = [];

function addToCart(element) {
  //   console.log(element.parentNode.parentNode.children);
  //   console.log(element.parentNode.parentNode.children[0].innerText);
  //   console.log(element.parentNode.parentNode.children[1].children[0].innerText);

  const productName = element.parentNode.parentNode.children[0].innerText;
  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  const objProduct = {
    productName: productName,
    productPrice: parseFloat(productPrice),
  };

  cartArray.push(objProduct);
  document.getElementById("Total-added-product").innerText = cartArray.length;
}
