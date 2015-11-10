import React, {Component} from 'react';

export default class MessageList extends Component {

  render() {

    var renderMessage = this.props.messages.map((message, index) => {
        if(message.text != ''){
          return <li key={index}> <span className="author">{message.author}</span>: {message.text}</li>;
        }
    });

    return <ul> {renderMessage} </ul>;
  }
}
