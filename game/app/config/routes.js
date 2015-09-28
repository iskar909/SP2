
var cookie = require('cookie');
var auth   = require('../app/auth')

module.exports = function(app, io) {

	io.on('connection', function(socket){
	  console.log('a user connected');
	  socket.on('disconnect', function(){
	    console.log('user disconnected');
	  });
	});
};
