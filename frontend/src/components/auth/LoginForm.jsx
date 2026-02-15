import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputField from "../common/InputField";
import Button from "../common/Button";

/**
 * LoginForm Component
 *
 * Handles user authentication.
 *
 * Responsibilities:
 * - Collect email and password
 * - Call login API
 * - Store authenticated user in global context
 * - Redirect user based on role (admin / employee)
 *
 * Uses:
 * - AuthContext for managing user session
 * - React Router for navigation
 * - Reusable InputField and Button components
 */

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      const loggedInUser = response.data.user;
      setUser(loggedInUser);
      alert("Login Successful");
      if (loggedInUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/employee");
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <InputField
        type="email"
        name="email"
        label="Email"
        value={formData?.email}
        onChange={handleChange}
      />

      <InputField
        type="password"
        name="password"
        label="Password"
        value={formData?.password}
        onChange={handleChange}
      />

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
