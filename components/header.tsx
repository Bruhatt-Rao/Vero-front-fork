'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#121826]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
      </div>
    </header>
  );
} 