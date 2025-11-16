import { useRef } from "react";
import { useBackground } from "../../hooks/useBackground.hook";
import { t } from "i18next";

export const EditBackground = () => {
  const { setBackground } = useBackground();
  const previousUrl = useRef<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      if (previousUrl.current) {
        URL.revokeObjectURL(previousUrl.current);
      }
      previousUrl.current = imageUrl;
      setBackground(imageUrl);
    }
  };
  const handleDefaultChange = (e: React.MouseEvent<HTMLImageElement>) => {
    const src = e.currentTarget.src;
    setBackground(src);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <img
          src="/defaultBg.jpg"
          alt=""
          className="rounded-2xl w-70 h-40 hover:border hover:border-white"
          onClick={handleDefaultChange}
        />
        <img
          src="/darkGreen.jpg"
          alt=""
          className="rounded-2xl w-70 h-40 hover:border hover:border-white"
          onClick={handleDefaultChange}
        />
        <img
          src="/city.jpg"
          alt=""
          className="rounded-2xl w-70 h-40 hover:border hover:border-white"
          onClick={handleDefaultChange}
        />
        <img
          src="/snow.jpg"
          alt=""
          className="rounded-2xl w-70 h-40 hover:border hover:border-white"
          onClick={handleDefaultChange}
        />
      </div>

      <div className="flex flex-row justify-center gap-4">
        <label className="flex items-center justify-center w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer text-sm backdrop-blur-sm">
          <span className="truncate">{t("edit.chooseBg")}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden cursor-pointer"
          />
        </label>
        <button
          onClick={() => setBackground(null)}
          className="flex items-center justify-center w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer text-sm backdrop-blur-sm"
        >
          {t("timer.reset")}
        </button>
      </div>
    </div>
  );
};
