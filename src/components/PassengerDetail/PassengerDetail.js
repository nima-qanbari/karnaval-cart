import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import SelectField from "../SelectField/SelectField";

const PassengerDetail = ({ passenger }) => {
  const [data, setData] = useState({
    name: "",
    family: "",
    nationalCode: "",
    gender: "",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const classes = useStyles();
  return (
    <Paper className={classes.container} data-testid="container">
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
                <TextField
                    value={data.name}
                  name="name"
                  id="name"
                  fullWidth
                  label="نام"
                  variant="outlined"
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  value={data.family}
                  name="family"
                  fullWidth
                  label="نام خانوادگی"
                  variant="outlined"
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectField
                  fullWidth
                  label="جنسیت"
                  variant="outlined"
                  value={data.gender}
                  name="gender"
                  onChange={onChangeHandler}
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
                </SelectField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="کد ملی"
                  variant="outlined"
                  value={data.nationalCode}
                  name="nationalCode"
                  onChange={onChangeHandler}
                />
              </Grid>
            </Grid>
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
