import { useState } from "react";

export const useSettingsModal = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const showSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleSettingsOk = () => {
    setIsSettingsModalOpen(false);
  };

  const handleSettingsCancel = () => {
    setIsSettingsModalOpen(false);
  };

  return { isSettingsModalOpen, showSettingsModal, handleSettingsCancel, handleSettingsOk }
}