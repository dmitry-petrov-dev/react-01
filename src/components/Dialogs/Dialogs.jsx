import React from "react";
import { Navigate } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e) => {
    const text = e.currentTarget.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>

      <div>
        <div className={classes.messages}> {messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            placeholder="Enter message"
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
