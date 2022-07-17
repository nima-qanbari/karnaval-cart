import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import OriginDestinationInput from "../OriginDestinationInput/OriginDestinationInput";
import CountInput from "../CountInput/CountInput";

const useStyles = makeStyles((theme) => ({
  ToolbarContainer: {
    background: theme.palette.background.paper,
  },
  travel: {
    display: "flex",
  },
}));

const suggestions = [
  { label: "تبریز", id: 1 },
  { label: "مشهد", id: 2 },
  { label: "اهواز", id: 3 },
  { label: "رشت", id: 4 },
];

const routeSuggestions = [
  {
    origin: { label: "تهران", id: 1 },
    destination: { label: "تبریز", id: 1 },
  },
  {
    origin: { label: "تهران", id: 2 },
    destination: { label: "مشهد", id: 2 },
  },
  {
    origin: { label: "تهران", id: 3 },
    destination: { label: "اهواز", id: 3 },
  },
  {
    origin: { label: "تهران", id: 4 },
    destination: { label: "رشت", id: 4 },
  },
  {
    origin: { label: "تهران", id: 5 },
    destination: { label: "یزد", id: 5 },
  },
  {
    origin: { label: "تهران", id: 6 },
    destination: { label: "شیراز", id: 6 },
  },
];


const Toolbar = () => {
  const classes = useStyles();
  const [originItems, setOriginItems] = useState(null);
  const [destinationItems, setDestinationItems] = useState(null);
  const [originValue, setOriginValue] = useState(null);
  const [destinationValue, setDestinationValue] = useState(null);
  const [countValue, setCountValue] = useState(1);

  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onChangOriginInput = (text) => {
    //show suggestions to user when typing in input
    setLoading(true);
    setTimeout(() => {
      setOriginItems(
        text
          ? [
              { label: "مشهد", id: 2 },
              { label: "اهواز", id: 3 },
              { label: "رشت", id: 4 },
              { label: "تبریز", id: 5 },
            ]
          : null
      );
      setLoading(false);
    }, 2000);
  };

  const onChangDestinationInput = (text) => {
    setLoading(true);
    setTimeout(() => {
      setDestinationItems(
        text
          ? [
              { label: "اهواز", id: 3 },
              { label: "مشهد", id: 2 },
              { label: "تبریز", id: 5 },
              { label: "رشت", id: 4 },
            ]
          : null
      );
      setLoading(false);
    }, 2000);
  };

  const onChangeOrigin = (item) => {
    setOriginValue(item);
  };

  const onChangeDestination = (item) => {
    setDestinationValue(item);
  };

  return (
    <div className={classes.ToolbarContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className={classes.travel}>
          <OriginDestinationInput
            suggestions={suggestions}
            routeSuggestions={routeSuggestions}
            originItems={originItems}
            loading={loading}
            destinationItems={destinationItems}
            onChangOriginInput={onChangOriginInput}
            onChangDestinationInput={onChangDestinationInput}
            onChangeOrigin={onChangeOrigin}
            onChangeDestination={onChangeDestination}
            originValue={originValue}
            destinationValue={destinationValue}
            useDialog={isMobile}
          />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={2}>
          <CountInput onChange={setCountValue} value={countValue} useDialog={isMobile} />
        </Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
   
    </div>
  );
};

export default Toolbar;
