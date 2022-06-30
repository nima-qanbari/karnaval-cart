import {Grid, Typography } from "@material-ui/core";

import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  none: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    
    },
},

alignment: {
  display: "flex",
  alignItems: "center",
  fontSize: 14,
  fontWeight: 500,
  padding: theme.spacing(1,0),

  "& svg": {
    marginLeft: "5px",
    color: "#ada6a6",
    fontSize: 20,
    fontWeight: "bold"
  }
},

mobileFilter: {
  display: "none",
  borderRadius: theme.shape.borderRadius,
background: "#fff",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-around",

  },
},
}));

const List = ({ cart, sidebar }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.mobileFilter}>
        <Typography className={classes.alignment}>
          <FilterListIcon />
          فیلتر
        </Typography>
        <Typography className={classes.alignment}>
            <ImportExportIcon />
            ترتیب
        </Typography>
      </Grid>
      <Grid item md={3} className={classes.none}>
        {sidebar}
      </Grid>
      <Grid item xs={12} md={9}>
        {cart}
      </Grid>
    </Grid>
  );
};

export default List;
