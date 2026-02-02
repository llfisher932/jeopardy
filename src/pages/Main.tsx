import { useAppContext } from "../AppContext";
import Card from "../components/Card";
import Title from "../components/Title";

const Main = () => {
  const { columns } = useAppContext();

  return (
    <div id="body" className="w-[95%] mt-5 grid grid-flow-col grid-cols-6 gap-4 h-dvh mb-100">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          <Title title={col.title} />

          {col.cards.map((card) => (
            <div key={card.id} className="h-31">
              {!card.completed && <Card id={card.id} para={card.para} money={card.money} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Main;
