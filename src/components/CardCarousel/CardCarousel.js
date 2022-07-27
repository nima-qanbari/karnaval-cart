import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import useEmblaCarousel from "embla-carousel-react";
import { Button, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const CardCarousel = ({ title, subtitle, data, width, height }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    
    loop: false,
    direction: "rtl",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.titleBtn}>
        <div>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </div>
        <div className={classes.btnContainer}>
          <Button className={classes.btn} onClick={scrollPrev}>
            <ChevronRightIcon />
          </Button>
          <Button className={classes.btn} onClick={scrollNext}>
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>

      <div className={classes.embla} ref={emblaRef}>
        <div className={classes.embla_container}>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={classes.embla_slide}
                style={{ width: width, height: height, minWidth: 200 }}
              >
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
    titleBtn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    btnContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    title: {
      fontSize: 22,
      marginBottom: theme.spacing(1),
      fontWeight: "bold",
      lineHeight: 1.5,

      [theme.breakpoints.down("sm")]: {
        fontSize: 19,
      },
    },

    subtitle: {
      fontSize: 16,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary,

      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },

    embla: {
      overflow: "hidden",
    },
    embla_container: {
      display: "flex",
      minHeight: 1,
      zIndex: 1,
    },
    embla_slide: {
      position: "relative",
      overflow: "hidden",

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

    btn: {
      border: `2px solid ${theme.palette.divider}`,
      width: 32,
      height: 32,
      minWidth: 0,
      marginLeft: theme.spacing(0.3),
      backgroundColor: theme.palette.background.paper,

      "&:hover": {
        backgroundColor: theme.palette.background.paper,
      },
    },
  }),
  { flip: false }
);

export default CardCarousel;
