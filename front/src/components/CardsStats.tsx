import WelcomeCard from './elements/WelcomeCard'
import HappyPerson from '../assets/HappyPerson.svg'
import TerrainTypes from '../assets/terrainTypes.png'
import OpenToRentTerrains from '../assets/openToRentTerrains.svg'

const CardsStats = () => {

    const cardsArray = [
        {
            id: 1,
            img: TerrainTypes,
            title: "6",
            description: "Terrain Types",
        },
        {
            id: 2,
            img: OpenToRentTerrains,
            title: "100+",
            description: "Terrains Available",
        },
        {
            id: 3,
            img: HappyPerson,
            title: "1000+",
            description: "Happy Customers",
        }
    ]
  return (
    <div>

        {
            cardsArray.map((card) => (
                <WelcomeCard
                    key={card.id}
                    items={card}
                />
            ))
        }
        
    </div>
  )
}

export default CardsStats