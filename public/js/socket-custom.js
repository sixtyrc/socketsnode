var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor de socket')
});


// escuchar 
socket.on('disconnect', function() {
    console.log('Perdismos conexion con el servidor');
});

// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Crisian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});