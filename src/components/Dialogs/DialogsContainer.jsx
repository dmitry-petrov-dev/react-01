import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreater());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
