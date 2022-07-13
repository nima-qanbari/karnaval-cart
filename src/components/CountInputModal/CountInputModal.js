import React from "react";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Close } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountInputModal = ({ open, closeHandler, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      classes={{
        container: classes.wrapper,
        paperScrollPaper: classes.height,
      }}
      open={open}
      TransitionComponent={Transition}
      disableRestoreFocus
      onClose={closeHandler}
    >
      <AppBar color="primary" classes={{ positionFixed: classes.appBar }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">مسافران</Typography>
          <IconButton
            color="inherit"
            onClick={closeHandler}
            className={classes.closeButton}
            title="close"
          >
            <Close className={classes.close} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.childrenContainer}>{children}</div>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    alignItems: "flex-end",
  },

  insideContainer: {
    position: "relative",
  },

  appBar: {
    position: "static",
  },

  height: {
    height: 180,
  },

  toolbar: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  closeButton: {
    position: "absolute",
    left: 15,
    background: theme.palette.action.hover,
  },

  childrenContainer: {
    padding: theme.spacing(0, 3),
  },
}));

export default CountInputModal;
