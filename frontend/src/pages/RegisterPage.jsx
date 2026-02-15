import RegisterForm from "../components/auth/RegisterForm";

/**
 * RegisterPage Component
 *
 * Page wrapper for RegisterForm.
 *
 * Centers registration form
 * and provides page-level layout styling.
 */

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
