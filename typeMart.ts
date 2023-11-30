import products from "./products";

function purchaseFlow(product: string) {
  const productName = product;
  const currentProduct = products.filter(
    (product) => product.name === productName
  )[0];
  let shipping: number;
  let taxPercent: number;
  let taxTotal: number;
  let total: number;
  const shippingAddress: string = "18 Strawberry St. Norwalk, New York 06851";
  const price: number = Number(currentProduct.price);

  console.log(currentProduct, "\n");

  if (currentProduct.preOrder === "true") {
    console.log(
      "This product is on preorder. We will send a message later when it ships.",
      "\n"
    );
  }

  if (price >= 25) {
    shipping = 0;
    console.log("Whoa! Shipping is free for items $25 or over!", "\n");
  } else {
    shipping = 5;
  }

  if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  taxTotal = price * taxPercent;
  total = price + shipping + taxTotal;

  console.log(`Your total today is ${"$" + total}`);

  console.log(`
  Product Name: ${productName} 
  Shipping Address: ${shippingAddress} 
  Product Price: $${price.toFixed(2)} 
  Tax Total: $${taxTotal.toFixed(2)}
  Shipping: $${shipping.toFixed(2)}
  Total Amount Due: $${total.toFixed(2)}
  `);
}

purchaseFlow("tote bag");
purchaseFlow("beanie");
purchaseFlow("fanny pack");