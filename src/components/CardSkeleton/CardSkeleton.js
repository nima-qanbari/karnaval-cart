import React from "react";
import { Paper,  Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { useStyles } from "../Card/styles";

const CardSkeleton = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.firstDiv}>
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
          className={classes.cartBreakpoints}
        >
          <Grid item md xs={12} className={classes.detailContainerBreakpoints}>
            <Grid container spacing={1} style={{alignItems: "center"}} className={classes.detailsBreakpoints}>
              <Grid item md={2} className={classes.details}>
                <Skeleton
                  variant="circle"
                  className={classes.imgContainer}
                  component="div"
                />

                <div className={classes.info}>
                  <Skeleton width={180} variant="text" />
                  <Skeleton variant="text" component="p" />
                </div>
              </Grid>
              <Grid item xs={12} md={10}>
                <Grid
                  container
                  spacing={2}
                  className={classes.lineContainerBreakpoints}
                >
                  <Skeleton
                    width={"100%"}
                    height={70}
                    style={{ borderRadius: 10 }}
                    className={classes.loading1}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.buy}>
              <Skeleton width={100} height={59} style={{borderRadius: 10}} />

              <div>
                <Skeleton width={100} height={59} style={{borderRadius: 10}}/>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default CardSkeleton;
