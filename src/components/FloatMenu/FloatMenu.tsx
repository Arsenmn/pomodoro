import { lazy, Suspense, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import Loader from "../Loader";
import SettingsModal from "./SettingsModal";

export const FloatMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<number | null>(null)

  const menuItems = [
    { id: 1, label: <EditOutlined />, x: 0, y: -120 },
    { id: 2, label: <SettingOutlined />, x: 0, y: -60 },
  ];

  const EditModal = lazy(() => import('./EditModal'))


  return (
    <div className="fixed bottom-6 right-6">
      {/* Menu Buttons */}
      <AnimatePresence>
        {menuOpen &&
          menuItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => setModalOpen(item.id)}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ scale: 1, x: item.x, y: item.y, opacity: 1 }}
              exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="
                absolute w-12 h-12 rounded-full bg-white/20
                border-b border-r border-white/30 text-white shadow-lg
                hover:border-b-0 hover:border-r-0 hover:bg-white/40 hover:border-t hover:border-l transition-colors duration-200
              "
            >
              {item.label}
            </motion.button>
          ))}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white shadow-lg"
      >
        {menuOpen ? "×" : "+"}
      </motion.button>


      {modalOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 
              flex items-center justify-center 
              z-50
            "
            onClick={() => setModalOpen(null)} // close on outside click if you want
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
            >
              {modalOpen === 2 ? <SettingsModal /> : <Suspense fallback={<Loader />}><EditModal /></Suspense>}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
