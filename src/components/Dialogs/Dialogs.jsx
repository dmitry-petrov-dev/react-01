import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Vasya" id="1" />
        <DialogItem name="Kolya" id="2" />
        <DialogItem name="Serega" id="3" />
        <DialogItem name="Andrey" id="4" />
        <DialogItem name="Evgeny" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="Bye-bye" />
      </div>
    </div>
  );
};

export default Dialogs;
