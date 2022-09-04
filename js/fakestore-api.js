const warningMsg = document.getElementById("nothing-found");
const spinner = document.getElementById("spinner");

const loadProduct = async () => {
    spinner.classList.remove("hidden");
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}

const showProduct = (products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const {title: name, image, description: desc, category: cat, price} = product;
        const card = document.createElement("div");
        card.classList.add("card", "w-96", "bg-base-100", "shadow-xl");
        card.innerHTML = `
        <figure class="bg-white"><img class="w-48 p-5 h-60 object-contain" src="${image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
            ${name}
            </h2>
            <p>${desc.slice(0,100)}</p>
            <div class="flex items-center justify-between mt-3">
                <h4 class="text-3xl font-medium">$${price}</h4>
                <div class="badge badge-outline">${cat}</div> 
            </div>
        </div>
        `;
        productsContainer.appendChild(card);
    })
    spinner.classList.add("hidden");
}

const showData = async () => {
    const products = await loadProduct();
    // category
    const category = [];
    products.forEach(product => category.includes(product.category) === false ? category.push(product.category) : "");

    const categoryContainer = document.getElementById("category");
    category.forEach(cat_item => {
        const categoryItem = document.createElement("li");
        categoryItem.classList.add("tab", "tab-lg");
        categoryItem.setAttribute("onclick", `showProductByCategory("${cat_item}", this)`);
        categoryItem.innerText = cat_item;
        categoryContainer.appendChild(categoryItem);
    })

    // show products
    showProduct(products);
}

showData();

// show category
const showProductByCategory = async (category, element) => {
    warningMsg.classList.add("hidden");

    const products = await loadProduct();
    const productsByCategory = products.filter(product => product.category === category);

    // hovering category item
    const catLists = element.parentNode.children;
    for(const catList of catLists){
        catList.classList.remove("tab-active");
    }
    element.classList.add("tab-active")

    // show products
    showProduct(productsByCategory);
}


// search implementation
document.getElementById("search-input").addEventListener("keyup", async (e)=>{
    const products = await loadProduct();
    
    if(e.key === "Enter"){
        const search = e.target.value;
        e.target.value = "";
        const searchResultProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))

        searchResultProducts.length > 0 ? warningMsg.classList.add("hidden") : warningMsg.classList.remove("hidden");

        // show products
        showProduct(searchResultProducts);
    }
})