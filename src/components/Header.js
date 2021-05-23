import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
  SearchRounded,
} from "@material-ui/icons";
import React from "react";

const style = makeStyles((theme) => ({
  headerStyle: {
    backgroundColor: "white",
    color: "#333",
  },
  headerItemStyle: {
    border: "1px solid #000",
  },
  searchInput: {
    opacity: ".6",
    padding: "0px 8px",
    fontSize: ".8rem",
    border: "1px solid rgb(37,48,54)",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#f8f8f8",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
}));

const Header = (props) => {
  const classes = style();

  return (
    <AppBar position="sticky" className={classes.headerStyle} elevation={3}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              startAdornment={<SearchRounded />}
              className={classes.searchInput}
              fullWidth
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item alignItems="flex-end">
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={5} color="primary">
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge>
                <PowerSettingsNew />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
