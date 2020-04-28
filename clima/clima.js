const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=56d6e58754594d79a5671c43a7d13d96&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}