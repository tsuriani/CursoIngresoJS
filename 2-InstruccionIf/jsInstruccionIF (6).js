function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
//tomo la edad  
    if (edad < 13) {
        alert("Niño");
    }
    else if (edad <= 17) {
        alert("Adolescente");
    }
    else {
        alert("Adulto");
    }
   /* if (edad < 13) {
        alert("Niño");
    }
    else {

        if (edad >= 13 && edad <= 17) {
            alert("Adolescente");
        }
        else {
            alert("Adulto");
        }
    }*/
}//FIN DE LA FUNCIÓN
