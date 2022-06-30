import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Sidebar from "../Sidebar/Sidebar";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  sidebarContainer: {
    margin: theme.spacing(2.5, 3, 6),
    position: "relative",
  },

  btn: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FilterModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar color="default" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <Typography>فیلتر</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.sidebarContainer}>
        <Sidebar
          data={[
            {
              label: "ترمینال مبدا",
              items: [
                {
                  id: "1",
                  label: "ترمینال بیهقی",
                  count: 4,
                },
                {
                  id: "2",
                  label: "ترمینال جنوب",
                  count: 4,
                },
                {
                  id: "3",
                  label: "ترمینال غرب",
                  count: 4,
                },
                {
                  id: "4",
                  label: "ترمینال شرق",
                  count: 4,
                },
              ],
            },

            {
              label: "ترمینال مقصد",
              items: [
                {
                  id: "1",
                  label: "ترمینال بیهقی",
                  count: 4,
                },
                {
                  id: "2",
                  label: "ترمینال جنوب",
                  count: 4,
                },
                {
                  id: "3",
                  label: "ترمینال غرب",
                  count: 4,
                },
                {
                  id: "4",
                  label: "ترمینال شرق",
                  count: 4,
                },
              ],
            },
          ]}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        classes={{ root: classes.btn }}
      >
        اعمال تغییرات
      </Button>
    </Dialog>
  );
}

export default FilterModal;
