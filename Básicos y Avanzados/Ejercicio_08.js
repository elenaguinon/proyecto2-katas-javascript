//Función para encontrar la palabra más larga
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  let palabraLarga = stringList[0];

  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > palabraLarga.length) {
      palabraLarga = stringList[i];
    }
  }

  return palabraLarga;
}

console.log(findLongestWord(avengers));