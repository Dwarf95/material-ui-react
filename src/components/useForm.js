import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export const useForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "85%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props || {};

  return (
    <form className={classes.root} autoComplete="off" {...rest}>
      {props.children}
    </form>
  );
};
