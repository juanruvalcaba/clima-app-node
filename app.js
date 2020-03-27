const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;


lugar.getLugarLatLng(argv.direccion).then((resp) => {
    clima.getClima(resp.lat, resp.lng).then((result) => {
        console.log(`El clima de ${ resp.direccion } es de ${ result }`);
    }).catch((err) => console.log(err));
});