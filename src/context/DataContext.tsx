"use client";

import type { solution } from "@/types";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

export interface DataInterface {
  solution: solution | null;
  setSolution: Dispatch<SetStateAction<solution | null>>;
}

export const DataContext = createContext<Partial<DataInterface>>({});

const DataProvider = ({ children }: { children: ReactNode }) => {
	const [solution, setSolution] = useState<solution | null>(null);

  return (
    <DataContext.Provider
      value={{
        solution,
				setSolution
      }}
    >
    {children}
    </DataContext.Provider>
  );
};

export default DataProvider;