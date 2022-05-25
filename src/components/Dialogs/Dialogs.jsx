import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}> {messagesElements}</div>
    </div>
  );
};

export default Dialogs;
