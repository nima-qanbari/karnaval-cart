import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import TimerIcon from "@material-ui/icons/Timer";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "flex-end",
  },

  height: {
    height: "auto",
  },

  list: {
    "& > li": {
      padding: theme.spacing(2),
      display: "flex",
      alignItems: "center",
    },

    "& > li > svg" : {
      marginLeft: theme.spacing()
    },
    "& :not(:last-child)": {
      borderBottom: "1px solid #ccc"
    }
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SortModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      classes={{
        container: classes.container,
        paperScrollPaper: classes.height,
      }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <ul className={classes.list}>
        <li>
          <TimerIcon color="action"/> از صبح به شب
        </li>
        <li>
          <TimerIcon color="action"/> از شب به صبح
        </li>
        <li>
          <ArrowDownwardIcon color="action"/> ارزان ترین
        </li>
        <li>
          <ArrowUpwardIcon color="action"/> گران ترین
        </li>
      </ul>
    </Dialog>
  );
}

export default SortModal;
