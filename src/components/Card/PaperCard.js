import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const PaperCard = ({ title, subtitle, width, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <a href="#">
        <div className={classes.innerContainer}>
          <img src={image} alt="عکس" />
          <div className={classes.description}>
            <Typography variant="h3" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="h4" className={classes.subtitle}>
              {subtitle}
            </Typography>
          </div>
        </div>
      </a>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      width: "100%",
      borderRadius: theme.shape.borderRadius,
      overflow: "hidden",
      minHeight: 1,

      "& a": {
        textDecoration: "none",
      },
    },

    innerContainer: {
      display: "flex",
      flexDirection: "column",

      "& img": {
        objectFit: "cover",
        width: "100%",
        height: 200,

        [theme.breakpoints.down("sm")]: {
          height: 170,
        },
      },
    },

    description: {
      background: theme.palette.background.paper,
      padding: theme.spacing(2),
    },

    title: {
      fontSize: 19,
      fontWeight: "bold",
      marginBottom: theme.spacing(),
      lineHeight: 1.4,

      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },

    subtitle: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.text.secondary,
      lineHeight: 1.4,

      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
  }),
  { flip: false }
);

export default PaperCard;
