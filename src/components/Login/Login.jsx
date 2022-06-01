import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import classes from "./../common/FormsControls/FormControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        ></Field>
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type="password"
          component={Input}
          validate={[required]}
        ></Field>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        Remember me
      </div>
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login, logout })(Login);
