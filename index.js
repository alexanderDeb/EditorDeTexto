const display = document.querySelector("#textarea")
const Color = document.querySelector("#color")
const Numbers = document.querySelector("#number")
const Negrilla = document.querySelector("#negrilla")
const Cursiva = document.querySelector("#cursiva")
const Derecha = document.querySelector("#derecha")
const Centro = document.querySelector("#centro")
const Izquierda = document.querySelector("#izquierda")
const Mayuscula = document.querySelector("#mayuscula")
const Minuscula = document.querySelector("#minuscula")
const Capitalizar = document.querySelector("#capitalizar")

Color.addEventListener("change",()=>{
  display.style.color = document.getElementById("color").value
})

Numbers.addEventListener("change",()=>{
  display.style.fontSize = document.getElementById("number").value + "px" 
})

Negrilla.addEventListener("click",()=>{
  display.style.fontWeight = "bolder"
})

Cursiva.addEventListener("click",()=>{
  display.style.fontStyle = "italic";
})

Derecha.addEventListener("click",()=>{
  display.style.textAlign = "right";
})

Centro.addEventListener("click",()=>{
  display.style.textAlign = "center";
})

Izquierda.addEventListener("click",()=>{
  display.style.textAlign = "left";
})

Mayuscula.addEventListener("click",()=>{
  display.style.textTransform = "uppercase";
})

Minuscula.addEventListener("click",()=>{
  display.style.textTransform = "lowercase";
})

Capitalizar.addEventListener("click",()=>{
  display.style.textTransform = "capitalize";
})