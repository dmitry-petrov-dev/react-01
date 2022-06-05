import React, { Component, lazy, Suspense } from "react";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import WithRouter from "./components/common/Router/WithRouter";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading ... </div>}>
            <Routes>
              <Route path="/" element={<Navigate to={"/profile"} />} />
              <Route path="/profile/" element={<ProfileContainer />}>
                <Route path=":profileId" element={<ProfileContainer />} />
              </Route>

              <Route path="/dialogs/*" element={<DialogsContainer />} />

              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div>404 - Page not found</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  WithRouter,
  connect(mapsStateToProps, { initializeApp })
)(App);

const MyApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MyApp;
