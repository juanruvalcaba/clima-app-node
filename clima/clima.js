const axios = require('axios');


const getClima = async(lat, lng, units = 'metric') => {
    //console.log(direccion);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=88a1151ff9990964f252dab7ff430840&units=${ units }`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}