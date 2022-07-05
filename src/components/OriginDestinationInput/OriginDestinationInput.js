import React, { useState } from "react";

import SyncAltIcon from "@material-ui/icons/SyncAlt";

import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useRef } from "react";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },

  firstInputContainer: {
    position: "relative",
  },

  firstInput: {
    "& fieldset": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },

  secondInput: {
    "& fieldset": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0,
    },
  },

  circle: {
    position: "absolute",
    left: -12,
    display: "flex",
    padding: theme.spacing(0.2),
    borderRadius: "50%",
    border: `2px solid ${theme.palette.divider}`,
    top: "27%",
    background: theme.palette.grey[100],
    color: theme.palette.grey[600],
    cursor: "pointer",

    "& svg": {
      fontSize: 18,
      fontWeight: "bold",
    },
  },

  padding: {
    padding: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(),
  },

  title: {
    margin: theme.spacing(0.5, 0.8, 0, 0),
    width: "fit-content",
    fontSize: 9,
    color: theme.palette.error.main,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  firstDivContainer: {
    padding: theme.spacing(),
    borderLeft: `1px solid ${theme.palette.divider}`,
  },

  cityContainer: {
    "& :not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  firstItems: {
    fontSize: ".75rem",
    fontWeight: 500,
    padding: theme.spacing(0.8, 1),
    cursor: "pointer",
  },

  secondDiv: {
    padding: theme.spacing(),
  },

  btn: {
    fontSize: ".62rem",
    padding: theme.spacing(0.5, 1),
    border: `1px solid ${theme.palette.divider}`,
  },
  btnContainer: {
    "& > div": {
      marginTop: theme.spacing(),
    },
  },
}));

const OriginDestinationInput = ({
  suggestions,
  routeSuggestions,
  originId,
  destinationId,
  destinationItems,
  originItems,
  originPlaceholder,
  destinationPlaceholder,
  originIcon,
  onChangOriginInput,
  onChangDestinationInput,
  loading,
  onChangeOrigin,
  onChangeDestination,
  originValue,
  destinationValue,
}) => {
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const containerRef = useRef(null);
  const paperRef = useRef(null);
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const classes = useStyles();

  const focusHandlerOrigin = () => {
    setFocusedInput("origin");
    setOriginInput("")
  };
  const focusHandlerDestination = () => {
    setFocusedInput("destination");
    setDestinationInput("")
  };

  const blurHandler = (event) => {
    //close
    if (!paperRef.current.contains(event.relatedTarget)) {
      setFocusedInput(null);
      switch (focusedInput) {
        case "origin":
          setOriginInput(originValue?.label || "");
          break;

        case "destination":
          setDestinationInput(destinationValue?.label || "");
          break;

        default:
          break;
      }
    }
  };

  const onClickOriginItem = (item) => {
    onChangeOrigin(item);
    setOriginInput(item.label);
    if (!destinationValue) {
      destinationRef.current.focus();
    } else {
      setFocusedInput(null);
    }
  };

  const onClickDestinationItem = (item) => {
    onChangeDestination(item);
    setDestinationInput(item.label);
    if (!originValue) {
      originRef.current.focus();
    } else {
      setFocusedInput(null);
    }
  };

  return (
    <div className={classes.container} ref={containerRef}>
      <div className={classes.firstInputContainer}>
        <TextField
          type="text"
          variant="outlined"
          placeholder={originPlaceholder}
          className={classes.firstInput}
          onBlur={blurHandler}
          InputProps={{ classes: { input: classes.padding } }}
          value={originInput}
          inputRef={originRef}
          onChange={(e) => {
            setOriginInput(e.target.value);
            onChangOriginInput(e.target.value);
          }}
          onFocus={focusHandlerOrigin}
        />
        <div className={classes.circle}>
          <SyncAltIcon />
        </div>
      </div>
      <TextField
        type="text"
        variant="outlined"
        placeholder={destinationPlaceholder}
        className={classes.secondInput}
        InputProps={{ classes: { input: classes.padding } }}
        onBlur={blurHandler}
        value={destinationInput}
        inputRef={destinationRef}
        onChange={(e) => {
          setDestinationInput(e.target.value);
          onChangDestinationInput(e.target.value);
        }}
        onFocus={focusHandlerDestination}
      />

      <Popper
        open={Boolean(focusedInput)}
        anchorEl={containerRef.current}
        style={{ zIndex: 1000 }}
      >
        <Paper
          ref={paperRef}
          className={classes.paper}
          style={{ width: containerRef.current?.offsetWidth }}
        >
          {loading ? (
            <div>
              <MenuItem>
                <Skeleton width={200} height={20}></Skeleton>
              </MenuItem>
              <MenuItem>
                <Skeleton width={200} height={20}></Skeleton>
              </MenuItem>
              <MenuItem>
                <Skeleton width={200} height={20}></Skeleton>
              </MenuItem>
              <MenuItem>
                <Skeleton width={200} height={20}></Skeleton>
              </MenuItem>
            </div>
          ) : originItems && focusedInput === "origin" ? (
            originItems.map((item) => {
              return (
                <MenuItem onClick={() => onClickOriginItem(item)} key={item.id}>
                  {item.label}
                </MenuItem>
              );
            })
          ) : destinationItems && focusedInput === "destination" ? (
            destinationItems.map((item) => {
              return (
                <MenuItem
                  onClick={() => onClickDestinationItem(item)}
                  key={item.id}
                >
                  {item.label}
                </MenuItem>
              );
            })
          ) : (
            <Grid container>
              <Grid item xs={6} className={classes.firstDivContainer}>
                <Typography className={classes.title}>
                  شهرهای پر تردد
                </Typography>
                <div className={classes.cityContainer}>
                  {suggestions.map((item) => {
                    return (
                      <Typography key={item.id} className={classes.firstItems}>
                        {item.label}
                      </Typography>
                    );
                  })}
                </div>
              </Grid>
              <Grid item xs={6} className={classes.secondDiv}>
                <Typography className={classes.title}>
                  مسیرهای پر تردد
                </Typography>
                <div className={classes.btnContainer}>
                  {routeSuggestions.map((item) => {
                    return (
                      <div key={item.id}>
                        <Button size="small" className={classes.btn}>
                          {item.label}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          )}
        </Paper>
      </Popper>
    </div>
  );
};

OriginDestinationInput.defaultProps = {
  originPlaceholder: "مبدا",
  destinationPlaceholder: "مقصد",
};
export default OriginDestinationInput;
