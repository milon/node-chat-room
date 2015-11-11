import React, {Component} from 'react';
import Message from './Message';

export default class MessageList extends Component {

  render() {

    var renderMessage = this.props.messages.map((message, index) => {

      var messageType= 'receive';
      if(this.props.currentUser == message.author) {
        messageType = 'sent';
      }
      console.log(this.props.currentUser + ' ' + messageType + ' ' + message.author);
      if(message.text != '') {
        return (
          <Message key={index} author={message.author} type = {messageType}>
            {message.text}
          </Message>
        );
      }
    });

    return   <div className="panel-body msg_container_base"> {renderMessage} </div>;
  }
}
