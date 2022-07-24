import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ZoomIconButton = ({ children }) => {
  const classes = useStyles();
  return <IconButton className={classes.IconButton}>{children}</IconButton>;
};

const useStyles = makeStyles(
  (theme) => ({
    IconButton: {
      "& svg": {
        transition: `all ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}`,
      },
      "&:hover": {
        "& svg": {
          transform: "scale(1.06)",
        },
      },
    },
  }),
  { flip: false }
);
export default ZoomIconButton;
