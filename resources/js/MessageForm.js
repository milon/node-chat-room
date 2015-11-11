import React, {Component} from 'react';

export default class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.state = {inputContent: ''}
  }

  onSubmit(e) {
    e.preventDefault();
    var socket = this.props.socket;
    socket.emit('message', this.state.inputContent);
    this.setState({inputContent: ''});
  }

  onChange(e) {
    var inputContent = e.target.value;
    this.setState({inputContent});
  }

  render() {
    
    return (<div className="panel-footer">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-group">
            <input value= {this.state.inputContent} onChange={this.onChange.bind(this)}
              id="btn-input" type="text" className="form-control input-sm chat_input"
               placeholder="Write your message here..." />
            <span className="input-group-btn">
              <button className="btn btn-primary btn-sm" id="btn-chat">Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
