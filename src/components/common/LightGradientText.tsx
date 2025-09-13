const LightGradientText = ({ text, className }: { text: string, className?: string }) => {
    return (
      <h1
        className={`text-4xl max-md:text-3xl font-semibold bg-clip-text text-transparent text-left mb-4 w-max max-w-full ${className}`}
        style={{
          backgroundImage:
          "linear-gradient(90deg, #F2F3EE 0%, #8AD5CE 99.99%)",
        }}
      >
        {text}
      </h1>
    );
  };
  
  export default LightGradientText;
  