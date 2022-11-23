const content = document.querySelector("body > section")
const backbutton = document.querySelector(".back-button");
const addbutton = document.querySelector("button img[src*='plus']");
const inputnamebox = document.querySelector("input[type='text']");
const deletebutton = document.querySelector("button img[src*='minus']");
const namebox = document.querySelector(".added-name");
const deadbox = document.querySelector("dead");
const area = content.children[2];

let lista = ["pepa", "josepa", "josefina", "lola", "marcelino"];

// ADD
addbutton.addEventListener("click", ()=> {
    // declare elements
    let div = document.createElement("div");
    let newnamebox = document.createElement("p");
    let newnamevalue = document.createTextNode(lista[lista.length-1]);
    let minusbutton = document.createElement("button")
    let icon = document.createElement("img")
    // a fragment will store them until they can be rendered together
    let fragment = document.createDocumentFragment();
    
    // populate the fragment with the elements
    fragment.appendChild(div);
    div.appendChild(newnamebox);
    div.classList.add("added-name")
    newnamebox.appendChild(newnamevalue);
    div.appendChild(minusbutton);
    minusbutton.classList.add("minus-button")
    minusbutton.appendChild(icon);
    icon.setAttribute("src", "imagenes/minus.png")

    // all elements are inserted at once, as a fragment
    content.insertBefore(fragment, area);

    console.log("added name");
})

// DELETE
deletebutton.addEventListener("click", ()=> {
    console.log("deleted name");
    namebox.remove();
})

// GO BACK
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});

// pruebas

newname.appendChild(newnamevalue);