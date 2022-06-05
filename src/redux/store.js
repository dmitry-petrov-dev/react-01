import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello, World!", likesCount: 12 },
        { id: 2, message: "second post", likesCount: 10 },
        { id: 3, message: "third post", likesCount: 5 },
      ],
      newPostText: "Enter post text",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer; // pattern observer
  },
};
export default store;
