import ReactMarkdown from "react-markdown";
import { useAppContext } from "../AppContext";

const CardPage = ({ money, para }: { money: number; para: string }) => {
  const { setColumns, activeCardId, setPageState } = useAppContext();

  const handleComplete = () => {
    if (activeCardId === null) return;

    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        cards: col.cards.map((card) => (card.id === activeCardId ? { ...card, completed: true } : card)),
      })),
    );

    setPageState("main");
  };

  return (
    <>
      <div className="min-h-dvh flex flex-col justify-center items-center text-center">
        <div className="flex justify-center w-full mt-10 h-[70%] text-center items-center ">
          <div className="w-full [&_img]:max-w-2xs text-center text-white text-3xl text-bold">
            <ReactMarkdown
              components={{
                img: (props) => <img {...props} className="max-w-full h-auto mx-auto mb-4 rounded-lg" />,
              }}>
              {para}
            </ReactMarkdown>
          </div>
        </div>
        <div className="flex justify-center text-center h-[10%] text-yellow-400 text-3xl mt-10 mb-5">
          For {money} dollars
        </div>
        <div className="flex justify-center gap-10 text-center mb-15" id="buttons">
          <button
            className="p-5 bg-red-600 text-white rounded-xl w-30 cursor-pointer transition hover:scale-105 hover:bg-red-800"
            onClick={() => setPageState("main")}>
            Back
          </button>
          <button
            className="p-5 bg-green-600 text-white rounded-xl w-30 cursor-pointer transition hover:scale-105 hover:bg-green-800"
            onClick={handleComplete}>
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPage;
