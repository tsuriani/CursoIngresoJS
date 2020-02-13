function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (13 >= edad && edad <= 17) {
//(13 <= edad && edad <= 17)   
//13 < edad < 18 NO LO TOMA
//Operador lógico "&&" ampersand   
    alert("Persona adolescente");
}

}//FIN DE LA FUNCIÓN
