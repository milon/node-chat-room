import React, {Component} from 'react';

export default class Message extends Component {

  render() {
    console.log('dgjakjglk');
     return(
        <div className="row msg_container base_">
          <div className="col-md-10 col-xs-10">
            <div className="messages msg base_">
               <p>{this.props.message.text}</p>

            </div>
          </div>
          <div className="col-md-2 col-xs-2 avatar">
             <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
            {this.props.message.text}
          </div>
       </div>
    );
  }
}
