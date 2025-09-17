const GradientText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h1
      className={`text-4xl py-4 font-semibold bg-clip-text text-transparent text-left mb-4 w-max max-w-full ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90.09deg, #1A323C 0%, #A5F5ED 90%, #A5F5ED 100%)",
      }}
    >
      {text}
    </h1>
  );
};

export default GradientText;
