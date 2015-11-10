import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './MessageBox';

var socket = io.connect();

var ChatRoom =  ReactDOM.render(<MessageBox socket={socket} />, document.querySelector('#content'));


socket.on('message', function(data){
    console.log(data);
    ChatRoom.newMessage(data);
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
