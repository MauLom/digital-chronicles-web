// pages/register/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { SelectContent, SelectGroup } from '@radix-ui/react-select';
import { FormControl } from './ui/form';

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordAgain: '',
    email: '',
    country: '',
    agreeToRules: '0', // Default to "Umh..."
  });

  const countries = {
    pl: 'Poland',
    br: 'Brazil',
    us: 'United States',
    mx: 'Mexico',
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Implement form validation logic here
    const errors = []; // Collect validation errors

    if (!errors.length) {
      // Send a request to your Next.js API route
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful registration
        router.push('/register-success');
      } else {
        // Handle errors, display error messages
        const errorData = await response.json();
        errors.push(...errorData.errors);
      }
    }

    // Display errors if any
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (

    <form onSubmit={handleSubmit} className="h-5/5 flex flex-col items-center p-10 bg-white shadow-lg rounded-lg border-2 border-blue-500 gap-2">
      <h1 className="text-2xl font-bold mb-4">Register Account</h1>
      <Input
        placeholder="Account Name"
        name="username"
        required
        onChange={handleInputChange}
        value={formData.username}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={handleInputChange}
        value={formData.password}
      />
      <Input
        type="password"
        placeholder="Password Again"
        name="passwordAgain"
        required
        onChange={handleInputChange}
        value={formData.passwordAgain}
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={handleInputChange}
        value={formData.email}
      />
      {/* <Select
        name="country"
        required
        onValueChange={handleInputChange}
        value={formData.country}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>

            {Object.entries(countries).map(([code, name]) => (
              <SelectItem key={code} value={code}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>

        </SelectContent>
      </Select>
      <Select
        name="agreeToRules"
        required
        onValueChange={handleInputChange}
        value={formData.agreeToRules}
      >
        <SelectTrigger>
          <SelectValue placeholder="Tell us if you agreed the rules" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Uhm...</SelectLabel>
            <SelectItem value="1">Yes</SelectItem>
            <SelectItem value="2">No</SelectItem>
          </SelectGroup>

        </SelectContent>
      </Select> */}
      <Button type="submit">Create Account</Button>
    </form>
  );
};

export default RegisterForm;
