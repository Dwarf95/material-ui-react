import { withStyles } from "@material-ui/core";
import React from "react";

//withStyles & makeStyles

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253036",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}>Sidemenu</div>;
};

export default withStyles(style)(SideMenu);
