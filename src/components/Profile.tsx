import { faFileSignature, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Profile = ({ name }: { name: string }) => {
  let [profName, setProfName] = useState(name);
  let [money, setMoney] = useState(0);
  let [adjustMoney, setAdjustMoney] = useState(false);
  let [textVal, setTextVal] = useState("");
  return (
    <div className="flex justify-center items-center">
      <span
        className="flex items-center text-white text-2xl cursor-pointer"
        onClick={() => setAdjustMoney(!adjustMoney)}>
        {profName}:
      </span>
      <span className={`flex items-center text-3xl  ${money < 0 ? "text-red-400" : "text-green-400"} ml-1`}>
        {money}
      </span>
      <div
        className={` ${adjustMoney ? "flex" : "hidden"} flex gap-2 absolute -translate-y-10 bg-white pl-4 pr-4 pt-3 pb-3`}>
        <input
          type={"text"}
          onChange={(e) => {
            setTextVal(e.target.value);
          }}
          className="outline-0 border-blue-900  border-2 w-20"
        />
        <button
          className="bg-green-600 text-white text-lg rounded-md w-7 cursor-pointer transition hover:bg-green-800 active:bg-green-700"
          onClick={() => {
            if (!isNaN(Number(textVal))) {
              setMoney(money + Number(textVal));
            }
          }}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          className="bg-red-600 text-white text-lg rounded-md w-7 cursor-pointer transition hover:bg-red-800 active:bg-red-700 "
          onClick={() => {
            if (!isNaN(Number(textVal))) {
              setMoney(money - Number(textVal));
            }
          }}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          className=" bg-gray-600 text-white text-lg rounded-md w-7 cursor-pointer transition hover:bg-gray-800 active:bg-gray-700 "
          onClick={() => setProfName(String(textVal))}>
          <FontAwesomeIcon icon={faFileSignature} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
