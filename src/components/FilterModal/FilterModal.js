import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  sidebarContainer: {
    margin: theme.spacing(2.5, 3, 9),
    position: "relative",
  },

  btn: {
    position: "fixed",
    width: "100%",
    padding: theme.spacing(2, 0),
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FilterModal({ open, handleClose , children}) {
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar color="default" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <Typography>فیلتر</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.sidebarContainer}>
        {children}
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        classes={{ root: classes.btn }}
      >
        اعمال تغییرات
      </Button>
    </Dialog>
  );
}

export default FilterModal;
