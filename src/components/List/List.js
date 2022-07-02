import React, { useState } from "react";

import { Grid, Typography } from "@material-ui/core";

//modal
import FilterModal from "../FilterModal/FilterModal";
import SortModal from "../SortModal/SortModal";

import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paddingContainer: {
    padding: theme.spacing(),
  },
  none: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  alignment: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",

    "& svg": {
      marginLeft: "5px",
      color: "#ada6a6",
      fontSize: 20,
      fontWeight: "bold",
    },
  },

  mobileFilter: {
    display: "none",
    borderRadius: theme.shape.borderRadius,
    background: "#fff",
   

    "& p":{
    display: "flex",
    justifyContent: "center",
     width: "48%",
     padding: theme.spacing(2, 0),
    
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
}));

const List = ({ cart, sidebar }) => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const openFilterHandler = () => {
    setOpenFilter(true);
  };
  const closeFilterHandler = () => {
    setOpenFilter(false);
  };

  const openSortHandler = () => {
    setOpenSort(true);
  };

  const closeSortHandler = () => {
    setOpenSort(false);
  };

  return (
    <Grid container spacing={2} className={classes.paddingContainer}>
      <FilterModal handleClose={closeFilterHandler} open={openFilter}>
        {sidebar}
      </FilterModal>
      <SortModal handleClose={closeSortHandler} open={openSort} />
      <Grid item xs={12} justifyContent="center">
        <div className={classes.mobileFilter}>
          <Typography className={classes.alignment} onClick={openFilterHandler}>
            <FilterListIcon />
            فیلتر
          </Typography>
          <Typography className={classes.alignment} onClick={openSortHandler}>
            <ImportExportIcon />
            ترتیب
          </Typography>
        </div>
      </Grid>
      <Grid item md={3} className={classes.none}>
        {sidebar}
      </Grid>
      <Grid item xs={12} md={9}>
        {cart}
      </Grid>
    </Grid>
  );
};

export default List;
