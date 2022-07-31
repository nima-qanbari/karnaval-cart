import React, { useState } from "react";
import PaperModal from "../PaperModal/PaperModal";

import SyncAltIcon from "@material-ui/icons/SyncAlt";

import { makeStyles } from "@material-ui/styles";
import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useRef } from "react";
import { Skeleton } from "@material-ui/lab";

const OriginDestinationInput = ({
  suggestions,
  routeSuggestions,
  destinationItems,
  originItems,
  originPlaceholder,
  destinationPlaceholder,
  originIcon,
  onChangOriginInput,
  onChangDestinationInput,
  loading,
  onChange,
  value,
  useDialog,
  error,
  helperText,
}) => {
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const containerRef = useRef(null);
  const paperRef = useRef(null);
  const originRef = useRef(null);

  const destinationRef = useRef(null);

  const originValue = value?.[0];
  const destinationValue = value?.[1];

  const onChangeOrigin = (origin) => {
    onChange([origin, destinationValue]);
  };

  const onChangeDestination = (destination) => {
    onChange([originValue, destination]);
  };

  const classes = useStyles();

  const focusHandlerOrigin = () => {
    setFocusedInput("origin");
    setOriginInput("");
  };
  const focusHandlerDestination = () => {
    setFocusedInput("destination");
    setDestinationInput("");
  };

  const onCloseHandler = () => {
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
  };

  const blurHandler = (event) => {
    //close
    if (paperRef.current && !paperRef.current.contains(event.relatedTarget)) {
      onCloseHandler();
    }
  };

  const onClickOriginItem = (item) => {
    onChangeOrigin(item);
    setOriginInput(item.label);
    if (!destinationValue && !useDialog) {
      destinationRef.current.focus();
    } else {
      setFocusedInput(null);
    }
  };

  const onClickDestinationItem = (item) => {
    onChangeDestination(item);
    setDestinationInput(item.label);
    if (!originValue && !useDialog) {
      originRef.current.focus();
    } else {
      setFocusedInput(null);
    }
  };

  const onClickOriginDestination = (item) => {
    onChange([item.origin, item.destination]);
    setOriginInput(item.origin.label);
    setDestinationInput(item.destination.label);
    setFocusedInput(null);
  };

  const swapHandler = () => {
    onChange([destinationValue, originValue]);
    setOriginInput(destinationValue?.label || "");
    setDestinationInput(originValue?.label || "");
  };
  const loadingJSX = (
    <div data-testid={"loading"}>
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
  );

  const originItemsJSX = Array.isArray(originItems)
    ? originItems.map((item) => {
        return (
          <MenuItem
            onClick={() => onClickOriginItem(item)}
            key={item.id}
            data-testid="originItem"
          >
            {item.label}
          </MenuItem>
        );
      })
    : null;

  const destinationItemsJSX = Array.isArray(destinationItems)
    ? destinationItems.map((item) => {
        return (
          <MenuItem
            data-testid="destinationItem"
            onClick={() => onClickDestinationItem(item)}
            key={item.id}
          >
            {item.label}
          </MenuItem>
        );
      })
    : null;

  const suggestionJSX = (
    <Grid container>
      <Grid item xs={6} className={classes.firstDivContainer}>
        <Typography className={classes.title}>شهرهای پر تردد</Typography>
        <div className={classes.cityContainer}>
          {Array.isArray(suggestions) &&
            suggestions.map((item) => {
              return (
                <Typography
                  onClick={() =>
                    focusedInput === "origin"
                      ? onClickOriginItem(item)
                      : onClickDestinationItem(item)
                  }
                  data-testid={"suggestions"}
                  key={item.id}
                  className={classes.firstItems}
                >
                  {item.label}
                </Typography>
              );
            })}
        </div>
      </Grid>
      <Grid item xs={6} className={classes.secondDiv}>
        <Typography className={classes.title}>مسیرهای پر تردد</Typography>
        <div className={classes.btnContainer}>
          {Array.isArray(routeSuggestions) &&
            routeSuggestions.map((item) => {
              return (
                <div
                  key={`${item.origin.id}-${item.destination.id}`}
                  data-testid="routeSuggestions"
                >
                  <Button
                    data-testid="routeSuggestionsButton"
                    size="small"
                    className={classes.btn}
                    onClick={() => onClickOriginDestination(item)}
                  >
                    {item.origin.label} به {item.destination.label}
                  </Button>
                </div>
              );
            })}
        </div>
      </Grid>
    </Grid>
  );

  return (
    <div
      className={classes.container}
      ref={containerRef}
      data-testid="container"
    >
      <div className={classes.innerContainer}>
        <div className={classes.firstInputContainer}>
          <TextField
            type="text"
            variant="outlined"
            placeholder={originPlaceholder}
            className={classes.firstInput}
            onBlur={blurHandler}
            value={originInput}
            inputRef={originRef}
            onChange={(e) => {
              setOriginInput(e.target.value);
              onChangOriginInput(e.target.value);
            }}
            onFocus={focusHandlerOrigin}
          />
          <div
            onClick={swapHandler}
            data-testid="swapButton"
            className={classes.circle}
          >
            <SyncAltIcon />
          </div>
        </div>
        <TextField
          type="text"
          variant="outlined"
          placeholder={destinationPlaceholder}
          className={classes.secondInput}
          onBlur={blurHandler}
          value={destinationInput}
          inputRef={destinationRef}
          onChange={(e) => {
            setDestinationInput(e.target.value);
            onChangDestinationInput(e.target.value);
          }}
          onFocus={focusHandlerDestination}
        />

        {useDialog === true ? (
          <>
            <PaperModal
              value={originInput}
              setOriginInput={setOriginInput}
              onChangOriginInput={onChangOriginInput}
              placeholder={originPlaceholder}
              open={focusedInput === "origin"}
              handleClose={onCloseHandler}
            >
              {loading
                ? loadingJSX
                : originItems && focusedInput === "origin"
                ? originItemsJSX
                : suggestionJSX}
            </PaperModal>
            <PaperModal
              value={destinationInput}
              setOriginInput={setDestinationInput}
              onChangOriginInput={onChangDestinationInput}
              placeholder={destinationPlaceholder}
              open={focusedInput === "destination"}
              handleClose={onCloseHandler}
            >
              {loading
                ? loadingJSX
                : destinationItems && focusedInput === "destination"
                ? destinationItemsJSX
                : suggestionJSX}
            </PaperModal>
          </>
        ) : (
          <Popper
            open={Boolean(focusedInput)}
            anchorEl={containerRef.current}
            style={{ zIndex: 1000 }}
          >
            <Paper
              data-testid="paper"
              ref={paperRef}
              className={classes.paper}
              style={{ width: containerRef.current?.offsetWidth }}
            >
              {loading
                ? loadingJSX
                : originItems && focusedInput === "origin"
                ? originItemsJSX
                : destinationItems && focusedInput === "destination"
                ? destinationItemsJSX
                : suggestionJSX}
            </Paper>
          </Popper>
        )}
      </div>

      {helperText && (
        <FormHelperText className={classes.helperText} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },

    innerContainer: {
      display: "flex",
      width: "100%",
    },

    firstInputContainer: {
      position: "relative",
      width: "50%",
    },

    firstInput: {
      "& fieldset": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      width: "100%",
    },

    secondInput: {
      "& fieldset": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
      },
      width: "50%",
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
      zIndex: 3,

      "& svg": {
        fontSize: 18,
        fontWeight: "bold",
      },
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

    helperText: {
      marginRight: theme.spacing(0.5),
    },
  }),
  { flip: false }
);

OriginDestinationInput.defaultProps = {
  originPlaceholder: "مبدا",
  destinationPlaceholder: "مقصد",
};
export default OriginDestinationInput;
