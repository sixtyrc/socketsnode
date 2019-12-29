const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mesaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //escuchar cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        //console.log(mensaje);
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            })
        } else {
            callback({
                resp: 'TODO SALIO MAL !!!'
            })
        }
    })

});