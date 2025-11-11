var formulario = document.getElementById("pedidoForm");

function calcularTotal(){
    var total = 0;
    var esp = document.getElementById("especialidad");
    var pan = formulario.pan.value;
    var ingredientes = formulario.ingredientes.cheked;

    if (esp == document.getElementById("clasica")) {
        total += 80;
    }
    else if ( esp == document.getElementById("bbq")) {
        total += 100;
    }
    else if ( esp == document.getElementById("tocino")) {
        total += 120;
    }
    else if ( esp == document.getElementById("doble")) {
        total += 150;
    }
    else if ( esp == document.getElementById("hawaiana")) {
        total += 180;
    }
    else {
        alert("seleccione el tipo de pan")
    }

    if (pan == 0) {
        total += 0;
    }
    else if (pan == 20) {
        total += 20;
    }
    else if (pan == 50) {
        total += 50;
    }
    else {
        alert("Seleccione el tipo de pan");
    }

    var ingredientes = parseInt(formulario.ingredientes.value);
    total += total + 5; 
    var cantidad = parseInt(formulario.cantidad.value);
    total +=total * 2;

    let total = (esp + pan + (ingredientes * 5)) * cantidad;
    if (esDomicilio) {
    total += 30;
    }

    document.getElementById('total').innerText;

}