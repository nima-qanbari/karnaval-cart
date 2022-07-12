import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  IconButton,
  Paper,
  Popper,
  TextField,
  Typography,
  ClickAwayListener,
  Fade,
} from "@material-ui/core";
import clsx from "clsx";

import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CountInput = ({ onChange, value }) => {
  const [focusInput, setFocusInput] = useState(false);

  const containerRef = useRef(null);
  const classes = useStyles();
  const focusHandler = () => {
    setFocusInput(true);
  };
  const plusCounter = () => {
    onChange((prevState) => prevState + 1);
  };

  const minusCounter = () => {
    if (value >= 1) {
      onChange((prevState) => prevState - 1);
    }
  };

  const closeHandler = () => {
    setFocusInput(false);
  };
  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <div className={classes.container} ref={containerRef}>
        <TextField
          variant="outlined"
          InputProps={{
            classes: {
              input: clsx(classes.input, value >= 1 && classes.textAlign),
            },
          }}
          value={value >= 1 ? `${value} نفر` : ""}
          placeholder="مسافران"
          onFocus={focusHandler}
        />
        <PeopleIcon className={classes.icon} color="action" />
        {focusInput ? (
          <Popper
            open={Boolean(focusInput)}
            anchorEl={containerRef.current}
            style={{ zIndex: 1000 }}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div>
                <Paper
                  className={classes.paper}
                  style={{ width: containerRef.current?.offsetWidth }}

                >
                  <div className={classes.btnContainer}>
                    <Typography className={classes.passengers}>
                      مسافران
                    </Typography>
                    <div className={classes.plusMinusContainer}>
                      <IconButton
                        size="medium"
                        className={classes.plusButton}
                        onClick={plusCounter}
                      >
                        <AddIcon className={classes.btnSize} color="action" />
                      </IconButton>
                      <span className={classes.counter}>{value}</span>
                      <IconButton
                        size="medium"
                        className={classes.minusButton}
                        onClick={minusCounter}
                      >
                        <RemoveIcon
                          className={classes.btnSize}
                          color="action"
                        />
                      </IconButton>
                    </div>
                  </div>
                  <div>
                    <Button
                      className={classes.agreeButton}
                      color="primary"
                      variant="outlined"
                      onClick={closeHandler}
                    >
                      تایید
                    </Button>
                  </div>
                </Paper>{" "}
                </div>
                
              </Fade>
            )}
          </Popper>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
  },
  input: {
    padding: theme.spacing(2, 4.6, 2, 0),
    fontSize: 14,
    fontWeight: 500,

    "&::placeholder": {
      fontSize: 14,
      fontWeight: 500,
    },
  },

  textAlign: {
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    right: 14,
    top: "27%",
    fontSize: 21,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },

  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plusMinusContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passengers: {
    fontSize: 12,
    fontWeight: 500,
  },
  btnSize: {
    fontSize: 20,
  },
  counter: {
    fontSize: 14,
    userSelect: "none",
  },

  plusButton: {
    padding: theme.spacing(0.3),
    background: theme.palette.grey[200],
    margin: theme.spacing(0, 0, 0, 1.5),
  },
  minusButton: {
    padding: theme.spacing(0.3),
    background: theme.palette.grey[200],
    margin: theme.spacing(0, 1.5, 0, 0),
  },

  agreeButton: {
    width: "100%",
    marginTop: theme.spacing(1.5),
  },
}));

export default CountInput;
