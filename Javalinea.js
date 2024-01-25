document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");
    var dibujando = false;

    canvas.addEventListener("mousedown", function(event) {
        dibujando = true;
        contexto.beginPath();
        contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    });

    canvas.addEventListener("mousemove", function(event) {
        if (dibujando) {
            contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            contexto.stroke();
        }
    });

    canvas.addEventListener("mouseup", function() {
        dibujando = false;
    });

    canvas.addEventListener("mouseout", function() {
        dibujando = false;
    });
});

