'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { removeToken } from '@/lib/api';
import { useRouter } from 'next/navigation';

export function Header() {
  const { email, setEmail } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    setEmail(null);
    router.push('/login');
  };

  return (
    <header className="bg-[#1A2233] border-b border-[#2D3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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

          <div className="flex items-center space-x-4">
            {email ? (
              <>
                <span className="text-gray-300">{email}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 