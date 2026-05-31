const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const powerMutants = [];

  for (const personaje of mutants) {
    if (personaje.power === power) {
      powerMutants.push(personaje.name);
    }
  }

  if (powerMutants.length > 0) {
    return "Mutante encontrado: " + powerMutants.join(", ");
  } else {
    return "Superpoder no encontrado";
  }
}

console.log(findMutantByPower(mutants, 'teleportation'));
