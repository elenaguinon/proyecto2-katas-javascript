function rollDice(numero) {
  const resultado = Math.floor(Math.random() * numero) + 1;
  return resultado;
}

console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(50));