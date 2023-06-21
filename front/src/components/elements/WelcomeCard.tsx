import { ICard } from "../../types/CardTypes.type"

const WelcomeCard = (args: ICard) => {
    const {title, description, image} = props;

  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-white rounded-md shadow-md">
        <img className='w-[100%] h-[50%] object-cover' src={image} alt={title} />
        <div className='flex flex-col items-center justify-center w-[100%] h-[50%]'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WelcomeCard