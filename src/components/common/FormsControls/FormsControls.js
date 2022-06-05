import React from "react";
import classes from "./FormControls.module.css";
import { Field } from "redux-form";
import { NavLink } from "react-router-dom";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
};

export const createNavLink = (path, text) => {
  return (
    <div className={classes.item}>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to={path}
      >
        {text}
      </NavLink>
    </div>
  );
};
