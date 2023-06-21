/* eslint-disable @typescript-eslint/ban-ts-comment */
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

            <section className= 'w-[80%] mx-auto p-4 my-16'>
                <div className='flex flex-col lg:flex-row w-[100%] justify-center lg:justify-around gap-4'>
                    <WelcomeCard items={cardsArray[0]} />
                    <WelcomeCard items={cardsArray[1]} />
                    <WelcomeCard items={cardsArray[2]} />
                </div>
            </section>
    )
}

export default CardsStats