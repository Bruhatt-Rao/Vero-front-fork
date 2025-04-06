'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/auth-context';
import { removeToken } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const { email, setEmail } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    removeToken();
    setEmail(null);
    router.push('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#1A2233] border-b border-[#2D3748]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vero Logo"
              width={200}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center space-x-4 mr-4">
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
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1A2233] border border-[#2D3748]">
                    <div className="py-1">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2D3748] hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2D3748] hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 