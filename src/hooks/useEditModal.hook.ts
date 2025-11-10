import { useState } from "react";

export const useEditModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  return { isEditModalOpen, showEditModal, handleEditCancel, handleEditOk }
}