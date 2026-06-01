// 2.1
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);


// 2.2 
const divP = document.createElement('div');
const parrafo = document.createElement('p');

parrafo.textContent = 'Soy una p dentro de un div';

divP.appendChild(parrafo);
document.body.appendChild(divP);


// 2.3 
const divSeisP = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo número ${i}`;
  divSeisP.appendChild(p);
}

document.body.appendChild(divSeisP);


// 2.4
const pTexto = document.createElement('p');
pTexto.textContent = 'Soy dinámico!';
document.body.appendChild(pTexto);


// 2.5'
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';


// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);


// 2.7
const nodos = document.querySelectorAll('.fn-remove-me');

for (const element of nodos) {
  element.remove();
}


// 2.8
const pDentro = document.createElement('p');
pDentro.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div');

// Lo insertamos después del primer div
divs[0].after(pDentro);


// 2.9
const divs = document.querySelectorAll('div.fn-insert-here');

for (const div of divs) {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
}