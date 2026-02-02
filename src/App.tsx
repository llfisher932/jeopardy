import Profile from "./components/Profile";
import Main from "./pages/Main";
import CardPage from "./pages/CardPage";
import { useAppContext } from "./AppContext";
import { useState } from "react";
import { faArrowRightToBracket, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";

function App() {
  const { pageState, currMoney, currPara, setColumns } = useAppContext();
  let [inputBox, setInputBox] = useState("");
  const processInput = () => {
    let colCount = 0;
    let colList: {
      title: string;
      cards: { id: number; para: string; money: number }[];
    }[] = [];

    let processedValues = inputBox.split("\n");

    let currObject: { title: string; cards: { id: number; para: string; money: number }[] } | null = null;

    for (let i = 0; i < processedValues.length; i++) {
      if (i % 6 === 0) {
        currObject = { title: processedValues[i], cards: [] };
        colList.push(currObject);
      } else {
        if (!currObject) continue;

        let cardValues = processedValues[i].split(" ");
        let id = Number(colCount);
        let money = Number(cardValues[cardValues.length - 1]);

        // Join middle parts as para
        let para = cardValues.slice(0, cardValues.length - 1).join(" ");

        currObject.cards.push({ id, para, money });
      }
      colCount++;
    }
    setColumns(colList);
  };

  type ProfileData = {
    name: string;
  };
  const [inputMenu, setInputMenu] = useState(false);
  const [profiles, setProfiles] = useState<ProfileData[]>([
    { name: "New Profile" },
    { name: "New Profile" },
    { name: "New Profile" },
    { name: "New Profile" },
  ]);
  return (
    <div className="bg-blue-900 w-dvw h-dvh flex items-center  flex-col">
      {pageState === "main" && <Main />}
      {pageState === "cardPage" && <CardPage money={currMoney} para={currPara} />}
      <div className="pl-20 pr-20 z-20 flex  justify-evenly fixed bottom-0 w-[70%] text-center items-center  bg-blue-600 opacity-100 h-[5%] rounded-tl-xl rounded-tr-xl">
        {profiles.map((p) => (
          <Profile key={profiles.indexOf(p)} name={p.name} />
        ))}
      </div>
      <div className=" z-20 fixed right-0 top-[45%] w-[3%] h-[20%] text-center items-center  bg-blue-600 opacity-100  rounded-tl-xl rounded-bl-xl flex flex-col justify-between p-4">
        <button onClick={() => setInputMenu(!inputMenu)} className="w-8">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="text-white text-2xl cursor-pointer" />
        </button>
        <button
          className=" bg-green-600 p-1 text-lg rounded-lg w-8 text-white  cursor-pointer transition hover:scale-105 hover:bg-green-800"
          onClick={() => {
            setProfiles((prev) => [...prev, { name: "New Profile", money: 0 }]);
          }}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          className=" bg-red-600 p-1 text-lg rounded-lg w-8 text-white  cursor-pointer transition hover:scale-105 hover:bg-red-800"
          onClick={() => {
            setProfiles((prev) => [...prev].slice(0, profiles.length - 1));
          }}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div
        className={`${
          inputMenu ? "block" : "hidden"
        } fixed right-[5%] top-[25%] w-[35%] h-[60%] z-20 rounded-md bg-gray-300 flex flex-col items-center`}>
        <div className="grid grid-cols-2 gap-4 h-full w-full p-4 min-h-0">
          <textarea
            className="resize-none overflow-auto min-h-0 w-full p-2 rounded"
            value={inputBox}
            onChange={(e) => setInputBox(e.target.value)}
          />

          <div className="p-2 border overflow-auto min-h-0 bg-white">
            <ReactMarkdown>{inputBox}</ReactMarkdown>
          </div>
        </div>

        <button
          className="bg-green-600 p-3 mb-4 rounded-md cursor-pointer hover:bg-green-800 transition hover:scale-105"
          onClick={processInput}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
