"use client";

import React from "react";
import { Button } from "../ui/elements/Button";
import { useModal } from "@/context/ModalContext";

const AuthModalExample: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenLoginModal = () => {
    openModal("auth", { initialView: "login" });
  };

  const handleOpenSignupModal = () => {
    openModal("auth", { initialView: "signup" });
  };

  return (
    <div className="p-8 bg-[#FDFBF7] rounded-xl max-w-md mx-auto">
      <h2 className="text-2xl font-medium text-[#43405D] mb-4">
        Auth Modal Example
      </h2>
      <p className="text-gray-500 mb-6">
        Click the buttons below to open the login or signup modal.
      </p>
      <div className="space-y-4">
        <Button onClick={handleOpenLoginModal} variant="primary" fullWidth>
          Open Login Modal
        </Button>
        <Button onClick={handleOpenSignupModal} variant="gradient" fullWidth>
          Open Signup Modal
        </Button>
      </div>
    </div>
  );
};

export default AuthModalExample;
