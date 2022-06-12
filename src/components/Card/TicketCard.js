import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/styles";
import { Paper, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    paper: {
      padding: theme.spacing(1.5),
      "&:hover": {
        "& $line:after": {
          transform: "translateX(0)",
        },
        "& $circle1, $circle2": {
          background: "#ff6161",
        },
      },
    },

    imgContainer: {
      border: "1px solid #ccc",
      borderRadius: "50%",
      margin: "auto",
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    img: {
      width: 35,
      height: 35,
    },
    details: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    bold: {
      fontSize: 14,
      fontWeight: "bold",
    },

    buy: {
      border: "3px dashed gray",
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2, 0),
      textAlign: "center",
    },

    alignment: {
      textAlign: "center",
    },

    lineContainer: {
      textAlign: "center",
      position: "relative",
    },

    date: {
      margin: theme.spacing(1),
      fontSize: 11,
      fontWeight: "bold",
    },

    count: {
      width: "fit-content",
      border: "1px solid #ccc",
      fontSize: 11,
      margin: "auto",
      padding: theme.spacing(0.5),
      borderRadius: theme.shape.borderRadius,
    },

    margin: {
      margin: theme.spacing(1),
    },

    grayFont: {
      fontSize: 12,
      color: "rgba(0, 0, 0, 0.54)",
    },

    circle1: {
      display: "flex",
      borderRadius: "50%",
      background: "#ccc",
      width: "10px",
      height: "10px",
      position: "absolute",
      right: -1,
      top: -4,
      zIndex: 2,
      transition: `all ${theme.transitions.duration.shortest} ${theme.transitions.easing.easeInOut}  0ms`,
    },
    circle2: {
      display: "flex",
      borderRadius: "50%",
      background: "#ccc",
      width: "10px",
      height: "10px",
      position: "absolute",
      left: -1,
      top: -4,
      zIndex: 2,
      transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },

    line: {
      width: "100%",
      height: "2px",
      background: "#ccc",
      position: "relative",
      overflow: "hidden",

      "&::after ": {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        content: "''",
        transform: "translateX(100%)",
        backgroundColor: "#ff6161",
        transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },

    btn: {  
      margin: theme.spacing(1, 0 ),
    }
  };
});

const TicketCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={9}>
          <Grid container spacing={1}>
            <Grid item sm={2} className={classes.details}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.img}
                  src={require("../../image/download.png")}
                  alt="bus"
                />
              </div>
            </Grid>
            <Grid item sm={10}>
              <Grid container spacing={2}>
                <Grid item className={classes.alignment}>
                  <Typography variant="body2" className={classes.bold}>
                    08:30
                  </Typography>
                  <Typography
                    variant="body2"
                    className={clsx(classes.bold, classes.margin)}
                  >
                    تهران
                  </Typography>
                  <Typography variant="body2" className={classes.grayFont}>
                    پایانه شرق(تهران)
                  </Typography>
                </Grid>

                <Grid item sm className={classes.lineContainer}>
                  <Typography variant="body2" className={classes.count}>
                    اسکانیا ۳۱ نفره کلاسیک
                  </Typography>
                  <Typography variant="body2" className={classes.date}>
                    پنجشنبه ۲۶ خرداد ۱۴۰۱
                  </Typography>
                  <div className={classes.lineContainer}>
                    <span className={classes.circle1}></span>
                    <div className={classes.line}></div>
                    <span className={classes.circle2}></span>
                  </div>
                </Grid>

                <Grid item className={classes.alignment}>
                  <Typography variant="body2">&nbsp;</Typography>
                  <Typography
                    variant="body2"
                    className={clsx(classes.bold, classes.margin)}
                  >
                    اصفهان
                  </Typography>
                  <Typography variant="body2" className={classes.grayFont}>
                    اصفهان
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.buy}>
            <Typography variant="body2">قیمت هر بلیط</Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.price}
            >
              <Typography variant="h5">۹۸۰۰۰</Typography>
              <Typography variant="body2">تومان</Typography>
            </Grid>

            <Button color="primary" variant="contained" className={classes.btn}> 
              انتخاب صندلی و خرید
            </Button>
            <Typography variant="body2" className={classes.grayFont}>۲۹ بلیط باقی مانده</Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TicketCard;
