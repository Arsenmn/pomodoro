import { createContext, useEffect, useState, type ReactNode } from "react"

type TTimerContext = {
  timerColor: string
  setTimerColor: (color: string) => void
  timerBgColor: string
  setTimerBgColor: (color: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const TimerContext = createContext<TTimerContext | undefined>(undefined)

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  // Provide a safe default color if nothing is in localStorage
  const [timerColor, setTimerColor] = useState<string>(() => {
    const saved = localStorage.getItem("timerColor")
    return saved && saved !== "null" ? saved : "#ffffff" // default white
  })

  const [timerBgColor, setTimerBgColor] = useState<string>(() => {
    const saved = localStorage.getItem("timerBgColor")
    return saved && saved !== "null" ? saved : "rgba(255,255,255,0.1)" // default transparent white
  })

  useEffect(() => {
    localStorage.setItem("timerColor", timerColor)
  }, [timerColor])

  useEffect(() => {
    localStorage.setItem("timerBgColor", timerBgColor)
  }, [timerBgColor])

  return (
    <TimerContext.Provider value={{ timerColor, setTimerColor, timerBgColor, setTimerBgColor }}>
      {children}
    </TimerContext.Provider>
  )
}
