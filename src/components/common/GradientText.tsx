const GradientText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h1
      className={`text-[50px] font-medium font-montserrat bg-clip-text text-transparent text-left w-max max-w-full ${className}`}
      style={{
        background: "linear-gradient(90deg, #1A323C 0.08%, #365B61 44.99%, #A5F5ED 108.9%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontStyle: "normal",
        lineHeight: "normal"
      }}
    >
      {text}
    </h1>
  );
};

export default GradientText;
