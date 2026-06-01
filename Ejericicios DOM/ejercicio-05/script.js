const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist',
];

const contenedorLista = document.querySelector('.lista-contenedor');

const listaAlbums = document.createElement('ul');
listaAlbums.classList.add('lista-albums');

for (const album of albums) {
  const elementoAlbum = document.createElement('li');

  elementoAlbum.textContent = album;
  elementoAlbum.classList.add('album');

  listaAlbums.appendChild(elementoAlbum);
}

contenedorLista.appendChild(listaAlbums);