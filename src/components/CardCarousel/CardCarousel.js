import React from "react";
import { makeStyles } from "@material-ui/styles";
import useEmblaCarousel from "embla-carousel-react";
import { Typography } from "@material-ui/core";

const CardCarousel = ({ title, subtitle, data }) => {
  const [viewportRef] = useEmblaCarousel({
    loop: false,
    direction: "rtl",
    containScroll: " ",
  });

  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h2" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <div className={classes.embla} ref={viewportRef}>
        <div className={classes.embla_container}>
          {data.map((item) => {
            return (
              <div key={item.id} className={classes.embla_slide}>
                <a href="#">
                  <img src={item.img} alt="عکس" />
                  <div className={classes.labelContainer}>
                    <Typography className={classes.label}>
                      {item.label}
                    </Typography>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    title: {
      fontSize: 22,
      marginBottom: theme.spacing(1),
      fontWeight: "bold",

      [theme.breakpoints.down("sm")]: {
        fontSize: 18,
      },
    },

    subtitle: {
      fontSize: 16,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary,

      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },

    embla: {
      overflow: "hidden",
    },
    embla_container: {
      display: "flex",
      height: 200,
      zIndex: 1,
      [theme.breakpoints.down("sm")]: {
        height: 170,
        width: 135,
      },
    },
    embla_slide: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      minWidth: 136,

      [theme.breakpoints.down("sm")]: {
        height: 170,
      },

      "&:not(:last-child)": {
        marginLeft: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
          marginLeft: theme.spacing(2),
        },
      },
      borderRadius: theme.shape.borderRadius,
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        verticalAlign: "bottom",
      },
    },

    labelContainer: {
      height: "60%",
      width: "100%",
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundImage:
        "linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0, 0.78) 100%)",
    },

    label: {
      flexWrap: "wrap",
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

export default CardCarousel;
