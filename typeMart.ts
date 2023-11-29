import products from "./products";

function purchaseFlow(product: string): void {
  const productName = product;
  const currentProduct = products.filter(
    (product) => product.name === productName
  )[0];

  console.log(currentProduct);

  if (currentProduct.preOrder === "true") {
    console.log(
      "This product is on preorder, we will send a message later when it ships."
    );
  }
  return 
}

purchaseFlow("beanie");
purchaseFlow("fanny pack");