/**
 * Reusable Input Field Component
 */
const InputField = ({ label, type = "text", name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
