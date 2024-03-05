const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  //Recibo un objeto y solamente guardo los valores de las clave max y min
  const half = ({max,min}) => (max + min) / 2.0; 



console.log(half(stats));