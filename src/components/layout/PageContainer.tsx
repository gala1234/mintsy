import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children,
  className = ""
}) => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FDFBF7]">
      <div className={`container mx-auto px-6 md:px-10 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default PageContainer; 