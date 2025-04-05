'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login, saveToken } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const { setEmail } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await login(email, password);
      saveToken(response.token);
      setEmail(email);
      toast.success('Login successful!');
      router.push('/');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setLoginError(errorMessage);
      toast.error(errorMessage);
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
          
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Welcome back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {loginError && (
              <div className="bg-[#3A1C1C] border border-[#E62E4D] rounded-md p-3 mb-4">
                <p className="text-[#FF6B6B] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Invalid login credentials</span>
                </p>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 rounded-md bg-[#2D3748] border ${loginError ? 'border-[#E62E4D]' : 'border-[#4A5568]'} text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]`}
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
                className={`w-full px-4 py-3 rounded-md bg-[#2D3748] border ${loginError ? 'border-[#E62E4D]' : 'border-[#4A5568]'} text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]`}
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E62E4D] text-white py-3 rounded-md font-medium hover:bg-[#FF3D5C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              No account?{" "}
              <Link href="/signup" className="text-[#7B78FF] hover:text-[#9D9BFF] transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}