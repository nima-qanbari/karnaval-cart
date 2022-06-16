import React from "react";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styles";

const Sidebar = ({ data }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item className={classes.filter}>
          <div>
            <Typography variant="body2" className={classes.filterText}>
              فیلتر
            </Typography>
          </div>
          <div>
            <Typography variant="body2" className={classes.commonText}>
              7 نتیجه
            </Typography>
          </div>
        </Grid>
        <Grid item className={classes.checkboxContainer}>
          <div>
            <div>
              <div>
                <Typography variant="body2" className={classes.titleText}>
                  ساعت حرکت
                </Typography>
              </div>

              <div>
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox name="item" disableRipple />}
                      label=" ۱۲ تا ۱۵ (۱) "
                      className={classes.checkbox}
                      classes={{ label: classes.commonText }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div>
                  <div>
                    <Typography variant="body2" className={classes.titleText}>
                      {item.label}
                    </Typography>
                  </div>
                  <div>
                    <ul>
                      {item.items.map((item) => {
                        return (
                          <li key={item.id}>
                            <FormControlLabel
                              control={<Checkbox name="item" disableRipple />}
                              label={`${item.label} (${item.count})`}
                              className={classes.checkbox}
                              classes={{ label: classes.commonText }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div>
              <div>
                <Typography variant="body2" className={classes.titleText}>
                  شرکت مسافربری
                </Typography>
              </div>
              <div>
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox name="item" disableRipple />}
                      label="شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب (7)"
                      className={classes.checkbox}
                      classes={{ label: classes.commonText }}
                    />
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
