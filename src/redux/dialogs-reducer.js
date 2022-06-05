const ADD_MESSAGE = "myapp/dialogs/ADD_MESSAGE";

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
            message: action.newMessageBody,
          },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreater = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
