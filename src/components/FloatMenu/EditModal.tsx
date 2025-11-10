import { useState } from "react"
import { EditBackground } from "../EditModal/EditBackground"
import { EditTheme } from "../EditModal/EdtiTheme"
import { EditTimer } from "../EditModal/EditTimer"

const EditModal = () => {
  const [activeTab, setActiveTab] = useState<"background" | "theme" | "timer">("background")

  return (
    <div className="w-[500px] p-5 rounded-2xl bg-linear-to-br from-black/60 to-black/70 backdrop-blur-xl border border-white/20 shadow-xl text-white space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold">Customize</h3>
        <div className="mt-1 w-full h-px bg-white/20" />
      </div>

      <div className="flex flex-row gap-5 pb-2">
        {["background", "theme", "timer"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "background" | "theme" | "timer")}
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
      {activeTab === "background" && <EditBackground />}
      {activeTab === "theme" && <EditTheme />}
      {activeTab === "timer" && <EditTimer />}
    </div>
  )
}

export default EditModal