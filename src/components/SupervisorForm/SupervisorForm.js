import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/styles";

import { email, phone, required } from "../Validate/Validate";
import Field from "../Field/Field";

const SupervisorForm = ({
  text,
  changeDetail,
  initialValue,
  rules1,
  rules2,
}) => {
  const [data, setData] = useState({
    mobile: initialValue,
    email: "",
  });

  const [checked, setChecked] = useState(true);

  const classes = useStyles();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const checkboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.title}>گیرنده رسید بلیط</Typography>
          <Typography className={classes.notice}>{text}</Typography>
          <Typography className={classes.notice}>{changeDetail}</Typography>
        </Grid>
        <Grid item md={7} xs={12} className={classes.inputContainer}>
          <Field
            component={TextField}
            fullWidth
            validate={[required("موبایل"), phone("موبایل")]}
            className={classes.mobileInput}
            label="موبایل"
            variant="outlined"
            value={data.mobile}
            name="mobile"
            onChange={onChangeHandler}
          />

          <Field
            component={TextField}
            validate={[email]}
            fullWidth
            label="ایمیل (اختیاری)"
            variant="outlined"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={12} className={classes.checkboxContainer}>
          <FormControlLabel
            control={<Checkbox disableRipple />}
            label={
              <>
                <a href="/#" className={classes.link}>
                  {rules1}
                </a>{" "}
                و{" "}
                <a href="/#" className={classes.link}>
                  {rules2}
                </a>{" "}
                را پذیرفته‌ام و تایید می‌کنم.
              </>
            }
            className={classes.checkbox}
            checked={checked}
            onChange={checkboxChange}
            classes={{ label: classes.commonText }}
          />

          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            size="large"
            disabled={!checked}
          >
            ادامه فرآیند خرید
            <KeyboardBackspaceIcon className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
    },

    title: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(0.5),
    },

    notice: {
      lineHeight: 2,
      textAlign: "justify",
    },

    inputContainer: {
      display: "flex",
      margin: theme.spacing(2, 0),
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },

    mobileInput: {
      marginLeft: theme.spacing(2),

      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0, 0, 2, 0),
      },
    },

    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(2),
      justifyContent: "space-between",
      borderTop: `1px solid ${theme.palette.divider}`,

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "unset",
      },
    },

    checkbox: {
      display: "flex",
      alignItems: "center",
    },

    link: {
      color: theme.palette.primary.main,
    },

    btn: {
      fontSize: 16,
      fontWeight: "500",

      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2),
      },
    },

    icon: {
      marginRight: theme.spacing(0.5),
    },
  }),
  { flip: false }
);

SupervisorForm.defaultProps = {
  text: "بلیط های صادر شده به شماره موبایل و آدرس ایمیل زیر ارسال می شوند.",
  changeDetail:
    "در صورتی که می خواهید بلیط ها به شخص دیگری ارسال شوند اطلاعات زیر را تغییر دهید.",
  initialValue: "09911365952",
  rules1: "قوانین سایت",
  rules2: "قوانین اتوبوس",
};

export default SupervisorForm;
