import React, { useState } from "react";
import List from "../components/List/List";

const Travel = () => {
  const [visible, setVisible] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sidebarChecked, setSidebarChecked] = useState([]);

  const originalData = [
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
  ];

  const data = originalData.slice(0, visible);

  const moreOnclick = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 1);
      setLoading(false);
    }, 1000);
  };

  const sidebarCheckboxOnchange = (e) => {
    const value = e.target.value;

    const checkedIndex = sidebarChecked.findIndex((id) => id === value);

    if (checkedIndex > -1) {
      //remove item to array
      const result = [
        ...sidebarChecked.slice(0, checkedIndex),
        ...sidebarChecked.slice(checkedIndex + 1),
      ];
      setSidebarChecked(result);
    } else {

      //add item to array
      const result = [...sidebarChecked, value];
      setSidebarChecked(result);
    }
  };

  const isSidebarChecked = (id) => {
      return sidebarChecked.includes(id)
  }
  return (
    <List
      hasMore={visible < originalData.length}
      moreOnclick={moreOnclick}
      loading={loading}
      data={data}
      onChangeCheckbox={sidebarCheckboxOnchange}
      isChecked = { isSidebarChecked }
      sidebar={[
        {
          label: "ترمینال مبدا",
          items: [
            {
              id: "11",
              label: "ترمینال بیهقی",
              count: 4,
            },
            {
              id: "12",
              label: "ترمینال جنوب",
              count: 4,
            },
            {
              id: "13",
              label: "ترمینال غرب",
              count: 4,
            },
            {
              id: "14",
              label: "ترمینال شرق",
              count: 4,
            },
          ],
        },

        {
          label: "ترمینال مقصد",
          items: [
            {
              id: "21",
              label: "ترمینال بیهقی",
              count: 4,
            },
            {
              id: "22",
              label: "ترمینال جنوب",
              count: 4,
            },
            {
              id: "23",
              label: "ترمینال غرب",
              count: 4,
            },
            {
              id: "24",
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
