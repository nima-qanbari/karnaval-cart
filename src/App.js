import "./App.css";
import TicketCard from "./components/Card/TicketCard";
import   "./cssStyles/table.css"

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    max: {
      maxWidth:"900px",
      margin: "0 auto",

      [theme.breakpoints.down("sm")]:{
        padding: theme.spacing(0, 2.5),
      }
    }
  };
});
function App() {
  const classes = useStyles()
  return(
  <div className={classes.max}>
    <TicketCard />
  </div>
  )
}

export default App;
