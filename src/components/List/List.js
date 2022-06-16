import { Grid, Typography } from "@material-ui/core";

import FilterListIcon from "@material-ui/icons/FilterList";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  none: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

},
mobileFilter: {
  display: "none",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
},
}));

const List = ({ cart, sidebar }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.mobileFilter}>
        <Typography>
          <FilterListIcon />
          فیلتر
        </Typography>
        <Typography>
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
