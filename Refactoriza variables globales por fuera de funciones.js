const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(bookList,bookName) {
  
  //aislo el array global creando un nuevo array a nivel de la función
  let newBookList = [...bookList,];

  newBookList.push(bookName);
  return newBookList;
}

function remove(bookList, bookName) {
    let newBookList = [...bookList,];

    const book_index = newBookList.indexOf(bookName);
    if (book_index >= 0) {
        newBookList.splice(book_index, 1);
        return newBookList;
    }
}

console.log(add(bookList,"El quijote"))
console.log(`Antiguo array ${bookList}`);