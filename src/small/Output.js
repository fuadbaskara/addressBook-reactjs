import React from "react";

function Output(props) {
  return (
    <div className="output">
        {props.contacts && props.contacts.map((item, index) => (
          <div className="todo" key={index}>
            <div className="todo-text">Contact Name :{item.name}</div>
            <div className="todo-text">Phone Number :{item.phone}</div>
            <div className="todo-text">Address :{item.address}</div>
            <div className="todo-text">Post Code :{item.post}</div>
            <button onClick={() => props.editTodo(index)}>Edit</button>
            <button onClick={() => props.deleteTodo(index)}>Delete</button>
            </div>
          ))}
          </div>
  );
}

export default Output;
