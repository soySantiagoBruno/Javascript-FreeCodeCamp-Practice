function chunkArrayInGroups(arr, size) {
  let nuevoArray = [];


  for (let i = 0; i < arr.length; i=i+size) {
    let arrayAnidado = [];


    //una vez que divido en grupos de por ejemplo 3, tengo que agrupar esos 3 en un subgrupo
    //Partiendo desde el elemento 0, itero una determinada cantidad de veces hasta completar el subgrupo

    for (let j = 0; j < size; j++) {
      
      //para evitar crear un array con tipos undefined, aplico la siguiente condición
      if(arr[i+j] !== undefined)  {
        arrayAnidado.push(arr[i+j]);  
      }
      else{
        break;
      }
    }
    
    nuevoArray.push(arrayAnidado);
  }
  
  return nuevoArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d","e","f","g"], 3));