import React, { useState, useCallback } from "react";
import { ModalContext } from "./ModalContext"; 
import PaymentModal from "../components/PaymentModal";

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const value = { openModal, closeModal };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};