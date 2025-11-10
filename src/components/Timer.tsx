import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimer } from "../hooks/useTimer.hook";
import TimerText from "./TimerText";
import ModeButton from "./Modebuttons";

export const Timer = () => {
  const { timerColor, timerBgColor } = useTimer()
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [modesOpen, setModesOpen] = useState<boolean>(false)

useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {
    setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning]);


  const toggleTimer = () => setIsRunning(prev => !prev);
  const resetTimer = () => setSecondsLeft(25 * 60);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const modeButtons = [
    {title: "Short Break", time: 300, fromColor: "teal", x: -30, y: -10},
    {title: "Focus", time: 1500, fromColor: "red", x: 0, y: -10},
    {title: "Long Break", time: 600, fromColor: "green", x: 30, y: -10},
  ]

  return (
    <div className="text-center">
      <div className="relative">
        <AnimatePresence>
          {modesOpen && (
            <div className="absolute bottom-0 left-7 flex justify-between mb-5">
              {modeButtons.map((btn) => (
                <ModeButton
                  key={btn.title}
                  label={btn.title}
                  time={btn.time}
                  fromColor={btn.fromColor}
                  offsetX={btn.x}
                  offsetY={btn.y}
                  onClick={setSecondsLeft}
                  className={btn.fromColor}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div 
        className="
          px-3 mb-5 rounded-3xl border-b-2
          bg-linear-to-tl from-white/5 to-white/20
          bg-size-[200%_200%] sm:backdrop-blur-sm backdrop-blur-none
          border border-white/20
          transition-all duration-500
          cursor-pointer"
        onClick={() => setModesOpen(!modesOpen)}
        style={{ backgroundColor: timerBgColor ?? 'white/40' }}
      >
        <TimerText minutes={minutes} seconds={seconds} timerColor={timerColor}/>
      </div>

      <motion.button
        onClick={toggleTimer}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="py-2 px-4 rounded-full bg-linear-to-br from-white/80 to-white/70 border-t border-l border-white/40 text-shadow-black shadow-lg mr-1"
      >
        {isRunning ? "Pause" : "Start"}
      </motion.button>

      <motion.button
        onClick={resetTimer}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="py-2 px-4 rounded-full bg-linear-to-br from-black/80 to-black/80 border-t border-l border-white/40 text-white shadow-lg ml-1"
      >
        Reset
      </motion.button>
    </div>
  );
}
