import React, { Component } from "react";
import MessageItems from ".MessageItems";


class MessageList extends Component {
       // constructor (props){
       //        super(props);

       //  this.state = {
       //         messages: []

       //  };      
       //               this.addMessage = this.addMessage.bind(this);
                                   
       // }

       // addMessage(e){
       //        if (this._inputElement.value !==""){
       //               var newMessage = {
       //                      text: this._inputElement.value,
       //                      key: Date.now()
       //               };

       //        this.setState((prevState) => {
       //               return{
       //                      messages: prevState.messages.concat(newMessage)
       //               };
       //        });
       //        }
       //        this._inputElement.value = "";

       //        console.log(this.state.messages);
              
       //        e.preventDefault();
       // }
       // render () {
       //        return (
       //        <div className="messageListMain">
       //               <div className="header">
       //                      <form onSubmit={this.addMessage}>
       //                             <input ref={(a) => this._inputElement = a} 
       //                             placeholder="Enter Message">
                                          
       //                             </input>
       //                             <button type="submit">Submit</button>

       //                      </form>

       //               </div>
       //               <MessageItems entries={this.state.messages}/>
       //        </div>
       //        );
       // }
}
export default MessageList;
