import React, { useState } from "react";

import { Button, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//Toolbar
import Toolbar from "../Toolbar/Toolbar";

//sort dekstop
import SortDesktop from "../SortDesktop/SortDesktop";

//modal
import FilterModal from "../FilterModal/FilterModal";
import SortModal from "../SortModal/SortModal";

//BusSeatInput
import BusSeatInput from "../BusSeatInput/BusSeatInput";

//cart
import TicketCard from "../Card/TicketCard";

//sidebar
import Sidebar from "../Sidebar/Sidebar";

import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { makeStyles } from "@material-ui/styles";
import PassengerDetail from "../PassengerDetail/PassengerDetail";

const seatData = [
  {
    seats: [
      { seatNumber: 1, status: "male" },
      { seatNumber: 4, status: "available" },
      { seatNumber: 7, status: "available" },
      { seatNumber: 10, status: "available" },
      null,
      null,
      { seatNumber: 15, status: "unavailable" },
      { seatNumber: 18, status: "available" },
      { seatNumber: 21, status: "available" },
      { seatNumber: 24, status: "available" },
    ],
  },
  {
    seats: [
      { seatNumber: 2, status: "male" },
      { seatNumber: 5, status: "available" },
      { seatNumber: 8, status: "available" },
      { seatNumber: 11, status: "available" },
      null,
      null,
      { seatNumber: 16, status: "available" },
      { seatNumber: 19, status: "available" },
      { seatNumber: 22, status: "female" },
      { seatNumber: 25, status: "available" },
    ],
  },
  { seats: [null, null, null, null, null, null, null, null, null, null] },
  {
    seats: [
      { seatNumber: 3, status: "male" },
      { seatNumber: 6, status: "available" },
      { seatNumber: 9, status: "available" },
      { seatNumber: 12, status: "available" },
      { seatNumber: 13, status: "available" },
      { seatNumber: 14, status: "available" },
      { seatNumber: 17, status: "female" },
      { seatNumber: 20, status: "available" },
      { seatNumber: 23, status: "available" },
      { seatNumber: 26, status: "available" },
    ],
  },
];

const List = ({
  data,
  sidebar,
  sort,
  selectedSortItem,
  sortHandler,
  moreOnclick,
  hasMore,
  loading,
  onChangeCheckbox,
  isChecked,
}) => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [choice, setChoice] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
  const sidebarJSX = (
    <Sidebar data={sidebar} onChange={onChangeCheckbox} isChecked={isChecked} />
  );
  return (
    <Grid container spacing={2} className={classes.paddingContainer}>
      <FilterModal handleClose={closeFilterHandler} open={openFilter}>
        {sidebarJSX}
      </FilterModal>
      <SortModal
        handleClose={closeSortHandler}
        open={openSort}
        sort={sort}
        sortHandler={(id) => {
          sortHandler(id);
          closeSortHandler();
        }}
        selectedSortItem={selectedSortItem}
      />
      <Grid item xs={12}>
        <Toolbar />

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
      <Grid item xs={12}>
        <PassengerDetail />
        <BusSeatInput
          data={seatData}
          value={choice}
          onChange={setChoice}
          vertical={isMobile}
        />
      </Grid>
      <Grid item md={3} className={classes.none}>
        {sidebarJSX}
      </Grid>
      <Grid item xs={12} md={9}>
        <SortDesktop
          sort={sort}
          sortHandler={sortHandler}
          selectedSortItem={selectedSortItem}
        />
        <div className={classes.items}>
          {data.map((item, index) => {
            return (
              <TicketCard
                key={index}
                logo={require("../../image/download.png")}
                data-testid={item.title}
                subdata-testid={item.subtitle}
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
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",

    "& svg": {
      marginLeft: theme.spacing(0.7),
      color: theme.palette.text.secondary,
      fontSize: 20,
      fontWeight: "bold",
    },
  },

  mobileFilter: {
    display: "none",
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,

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
    margin: theme.spacing(2, 0, 0),

    "& > button": {
      fontSize: 20,
      fontWeight: "bold",
      padding: theme.spacing(0.5, 6),
    },
  },
}), {flip: false});

export default List;
