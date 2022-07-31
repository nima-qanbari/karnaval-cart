import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import OriginDestinationInput from "../../react-final-form-field/OriginDestinationInput";
import CountInput from "../../react-final-form-field/CountInput";
import { Field, Form } from "react-final-form";
import {
  countValidation,
  originDestinationValidation,
} from "../Validate/Validate";

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

const Toolbar = ({ useMinimize }) => {
  const classes = useStyles();
  const [originItems, setOriginItems] = useState(null);
  const [destinationItems, setDestinationItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [minimize, setMinimize] = useState(true);

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

  const onSubmit = (data) => {
    console.log("originDestination form", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const JSX = (
    <>
      <Grid item xs={12} md={4} className={classes.travel}>
        <Field
          name="originDestination"
          component={OriginDestinationInput}
          suggestions={suggestions}
          routeSuggestions={routeSuggestions}
          originItems={originItems}
          loading={loading}
          destinationItems={destinationItems}
          onChangOriginInput={onChangOriginInput}
          onChangDestinationInput={onChangDestinationInput}
          useDialog={isMobile}
          validate={originDestinationValidation}
        />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={2}>
        <Field
          name="count"
          component={CountInput}
          useDialog={isMobile}
          validate={countValidation}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.btn}
        >
          جستجو
          <KeyboardBackspaceIcon className={classes.icon} />
        </Button>
      </Grid>
    </>
  );

  return (
    <Paper className={classes.ToolbarContainer}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {useMinimize ? (
              minimize === true ? (
                <Grid container spacing={2} onClick={() => setMinimize(false)}>
                  <Grid item xs className={classes.travel}>
                    <Field
                      name="originDestination"
                      component={OriginDestinationInput}
                      suggestions={suggestions}
                      routeSuggestions={routeSuggestions}
                      originItems={originItems}
                      loading={loading}
                      destinationItems={destinationItems}
                      onChangOriginInput={onChangOriginInput}
                      onChangDestinationInput={onChangDestinationInput}
                      useDialog={isMobile}
                      validate={originDestinationValidation}
                      readOnly={minimize}
                      key={"minimize"}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.ChangeBtn}
                    >
                      تغییر جستجو
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  {JSX}
                </Grid>
              )
            ) : (
              <Grid container spacing={2}>
                {JSX}
              </Grid>
            )}
          </form>
        )}
      />
    </Paper>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    ToolbarContainer: {
      background: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2),
    },
    travel: {
      display: "flex",
    },

    btn: {
      width: "100%",
      height: 53.28,
      fontSize: 16,
      fontWeight: "bold",
    },

    ChangeBtn: {
      height: 53.28,
      fontSize: 14,
    },

    icon: {
      marginRight: theme.spacing(),
      fontSize: 24,
    },
  }),
  { flip: false }
);

export default Toolbar;
