import { createContext, useEffect, useState, type ReactNode } from "react"

type TTimerContext = {
  timerColor: string | null
  setTimerColor: (color: string) => void
  timerBgColor: string | null
  setTimerBgColor: (color: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const TimerContext = createContext<TTimerContext | undefined>(undefined)

export const TimerProvider = ({children}: {children: ReactNode}) => {
  const [timerColor, setTimerColor] = useState<string | null>(() => {
    const savedTimerColor = localStorage.getItem("timerColor")
    return savedTimerColor && savedTimerColor !== "null" ? savedTimerColor : null;
  })
  const [timerBgColor, setTimerBgColor] = useState<string | null>(() => {
    const savedTimerBgColor = localStorage.getItem("timerBgColor")
    return savedTimerBgColor && savedTimerBgColor !== "null" ? savedTimerBgColor : null;
  })

  
  useEffect(() => {
    if(timerBgColor) {
      localStorage.setItem("timerBgColor", timerBgColor)
    } else {
      localStorage.removeItem("timerBgColor")
    }
  }, [timerBgColor])

  useEffect(() => {
    if(timerColor) {
      localStorage.setItem("timerColor", timerColor)
    } else {
      localStorage.removeItem("timerColor")
    }
  }, [timerColor])

  return (
    <TimerContext.Provider value={{timerColor, setTimerColor, timerBgColor, setTimerBgColor}}>
      {children}
    </TimerContext.Provider>
  )
}