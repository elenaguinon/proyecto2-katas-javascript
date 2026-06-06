const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');

const getCharacters = async () => {
  const response = await fetch('https://thronesapi.com/api/v2/Characters');
  const characters = await response.json();

  for (const character of characters) {
    const option = document.createElement('option');

    option.value = character.imageUrl;
    option.textContent = character.fullName;

    select.appendChild(option);
  }

  image.src = characters[0].imageUrl;
  image.alt = characters[0].fullName;
};

select.addEventListener('change', (event) => {
  image.src = event.target.value;

  const selectedOption = event.target.selectedOptions[0];
  image.alt = selectedOption.textContent;
});

getCharacters();