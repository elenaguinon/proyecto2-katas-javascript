const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indice1, indice2) {
  const temp = array[indice1];

  array[indice1] = array[indice2];
  array[indice2] = temp;

  return array;
}

console.log(swap(fantasticFour, 0, 3));