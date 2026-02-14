import { useState } from "react";
import { registerUser } from "../../services/authService";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/**
 * Employee Registration Form
 */
const RegisterForm = () => {
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    empId: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(formData);
    alert("User Registered Successfully");
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto w-full p-6 bg-white shadow rounded-4xl"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>

      {Object.keys(formData).map((key) => (
        <InputField
          key={key}
          label={key}
          name={key}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}

      <div className="flex gap-2">
        <Button type="submit" className="items-center">
          Register
        </Button>

        <Button onClick={handleLoginNavigate}>Login</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
