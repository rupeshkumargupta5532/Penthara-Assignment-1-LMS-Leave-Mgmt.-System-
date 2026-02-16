import LoginForm from "../components/auth/LoginForm";
/**
 * LoginPage Component
 * Page wrapper for LoginForm.
 */

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
