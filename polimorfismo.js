//sobrecarga: puede tomar distintos argumentos para obtener una respuesta

//En Javascript no hace falta hacer varios constructores ya que es un lenguage demasiado flexible y permite que los parámetros reciban CUALQUIER tipo de dato

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


class Empleado extends Persona{
    
    constructor(puesto, nombre, apellido){
        //puedo invocar el constructor PADRE usando "super()"
        // IMPORTANTE! debe ser usado ANTES  de la palabra clave "this"
        super(nombre,apellido);
        
        this.puesto = puesto;
    }
}


//creo una función que SIN IMPORTAR el tipo de dato que le ingrese (Persona o Empleado) responde igual ya que aplica una sobrecarga implícita (crea un constructor con un tipo de dato Persona y otro Empleado)
function mostrarNombre(p){
    console.log(p.nombre);
}

let personaUno = new Persona("Leo", "Messi");
let empleadoUno = new Empleado("Contador","Pepe","Argento");

//no importa que tipo de dato reciba, respondera igual
mostrarNombre(empleadoUno);
mostrarNombre(personaUno);