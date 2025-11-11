var formulario = document.getElementById("pedidoForm");

function calcularTotal(){
    var total = 0;
    var esp = formulario.especialidad.value;
    var pan = formulario.pan.value;
    var esDomicilio = formulario.domicilio.checked;

    
    if (esp == "clasica") {
        total += 80;
    }
    else if ( esp == "bbq") {
        total += 100;
    }
    else if ( esp == "tocino") {
        total += 120;
    }
    else if ( esp == "doble") {
        total += 150;
    }
    else if ( esp == "hawaiana") {
        total += 180;
    }
    else {
        alert("seleccione el tipo de pan");
        return;
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
        return;
    }


    if (formulario.queso.checked) { total += 5; }
    if (formulario.lechuga.checked) { total += 5; }
    if (formulario.jitomate.checked) { total += 5; }
    if (formulario.cebolla.checked) { total += 5; }
    if (formulario.jalapeño.checked) { total += 5; }
    if (formulario.huevo.checked) { total += 5; }
    if (formulario.pepino.checked) { total += 5; }
    if (formulario.champiñones.checked) { total += 5; }
    if (formulario.tocino.checked) { total += 5; }
    if (formulario.dobleQueso.checked) { total += 5; }
    if (formulario.piña.checked) { total += 5; }
    if (formulario.guacamole.checked) { total += 5; }
    if (formulario.bbq.checked) { total += 5; }
    if (formulario.chipotle.checked) { total += 5; }
    if (formulario.mayonesa.checked) { total += 5; }
    if (formulario.mostaza.checked) { total += 5; }
    if (formulario.ketchup.checked) { total += 5; }
    if (formulario.pepperoni.checked) { total += 5; }
    if (formulario.arugula.checked) { total += 5; }
    if (formulario.cebollaCaramelizada.checked) { total += 5; }

    var cantidad = parseInt(formulario.cantidad.value);
    total = total * cantidad;

    if (esDomicilio) {
    total += 30;
    }


    document.getElementById('total').innerText = total;
}