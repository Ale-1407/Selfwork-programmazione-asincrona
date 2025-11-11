// recuperare i dati dal json

fetch('./products.json')
.then(response => response.json())
.then(data => console.log(data));