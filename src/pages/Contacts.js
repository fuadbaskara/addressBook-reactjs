import React, { Component } from "react";
import Output from "../small/Output";
import Edit from "../large/Edit";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputPhone: "",
      inputAddress: "",
      inputPost: "",
      editName: "",
      editPhone: "",
      editAddress: "",
      editPost: "",
      updateTarget: 0,
      contacts: [],
      editShow: false
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePost = this.handleChangePost.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.handleChangeEditName = this.handleChangeEditName.bind(this);
    this.handleChangeEditPhone = this.handleChangeEditPhone.bind(this);
    this.handleChangeEditAddress = this.handleChangeEditAddress.bind(this);
    this.handleChangeEditPost = this.handleChangeEditPost.bind(this);
    this.saveEditContact = this.saveEditContact.bind(this);
  }

  handleChangeName(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputName: value };
    });
  }
  handleChangePhone(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputPhone: value };
    });
  }
  handleChangeAddress(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputAddress: value };
    });
  }
  handleChangePost(event) {
    let value = event.target.value;
    this.setState(() => {
      return { inputPost: value };
    });
  }
  handleChangeEditName(event) {
    let value = event.target.value;
    this.setState(() => {
      return { editName: value };
    });
  }
  handleChangeEditPhone(event) {
    let value = event.target.value;
    this.setState(() => {
      return { editPhone: value };
    });
  }
  handleChangeEditAddress(event) {
    let value = event.target.value;
    this.setState(() => {
      return { editAddress: value };
    });
  }
  handleChangeEditPost(event) {
    let value = event.target.value;
    this.setState(() => {
      return { editPost: value };
    });
  }

  handleClick() {
    if (
      this.state.inputName !== "" &&
      this.state.inputPhone !== "" &&
      this.state.inputAddress !== "" &&
      this.state.inputPost !== ""
    ) {
      this.setState(prevState => {
        return {
          contacts: prevState.contacts.concat({
            name: prevState.inputName,
            phone: prevState.inputPhone,
            address: prevState.inputAddress,
            post: prevState.inputPost
          }),
          inputName: "",
          inputPhone: "",
          inputAddress: "",
          inputPost: ""
        };
      });
    }
  }

  deleteContact(target_index) {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact, index) => {
          return index !== target_index;
        })
      };
    });
  }

  editContact(target_index) {
    this.setState(() => {
      return {
        editShow: true,
        editName: this.state.contacts[target_index].name,
        editPhone: this.state.contacts[target_index].phone,
        editAddress: this.state.contacts[target_index].address,
        editPost: this.state.contacts[target_index].post,
        updateTarget: target_index
      };
    });
  }

  saveEditContact(target_index) {
    if (
      this.state.editName !== "" &&
      this.state.editPhone !== "" &&
      this.state.editAddress !== "" &&
      this.state.editPost !== ""
    ) {
      let contacts = Object.assign(this.state.contacts);
      contacts[this.state.updateTarget] = {
        name: this.state.editName,
        phone: this.state.editPhone,
        address: this.state.editAddress,
        post: this.state.editPost
      };
      this.setState(prevState => {
        return {
          contacts: contacts,
          editName: "",
          editPhone: "",
          editAddress: "",
          editPost: "",
          editShow: false
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h1 class="title">Address Book</h1>
        <div className="container1">
          <div className="container2">
            <div className="">
              <label className="">Contact Name</label>
              <div className="">
                <input
                  className="name"
                  type="text"
                  onChange={this.handleChangeName}
                  value={this.state.inputName}
                  placeholder="Insert name of the contact here"
                />
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
                  placeholder="Insert name of the contact here"
                />
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
                  placeholder="Insert name of the contact here"
                />
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
                  placeholder="Insert name of the contact here"
                />
              </div>
            </div>
            <button onClick={this.handleClick}>Submit</button>
          </div>
          <br />
          <br />
          <div>
            {this.state.editShow === true ? (
              <Edit
                editName={this.state.editName}
                editPhone={this.state.editPhone}
                editAddress={this.state.editAddress}
                editPost={this.state.editPost}
                handleChangeEditName={this.handleChangeEditName}
                handleChangeEditPhone={this.handleChangeEditPhone}
                handleChangeEditAddress={this.handleChangeEditAddress}
                handleChangeEditPost={this.handleChangeEditPost}
                saveEditContact={this.saveEditContact}
                updateTarget={this.state.updateTarget}
              />
            ) : (
              <div value="ERROR OCCURED" />
            )}
          </div>
        </div>
        <Output
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          editContact={this.editContact}
        />
      </div>
    );
  }
}

export default Contacts;
