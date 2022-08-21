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
                <br>
                <span class="badge badge-ghost badge-sm">${product.product_price}$</span>
            </td>
            <td>
                <div class="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                    <input class="bg-base-600 rounded w-10 p-1 font-medium text-center" type="number" value="${product.product_quantity}" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </td>
            <th>
                <button class="btn btn-ghost btn-xs">Remove</button>
            </th>
        </tr>
        `;
        tableBody.appendChild(tr);
    }
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

    displayCartItems(cartArray);
}