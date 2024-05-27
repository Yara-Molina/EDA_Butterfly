import Butterfly from "../models/Butterfly.js" 
import { bst } from "./dependencies.js"

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed")

    let btn = document.getElementById("agregar-btn")
    let btn1 = document.getElementById("search-btn")
    let btn3 = document.getElementById("rove-btn")
    let btn4 = document.getElementById("min-btn")
    let btn5 = document.getElementById("max-btn")

    console.log("btn:", btn)
    console.log("btn1:", btn1)
    console.log("btn3:",btn3 )
    console.log("btn4:", btn4)
    console.log("btn5:", btn5)

    if (!btn) {
        console.error("Element not found: agregar-btn");
        return;
    }

    if (!btn1) {
        console.error("Element not found: search-btn");
        return;
    }

    btn.addEventListener("click", () => {
        let scienceName = document.getElementById("scienceName").value;
        let simpleName = document.getElementById("simpleName").value;
        let gender = document.getElementById("gender").value;
        let habit = document.getElementById("habit").value;
        let family = document.getElementById("family").value;

        console.log("Scientific Name:", scienceName);
        console.log("Common Name:", simpleName);
        console.log("Habitat:", habit);
        console.log("Family:", family);

        if (!scienceName || !simpleName || !gender || !habit || !family) {
            Swal.fire("Se deben de llenar todos los campos!")
            return;
        }

        let butterfly = new Butterfly(scienceName, simpleName, gender, habit, family); 
        let data = bst.add(butterfly)
        console.log(data)
        if (data) {
            Swal.fire("Registro exitoso!")
        } else {
            Swal.fire("Fallo el registro!")
        }
    });

    btn1.addEventListener("click", () => {
        let searchName = document.getElementById("searchName").value

        console.log("Search Name:", searchName);

        if (!searchName) {
            Swal.fire("Please enter a common name to search!")
            return
        }

        let node = bst.search(searchName);
        if (node) {
            let butterfly = node.value;
            Swal.fire({
                title: 'Especie encontrada!',
                text: `Nombre científico: ${butterfly.scienceName}, Nombre común: ${butterfly.simpleName},`,
                icon: 'success'
            });
        } else {
            Swal.fire({
                title: 'Especie no encontrada',
                text: `Especie no encontrada por nombre común: ${searchName}`,
                icon: 'error'
            })
        }
    })

    btn3.addEventListener("click", () =>{
    
    const container = document.getElementById("butterfly-info")
    container.innerHTML =''
    const callback =(butterfly)=>{
        const paragraph = document.createElement("p")
        paragraph.textContent = `Nombre científico: ${butterfly.scienceName}, Nombre común: ${butterfly.simpleName}`
        container.appendChild(paragraph)
        console.log(`Nombre científico: ${butterfly.scienceName}, Nombre común: ${butterfly.simpleName}`)
    }
        bst.inOrder(bst.getRoot(), callback)
    
    })

    btn4.addEventListener("click", ()=>{
        const minNode = bst.min()
        if (minNode) {
            const butterfly = minNode.value
            Swal.fire({
                title: 'Especie con el nombre común mínimo',
                text: `Nombre científico: ${butterfly.scienceName}, Nombre común: ${butterfly.simpleName}`,
                icon: 'info'
            })
        } else {
            Swal.fire({
                title: 'No hay especies registradas',
                text: 'El árbol está vacío.',
                icon: 'warning'
            })
        }
    })

    btn5.addEventListener("click", () => {
        const maxNode = bst.max();
        if (maxNode) {
            const butterfly = maxNode.value;
            Swal.fire({
                title: 'Especie con el nombre común máximo',
                text: `Nombre científico: ${butterfly.scienceName}, Nombre común: ${butterfly.simpleName}`,
                icon: 'info'
            });
        } else {
            Swal.fire({
                title: 'No hay especies registradas',
                text: 'El árbol está vacío.',
                icon: 'warning'
            })
        }
    })

})
