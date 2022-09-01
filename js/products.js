const products = [
    {
        name: "Shoes",
        desc: "If a dog chews shoes whose shoes does he choose?",
        price: 999,
        image: "./images/shoes.jpg",
        status: "new"
    },
    {
        name: "Phone",
        desc: "If a dog chews shoes whose shoes does he choose?",
        price: 399,
        image: "./images/phone.webp",
        status: "new"
    },
    {
        name: "Watch",
        desc: "If a dog chews shoes whose shoes does he choose?",
        price: 150,
        image: "./images/watch.png",
        status: "new"
    },
    {
        name: "Mechanical Keyboard",
        desc: "You can feel the press and other can hear the sound!",
        price: 700,
        image: "https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        status: ""
    },
    {
        name: "Golf Bundle",
        desc: "Amazing bundle for you holiday!",
        price: 450,
        image: "https://images.unsplash.com/photo-1593111774642-a746f5006b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        status: ""
    },
]

const productContainer = document.getElementById("products-container");

products.forEach(product => {
    const {name, desc, image, status, price} = product;
    const card = document.createElement("div");
    card.classList.add("card", "w-full", "bg-base-100", "shadow-xl");
    card.innerHTML = `
    <figure><img class="w-full" src="${image}" alt="Shoes" /></figure>
    <div class="card-body p-5">
        <h2 class="card-title flex">
        <span>
            <span>${name}</span>
            ${status === "new" ? '<div class="badge badge-secondary uppercase">NEW</div>' : ""}
        </span>
        </h2>
        <p>${desc}</p>
        <div class="card-actions justify-end flex items-center">
        <p class="text-xl font-medium text-white"><span>${price}</span>$</p>
        <button class="btn btn-primary" onclick="addToCart(this)">Buy Now</button>
        </div>
    </div>
    `;
    productContainer.appendChild(card);
})