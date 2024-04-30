// app/login/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import { Button } from './ui/button'; // Assuming you have Button and Input components
import { Input } from './ui/input';
import { BreadcrumbLink } from './ui/breadcrumb';

const LoginForm = ({ onNewUser }: { onNewUser: () => void }) => {
  const router = useRouter();

    const handleLogin = (event:any) => {
      event.preventDefault();
      // Perform login
    };

  return (
    <form
      // onSubmit={handleLogin} 
      className="flex flex-col items-center p-10 bg-white shadow-lg rounded-lg border-2 border-blue-500"
    >
      <h1 className="text-2xl font-bold mb-8">Login</h1>
      <Input placeholder="Account" className="mb-4" />
      <Input placeholder="Password" className="mb-6" type="password" />
      <Button type="submit" className="bg-black text-white px-6 py-2 rounded">
        Connect
      </Button>

      <Button variant="ghost" onClick={onNewUser}>New user?</Button>
      <Button variant="ghost">Recover account</Button>
    </form>
  );
};

export default LoginForm;
