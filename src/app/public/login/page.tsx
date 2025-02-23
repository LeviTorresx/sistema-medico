import PublicLayout from "../PublicLayout";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
     return (
          <PublicLayout title="Iniciar Sesión">
               <LoginForm />
          </PublicLayout>
     )
}
