import React, {Component} from 'react';

export default class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {inputContent: 'startValue'}
  }
  onSubmit(e) {
    e.preventDefault();
    var socket = this.props.socket;
    socket.emit('message', this.state.inputContent);

    this.setState({inputContent: ''});
  }
  onChange(e) {
    var inputContent = e.target.value;
    console.log(this);
    this.setState({inputContent});
  }
  render() {
    return (<div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input value= {this.state.inputContent} onChange={this.onChange.bind(this)} />
          <button> Send </button>
        </form>
      </div>
    );
  }
}
