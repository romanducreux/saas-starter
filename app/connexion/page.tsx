import type { Metadata } from "next";
import AuthPage from "@/components/workspace/AuthPage";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace Kirevo.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
