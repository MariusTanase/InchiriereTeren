import { ICard } from "../../types/CardTypes.type"

const WelcomeCard = (items: ICard) => {
    const {id, title, description, img} = items.items;
    console.log(items)

  return (
    <div key={id+title} className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-white rounded-md shadow-md">
        <img className='w-[100%] h-[50%] object-contain' src={img} alt={title} />
        <div className='flex flex-col items-center justify-center w-[100%] h-[50%]'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WelcomeCard