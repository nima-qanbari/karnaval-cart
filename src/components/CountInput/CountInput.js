import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CountInputModal from "../CountInputModal/CountInputModal";
import {
  Button,
  IconButton,
  Paper,
  Popper,
  TextField,
  Typography,
  ClickAwayListener,
  Fade,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import clsx from "clsx";

import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CountInput = ({
  onChange,
  value,
  useDialog,
  countPlaceholder,
  max,
  min,
  error,
  helperText,
}) => {
  const [focusInput, setFocusInput] = useState(false);
  const containerRef = useRef(null);
  const classes = useStyles();
  const focusHandler = () => {
    setFocusInput(true);
  };
  const plusCounter = () => {
    if (!max || value < max) {
      onChange(value + 1);
    }
  };

  const minusCounter = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const closeHandler = () => {
    setFocusInput(false);
  };

  const counterJSX = (
    <div className={classes.paper} data-testid="popper">
      <div className={classes.btnContainer}>
        <Typography className={classes.passengers}>مسافران</Typography>
        <div className={classes.plusMinusContainer}>
          <IconButton
            size="medium"
            className={classes.plusButton}
            onClick={plusCounter}
            data-testid="plusButton"
          >
            <AddIcon className={classes.btnSize} color="action" />
          </IconButton>
          <span className={classes.counter}>{value}</span>
          <IconButton
            size="medium"
            className={classes.minusButton}
            onClick={minusCounter}
            data-testid="minusButton"
          >
            <RemoveIcon className={classes.btnSize} color="action" />
          </IconButton>
        </div>
      </div>
      <div>
        <Button
          className={classes.agreeButton}
          color="primary"
          variant="outlined"
          onClick={closeHandler}
          data-testid="confirm"
        >
          تایید
        </Button>
      </div>
    </div>
  );

  const JSX = (
    <div
      className={classes.container}
      ref={containerRef}
      data-testid="container"
    >
      <TextField
        variant="outlined"
        InputProps={{
          classes: {
            input: value >= 1 && classes.textAlign,
          },
          startAdornment: (
            <InputAdornment position="start">
              <PeopleIcon className={classes.icon} color="action" />
            </InputAdornment>
          ),
        }}
        value={value >= 1 ? `${value} نفر` : ""}
        placeholder={countPlaceholder}
        onFocus={focusHandler}
        helperText={helperText}
        className={classes.countInput}
        error={error}
      />

      {focusInput && !useDialog && (
        <Popper
          open={Boolean(focusInput)}
          anchorEl={containerRef.current}
          className={classes.marginTop}
          style={{ zIndex: 1000 }}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div>
                <Paper style={{ width: containerRef.current?.offsetWidth }}>
                  {counterJSX}
                </Paper>
              </div>
            </Fade>
          )}
        </Popper>
      )}
      {useDialog && (
        <CountInputModal open={focusInput} closeHandler={closeHandler}>
          {counterJSX}
        </CountInputModal>
      )}
    </div>
  );
  return (
    <>
      {useDialog ? (
        JSX
      ) : (
        <ClickAwayListener onClickAway={closeHandler}>{JSX}</ClickAwayListener>
      )}
    </>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      display: "flex",
    },
    input: {
      padding: theme.spacing(2),
      fontSize: 14,
      fontWeight: 500,

      "&::placeholder": {
        fontSize: 14,
        fontWeight: 500,
      },
    },

    countInput: {
      width: "100%",
    },

    textAlign: {
      textAlign: "center",
    },
    icon: {
      fontSize: 21,
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },

    paper: {
      padding: theme.spacing(2),
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
  }),
  { flip: false }
);

CountInput.defaultProps = {
  countPlaceholder: "مسافران",
  min: 0,
};

export default CountInput;
