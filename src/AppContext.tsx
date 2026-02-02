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

const initialColumns: ColumnData[] = [];
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
