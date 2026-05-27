//Buscador nombres

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, palabraBuscada) {
for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === palabraBuscada) {
            console.log("Palabra encontrada en la posición: "+[i])
        return {
        found: true,
        position: i,
      };
    }
  }

  return false;
}

console.log(nameFinder(names, "Clint"));
console.log(nameFinder(names, "Leia"));