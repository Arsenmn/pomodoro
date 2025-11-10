import { useTimer } from "../../hooks/useTimer.hook"

export const EditTimer = () => {
  const { setTimerColor, setTimerBgColor } = useTimer()
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#a855f7", "#fff"]
  const bgColors = ["rgba(59, 130, 246, 0.4)", "rgba(16, 185, 129, 0.4)", "rgba(245, 158, 11, 0.4)", "rgba(239, 68, 68, 0.4)", "rgba(168, 85, 247, 0.4)", "rgba(100, 100, 100, 0.4)"]

  return (
    <div>
      <div>
        <h6>Timer Color</h6>
        <div className="flex flex-row gap-3 pt-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setTimerColor(color)}
              className="w-10 h-10 rounded-full transition-all border-2 border-transparent hover:border-gray-400 active:border-white"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <h6 className="pt-5">Timer Background Color</h6>
        <div className="flex flex-row gap-3 pt-3">
          {bgColors.map((bgColor) => (
            <button
              key={bgColor}
              onClick={() => setTimerBgColor(bgColor)}
              className="w-10 h-10 rounded-full transition-all border-2 border-transparent hover:border-gray-400 active:border-white"
              style={{ backgroundColor: bgColor }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}