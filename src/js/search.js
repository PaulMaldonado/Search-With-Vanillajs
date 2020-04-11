const products = [
    { nombre: 'Manzana', valor: 24 },
    { nombre: 'Pera', valor: 30 },
    { nombre: 'Guajaba', valor: 50 },
    { nombre: 'Arroz', valor: 15 },
    { nombre: 'Naranja', valor: 40 }
]

const search = document.getElementById('search');
const buttonSearch = document.getElementById('button-search');
const result = document.getElementById('draw-result');

search.addEventListener('keyup', searchProducts);

function searchProducts(e) {
    
    for(let product of products) {
        const name = product.nombre.toLowerCase();
        const textUser = search.value.toLowerCase();

        result.innerHTML = ''

        if(name.indexOf(textUser) !== -1) {
            result.innerHTML += `
                <li class="list-group-item">Nombre: ${product.nombre} - Valor: ${product.valor}</li>

            `;
        }
    }

    if(result.innerHTML === '') {
        result.innerHTML += `
            <p>No se encontraron resultados</p>

        `;
    }
}

searchProducts();