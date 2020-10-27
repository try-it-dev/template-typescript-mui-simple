import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Link, Typography } from "@material-ui/core";
import { AddAlarm } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "center",
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/" color="inherit" underline="none">
          <Typography variant="h5">
            <AddAlarm fontSize="inherit" style={{ verticalAlign: "middle" }} />
            <span style={{ verticalAlign: "middle" }}> your app ..</span>
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
