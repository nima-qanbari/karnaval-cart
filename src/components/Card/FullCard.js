import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const FullCard = ({ title, width, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <a href="#" >
          <img src={image} alt="عکس" />
          <div className={classes.description}>
            <Typography className={classes.label}>{title}</Typography>
          </div>
        </a>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      minHeight: 1,
      borderRadius: theme.shape.borderRadius,
      overflow: "hidden",
    },
    innerContainer: {
      position: "relative",

      "&:not(:last-child)": {
        marginLeft: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
          marginLeft: theme.spacing(2),
        },
      },
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        verticalAlign: "bottom",
      },
    },

    description: {
      height: "60%",
      width: "100%",
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0, 0.78) 100%)",
    },

    label: {
      position: "absolute",
      bottom: 15,
      right: 15,
      fontSize: 16,
      color: theme.palette.background.paper,
      fontWeight: "bold",
    },
  }),
  { flip: false }
);

export default FullCard;
