import { useTranslation } from "react-i18next";

const SettingsModal = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);
  };

  return (
    <div className="w-[500px] p-5 rounded-2xl bg-linear-to-br from-black/60 to-black/70 backdrop-blur-md border border-white/20 shadow-xl text-white space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold">{t("settings")}</h3>
        <div className="mt-1 w-full h-px bg-white/20" />
      </div>

    <div className="flex gap-8">
      <button onClick={() => changeLanguage("en")} className="bg-white/20 rounded-full p-2 px-3 cursor-pointer border-2 border-transparent hover:border-white/60">🇬🇧</button>
      <button onClick={() => changeLanguage("ru")} className="bg-white/20 rounded-full p-2 px-3 cursor-pointer border-2 border-transparent hover:border-white/60">🇷🇺</button>
      <button onClick={() => changeLanguage("kz")} className="bg-white/20 rounded-full p-2 cursor-pointer border-2 border-transparent hover:border-white/60">🇰🇿 🦅</button>
    </div>
    </div>
  )
}

export default SettingsModal;