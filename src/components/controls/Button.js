import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

function Button(props) {
  const { text, size, color, variant, onClick, ...rest } = props || {};
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size}
      color={color || "primary"}
      onClick={onClick}
      className={classes.root}
      {...rest}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
