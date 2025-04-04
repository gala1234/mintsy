const BackgroundGradient: React.FC = () => {
  return (
    <div className="pointer-events-none">
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundGradient;
