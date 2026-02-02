import { useAppContext } from "../AppContext";

type CardProps = {
  id: number;
  money: number;
  para: string;
};

const Card = ({ id, money, para }: CardProps) => {
  const { setCurrMoney, setPageState, setCurrPara, setActiveCardId } = useAppContext();
  return (
    <div
      onClick={() => {
        setCurrMoney(money);
        setPageState("cardPage");
        setCurrPara(para);
        setActiveCardId(id);
      }}
      className="bg-blue-950 flex text-center items-center justify-center text-7xl font-bold text-yellow-300 cursor-pointer hover:scale-110 transition h-full hover:bg-blue-600 rounded-xl">
      ${money}
    </div>
  );
};

export default Card;
