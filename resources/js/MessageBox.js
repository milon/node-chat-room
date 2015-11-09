import React from 'react';
import MessageList from './MessageList';

var MessageBox = React.createClass({
  newMessage: function(data) {
    var messageList = this.state.messageList.concat([data]);
    this.setState({messageList});
  },
  getInitialState: function() {
    return {
      messageList:[{author: 'Mahbub', text: 'hello'}]
    }
  },
  render: function() {
    console.log(this.state.messageList);
    return (
      <MessageList messages={this.state.messageList} />
    );
  }
});

export default MessageBox;
