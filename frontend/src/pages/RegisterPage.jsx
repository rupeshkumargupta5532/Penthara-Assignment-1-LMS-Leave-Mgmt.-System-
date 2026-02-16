import RegisterForm from "../components/auth/RegisterForm";

/**
 * RegisterPage Component
 * Page wrapper for RegisterForm.
 */

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
