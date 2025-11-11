var formulario = document.getElementById("pedidoForm");

function calcularTotal(){
    var total = 0;
    var esp = document.getElementById("especialidad");
    var pan = formulario.pan.value;

    if (pan == 0) {
        total += 0;
        alert(total);
    }
    else if (pan == 20) {
        total += 20;
        alert(total);
    }
}