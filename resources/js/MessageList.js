import React, {Component} from 'react';
import Message from './Message';

export default class MessageList extends Component {

  render() {

    var renderMessage = this.props.messages.map((message, index) => {
      var messageType= 'receive';
      if(this.props.currentUser == message.author) {
        messageType = 'sent';
      }
      if(message.text != '') {
        return <Message key={index} messageType = {messageType} message ={message} />
      }
    });

    return <ul> {renderMessage} </ul>;
  }
}
