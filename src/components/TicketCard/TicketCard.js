import React from "react";
import clsx from "clsx";
import moment from "moment-jalaali";

import { Paper, Typography, Button, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Hooks
import { useDetails } from "../../hooks/useHook";

//Utils
import { formaMoney } from "../../Utils/money";

import { useStyles } from "./styles";

const TicketCard = ({
  logo,
  title,
  subtitle,
  departure,
  arrival,
  origin,
  destination,
  originTerminal,
  destinationTerminal,
  vehicle,
  price,
  remain,
}) => {
  const [activeDetails, setActiveDetails] = useDetails();
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.firstDiv}>
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item md xs={12} className={classes.detailContainerBreakpoints}>
            <Grid container spacing={1} className={classes.detailsBreakpoints}>
              <Grid item md={2} className={classes.details}>
                <div className={classes.imgContainer}>
                  <img className={classes.img} src={logo} alt="bus" />
                </div>

                <div className={classes.info}>
                  <Typography variant="body2">{title}</Typography>
                  <Typography variant="body2">{subtitle}</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={10}>
                <Grid
                  container
                  spacing={2}
                  className={classes.lineContainerBreakpoints}
                >
                  <Grid item className={classes.alignment}>
                    <Typography
                      variant="body2"
                      className={clsx(classes.bold, classes.direction)}
                    >
                      {moment(departure).format("hh : mm")}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={clsx(classes.bold, classes.margin)}
                    >
                      {origin}
                    </Typography>
                    <Typography variant="body2" className={classes.grayFont}>
                      {originTerminal}
                    </Typography>
                  </Grid>

                  <Grid item md xs className={classes.lineContainer}>
                    <Typography variant="body2" className={classes.count}>
                      {vehicle}
                    </Typography>
                    <Typography variant="body2" className={classes.dateDesktop}>
                      {moment(departure).format("dddd jDD jMMMM jYYYY")}
                    </Typography>
                    <div className={classes.lineContainer}>
                      <span className={classes.circle1}></span>
                      <div className={classes.line}></div>
                      <span className={classes.circle2}></span>
                      <Typography
                        variant="body2"
                        className={classes.dateMobile}
                      >
                        {moment(departure).format("dddd jDD jMMMM jYYYY")}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item className={classes.alignment}>
                    <Typography
                      variant="body2"
                      className={clsx(classes.bold, classes.direction)}
                    >
                      {arrival ? moment(arrival).format("hh : mm") : <pre> </pre>}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={clsx(classes.bold, classes.margin)}
                    >
                      {destination}
                    </Typography>
                    <Typography variant="body2" className={classes.grayFont}>
                      {destinationTerminal}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.buy}>
              <div>
                <Typography variant="body2" className={classes.mobilePrice}>
                  قیمت هر بلیط
                </Typography>
                <div className={classes.priceContainer}>
                  <Typography variant="h5" className={classes.price}>
                    {formaMoney(price)}
                  </Typography>
                  <Typography variant="body2" className={classes.mobilePrice}>
                    تومان
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="body2" className={classes.mobileCounter}>
                  {remain}بلیط باقی مانده
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btn}
                >
                  انتخاب صندلی و خرید
                </Button>
                <Typography variant="body2" className={classes.desktopCounter}>
                  {remain}بلیط باقی مانده
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={classes.bottom}>
          <Typography
            variant="body2"
            className={classes.informationDesktop}
            onClick={() => setActiveDetails(activeDetails === 1 ? null : 1)}
          >
            اطلاعات تعاونی و مسیر
            <ExpandMoreIcon />
          </Typography>

          <Typography
            variant="body2"
            className={classes.informationMobile}
            onClick={() => setActiveDetails(activeDetails === 1 ? null : 1)}
          >
            اطلاعات
            <ExpandMoreIcon />
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setActiveDetails(activeDetails === 2 ? null : 2)}
          >
            قوانین کنسلی
            <ExpandMoreIcon />
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setActiveDetails(activeDetails === 3 ? null : 3)}
          >
            پیش فاکتور
            <ExpandMoreIcon />
          </Typography>
        </div>
      </div>

      {activeDetails === 1 && (
        <div className={classes.dropdown}>
          <table className="table">
            <tbody>
              <tr>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    نام تعاونی
                  </Typography>
                </td>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    {title}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {activeDetails === 2 && (
        <div className={clsx(classes.cancel, classes.dropdown)}>
          <div className={classes.cancelDiv}>
            <Typography variant="body2" className={classes.yellowText}>
              10%-
            </Typography>
            <Typography variant="body2" className={classes.cancelText}>
              از زمان صدور تا ۹۰ دقیقه قبل از حرکت | استرداد آنلاین
            </Typography>
          </div>
          <div className={classes.cancelDiv}>
            <Typography variant="body2" className={classes.yellowText}>
              50%-
            </Typography>
            <Typography variant="body2" className={classes.cancelText}>
              کمتر از یک ساعت قبل از حرکت تا بعد از حرکت | استرداد حضوری در
              پایانه مسافربری
            </Typography>
          </div>
        </div>
      )}
      {activeDetails === 3 && (
        <div className={classes.dropdown}>
          <table className="table">
            <thead>
              <tr>
                <th className="table-bordered ">
                  <Typography variant="body2" className={classes.thTable}>
                    تعداد
                  </Typography>
                </th>
                <th className="table-bordered ">
                  <Typography variant="body2" className={classes.thTable}>
                    قیمت واحد
                  </Typography>
                </th>
                <th className="table-bordered ">
                  <Typography variant="body2" className={classes.thTable}>
                    جمع
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    1
                  </Typography>
                </td>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    {formaMoney(price)} تومان
                  </Typography>
                </td>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    {formaMoney(price)} تومان
                  </Typography>
                </td>
              </tr>
              <tr>
                <td className="table-bordered " colSpan={2}>
                  <Typography variant="body2" className={classes.tdTable}>
                    قابل پرداخت
                  </Typography>
                </td>
                <td className="table-bordered ">
                  <Typography variant="body2" className={classes.tdTable}>
                    {formaMoney(price)} تومان
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Paper>
  );
};

export default TicketCard;
