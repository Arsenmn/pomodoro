import { useState } from "react"
import { EditBackground } from "../EditModal/EditBackground"
import { EditTimer } from "../EditModal/EditTimer"
import { t } from "i18next"

const EditModal = () => {
  const [activeTab, setActiveTab] = useState<"background" | "timer">("background")

  return (
    <div className="w-[500px] p-5 rounded-2xl bg-linear-to-br from-black/60 to-black/70 backdrop-blur-md border border-white/20 shadow-xl text-white space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{t("edit.customize")}</h3>
        <div className="mt-1 w-full h-px bg-white/20" />
      </div>

      <div className="flex flex-row gap-5 pb-2">
        {[t("edit.background"), t("edit.timer")].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "background" | "timer")}
            className={`cursor-pointer transition-colors ${
              activeTab === tab 
                ? "text-white border-b-2 border-white"  
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {activeTab === t("edit.background") && <EditBackground />}
      {activeTab === t("edit.timer") && <EditTimer />}
    </div>
  )
}

export default EditModal