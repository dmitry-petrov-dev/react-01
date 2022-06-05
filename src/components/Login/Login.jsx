import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/auth-reducer";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import classes from "./../common/FormsControls/FormControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        {
          type: "checkbox",
        },
        "Remember me"
      )}
      {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
      {captchaUrl &&
        createField("Enter captcha value", "captcha", [required], Input)}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, logout })(Login);
