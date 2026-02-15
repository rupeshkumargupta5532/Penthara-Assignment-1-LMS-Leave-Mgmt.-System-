/**
 * InputField Component
 *
 * Reusable controlled input field component.
 *
 * Props:
 * @param {String} label - Field label text
 * @param {String} type - Input type (text, email, password, date, etc.)
 * @param {String} name - Input name attribute
 * @param {String} value - Controlled input value
 * @param {Function} onChange - Change event handler
 *
 * Used to maintain consistent form UI styling.
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
