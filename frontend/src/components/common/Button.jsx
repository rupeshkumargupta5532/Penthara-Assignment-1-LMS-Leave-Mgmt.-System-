/**
 * Reusable Button Component
 */
const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
