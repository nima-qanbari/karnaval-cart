import React, { useEffect } from 'react'

const AzKiVamPaymentGateWay = ({ticketId}) => {
    useEffect(() => {
        window.location.href= `https://dev.azkivam.com/payment?ticketId=${ticketId}`;
    }, [])
  return null
}

export default AzKiVamPaymentGateWay