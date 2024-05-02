import RegisterForm from "../components/RegisterForm";
import AuthLayout from "../layout/AuthLayout";

export default function Register() {
  return (
    <AuthLayout currentForm="register">
      <RegisterForm />
    </AuthLayout>
  );
}
