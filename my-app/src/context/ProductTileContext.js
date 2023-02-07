import { createContext, useState } from "react";
import TileContents from "../data/tileContents";

const ProductTileContext = createContext();

export const ProductTileProvider = ({ children }) => {
  const [content, setContent] = useState(TileContents);

  return (
    <ProductTileContext.Provider value={{ content, setContent }}>
      {children}
    </ProductTileContext.Provider>
  );
};

export default ProductTileContext;
