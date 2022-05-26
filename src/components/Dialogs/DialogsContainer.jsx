import React from "react";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const addMessage = () => {
    const action = addMessageActionCreater();
    props.store.dispatch(action);
  };

  const onMessageChange = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
