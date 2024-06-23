const tecla = document.getElementById('key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
    tecla.style.backgroundColor = 'pink';
} else if (event.key === 's' || event.key === 'S') {
    tecla.style.backgroundColor = 'orange';
} else if (event.key === 'd' || event.key === 'D') {
    tecla.style.backgroundColor = 'cyan';
}
})

document.addEventListener("keydown", function(event) {
    if(event.key === 'q' || event.key === 'Q') {
        const div = document.createElement("div");
        div.id = "miDiv";
        document.body.appendChild(div);
    }else if(event.key === 'w' || event.key === 'W') {
        const div = document.createElement("div");
        div.id = "miDiv2";
        document.body.appendChild(div);
    }else if(event.key === 'e' || event.key === 'E') {
        const div = document.createElement("div");
        div.id = "miDiv3";
        document.body.appendChild(div);
}
})