import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import useEmblaCarousel from "embla-carousel-react";
import { Button, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Carousel = ({ title, subtitle, data, width, cardHeight, card: Card }) => {
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
    <div data-testid="carousel">
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
          <Button
            className={classes.btn}
            onClick={scrollPrev}
            data-testid="prevButton"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className={classes.btn}
            onClick={scrollNext}
            data-testid="nextButton"
          >
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>

      <div className={classes.embla} ref={emblaRef}>
        <div className={classes.embla_container}>
          {data.map((item) => {
            return (
              <div key={item.id} className={classes.embla_slide}>
                <Card
                  image={item.img}
                  title={item.label}
                  subtitle={item.subtitle}
                  width={width}
                  cardHeight={cardHeight}
                />
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
      flex: "0 0 175px",

      "&:not(:last-child)": {
        marginLeft: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
          marginLeft: theme.spacing(2),
        },
      },
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

export default Carousel;
