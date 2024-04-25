// using then and catch method

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Objects Data: ', data);
  })
  .catch((error) => {
    console.error('Fetch function failed: ', error);
  });

// using async and await

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/eevee');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Pokemon Data: ', data);
  } catch (error) {
    console.log('Fetch function failed: ', error);
  }
}

fetchPokemon();
