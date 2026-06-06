// 2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);


// 2.2
const toy = {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor'
};

const toyCopy = { ...toy };

console.log(toyCopy);


// 2.3
const pointsList2_1 = [32, 54, 21, 64, 75, 43];
const pointsList2_2 = [54, 87, 99, 65, 32];

const joinedPointsList = [...pointsList2_1, ...pointsList2_2];

console.log(joinedPointsList);


// 2.4
const toy2 = {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor'
};

const toyUpdate = {
  lights: 'rgb',
  power: ['Volar like a dragon', 'MoonWalk']
};

const updatedToy = { ...toy2, ...toyUpdate };

console.log(updatedToy);


// 2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsWithoutPosition2 = [
  ...colors.slice(0, 2),
  ...colors.slice(3)
];

console.log(colorsWithoutPosition2);
console.log(colors);