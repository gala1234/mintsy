"use client";

import React from 'react';

type OrderStatus = 'placed' | 'printed' | 'shipped' | 'delivered';

interface OrderTrackerProps {
  currentStatus: OrderStatus;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus }) => {
  const statuses: OrderStatus[] = ['placed', 'printed', 'shipped', 'delivered'];
  
  // Determine which steps are complete
  const getStepStatus = (step: OrderStatus) => {
    const statusIndex = statuses.indexOf(currentStatus);
    const stepIndex = statuses.indexOf(step);
    
    if (stepIndex < statusIndex) return 'completed';
    if (stepIndex === statusIndex) return 'current';
    return 'upcoming';
  };
  
  // Icons for each status
  const getIcon = (step: OrderStatus, status: 'completed' | 'current' | 'upcoming') => {
    if (status === 'completed' || status === 'current') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      );
    }
    
    return (
      <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
    );
  };
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {statuses.map((step, index) => (
          <div key={step} className="flex flex-col items-center relative">
            <div 
              className={`
                w-8 h-8 rounded-full flex items-center justify-center 
                ${getStepStatus(step) === 'completed' ? 'bg-mint-dark text-white' : 
                  getStepStatus(step) === 'current' ? 'bg-pink-dark text-white' : 
                  'bg-gray-200 text-gray-400'}
                ${getStepStatus(step) === 'current' ? 'order-step-pulse' : ''}
              `}
            >
              {getIcon(step, getStepStatus(step))}
            </div>
            
            <span 
              className={`
                mt-2 capitalize text-sm font-medium
                ${getStepStatus(step) === 'completed' ? 'text-mint-dark' :
                  getStepStatus(step) === 'current' ? 'text-pink-dark' :
                  'text-gray-400'}
              `}
            >
              {step}
              {getStepStatus(step) === 'current' && (
                <span className="ml-1 inline-block px-2 py-0.5 text-xs rounded-full order-status-badge">
                  active
                </span>
              )}
            </span>
            
            {index < statuses.length - 1 && (
              <div 
                className="absolute top-4 left-8 w-full h-0.5 -z-10"
                style={{ 
                  background: `linear-gradient(to right, 
                    ${getStepStatus(step) === 'completed' ? '#34d399' : '#e5e7eb'} 0%, 
                    ${getStepStatus(statuses[index + 1]) !== 'upcoming' ? '#34d399' : '#e5e7eb'} 100%)`
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracker; 