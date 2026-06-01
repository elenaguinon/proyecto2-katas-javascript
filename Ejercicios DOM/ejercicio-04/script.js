// 1.1
const botonClick = document.createElement('button');
botonClick.id = 'btnToClick';
botonClick.textContent = 'Haz click';

document.body.appendChild(botonClick);

botonClick.addEventListener('click', (evento) => {
  console.log(evento);
});


// 1.2
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (evento) => {
  console.log(evento.target.value);
});


// 1.3
const inputValor = document.querySelector('.value');

inputValor.addEventListener('input', (evento) => {
  console.log(evento.target.value);
});