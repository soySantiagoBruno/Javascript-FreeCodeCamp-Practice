//para poder realizar una herencia simplemente tengo que usar "extends"

class Persona{
    constructor(name, apellido){
        this.name = name;
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

let empleadoUno = new Empleado("Contador","Pepe","Argento");

console.log(empleadoUno);