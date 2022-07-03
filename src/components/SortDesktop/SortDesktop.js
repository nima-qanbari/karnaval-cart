import React from "react";
import { Grid } from "@material-ui/core";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sortContainer: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",

    "& > li": {
      display: "flex",
      alignItems: "center",
      background: theme.palette.background.paper,
      padding: theme.spacing(1),
      fontSize: 12,
      fontWeight: "500",
      color: theme.palette.text.secondary,
      borderRadius: theme.shape.borderRadius,
      border: `.1px solid ${theme.palette.divider}`,
      cursor: "pointer",
      "&$active": {
        color: theme.palette.text.primary,
      },
    },
    "& > li > svg": {
      fontSize: 15,
      marginLeft: theme.spacing(0.5),
    },
    "& :not(:last-child)": {
      marginLeft: theme.spacing(),
    },
  },

  timeContainer: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
  },

  date: {
    padding: theme.spacing(0, 0.6, 0, 0.6),
    fontSize: 11,
    fontWeight: "bold",
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  time: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    color: theme.palette.text.secondary,
    padding: theme.spacing(0.8),
    cursor: "pointer",

    "& svg": {
      fontSize: 22,
    },
  },

  active: {},
}));

const SortDesktop = ({ sort, sortHandler, selectedSortItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.sortContainer}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item className={classes.timeContainer}>
          <Grid container alignItems="center">
            <Grid item className={classes.time}>
              <ChevronRightIcon />
              روز قبل
            </Grid>
            <Grid item className={classes.date}>
              یکشنبه ۱۲ تیر ۱۴۰۱
            </Grid>
            <Grid item className={classes.time}>
              روز بعد
              <ChevronLeftIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
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
                  <Icon />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default SortDesktop;
