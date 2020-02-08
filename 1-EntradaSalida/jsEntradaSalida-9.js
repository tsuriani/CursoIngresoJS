/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var sueldoConAumento;

    sueldo = parseFloat(document.getElementById('sueldo').value);
    aumento = sueldo * 10 / 100;
    //o sueldo * 0.1
    sueldoConAumento = sueldo + aumento;
    //sueldoConAumento = sueldo * 1.1 --> asi se ve horrible :)
    document.getElementById("resultado").value = sueldoConAumento;
    //sueldoConAumento.toFixed(5);
}
