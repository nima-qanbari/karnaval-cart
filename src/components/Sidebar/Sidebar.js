import React from "react";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styles";

const Sidebar = ({ data, onChange, isChecked }) => {
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
            {data.map((item) => {
              return (
                <div key={item.label}>
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
                              control={
                                <Checkbox
                                  value={item.id}
                                  onChange={onChange}
                                  checked={isChecked(item.id)}
                                  disableRipple
                                />
                              }
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
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sidebar;
