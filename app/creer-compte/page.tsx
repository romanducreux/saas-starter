import type { Metadata } from "next";
import AuthPage from "@/components/workspace/AuthPage";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Créez votre espace Kirevo et préparez votre première automatisation.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return <AuthPage mode="signup" />;
}
