import React, {Component} from 'react';

export default class Message extends Component {

  getAvatar(messageType){
    if(this.props.type == messageType) {
      
      return (
        <div className="col-md-2 col-xs-2 avatar">
           <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
           {this.props.author}
        </div>
      );
    }
  }

  render() {

    return (
        <div className={"row msg_container base_" + this.props.type}>
          {this.getAvatar('receive')}
          <div className="col-md-10 col-xs-10">
            <div className={"messages msg_" + this.props.type}>
               <p>{this.props.children}</p>
            </div>
          </div>
          {this.getAvatar('sent')}
       </div>
    );

  }
}
