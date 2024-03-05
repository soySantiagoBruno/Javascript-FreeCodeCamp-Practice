// AGREGACIÓN se refiere a poder agregar/insertar objetos dentro de otro objeto

class Persona{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
}

//notar que creo un objeto usando la forma literal
const empresa ={
    name : "MacDonalds",
    empleados : []
}


persona1 = new Persona("Pepe","Argento");
persona2 = new Persona("Maria","Luz");
//ahora voy a usar la AGREGACIÓN para agregar objetos de tipo persona en el objeto empresa
empresa.empleados.push(persona1,persona2)

console.log(empresa.empleados);