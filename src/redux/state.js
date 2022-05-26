const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  _addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer; // pattern observer
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;
