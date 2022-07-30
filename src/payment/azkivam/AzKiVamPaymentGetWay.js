import React, { useEffect } from 'react'

const AzKiVamPaymentGetWay = ({ticketId}) => {
    useEffect(() => {
        window.location.href= `https://dev.azkivam.com/payment?ticketId=${ticketId}`;
    }, [])
  return null
}

export default AzKiVamPaymentGetWay