import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import OriginDestinationInput from "../OriginDestinationInput/OriginDestinationInput";

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
  { label: "تهران به تبریز", id: 1 },
  { label: "تهران به مشهد", id: 2 },
  { label: "تهران به اهواز", id: 3 },
  { label: "تهران به رشت", id: 4 },
  { label: "تهران به یزد", id: 5 },
  { label: "تهران به شیراز", id: 6 },
];

const Toolbar = () => {
  const classes = useStyles();
  const [originItems, setOriginItems] = useState(null);
  const [destinationItems, setDestinationItems] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangOriginInput = (text) => {
    setLoading(true);
    setTimeout(() => {
         setOriginItems( text ? [
            { label: "مشهد", id: 2 },
            { label: "اهواز", id: 3 },
            { label: "رشت", id: 4 },
            { label: "تبریز", id: 5 },
          ] : null);
      setLoading(false);
    }, 2000);
  };

  const onChangDestinationInput = (text) => {
    setLoading(true);
    setTimeout(() => {

        setDestinationItems(text ? [
            { label: "اهواز", id: 3 },
            { label: "مشهد", id: 2 },
            { label: "تبریز", id: 5 },
            { label: "رشت", id: 4 },
          ] : null);
      setLoading(false);
    }, 2000);
  };
  return (
    <div className={classes.ToolbarContainer}>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.travel}>
          <OriginDestinationInput
            suggestions={suggestions}
            routeSuggestions={routeSuggestions}
            originItems={originItems}
            loading={loading}
            destinationItems={destinationItems}
            onChangOriginInput={onChangOriginInput}
            onChangDestinationInput={onChangDestinationInput}
          />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Toolbar;
