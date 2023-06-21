import React from 'react'
import { WelcomeCard } from './elements/WelcomeCard'
import HappyPerson from '../assets/HappyPerson'
import TerrainTypes from '../assets/terrainTypes'
import OpenToRentTerrains from '../assets/openToRentTerrains'

const WelcomeStats = () => {

    const item = [
        {
            img: {TerrainTypes},
            title: "6",
            description: "Terrain Types",
        },
        {
            img: {OpenToRentTerrains},
            title: "100+",
            description: "Terrains Available",
        },
        {
            img: {HappyPerson},
            title: "1000+",
            description: "Happy Customers",
        }
    ]


  return (
    <div>


        <WelcomeCard args={item}/>
        
    </div>
  )
}

export default WelcomeStats