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
      //if username is not added then prompt user for username
      if(this.state.currentUser == '') {
        var currentUser = prompt('What is your name?');
        //trigger joined event
        socket.emit('joined', currentUser);
        this.setState({currentUser});
      }
    });
  }

  newMessage(data) {
    // 'messageList' state should be updated when new message arived
    var messageList = this.state.messageList.concat([data]);
    this.setState({messageList});
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messageList} currentUser= {this.state.currentUser} />
        <MessageForm socket = {this.props.socket}/>
      </div>
    );
  }
};
