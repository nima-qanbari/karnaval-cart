import React, { useMemo } from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import BLUE from "@material-ui/core/colors/blue";
import RED from "@material-ui/core/colors/red";
import clsx from "clsx";

const BusSeatInput = ({ data, value, onChange, vertical }) => {
  const dataVert = useMemo(() => {
    const matrix = data.map((x) => x.seats);
    return matrix[0]
      .map((x, i) => matrix.map((x) => x[i]))
      .map((x) => ({ seats: x }));
  }, [data]);
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.container, { [classes.vertical]: vertical })}
      data-testid="container"
    >
      <div>
        <Grid container className={classes.seatContainer} alignItems="flex-end">
          <Grid item xs={vertical ? 12 : 1} className={classes.driverContainer}>
            <p className={classes.driver}>راننده</p>
          </Grid>
          <Grid item xs={vertical ? 12 : 11}>
            <Grid container>
              {(vertical ? dataVert : data).map((item, index) => {
                return (
                  <Grid item key={index} xs={12} className={classes.row}>
                    {item.seats.map((item, index) => {
                      const isActive = item?.seatNumber === value;
                      const isMale = item?.status === "male";
                      const isFemale = item?.status === "female";
                      const isUnavailable = item?.status === "unavailable";
                      const isAvailable = item?.status === "available";

                      return item === null ? (
                        <div key={index} className={classes.null}></div>
                      ) : (
                        <div
                          key={index}
                          className={clsx(
                            classes.seat,
                            isMale && classes.male,
                            isFemale && classes.female,
                            isUnavailable && classes.unavailable,
                            isActive && classes.active
                          )}
                          data-testid={`seat${isActive ? " active" : ""}`}
                          onClick={
                            isAvailable
                              ? () => onChange(item.seatNumber)
                              : undefined
                          }
                        >
                          {item.seatNumber}
                        </div>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.detailsContainer}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md="auto" className={classes.circleContainer}>
              <div className={classes.selectable}></div>
              <p>قابل انتخاب</p>
            </Grid>
            <Grid item xs={12} md="auto" className={classes.circleContainer}>
              <div className={classes.myChoice}></div>
              <p>انتخاب من</p>
            </Grid>
            <Grid item xs={12} md="auto" className={classes.circleContainer}>
              <div className={classes.MrSelect}></div>
              <p>رزرو شده توسط آقا</p>
            </Grid>
            <Grid item xs={12} md="auto" className={classes.circleContainer}>
              <div className={classes.MissSelect}></div>
              <p>رزرو شده توسط خانم</p>
            </Grid>
            <Grid item xs={12} md="auto" className={classes.circleContainer}>
              <div className={classes.disable}></div>
              <p>غیر قابل خرید</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    vertical: {},
    container: {
      marginTop: theme.spacing(2),
      "&$vertical": {
        "& $driver": {
          transform: "rotate(0deg) translateY(0)",
          width: 150,
          marginRight: "auto",
        },
      },
    },
    seatContainer: {
      background: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      border: `3px solid ${theme.palette.grey[400]}`,
      padding: theme.spacing(2),
      direction: "ltr",

      [theme.breakpoints.down("sm")]: {
        direction: "rtl",
      },
    },

    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    null: {
      width: 25,
      height: 25,
      padding: theme.spacing(1.9),
    },

    seat: {
      margin: theme.spacing(1, 0),
      width: 25,
      height: 25,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1.9),
      cursor: "pointer",
      userSelect: "none",
    },

    active: {
      background: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },

    driverContainer: {
      width: "100%",
      height: "100%",
    },
    driver: {
      width: "90%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1, 0),
      fontSize: 12,
      fontWeight: 500,
      background: theme.palette.grey[200],
      border: `2px solid ${theme.palette.grey[300]}`,
      transform: "rotate(270deg) translateY(-25px)",
      userSelect: "none",
      marginBottom: 30,
    },

    detailsContainer: {
      marginTop: theme.spacing(2),
    },

    circleContainer: {
      display: "flex",
      alignItems: "center",

      "& > p": {
        fontSize: 12,
        fontWeight: 500,
        marginRight: theme.spacing(),
      },
    },

    selectable: {
      cursor: "pointer",
      padding: theme.spacing(1.9),
      width: 25,
      height: 25,
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.primary.main}`,

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.5),
        width: 20,
        height: 20,
      },
    },

    myChoice: {
      cursor: "pointer",
      padding: theme.spacing(1.9),
      width: 25,
      height: 25,
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.main,

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.5),
        width: 20,
        height: 20,
        margin: theme.spacing(2, 0),
      },
    },

    MrSelect: {
      padding: theme.spacing(1.9),
      cursor: "not-allowed",
      width: 25,
      height: 25,
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.grey[300]}`,
      background: BLUE[50],
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.5),
        width: 20,
        height: 20,
      },
    },

    MissSelect: {
      padding: theme.spacing(1.9),
      cursor: "not-allowed",
      width: 25,
      height: 25,
      borderRadius: theme.shape.borderRadius,
      background: RED[50],
      border: `2px solid ${theme.palette.grey[300]}`,

      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(1.5),
        width: 20,
        height: 20,
      },
    },

    disable: {
      padding: theme.spacing(1.9),
      cursor: "not-allowed",
      width: 25,
      height: 25,
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.action.disabledBackground,
      border: `2px solid ${theme.palette.grey[300]}`,

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.5),
        width: 20,
        height: 20,
      },
    },

    male: {
      background: BLUE[50],
      border: `2px solid ${theme.palette.grey[300]}`,
      cursor: "not-allowed",
    },

    female: {
      background: RED[50],
      border: `2px solid ${theme.palette.grey[300]}`,
      cursor: "not-allowed",
    },

    unavailable: {
      background: theme.palette.action.disabledBackground,
      border: `2px solid ${theme.palette.grey[300]}`,
      cursor: "not-allowed",
    },
  }),
  { flip: false }
);

export default BusSeatInput;
