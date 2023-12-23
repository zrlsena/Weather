import axios from 'axios';

const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_KEY= '945f590751be80f558cf950d7c35b6f8';

const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
export default fetchWeather;