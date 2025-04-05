'use client';

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "@/lib/api";
import { toast } from "sonner";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await register(email, password);
      toast.success('Account created successfully!');
      router.push('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121826] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#1A2233] p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Link href="/" className="flex items-baseline">
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-0.5 text-[#7B78FF]"
              >
                <path d="M8 20L20 28L40 12" stroke="#7B78FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-4xl font-bold text-[#7B78FF]">ero</span>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create your account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2D3748] border border-[#4A5568] text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-md bg-[#2D3748] border border-[#4A5568] text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]"
                placeholder="Create a password"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-md bg-[#2D3748] border border-[#4A5568] text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]"
                placeholder="Confirm your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E62E4D] text-white py-3 rounded-md font-medium hover:bg-[#FF3D5C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#7B78FF] hover:text-[#9D9BFF] transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 