import{ listProducts } from"./listProducts.js"
import{insertProducts} from"./insertProducts.js"

/**
 * Autor: Alejandro González Corroto Fernández
 * GitHub: https://github.com/Rocket201/Gesti-n-Inventario.git
 */

// Listamos los productos 

document.addEventListener("DOMContentLoaded", listProducts); 

document.addEventListener("DOMContentLoaded", ()=>{
    const btnForm = document.getElementById("product-form-events")
    btnForm.addEventListener("click",()=>{
        insertProducts()
    })
    
});