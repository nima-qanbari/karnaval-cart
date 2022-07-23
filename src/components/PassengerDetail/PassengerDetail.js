import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, MenuItem, Paper, Typography } from "@material-ui/core";
import BusSeatInput from "../BusSeatInput/BusSeatInput";
import TextField from "../../react-final-form-field/TextField";
import SelectField from "../../react-final-form-field/SelectField";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  composeValidators,
  nationalCode,
  required,
} from "../Validate/Validate";
import { Field } from "react-final-form";

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

const PassengerDetail = ({ passenger, name }) => {
  const [choice, setChoice] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  return (
    <Paper className={classes.container} data-testid="PaperContainer">
      <div className={classes.dashed}>
        <Grid container direction="column">
          <Grid item className={classes.borderBottom}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography className={classes.passenger}>
                  {passenger}
                </Typography>
              </Grid>
              <Grid item>
                <Button className={classes.btn} variant="outlined">
                  انتخاب از لیست مسافران
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Field
                  component={TextField}
                  name={`${name}.name`}
                  id="name"
                  validate={required("نام")}
                  fullWidth
                  label="نام"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  component={TextField}
                  name={`${name}.family`}
                  validate={required("نام خانوادگی")}
                  fullWidth
                  label="نام خانوادگی"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  component={SelectField}
                  fullWidth
                  label="جنسیت"
                  validate={required("جنسیت")}
                  variant="outlined"
                  name={`${name}.gender`}
                >
                  {[
                    { label: "مرد", value: "male" },
                    { label: "زن", value: "female" },
                  ].map((item) => {
                    return (
                      <MenuItem value={item.value} key={item.value}>
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Field>
              </Grid>
              <Grid item xs={12} md={3}>
                <Field
                  component={TextField}
                  validate={composeValidators(required("کد ملی"), nationalCode)}
                  fullWidth
                  label="کد ملی"
                  variant="outlined"
                  name={`${name}.nationalCode`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <BusSeatInput
              data={seatData}
              value={choice}
              onChange={setChoice}
              vertical={isMobile}
            />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      padding: theme.spacing(2),
    },
    dashed: {
      borderRadius: theme.shape.borderRadius,
      border: `2px dashed ${theme.palette.divider}`,
      padding: theme.spacing(2),
    },

    borderBottom: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: theme.spacing(2.5),
    },

    passenger: {
      fontSize: 14,
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },

    btn: {
      marginBottom: theme.spacing(),
    },
  }),
  { flip: false }
);

PassengerDetail.defaultProps = {
  passenger: "مسافر بزرگسال اول",
};
export default PassengerDetail;
