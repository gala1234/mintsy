'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import LimitReachedModal from '@/components/ui/LimitReachedModal';

const LimitModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'generation' | 'mint' | 'download'>('generation');

  const openGenerationModal = () => {
    setModalType('generation');
    setIsModalOpen(true);
  };

  const openMintModal = () => {
    setModalType('mint');
    setIsModalOpen(true);
  };

  const openDownloadModal = () => {
    setModalType('download');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Limit Reached Modal Examples</h2>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Button onClick={openGenerationModal}>
          Show Generation Limit Modal
        </Button>
        
        <Button onClick={openMintModal} variant="secondary">
          Show Mint Limit Modal
        </Button>
        
        <Button onClick={openDownloadModal} variant="dark">
          Show Download Limit Modal
        </Button>
      </div>
      
      <LimitReachedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        upgradeUrl="/ai-art-pricing"
        buyOneUrl="/checkout?item=single"
        limitType={modalType}
        price="€5"
      />
    </div>
  );
};

export default LimitModalExample; 