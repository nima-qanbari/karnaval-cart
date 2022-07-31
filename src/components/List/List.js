import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { Form } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";
import SupervisorForm from "../SupervisorForm/SupervisorForm";
import Toolbar from "../Toolbar/Toolbar";
import SortDesktop from "../SortDesktop/SortDesktop";
import FilterModal from "../FilterModal/FilterModal";
import SortModal from "../SortModal/SortModal";
import TicketCard from "../TicketCard/TicketCard";
import Sidebar from "../Sidebar/Sidebar";
import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import PassengerDetail from "../PassengerDetail/PassengerDetail";
import Checkout from "../Checkout/Checkout";
import Carousel from "../Carousel/Carousel";
import Blog from "../Blog/Blog";
import FullCard from "../Card/FullCard";
import PaperCard from "../Card/PaperCard";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

  const onSubmit = (data) => {
    console.log("ddfdsfd");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  const sidebarJSX = (
    <Sidebar data={sidebar} onChange={onChangeCheckbox} isChecked={isChecked} />
  );
  return (
    <div style={{ maxWidth: 1100, margin: "auto" }}>
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
          <Carousel
            card={PaperCard}
            title="شهرهای خنک ایران برای سفرهای تابستانی"
            subtitle="مقاصد تابستانی جذاب ایران برای سفر"
            width={200}
            cardHeight={220}
            data={[
              {
                id: 1,
                img: require("../../image/manzare.jpg"),
                label: "خراسان شمالی",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 2,
                img: require("../../image/manzare.jpg"),
                label: "رشت",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 3,
                img: require("../../image/manzare.jpg"),
                label: "یزد",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 4,
                img: require("../../image/manzare.jpg"),
                label: "کیش",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 5,
                img: require("../../image/manzare.jpg"),
                label: "قشم",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 6,
                img: require("../../image/manzare.jpg"),
                label: "اصفهان",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 7,
                img: require("../../image/manzare.jpg"),
                label: "اصفهان",
                subtitle: "مقاصد تابستانی جذاب",
              },
              {
                id: 8,
                img: require("../../image/manzare.jpg"),
                label: "اصفهان",
                subtitle: "مقاصد تابستانی جذاب",
              },
            ]}
          />
        </Grid>
        <Grid xs={12}>
          <Carousel
            card={FullCard}
            title="شهرهای خنک ایران برای سفرهای تابستانی"
            subtitle="مقاصد تابستانی جذاب ایران برای سفر"
            width={200}
            cardHeight={220}
            data={[
              {
                id: 1,
                img: require("../../image/manzare.jpg"),
                label: "خراسان شمالی",
              },
              {
                id: 2,
                img: require("../../image/manzare.jpg"),
                label: "رشت",
              },
              {
                id: 3,
                img: require("../../image/manzare.jpg"),
                label: "یزد",
              },
              {
                id: 4,
                img: require("../../image/manzare.jpg"),
                label: "کیش",
              },
              {
                id: 5,
                img: require("../../image/manzare.jpg"),
                label: "قشم",
              },
              {
                id: 6,
                img: require("../../image/manzare.jpg"),
                label: "اصفهان",
              },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <Blog
            title="بلاگ"
            subtitle="تازه های کارناوال"
            data={[
              {
                label: "معرفی شهر های توریستی",
                subtitle: "معرفی شهر ماسال",
                img: require("../../image/img.jpg"),
                md: 6,
              },
              {
                label: "معرفی شهر های توریستی",
                subtitle: "معرفی شهر ماسال",
                img: require("../../image/img.jpg"),
                md: 6,
              },
              {
                label: "معرفی شهر های توریستی",
                subtitle: "معرفی شهر ماسال",
                img: require("../../image/img.jpg"),
                md: 4,
              },
              {
                label: "معرفی شهر های توریستی",
                subtitle: "معرفی شهر ماسال",
                img: require("../../image/img.jpg"),
                md: 4,
              },
              {
                label: "معرفی شهر های توریستی",
                subtitle: "معرفی شهر ماسال",
                img: require("../../image/img.jpg"),
                md: 4,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Toolbar useMinimize={isMobile} />
        </Grid>
        <Grid item xs={12}>
          <Checkout
            data={[
              { label: "نام تعاونی", value: "شرکت زاگرس" },
              { label: "مبدا", value: "مشهد" },
              { label: "مقصد", value: "تهران" },
              { label: "تاریخ حرکت", value: "یکشنبه ۱۲ تیر ۱۴۰۱" },
              { label: "ساعت حرکت", value: "۲۳:۳۰" },
            ]}
            passengers={[
              {
                name: "نیما",
                family: "قنبری",
                gender: "male",
                nationalCode: "3242047672",
                seatNumber: "8",
                price: 169000,
              },
              {
                name: "ییسب",
                family: "یسیسیسر",
                gender: "female",
                nationalCode: "3242047672",
                seatNumber: "9",
                price: 169000,
              },
            ]}
            cancellationRules={[
              "از زمان صدور تا ۹۰ دقیقه قبل از حرکت | استرداد آنلاین",
              "کمتر از یک ساعت قبل از حرکت تا بعد از حرکت | استرداد حضوری در پایانه مسافربری",
            ]}
            ticketInformation="اطلاعات اتوبوس"
            totalPrice={998000}
            passengersInformation="اطلاعات مسافران"
          />
          <div className={classes.mobileFilter}>
            <Typography
              className={classes.alignment}
              onClick={openFilterHandler}
            >
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
          <Form
            initialValues={{ mobile: "09911339988", passengers: [{}] }}
            onSubmit={onSubmit}
            mutators={{
              ...arrayMutators,
            }}
            render={({
              handleSubmit,
              form: {
                mutators: { push, pop },
              },
            }) => (
              <form onSubmit={handleSubmit}>
                <FieldArray name="passengers">
                  {({ fields }) =>
                    fields.map((name, index) => {
                      return <PassengerDetail name={name} key={index} />;
                    })
                  }
                </FieldArray>
                <SupervisorForm />
              </form>
            )}
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
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
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
  }),
  { flip: false }
);

export default List;
