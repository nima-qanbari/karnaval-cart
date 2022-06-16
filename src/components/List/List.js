import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  none: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const List = ({ cart, sidebar }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>

        </Typography>
        <Typography>
            
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
