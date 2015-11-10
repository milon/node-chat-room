import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './MessageBox';

var socket = io.connect();

var ChatRoom =  ReactDOM.render(<MessageBox socket={socket} />, document.querySelector('#msg-body'));


socket.on('message', function(data){
    console.log(data);
    ChatRoom.newMessage(data);
});
