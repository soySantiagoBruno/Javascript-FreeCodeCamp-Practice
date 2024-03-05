//es una forma de NO alterar las propiedades DIRECTAMENTE. Esto evita errores al momento de cambiar las propiedades. Para esto hacemos uso de métodos que van a servir como INTERMEDIARIOS para modificar las propiedades.

class Auto{
    velocidad=0;
    velocidadMaxima = 100;

    constructor(marca){
        this.marca = marca;
    }


    // Aplico encapsulamiento usando getters y setters y asi evitar acceder a las propiedades directamente
    getVelocidad(){
        return this.velocidad;
    }

    //uso encapsulamiento para evitar que el auto tenga una velocidad negativa
    reducirVelocidad(velocidad){
        if(! (this.getVelocidad - velocidad < 0)){
            this.velocidad -= velocidad;
        }
        else{ return "Error: La velocidad introducida hará que el auto vaya a una velocidad menor a 0!"}
    }

    aumentarVelocidad(velocidad){
        if(! (this.velocidad + velocidad > 100)){
            this.velocidad += velocidad;
        }
        else{console.log("Error: no puede tener una velocidad mayor a 100")}
        
    }
}

let autoUno = new Auto("BMW");