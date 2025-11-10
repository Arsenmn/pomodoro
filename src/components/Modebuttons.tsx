import { motion } from "framer-motion"
import { memo } from "react"

interface ModeButtonProps {
  label: string
  time: number
  offsetX: number
  offsetY: number
  onClick: (time: number) => void
  fromColor: string
  className?: string
}

const ModeButton = memo(({ label, time, offsetX = 0, offsetY = 0, onClick, fromColor, className }: ModeButtonProps) => {
  const colorClasses: Record<string, string> = {
    teal: "from-teal-500/80 to-teal-500/20",
    red: "from-red-500/80 to-red-500/20",
    green: "from-green-500/80 to-green-500/20",
  };

  return (
    <motion.button
      onClick={() => onClick(time)}
      whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
      animate={{ scale: 1, x: offsetX, y: offsetY, opacity: 1 }}
      exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`
        py-2 px-4 rounded-full bg-linear-to-br ${colorClasses[fromColor]} 
        border-t border-l border-white/40 text-white shadow-lg ml-1
        hover:border-b hover:border-r hover:border-t-0 hover:border-l-0 transition-[border] duration-200
        ${className ?? ""}
      `}
    >
      {label}
    </motion.button>
  )
})

export default ModeButton;