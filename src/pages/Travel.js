import React from "react";
import { Grid } from "@material-ui/core";
import TicketCard from "../components/Card/TicketCard";
import Sidebar from "../components/Sidebar/Sidebar";

const Travel = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
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
      </Grid>
      <Grid item xs={12} md={9}>
        <TicketCard
          logo={require("../image/download.png")}
          title={"شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب"}
          subtitle={"VIPتخت شو+پذیرائی +ماسک"}
          arrival={new Date()}
          departure={new Date()}
          origin={"تهران"}
          destination={"مشهد"}
          originTerminal={"تهران جنوب"}
          destinationTerminal={"مشهد"}
          price={98000}
          remain={29}
          vehicle={"اسکانیا ۳۱ نفره کلاسیک"}
        />
      </Grid>
    </Grid>
  );
};

export default Travel;
