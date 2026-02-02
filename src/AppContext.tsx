import { createContext, useContext, useState } from "react";

/* 1️⃣ Define the shape of the context */
export type AppContextType = {
  currMoney: number;
  setCurrMoney: (n: number) => void;

  currPara: string;
  setCurrPara: (p: string) => void;

  pageState: string;
  setPageState: (p: string) => void;

  columns: ColumnData[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnData[]>>;

  activeCardId: number | null;
  setActiveCardId: (id: number | null) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
type CardData = {
  id: number;
  para: string;
  money: number;
  completed?: boolean;
};

type ColumnData = {
  title: string;
  cards: CardData[];
};

const initialColumns: ColumnData[] = [
  {
    title: "League of Legends",
    cards: [
      { id: 1, para: "test1", money: 100 },
      { id: 2, para: "test", money: 200 },
      { id: 3, para: "test", money: 300 },
      { id: 4, para: "test", money: 400 },
      { id: 5, para: "test", money: 500 },
    ],
  },
  {
    title: "test",
    cards: [
      { id: 6, para: "test", money: 100 },
      { id: 7, para: "test", money: 200 },
      { id: 8, para: "test", money: 300 },
      { id: 9, para: "test", money: 400 },
      { id: 10, para: "test", money: 500 },
    ],
  },
];
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currMoney, setCurrMoney] = useState(0);
  const [currPara, setCurrPara] = useState("");
  const [pageState, setPageState] = useState("main");

  const [columns, setColumns] = useState(initialColumns);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <AppContext.Provider
      value={{
        currMoney,
        setCurrMoney,
        currPara,
        setCurrPara,
        pageState,
        setPageState,
        columns,
        setColumns,
        activeCardId,
        setActiveCardId,
      }}>
      {children}
    </AppContext.Provider>
  );
};

/* 4️⃣ Custom hook */
export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("Missing AppContext.Provider");
  return ctx;
}
