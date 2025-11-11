import { Pipette } from "lucide-react";
import type { TTimerContext } from "../../app/providers/TimerContext";


export default function ColorPicker({ timerColor, setTimerColor, timerBgColor, setTimerBgColor, type }: TTimerContext) {
  const color = type === "bg" ? timerBgColor : timerColor
  const setColor = type === "bg" ? setTimerBgColor : setTimerColor

  return (
    <div className="relative w-12 h-12">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      <div
        className="w-10 h-10 rounded-full border-2 border-gray-300"
        style={{ backgroundColor: "gray" }}
      ></div>

      <Pipette className="absolute bottom-4.5 left-2.5 m-auto w-5 h-5 text-white drop-shadow cursor-pointer pointer-events-none" />
    </div>
  );
}
