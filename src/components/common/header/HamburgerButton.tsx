interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isMeetHuman?: boolean;
}

const HamburgerButton = ({
  isOpen,
  onClick,
  isMeetHuman,
}: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <span
        className={`block w-6 h-0.5 ${
          isMeetHuman ? "bg-white" : "bg-primary"
        } transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 ${
          isMeetHuman ? "bg-white" : "bg-primary"
        } transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block w-6 h-0.5 bg-primary ${
          isMeetHuman ? "bg-white" : "bg-primary"
        } transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
