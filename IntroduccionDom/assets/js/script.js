//Maneras de seleccionar elementos
//document.querySelector() permite seleccionar en base a etiquetas y selectores CSS, si hay varios elemenstos de una misma clase selecciona el primero solamente
let elemento = document.querySelector("#formulario-contacto");
console.log(elemento);

//document.querySelectorAll() permite seleccionar un conjunto de elementos en base a una clase o etiqueta
let elementos = document.querySelectorAll(".producto");
console.log(elementos);

//document.getElementById() permite seleccionae en base a su id
let elementoPorId = document.getElementById("descripcion");
console.log(elementoPorId);

//document.getElementByClass() permite seleccionae en base a su clase
let elementosPorClase = document.getElementsByClassName("producto");
console.log(elementosPorClase);

//document.getElementByTagName() permite seleccionar en base a la etiqueta
let elementosPorEtiqueta = document.getElementsByTagName("p");
console.log(elementosPorEtiqueta)

//Manipular elementos seleccionados
let titulo = document.getElementById("titulo-principal");
console.log(titulo.innerHTML);
titulo.innerHTML = "Mi nueva tienda de tecnologia 2.0";
console.log(titulo.innerHTML);
//Permite cambiar el contenido de la etiqueta HTML
titulo.textContent = "Tienda de tecnologia nuevamente";//Permite cambiar el contenido de texto de un HTML
console.log(titulo.innerText)

//Manipular atributos de un elemento
//document.createElement() permite crear nuevos elementos HTML
let imagen = document.createElement("img");
//Podemos acceder a los atributos a través de la variable
imagen.src = "https://images.samsung.com/is/image/samsung/p6pim/cl/2501/gallery/cl-galaxy-s25-s931-sm-s931blbkltl-thumb-544655046?$264_264_PNG$";
imagen.alt = "Imagen de Smartphone a la venta";
/*imagen.height = 250
imagen.width = 250
imagen.style.height = "250px"
imagen.style.width = "250px"
imagen.style.
console.log(imagen);
*/
//El metodo .append() y appendChild() permiten agregar el elemento HTML con referencia a su elemento padre
document.querySelector(".producto").append(imagen);

//Manipular la clase de un elemento
let primerProducto