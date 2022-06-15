import React from 'react'
import { Grid } from '@material-ui/core'
import TicketCard from '../components/Card/TicketCard'
import Sidebar from '../components/Sidebar/Sidebar'

const Travel = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
            <TicketCard />
        </Grid>
    </Grid>
  )
}

export default Travel