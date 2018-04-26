import React from "react";

function Edit(props) {
  return (
    <div>
      <div className="">
        <label className="">Contact Name</label>
        <div className="">
          <input
            className="name"
            type="text"
            onChange={props.handleChangeEditName}
            value={props.editName}
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
            onChange={props.handleChangeEditPhone}
            value={props.editPhone}
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
            onChange={props.handleChangeEditAddress}
            value={props.editAddress}
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
            onChange={props.handleChangeEditPost}
            value={props.editPost}
            placeholder="Insert name of the contact here"
          />
        </div>
      </div>
      <button onClick={() => props.saveEditContact(props.updateTarget)}>
        Save
      </button>
    </div>
  );
}

export default Edit;
