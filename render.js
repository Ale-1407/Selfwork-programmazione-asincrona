import get_products from "./api.js";

const create_card = async () =>{
    const products = await get_products();
    products.forEach((el) => {
        const div = document.querySelector('.products-box');
        div.innerHTML += `
            <div class="card m-1" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-name">${el.name}</h5>
                    <h6 class="card-category mb-2 text-body-secondary">Categoria: ${el.category}</h6>
                    <p class="card-price">Prezzo: ${el.price.toFixed(2)} €</p>
                </div>
            </div>
        `;      

    });
}

create_card();

