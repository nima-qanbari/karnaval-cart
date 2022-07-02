import React from "react";
import List from "../components/List/List";

const Travel = () => {
  return (
    <List
      data={[
        {
          title: "شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب",
          subtitle: "VIPتخت شو+پذیرائی +ماسک",
          arrival: new Date(),
          departure: new Date(),
          origin: "تهران",
          destination: "مشهد",
          originTerminal: "تهران جنوب",
          destinationTerminal: "مشهد",
          price: 98000,
          remain: 29,
          vehicle: "اسکانیا ۳۱ نفره کلاسیک",
        },
        {
          title: "شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب",
          subtitle: "VIPتخت شو+پذیرائی +ماسک",
          arrival: new Date(),
          departure: new Date(),
          origin: "تهران",
          destination: "مشهد",
          originTerminal: "تهران جنوب",
          destinationTerminal: "مشهد",
          price: 98000,
          remain: 29,
          vehicle: "اسکانیا ۳۱ نفره کلاسیک",
        },
        {
          title: "شرکت تی بی تی- تعاونى شماره 15 پايانه جنوب",
          subtitle: "VIPتخت شو+پذیرائی +ماسک",
          arrival: new Date(),
          departure: new Date(),
          origin: "تهران",
          destination: "مشهد",
          originTerminal: "تهران جنوب",
          destinationTerminal: "مشهد",
          price: 98000,
          remain: 29,
          vehicle: "اسکانیا ۳۱ نفره کلاسیک",
        },
      ]}

      sidebar={[
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
  );
};

export default Travel;
