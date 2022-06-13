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
