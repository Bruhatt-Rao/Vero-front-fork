import Link from "next/link"

export default function SignupPage() {
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
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                className="w-full px-4 py-3 rounded-md bg-[#2D3748] border border-[#4A5568] text-white focus:outline-none focus:ring-2 focus:ring-[#7B78FF]"
                placeholder="Confirm your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#E62E4D] text-white py-3 rounded-md font-medium hover:bg-[#FF3D5C] transition-colors"
            >
              Sign Up
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