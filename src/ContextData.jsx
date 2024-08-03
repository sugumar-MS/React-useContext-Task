// ContextData.jsx

import { createContext, useState } from "react";
import Product from "./Product.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Data, setData] = useState(Product.products);

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

