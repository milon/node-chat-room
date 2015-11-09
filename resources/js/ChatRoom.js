import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './MessageBox';

var ChatRoom =  ReactDOM.render(<MessageBox />, document.querySelector('#content'));

var socket = io.connect();

socket.on('message', function(data){
    console.log(data);
    ChatRoom.newMessage(data);

    //TO-DO: append message to client side
    //$('#msg-body').html(data);
});

//On connect to server
socket.on('connect', function(){
    var nickname = prompt('What is your name?');

    //trigger joined event
    socket.emit('joined', nickname);
});

$('#message-form').submit(function(evt){
    evt.preventDefault();
    var message = $('#msg').val();
    $('#msg').val('');

    socket.emit('message', message);
});
