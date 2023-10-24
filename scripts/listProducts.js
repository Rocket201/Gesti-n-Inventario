import{ inventory }from "./products.js " ;

export const listProducts = ()=>{

    const table = document.getElementById("clear-table")

        inventory.forEach(item => {
        
        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        
            cell1.innerHTML = item.nombre;

            cell2.innerHTML = item.cantidad;

            cell3.innerHTML = item.precio;

    const editButton =  document.createElement("button");
    editButton.innerText = "EDITAR";
    editButton.addEventListener("click", ()=>{
             //logica para editar el producto (puedes mostrar un modal o realizar alguna accion específica)
             //puedes acceder a los datos del producto utilizando item.nombre, item.cantidad ...
    });
    cell4.appendChild(editButton);


       const deleteButton =  document.createElement("button");
       deleteButton.innerText = "BORRAR";
       deleteButton.addEventListener("click", ()=>{
        //logica para borrar el producto (puedes mostrar un mensaje de confirmacion antes)
        //puedes acceder a los datos del productoutilizando item.nombre, item.cantidad

        if (confirm(`¿Estas seguro que deseas borrarlo"${item.nombre}"?`)){
            // encuentra el indice del producto a eliminar: dentro del ForEach, comparamos el producto con el item
            const index = inventory.findIndex(product=> product.id === item.id )

            if (index !== -1){ //si el indice resultado no es -1, tenemos coincidencia
                console.log("entra en el if")
                inventory.splice(index, 1)
            }
           table.innerHTML ="";
            listProducts()
        }

       });
       cell4.appendChild(deleteButton);

    });
}