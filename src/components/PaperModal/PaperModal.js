import {
  AppBar,
  Dialog,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { Close } from "@material-ui/icons";

import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },
  appBar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },

  input: {
    margin: theme.spacing(2, 0),
  },

  padding: {
    padding: theme.spacing(2),
  },
}), {flip: false});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PaperModal = ({
  open,
  handleClose,
  children,
  placeholder,
  value,
  setOriginInput,
  onChangOriginInput,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      disableRestoreFocus
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      data-testid="paper"
    >
      <AppBar className={classes.appBar} color="primary">
        <Toolbar className={classes.appBar}>
          <Typography>{placeholder}</Typography>
          <IconButton onClick={handleClose} color="inherit">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <TextField
          fullWidth
          autoFocus
          type="text"
          variant="outlined"
          placeholder={placeholder}
          className={classes.input}
          InputProps={{ classes: { input: classes.padding } }}
          value={value}
          onChange={(e) => {
            setOriginInput(e.target.value);
            onChangOriginInput(e.target.value);
          }}
        />
        {children}
      </div>
    </Dialog>
  );
};

export default PaperModal;
