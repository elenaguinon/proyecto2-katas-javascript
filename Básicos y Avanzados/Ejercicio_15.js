//Uso de bucle

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

products.forEach(value => {
    if(value.includes ("Camiseta")){
        console.log(value)
    }
   
});