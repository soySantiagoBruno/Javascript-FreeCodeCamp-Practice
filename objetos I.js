//Creación de un objeto/plantilla (Clase en Java)

//Forma uno (como un literal)
function Person(name) {
  //esto es una propiedad
  this.name = name;
    
  //esto es un método
  this.getName = function(){
    return `Name is ${this.name}`;
  }
}

//Forma dos. Más parecido a Java (es lo mismo pero con otra sintáxis)
class Person{
  //creo un constructor para declarar las propiedades de la clase
  //el constructor puede estar vacio o recibir parametros para inicializar las propiedades
  constructor(name){
    this.name = name;
  }

  //creo los métodos
  //notar que no hace falta usar "function" al crear métodos
  saludo(){
    return "Hola que tal!"
  }
}
  


//Puedo cambiar o agregar propiedades y métodos a un objeto
const persona1 = new Person("Pepe");

persona1.name = "Pedro";
persona1.nuevoMetodo = function(){
  return "Esto es un nuevo método"
}


//Se pueden cambiar las propiedades y métodos de una clase y de LOS OBJETOS que ya han sido CREADOS usando PROTOTYPE. 
const texto = new String("Esto es un objeto String");

//Modifico el constructor del objeto primitivo String usando prototype
String.prototype.metodoConcatenar = function(){
  return this + " y concateno esto";
}
console.log(texto.metodoConcatenar());