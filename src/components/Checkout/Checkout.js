import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { formaMoney } from "../../Utils/money";
import CreateIcon from "@material-ui/icons/Create";
import ZoomIconButton from "../ZoomIconButton/ZoomIconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import clsx from "clsx";

const Checkout = ({ data, passengers, totalPrice, cancellationRules }) => {
  const [checked, setChecked] = useState(true);

  const classes = useStyles();

  const checkboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Paper className={classes.container}>
      <Typography className={classes.title}>اطلاعات مسیر</Typography>
      <div className={classes.table}>
        <table className="table">
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className={clsx("table-bordered", classes.textSecondary)}>
                    <Typography variant="body2">{item.label}</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">{item.value}</Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Typography className={classes.title}>
        {passengers.length === 1 ? <span>مسافر</span> : <span>مسافران</span>}
      </Typography>

      <div className={clsx(classes.table, classes.desktopTable)}>
        <table className="table">
          <thead>
            <tr>
              <th className={clsx("table-bordered", classes.textSecondary)}>
                <Typography variant="body2">نام و نام خانوادگی</Typography>
              </th>
              <th className={clsx("table-bordered", classes.textSecondary)}>
                <Typography variant="body2">کد ملی</Typography>
              </th>
              <th className={clsx("table-bordered", classes.textSecondary)}>
                <Typography variant="body2">شماره صندلی</Typography>
              </th>
              <th className={clsx("table-bordered", classes.textSecondary)}>
                <Typography variant="body2">قیمت</Typography>
              </th>
              <th className={clsx("table-bordered", classes.textSecondary)}>
                <Typography variant="body2">ویرایش</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="table-bordered ">
                    <Typography variant="body2">
                      {item.gender === "male" ? (
                        <span>آقای</span>
                      ) : (
                        <span>خانم</span>
                      )}{" "}
                      {item.name} {item.family}
                    </Typography>
                  </td>

                  <td className="table-bordered ">
                    <Typography variant="body2">{item.nationalCode}</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">{item.seatNumber}</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">
                      {formaMoney(item.price)} تومان
                    </Typography>
                  </td>
                  <td className="table-bordered ">
                    <ZoomIconButton>
                      <CreateIcon color="action" className={classes.editIcon} />
                    </ZoomIconButton>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="table-bordered " colSpan={4}>
                <Typography variant="body2" className={classes.priceText}>
                  مبلغ قابل پرداخت
                </Typography>
              </td>
              <td className="table-bordered ">
                <Typography variant="body2">
                  <span className={classes.totalPrice}>
                    {formaMoney(totalPrice)}
                  </span>{" "}
                  <span className={classes.tomanText}>تومان</span>
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.mobileTable}>
        {passengers.map((item, index) => {
          return (
            <table className={clsx("table", classes.table)} key={index}>
              <tbody>
                <tr>
                  <td className={clsx("table-bordered", classes.textSecondary)}>
                    <Typography variant="body2">نام و نام خانوادگی</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">
                      {item.gender === "male" ? (
                        <span>آقای</span>
                      ) : (
                        <span>خانم</span>
                      )}{" "}
                      {item.name} {item.family}
                    </Typography>
                  </td>
                </tr>

                <tr>
                  <td className={clsx("table-bordered", classes.textSecondary)}>
                    <Typography variant="body2">کد ملی</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">{item.nationalCode}</Typography>
                  </td>
                </tr>
                <tr>
                  <td className={clsx("table-bordered", classes.textSecondary)}>
                    <Typography variant="body2">شماره صندلی</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">{item.seatNumber}</Typography>
                  </td>
                </tr>
                <tr>
                  <td className={clsx("table-bordered", classes.textSecondary)}>
                    <Typography variant="body2">قیمت</Typography>
                  </td>
                  <td className="table-bordered ">
                    <Typography variant="body2">
                      {formaMoney(item.price)}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="table-bordered " colSpan={2}>
                    <Button variant="outlined" color="primary" fullWidth>
                      ویرایش
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>

      <div className={classes.mobileTotalPrice}>
        <table className="table">
          <tbody>
            <tr>
              <td className="table-bordered">
                <Typography variant="body2">مبلغ قابل پرداخت</Typography>
              </td>
              <td className="table-bordered ">
                <Typography variant="body2">
                  <span className={classes.totalPrice}>
                    {formaMoney(totalPrice)}
                  </span>{" "}
                  <span className={classes.tomanText}>تومان</span>
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.cancellationRules}>
        <Typography className={classes.title}>قوانین کنسلی:</Typography>
        <ul className={classes.ul}>
          {cancellationRules.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className={classes.checkboxContainer}>
        <div className={classes.conformationContainer}>
          <FormControlLabel
            control={<Checkbox disableRipple />}
            label={"اطلاعات جدول های فوق مورد تایید است."}
            className={classes.checkbox}
            checked={checked}
            onChange={checkboxChange}
          />

          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            size="large"
            disabled={!checked}
            type="submit"
          >
            صدور فاکتور و پرداخت
            <KeyboardBackspaceIcon className={classes.icon} />
          </Button>
        </div>
        <div className={classes.cancelRequest}>
          <Button className={classes.requestBtn}>درخواست لغو رزرو</Button>
        </div>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      padding: theme.spacing(2),
    },

    textSecondary: {
      color: theme.palette.text.secondary,
    },

    table: {
      marginBottom: theme.spacing(3),
    },

    desktopTable: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    mobileTable: {
      display: "none",

      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },

    mobileTotalPrice: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        margin: theme.spacing(2,0)
      }
    },

    title: {
      fontSize: 14,
      fontWeight: "400",
      marginBottom: theme.spacing(1),
    },

    priceText: {
      fontSize: 13,
      fontWeight: "bold",
      textAlign: "left",
      marginLeft: theme.spacing(4),
    },

    totalPrice: {
      fontSize: 13,
      fontWeight: "bold",
    },

    tomanText: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontWeight: "500",
    },

    cancellationRules: {
      marginBottom: theme.spacing(2),
    },
    ul: {
      marginRight: theme.spacing(2),
      "& li": {
        lineHeight: 2,
        listStyle: "disc",
        fontSize: 12,
      },
    },

    checkboxContainer: {
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.divider}`,
    },

    conformationContainer: {
      display: "flex",
      justifyContent: "space-between",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
    },

    btn: {
      fontSize: 13,
      fontWeight: "bold",

      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1),
      },
    },
    icon: {
      marginRight: theme.spacing(0.5),
    },

    cancelRequest: {
      display: "flex",
      justifyContent: "flex-end",
    },

    requestBtn: {
      "&,&:hover": {
        fontSize: 11,
        textDecoration: "underline",
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(2),
      },
    },
  }),
  { flip: false }
);

export default Checkout;
