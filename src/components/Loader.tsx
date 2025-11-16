import { t } from "i18next";

const Loader = () => {
  return (
    <div className="bg-white/80 rounded-full p-4">
      <p className="font-bold text-xl">{t("loading")}</p>
    </div>
  );
};

export default Loader;
