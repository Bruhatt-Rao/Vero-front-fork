'use client';

import Link from 'next/link';
import Image from 'next/image';
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