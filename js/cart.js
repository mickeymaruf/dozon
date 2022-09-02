const cartArray = [];

// returning if the product is already exist in the cartArray
function isExistsProduct(cartArray, product_name){
    for(const product of cartArray){
        if(product.product_name == product_name){
            return product;
        }
    }
}

function displayCartItems(cartItems){
    const tableBody = document.getElementById("cart-products");
    tableBody.innerHTML = ``;

    let product_quantity_count = 0;
    let totalPrice = 0;

    for (const product of cartItems) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="${product.product_image_url}" alt="${product.product_name}" />
                    </div>
                    </div>
                </div>
            </td>
            <td>
                ${product.product_name}
            </td>
            <td class="text-center">
                <input class="bg-base-300 rounded w-10 p-1 font-medium text-center" type="number" value="${product.product_quantity}" disabled>
            </td>
            <td>
                <span class="badge badge-ghost badge-sm text-center">${product.product_price}$</span>
                <span id="remove-cartItem" class="ml-5 cursor-pointer">❌</span>
            </td>
        </tr>
        `;
        tableBody.appendChild(tr);

        // updating cart product count
        product_quantity_count += product.product_quantity;
        document.getElementById("total-cart-items").innerText = product_quantity_count;
        // 
        totalPrice += product.product_price * product.product_quantity;
        document.getElementById("total-price").innerText = totalPrice;
    }

    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}

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
    
    const existProduct = isExistsProduct(cartArray, product_name);

    if(existProduct){
        existProduct.product_quantity++;
    }else{
        cartArray.push(product);
    }

    // adding products as cartItem
    displayCartItems(cartArray);

    if(cartArray.length >= 1){
        document.getElementById("t-foot").style.visibility = "visible";
    }
}


// remove product added but not working
document.getElementById("cart-products").addEventListener('click', (e)=>{
    if(e.target.id === "remove-cartItem"){
        const tr = e.target.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    }
})