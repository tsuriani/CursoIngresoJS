function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (edad < 13 || edad > 17) {
    //(!(edad < 13 && edad > 17))
    alert("Persona no adolescente");
}
}//FIN DE LA FUNCIÓN
