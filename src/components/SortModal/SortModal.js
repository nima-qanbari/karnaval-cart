import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

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

    "& > li > svg": {
      marginLeft: theme.spacing(),
    },
    "& :not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },

  active: {
    fontWeight: "bold",
  },
}), {flip: false});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SortModal({ open, handleClose, sort, sortHandler, selectedSortItem }) {
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
        {sort.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.value}
              onClick={() => sortHandler(item.value)}
              className={
                selectedSortItem === item.value ? classes.active : undefined
              }
            >
              <Icon color="action" /> {item.label}
            </li>
          );
        })}
      </ul>
    </Dialog>
  );
}

export default SortModal;
