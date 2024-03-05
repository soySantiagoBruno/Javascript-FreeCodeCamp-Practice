class Person{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
}


//ahora voy a crear dos objetos
const persona1 = new Person("Pepe","Argento");
const persona2 = new Person("Maria", "Luz");

//voy a establecer una ASOCIACION entre esos dos objetos
persona2.parent = persona1;
//este objeto queda con una nueva propiedad parent: Person { name: 'Pepe', surname: 'Argento' }

console.log(persona2);