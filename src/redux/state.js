import { rerenderEntireTree } from "./../render";

const state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
