import axios from 'axios';
import fetch from 'node-fetch';

/**
 * Rick and Morty: https://rickandmortyapi.com/api/location/61
 * Traduções divertidas: https://funtranslations.com/
 */

/*(async function buscaPersonagensRickAndMorty() {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  const dados = await response.json();
  console.log(dados);
})();*/

/**async function buscaPersonagensRickAndMorty() {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  console.log(response.data);
}
buscaPersonagensRickAndMorty();*/

//------------------------------- POST ---------------------------------

async function traducaoTextoParaYodaFetch() {
  const body = 'Hello guys!';

  const response = await fetch(
    'https://api.funtranslations.com/translate/yoda',
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const data = await response.json();
  console.log(data);
}

traducaoTextoParaYodaFetch();
