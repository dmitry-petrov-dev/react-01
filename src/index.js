import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const postData = [
  { id: 1, message: "Hello, World!", likesCount: 12 },
  { id: 2, message: "second post", likesCount: 10 },
  { id: 3, message: "third post", likesCount: 5 },
];

const dialogsData = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Kolya" },
  { id: 3, name: "Serega" },
  { id: 4, name: "Andrey" },
  { id: 5, name: "Evgeny" },
  { id: 6, name: "Vitaliy" },
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Bye-bye" },
  { id: 4, message: "You are welcome!" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
