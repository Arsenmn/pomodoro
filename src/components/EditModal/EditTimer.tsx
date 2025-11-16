import { t } from "i18next";
import { useTimer } from "../../hooks/useTimer.hook";
import ColorPicker from "./ColorPicker";

export const EditTimer = () => {
  const { timerColor, setTimerColor, timerBgColor, setTimerBgColor } =
    useTimer();
  const colors = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#a855f7",
    "#fff",
  ];
  const bgColors = [
    "rgba(59, 130, 246, 0.4)",
    "rgba(16, 185, 129, 0.4)",
    "rgba(245, 158, 11, 0.4)",
    "rgba(239, 68, 68, 0.4)",
    "rgba(168, 85, 247, 0.4)",
    "rgba(100, 100, 100, 0.4)",
  ];

  return (
    <div>
      <div>
        <h6>{t("edit.timerColor")}</h6>
        <div className="flex flex-row gap-3 pt-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setTimerColor(color)}
              className="w-10 h-10 rounded-full transition-all border-2 border-transparent hover:border-gray-400 active:border-white"
              style={{ backgroundColor: color }}
            />
          ))}
          <ColorPicker
            timerColor={timerColor}
            setTimerColor={setTimerColor}
            timerBgColor={timerBgColor}
            setTimerBgColor={setTimerBgColor}
            type="timer"
          />
        </div>

        <h6 className="pt-5">{t("edit.timerBgColor")}</h6>
        <div className="flex flex-row gap-3 pt-3">
          {bgColors.map((bgColor) => (
            <button
              key={bgColor}
              onClick={() => setTimerBgColor(bgColor)}
              className="w-10 h-10 rounded-full transition-all border-2 border-transparent hover:border-gray-400 active:border-white"
              style={{ backgroundColor: bgColor }}
            />
          ))}
          <ColorPicker
            timerColor={timerColor}
            setTimerColor={setTimerColor}
            timerBgColor={timerBgColor}
            setTimerBgColor={setTimerBgColor}
            type="bg"
          />
        </div>
      </div>
      <button
        onClick={() => {
          setTimerColor(colors[colors.length - 1]);
          setTimerBgColor(bgColors[bgColors.length - 1]);
        }}
        className="flex items-center justify-center w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer text-sm backdrop-blur-sm mt-5"
      >
        {t("timer.reset")}
      </button>
    </div>
  );
};
