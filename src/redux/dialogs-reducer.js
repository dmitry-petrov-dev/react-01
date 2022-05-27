const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
  dialogs: [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Kolya" },
    { id: 3, name: "Serega" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Evgeny" },
    { id: 6, name: "Vitaliy" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Bye-bye" },
    { id: 4, message: "You are welcome!" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 5,
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
};

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
