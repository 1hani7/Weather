import axios from 'axios';

async function getCurrentWeather() {
  const lat = 36.3333;
  const lon = 127.4167;
  const key = '830c23b073518ff527cdeb58ba476ee6';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=kr&units=metric`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getCurrentWeather;