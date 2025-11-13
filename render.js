import get_products from "./api.js";


const showLoader = () => {
    const loader = document.querySelector('.loader-background');
    loader.classList.remove('d-none');
};

const hideLoader = () => {
    const loader = document.querySelector('.loader-background');
    loader.classList.add('d-none');
};

const wait = (ms = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
};


const create_card = async () =>{
    showLoader();

    const div = document.querySelector('.products-box');
    div.innerHTML = "";

    const products = await get_products();

    await wait(1000);

    products.forEach((el) => {
        div.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-name">${el.name}</h5>
                    <h6 class="card-category mb-2 text-body-secondary">Categoria: ${el.category}</h6>
                    <p class="card-price">Prezzo: ${el.price.toFixed(2)} €</p>
                </div>
            </div>
        `;      
    });

    hideLoader();
}


const show_card_btn = document.querySelector('.show_card_btn');
show_card_btn.addEventListener('click', create_card);

