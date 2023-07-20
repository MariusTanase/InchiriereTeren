/* eslint-disable @typescript-eslint/ban-ts-comment */

import HappyPerson from '../../assets/HappyPerson.svg';
import TerrainTypes from '../../assets/terrainTypes.png';
import OpenToRentTerrains from '../../assets/openToRentTerrains.svg';
import WelcomeCard from '../ReusableComps/WelcomeCard';

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
  ];

  return (
    <section className="w-[80%] mx-auto p-4 my-16">
      <div className="flex flex-col lg:flex-row w-[100%] justify-center lg:justify-around gap-4">
        <WelcomeCard id={cardsArray[0].id} img={cardsArray[0].img} title={cardsArray[0].title} description={cardsArray[0].description} />
        <WelcomeCard id={cardsArray[1].id} img={cardsArray[1].img} title={cardsArray[1].title} description={cardsArray[1].description} />
        <WelcomeCard id={cardsArray[2].id} img={cardsArray[2].img} title={cardsArray[2].title} description={cardsArray[2].description} />
      </div>
    </section>
  );
};

export default CardsStats;
