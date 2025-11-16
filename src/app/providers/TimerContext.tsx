import { createContext, useEffect, useState, type ReactNode } from "react"

export type TTimerContext = {
  timerColor: string
  setTimerColor: React.Dispatch<React.SetStateAction<string>>
  timerBgColor: string
  setTimerBgColor: React.Dispatch<React.SetStateAction<string>>
  type?: "timer" | "bg"
}

// eslint-disable-next-line react-refresh/only-export-components
export const TimerContext = createContext<TTimerContext | undefined>(undefined)

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timerColor, setTimerColor] = useState<string>(() => {
    const saved = localStorage.getItem("timerColor")
    return saved && saved !== "null" ? saved : "#ffffff" 
  })

  const [timerBgColor, setTimerBgColor] = useState<string>(() => {
    const saved = localStorage.getItem("timerBgColor")
    return saved && saved !== "null" ? saved : "rgba(255,255,255,0.1)" 
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
