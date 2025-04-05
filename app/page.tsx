import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#121826]">
      {/* Header with logo and login */}
      <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-[#1A2233] px-6 py-4 shadow-md border-b border-[#2D3748]/20">
        <div className="flex items-center">
          <div className="flex items-baseline">
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-0.5 text-[#7B78FF]"
            >
              {/* Checkmark V with extended right line */}
              <path d="M8 20L20 28L40 12" stroke="#7B78FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-4xl font-bold text-[#7B78FF]">ero</span>
          </div>
        </div>
        <div>
          <Link href="/login" className="text-sm font-medium text-[#7B78FF] hover:text-[#9D9BFF] transition-colors">
            Log in
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex w-full flex-col md:flex-row pt-16 min-h-screen">
        {/* Left section with background color and GIF */}
        <div className="relative flex w-full flex-1 items-center justify-center bg-gradient-to-br from-[#1A2233] to-[#121826] p-8 md:w-2/5">
          <div className="relative h-[600px] w-[600px] flex items-center justify-center -mt-16">
            <Image
              src="/truth.gif"
              alt="Vero in action"
              width={600}
              height={600}
              className="object-contain brightness-90"
              priority
            />
          </div>
        </div>

        {/* Right section with content */}
        <div className="flex w-full flex-1 flex-col items-center justify-center bg-[#1A2233] p-8 md:w-3/5 md:items-start md:p-16">
          <div className="max-w-2xl">
            <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-white md:text-left md:text-5xl">
              False news spreads 70% faster than truth. <span className="text-[#7B78FF] font-bold">Vero</span> is your lie detector for headlines
            </h2>

            <button className="mb-12 rounded-md bg-[#E62E4D] px-8 py-4 text-xl font-medium text-white transition-all hover:bg-[#FF3D5C] hover:shadow-md shadow-[#E62E4D]/20">
              Add to Chrome
            </button>
          </div>
        </div>
      </div>

      {/* Extended section below */}
      <div className="w-full bg-[#121826] py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">How Vero Works</h3>
              <p className="text-lg text-gray-300">
                Vero instantly spots misinformation through the title of the article, and tells you if its real or not so you won't have to worry about reading and sharing false news.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#E62E4D] mr-2">✓</span>
                  <span className="text-gray-300">Automatically give percentage of how credible the article is</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E62E4D] mr-2">✓</span>
                  <span className="text-gray-300">Work on 20+ credited news sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E62E4D] mr-2">✓</span>
                  <span className="text-gray-300">90% Accuracy</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[600px] bg-[#1A2233] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="How Vero works"
                width={1000}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

