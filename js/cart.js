const cartArray = [];

function addToCart(element) {
    const cardDiv = element.parentNode.parentNode.parentNode.children;
    const product_name = cardDiv[1].children[0].children[0].children[0].innerText;
    const product_price = cardDiv[1].children[2].children[0].children[0].innerText;
    const product_image_url = cardDiv[0].children[0].getAttribute("src");

    const product = {
        product_name: product_name,
        product_price: parseFloat(product_price),
        product_image_url: product_image_url,
        product_quantity: 1
    }

    cartArray.push(product)
    console.log(cartArray);
}