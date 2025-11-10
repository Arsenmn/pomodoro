import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimer } from "../hooks/useTimer.hook";

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

  return (
    <div className="text-center">
      <div className="relative">
        <AnimatePresence>
          {modesOpen && <div className="absolute bottom-0 left-7 flex justify-between mb-5">
            <motion.button
              onClick={() => setSecondsLeft(300)}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: 1, x: -30, y: -10, opacity: 1 }}
              exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="py-2 px-4 rounded-full bg-gradient-to-br from-teal-500/80 to-teal-500/20 backdrop-blur-md border-t border-l border-white/40 text-white shadow-lg ml-1
              hover:border-b hover:border-r hover:border-t-0 hover:border-l-0 transition-[border] duration-200"
            >
              Short Break
            </motion.button>
            <motion.button
              onClick={resetTimer}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: 1, x: 0, y: -10, opacity: 1 }}
              exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="py-2 px-4 rounded-full bg-gradient-to-br from-red-500/80 to-red-500/20 backdrop-blur-md border-t border-l border-white/40 text-white shadow-lg ml-1
              hover:border-b hover:border-r hover:border-t-0 hover:border-l-0 transition-[border] duration-200"
            >
              Focus
            </motion.button>
            <motion.button
              onClick={() => setSecondsLeft(600)}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: 1, x: 30, y: -10, opacity: 1 }}
              exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="py-2 px-4 rounded-full bg-gradient-to-br from-green-500/80 to-green-500/20 backdrop-blur-md border-t border-l border-white/40 text-white shadow-lg ml-1
              hover:border-b hover:border-r hover:border-t-0 hover:border-l-0 transition-[border] duration-200"
            >
              Long Break
            </motion.button>
          </div>}
        </AnimatePresence>
      </div>

      <motion.div 
        className="
          px-3 mb-5 rounded-3xl border-b-2 border-[#383838]
          bg-gradient-to-tl from-white/5 to-white/20
          bg-[length:200%_200%] backdrop-blur-md
          border border-white/20
          transition-all duration-500
          [animation:glassFlow_3s_ease-in-out_infinite] cursor-pointer"
        onClick={() => setModesOpen(!modesOpen)}
        whileTap={{scale: 0.9}}
        style={{ backgroundColor: timerBgColor }}
      >
        <h1 className="text-9xl text-white font-bold mb-4" style={{ color: timerColor }}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </h1>
      </motion.div>

      <motion.button
        onClick={toggleTimer}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="py-2 px-4 rounded-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border-t border-l border-white/40 text-shadow-black shadow-lg mr-1"
      >
        {isRunning ? "Pause" : "Start"}
      </motion.button>

      <motion.button
        onClick={resetTimer}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="py-2 px-4 rounded-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md border-t border-l border-white/40 text-white shadow-lg ml-1"
      >
        Reset
      </motion.button>
    </div>
  );
}
