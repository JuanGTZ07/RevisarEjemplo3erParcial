var formulario = document.getElementById("pedidoForm");

function calcularTotal(){
    var total = 0;
    var esp = document.getElementById("especialidad");
    var pan = formulario.pan.value;
    var adi = formulario.ingrediente.checked;
    
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

    


    alert(total);
}