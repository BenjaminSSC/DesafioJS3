const cambColor1 = document.getElementById('d1')
const cambColor2 = document.getElementById('d2')
const cambColor3 = document.getElementById('d3')
const cambColor4 = document.getElementById('d4')
const cajaDiv = document.querySelector('.divBox')

cambColor1.addEventListener("click", function() {cambiarColorFondo(cambColor1);});
cambColor2.addEventListener("click", function() {cambiarColorFondo(cambColor2);});
cambColor3.addEventListener("click", function() {cambiarColorFondo(cambColor3);});
cambColor4.addEventListener("click", function() {cambiarColorFondo(cambColor4);});

function cambiarColorFondo(cajaDiv){
    const color = 'black';
    cajaDiv.style.backgroundColor = color;
}