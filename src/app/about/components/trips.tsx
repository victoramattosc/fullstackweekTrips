//"use client"

import { prisma } from '@/app/lib/prima'
import React, { useState } from 'react'

const getTrips = async () => {
    const trips = await prisma.trip.findMany({});   

    return trips
}

const Trips = async () => {
    const data = await getTrips()

    console.log({data})
    //const [name,setName] = useState();
  return (
    <div>
      Trips
    </div>
  )
}

export default Trips;
