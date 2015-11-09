import React from 'react';
import MessageList from './MessageList';

var MessageBox = React.createClass({
  getInitialState: function() {
    return {
      messageList:[{author: 'Mahbub', text: 'hello'}]
    }
  },
  render: function() {
    console.log(this.state.messages)
    return (
      <MessageList messages={this.state.messageList} />
    );
  }
});

export default MessageBox;
