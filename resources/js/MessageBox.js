import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

var socket = io.connect();

export default class MessageBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messageList:[{author: 'Mahbub', text: 'hello'}],
      currentUser : ''
    }
    this.getCurrentUser();
  }

  getCurrentUser() {
    var socket = this.props.socket;
    socket.on('connect', () => {
      if(this.state.currentUser == ''){
        var currentUser = prompt('What is your name?');
        //trigger joined event
        socket.emit('joined', currentUser);
        this.setState({currentUser});
      }
    });
  }

  newMessage(data) {
    var messageList = this.state.messageList.concat([data]);
    this.setState({messageList});
  }

  render() {
    return (
      <div>
        <h1>This Message Box </h1>
        <MessageList messages={this.state.messageList} currentUser= {this.props.currentUser} />
        <MessageForm socket = {this.props.socket}/>
      </div>
    );
  }
};
