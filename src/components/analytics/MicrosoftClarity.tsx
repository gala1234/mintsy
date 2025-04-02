'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

interface MicrosoftClarityProps {
  projectId: string;
}


const MicrosoftClarity = ({ projectId = 'qy10p44nky' }: MicrosoftClarityProps) => {
  useEffect(() => {
    // Only initialize in production or if running on the actual domain
    if (typeof window !== 'undefined') {
      try {
        Clarity.init(projectId);
        console.log('Microsoft Clarity initialized with project ID:', projectId);
      } catch (error) {
        console.error('Failed to initialize Microsoft Clarity:', error);
      }
    }
  }, [projectId]);

  // Return null since we don't need to render anything
  return null;
};

export default MicrosoftClarity; 