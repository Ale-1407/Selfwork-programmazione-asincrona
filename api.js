// recuperare i dati dal json

const get_products = async () => {
    const promise = await fetch('./products.json');
    const json = await promise.json();
    return json;
}

export default get_products;
