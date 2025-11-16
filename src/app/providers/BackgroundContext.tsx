import { createContext, useEffect, useState, type ReactNode } from "react";

export interface BackgroundContextType {
  background: string | null;
  setBackground: (value: string | null) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const BackgroundContext = createContext<BackgroundContextType | null>(null);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<string | null>(() => {
    const saved = localStorage.getItem("background");
    return saved && saved !== "null" ? saved : null;
  });

  useEffect(() => {
    if (background) {
      localStorage.setItem("background", background);
    } else {
      localStorage.removeItem("background");
    }
  }, [background]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};
