import React, { useState } from "react";

import { Button, Grid, Typography } from "@material-ui/core";

//modal
import FilterModal from "../FilterModal/FilterModal";
import SortModal from "../SortModal/SortModal";

//cart
import TicketCard from "../Card/TicketCard";

//sidebar
import Sidebar from "../Sidebar/Sidebar";

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

    "& p": {
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

  items: {
    "& > :not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },

  hasMoreBtn: {
    textAlign: "center",
    margin: theme.spacing(2, 0 ,0),

    "& > button": {
      fontSize: 20,
      fontWeight: "bold",
      padding: theme.spacing(.5, 6),
    }
  }
}));

const List = ({ data, sidebar, moreOnclick, hasMore, loading, onChangeCheckbox, isChecked  }) => {
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
  const sidebarJSX= (<Sidebar data={sidebar} onChange={onChangeCheckbox } isChecked={isChecked }/>)
   return (
    <Grid container spacing={2} className={classes.paddingContainer}>
      <FilterModal handleClose={closeFilterHandler} open={openFilter}>
        {sidebarJSX}
      </FilterModal>
      <SortModal handleClose={closeSortHandler} open={openSort} />
      <Grid item xs={12}>
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
        {sidebarJSX}
      </Grid>
      <Grid item xs={12} md={9}>
        <div className={classes.items}>
          {data.map((item, index) => {
            return (
              <TicketCard
                key={index}
                logo={require("../../image/download.png")}
                title={item.title}
                subtitle={item.subtitle}
                departure={item.departure}
                arrival={item.arrival}
                origin={item.origin}
                destination={item.destination}
                originTerminal={item.originTerminal}
                destinationTerminal={item.destinationTerminal}
                vehicle={item.vehicle}
                price={item.price}
                remain={item.remain}
              />
            );
          })}
        </div>
        <div className={classes.hasMoreBtn}>
          {hasMore ? (
            <Button
              variant="contained"
              color="primary"
              onClick={moreOnclick}
              disabled={loading}
            >
              بیشتر
            </Button>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default List;
