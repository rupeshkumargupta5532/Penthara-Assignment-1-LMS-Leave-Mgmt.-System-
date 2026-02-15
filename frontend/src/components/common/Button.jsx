/**
 * Button Component
 *
 * Reusable button component with variant styling.
 *
 * Props:
 * @param {ReactNode} children - Button label/content
 * @param {Function} onClick - Click handler function
 * @param {String} type - Button type (button | submit)
 * @param {String} variant - Style variant (primary | success | danger)
 * @param {String} className - Additional custom styles
 *
 * Provides consistent styling across the application.
 */

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
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
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
