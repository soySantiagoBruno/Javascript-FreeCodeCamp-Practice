//hay veces en las que un objeto solo sirve para COMPONER otro objeto

//Por ejemeplo en el caso del objeto dirección, solo tiene utilidad usarlo en el objeto persona
const Persona = {
    nombre: "Pepe",
    apellido: "Argento",
    direccion: {
        numero:100,
        calle: "Hirigoyen",
        ciudad: "Mendoza"
    }
}