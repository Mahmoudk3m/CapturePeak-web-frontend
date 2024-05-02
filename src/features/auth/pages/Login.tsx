import LoginForm from "../components/LoginForm";
import AuthLayout from "../layout/AuthLayout";

export default function Login() {
  return (
    <AuthLayout currentForm="login">
      <LoginForm />
    </AuthLayout>
  );
}
