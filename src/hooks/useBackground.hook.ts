import { useContext } from "react";
import { BackgroundContext } from "../app/providers/BackgroundContext";

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return context;
};
