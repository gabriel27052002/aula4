const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Dados obtidos:', response.data);
  } catch (error) {
    console.error('Erro ao obter dados:', error);
  }
}

fetchData();
