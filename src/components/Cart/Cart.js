import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Cart = ({ label, subtitle, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.cartContainer}>
      <img className={classes.img} src={image} alt="" />

      <div className={classes.gradient}>
        <div className={classes.labelContainer}>
          <div className={classes.ellipse}>
            <Typography>{label}</Typography>
          </div>
          <div className={classes.chevronButton}>
            <Typography variant="h3">{subtitle}</Typography>
            <Button>
              <ChevronLeftIcon color="action" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    cartContainer: {
      position: "relative",
      width: "100%",
      height: 250,
      zIndex: 10,
      borderRadius: theme.shape.borderRadius,
      overflow: "hidden",

      [theme.breakpoints.down("sm")]: {
        height: 210,
      },
    },

    img: {
      position: "absolute",
      top: 0,
      right: 0,
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },

    gradient: {
      "&:hover": {
        "& button:before": {
          transform: "scale(1)",
        },
      },
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      backgroundImage: "linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,.95))",
    },

    labelContainer: {
      position: "absolute",
      color: theme.palette.background.paper,
      bottom: 0,
      padding: theme.spacing(2),
      width: "100%",
    },

    ellipse: {
      border: `1px solid ${theme.palette.grey[50]}`,
      padding: theme.spacing(1, 1.5),
      borderRadius: theme.shape.borderRadius,
      marginBottom: theme.spacing(1),
      width: "fit-content",
      "& p": {
        fontSize: 11,
        fontWeight: 500,
      },
    },

    chevronButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      "& h3": {
        fontSize: 18,
        fontWeight: "bold",
      },

      "& button svg": {
        color: theme.palette.background.paper,
        zIndex: 3,
      },

      "& button": {
        minWidth: 0,
        padding: theme.spacing(1),
      },

      "& button:before": {
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        background: theme.palette.primary.main,
        borderRadius: "50%",
        transition: `all ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut}  0ms`,
        transform: "scale(0)",
      },
    },
  }),
  { flip: false }
);

export default Cart;
