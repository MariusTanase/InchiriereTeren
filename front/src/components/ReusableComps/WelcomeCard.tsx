import { ICard } from "../../types/CardTypes.type";

const WelcomeCard = ({ id, title, description, img }: ICard) => {
  return (
    <div
      key={id + title}
      className="flex flex-col items-center justify-center mx-auto w-[250px] h-[250px] max-w-[600px] max-h-[600px] sm:w-[380px] sm:h-[380px] lg:w-[320px] lg:h-[320px] 2xl:w-[450px] 2xl:h-[450px] aspect-square bg-blue-100 rounded-md shadow-md p-4"
    >
      <img className="w-[100%] h-[50%] object-contain" src={img} alt={title} />
      <div className="flex flex-col items-center justify-center w-[100%] h-[50%]">
        <h3 className="text-[3rem] font-extrabold">{title}</h3>
        <p className="font-bold text-slate-900">{description}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
