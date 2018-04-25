import React, {Component} from "react";
import Output from "./small/Output.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputPhone: "",
      inputAddress: "",
      inputPost: "",
      contacts: []
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePost = this.handleChangePost.bind(this);
    this.handleClick = this.handleClick.bind(this);
}

handleChangeName(event) {
  let value =  event.target.value;
  this.setState(() => {
    return {
      inputName: value,
     };
  });
}
handleChangePhone(event) {
  let value =  event.target.value;
  this.setState(() => {
    return {
      inputPhone: value,
     };
  });
}
handleChangeAddress(event) {
  let value =  event.target.value;
  this.setState(() => {
    return {
      inputAddress: value,
     };
  });
}
handleChangePost(event) {
  let value =  event.target.value;
  this.setState(() => {
    return {
      inputPost: value
     };
  });
}

handleClick() {
  if (this.state.inputName !== "" && this.state.inputPhone !== ""
  && this.state.inputAddress !== "" && this.state.inputPost !== "") {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat({
          "name": prevState.inputName,
          "phone": prevState.inputPhone,
          "address": prevState.inputAddress,
          "post": prevState.inputPost
      }),
        inputName: "",
        inputPhone: "",
        inputAddress: "",
        inputPost: ""
      };
    });
  }
}

  render() {
    return (
    <div>
    <h1 class="title">Address Book</h1>
      <div className="">
        <label className="">Contact Name</label>
          <div className="">
            <input
            className="name"
            type="text"
            onChange={this.handleChangeName}
            value={this.state.inputName}
            placeholder="Insert name of the contact here"/>
          </div>
      </div>
      <div className="">
        <label className="">Phone Number</label>
          <div className="">
            <input
            className=""
            type="text"
            onChange={this.handleChangePhone}
            value={this.state.inputPhone}
            placeholder="Insert name of the contact here"/>
          </div>
      </div>
      <div className="">
        <label className="">Address</label>
          <div className="">
            <input
            className="name"
            type="text"
            onChange={this.handleChangeAddress}
            value={this.state.inputAddress}
            placeholder="Insert name of the contact here"/>
          </div>
      </div>
      <div className="">
        <label className="">Post Code</label>
          <div className="">
            <input
            className="name"
            type="text"
            onChange={this.handleChangePost}
            value={this.state.inputPost}
            placeholder="Insert name of the contact here"/>
          </div>
      </div>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <br/>
      <Output contacts={this.state.contacts}/>
    </div>);
  }
}

export default App;
