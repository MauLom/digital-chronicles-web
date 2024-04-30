"use client";
import { useState } from 'react';
import HeaderMenu from "@/components/HeaderMenu";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  // State to track which form to show
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false); 

  return (
    <main>
      <HeaderMenu onRegister={() => setShowLoginForm(false)} onLogin={() => setShowLoginForm(true)} />
      <div className="flex justify-between h-full">
        <div className="h-full">
          {showLoginForm ? <LoginForm onNewUser={() => setShowLoginForm(false)} /> : <RegisterForm />}
        </div>
        <div className="bg-slate-900">
          Content for in-game screenshots?
        </div>
      </div>
    </main>
  );
}
