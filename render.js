import get_products from "./api.js";

const create_card = async () =>{
    const products = await get_products();
    products.forEach((el) => {
        const div = document.querySelector('.container_products');
        div.innerHTML += `
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text m-0 p-0">Categoria: ${el.category}</p>
                <p class="card-text pb-3">Prezzo: ${el.price} €</p>
            </div>
        `;      

    });
}

create_card();