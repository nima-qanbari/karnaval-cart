import React from "react";

import {
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";

import { useStyles } from "../Sidebar/styles";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item className={classes.filter}>
          <div>
            <Typography variant="body2" className={classes.filterText}>فیلتر</Typography>
          </div>
          <div>
           
          </div>
        </Grid>
        <Grid item className={classes.checkboxContainer}>
          <div>
            <div>
              <div>
                    <Skeleton variant="text"  width={120} height={40}  style={{borderRadius: 15}}/>
              </div>

              <div>
                <ul>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
              <Skeleton variant="text"  width={120} height={40}  style={{borderRadius: 15}}/>
              </div>
              <div>
              <ul>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
              <Skeleton variant="text"  width={120} height={40}  style={{borderRadius: 15}}/>
              </div>
              <div>
              <ul>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
              <Skeleton variant="text"  width={120} height={40}  style={{borderRadius: 15}}/>
              </div>
              <div>
              <ul>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                  <li>
                  <Skeleton variant="text"  width={90} height={30}  style={{borderRadius: 15}}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sidebar;
