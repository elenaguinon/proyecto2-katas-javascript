// 1.1
const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaPaises = document.createElement('ul');

for (const pais of paises) {
  const elementoPais = document.createElement('li');
  elementoPais.textContent = pais;
  listaPaises.appendChild(elementoPais);
}

document.body.appendChild(listaPaises);


// 1.2
const elementoEliminar = document.querySelector('.fn-remove-me');
elementoEliminar.remove();


// 1.3
const coches = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const contenedorCoches = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement('ul');

for (const coche of coches) {
  const elementoCoche = document.createElement('li');
  elementoCoche.textContent = coche;
  listaCoches.appendChild(elementoCoche);
}

contenedorCoches.appendChild(listaCoches);


// 1.4
const paisesConImagen = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const pais of paisesConImagen) {
  const tarjetaPais = document.createElement('div');
  tarjetaPais.classList.add('tarjeta-pais');

  const tituloPais = document.createElement('h4');
  tituloPais.textContent = pais.title;

  const imagenPais = document.createElement('img');
  imagenPais.src = pais.imgUrl;
  imagenPais.alt = pais.title;

  tarjetaPais.appendChild(tituloPais);
  tarjetaPais.appendChild(imagenPais);

  document.body.appendChild(tarjetaPais);
}


// 1.5
const botonEliminarUltimo = document.createElement('button');
botonEliminarUltimo.textContent = 'Eliminar último';

botonEliminarUltimo.addEventListener('click', () => {
  const tarjetasPaises = document.querySelectorAll('.tarjeta-pais');
  const ultimaTarjeta = tarjetasPaises[tarjetasPaises.length - 1];

  if (ultimaTarjeta) {
    ultimaTarjeta.remove();
  }
});

document.body.appendChild(botonEliminarUltimo);


// 1.6
const tarjetasPaises = document.querySelectorAll('.tarjeta-pais');

for (const tarjetaPais of tarjetasPaises) {
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';

  botonEliminar.addEventListener('click', () => {
    tarjetaPais.remove();
  });

  tarjetaPais.appendChild(botonEliminar);
}