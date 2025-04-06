'use client';

import { Header } from '@/components/header';
import Image from "next/image"
import Link from "next/link"
import Script from 'next/script'
import { TypingAnimation } from '@/components/typing-animation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Home() {
  const [topSectionRef, isTopSectionVisible] = useIntersectionObserver();
  const [bottomSectionRef, isBottomSectionVisible] = useIntersectionObserver();
  const [infoSectionRef, isInfoSectionVisible] = useIntersectionObserver();

  return (
    <div className="flex flex-col bg-[#121826]">
      <Header />
      <Script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module" />
      
      <div ref={topSectionRef} className="flex w-full flex-col md:flex-row pt-16 min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background.avif"
            alt="Background"
            fill
            className="object-cover"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121826]/80 to-[#121826]/90"></div>
        </div>

        {/* Left section with background color and GIF */}
        <div className="relative flex w-full flex-1 items-center justify-center p-8 md:w-2/5">
          <div className={`relative h-[500px] w-[500px] flex items-center justify-center -mt-16 ${isTopSectionVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <dotlottie-player 
              src="https://lottie.host/4de4415b-545f-49c1-bbff-34179b72d505/6Dg5t1hTFd.lottie" 
              background="transparent" 
              speed="1" 
              style={{ width: '500px', height: '500px' }} 
              loop 
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        {/* Right section with content */}
        <div className="relative flex w-full flex-1 flex-col items-center justify-center p-8 md:w-3/5 md:items-start md:p-16">
          <div className={`max-w-2xl ${isTopSectionVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-white md:text-left md:text-5xl">
              <span className="text-[#7B78FF] font-bold">Vero</span> spots fake headlines{" "}
              <TypingAnimation />
            </h2>

            <div className="flex flex-col items-center md:items-start">
              <a 
                href="/fake_news.zip"
                download
                className="mb-4 rounded-md bg-[#E62E4D] px-8 py-4 text-xl font-medium text-white transition-all hover:bg-[#FF3D5C] hover:shadow-md shadow-[#E62E4D]/20 inline-block"
              >
                Add to Chrome
              </a>
              <div className="text-sm text-gray-400 mt-2">
                <p className="mb-2">To install:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Download and unzip the extension</li>
                  <li>Open Chrome and go to chrome://extensions</li>
                  <li>Enable "Developer mode" (toggle in top right)</li>
                  <li>Click "Load unpacked" and select the unzipped folder</li>
                </ol>
              </div>
            </div>
            <br/>
            <br/>
            <div className="text-gray-400 text-center md:text-left">
              <span className="text-[#7B78FF] font-bold">75%</span>{" "}
              <span className="text-[#7B78FF] font-bold">of users</span>{" "}
              say they'd
              <br />
              use a tool to{" "}
              <span className="text-[#7B78FF] font-bold">flag fake headlines</span>{" "}
              if available
            </div>
          </div>
        </div>
      </div>

      {/* Extended section below */}
      <div ref={bottomSectionRef} className="w-full py-16 relative" style={{
        background: 'linear-gradient(180deg, rgba(18,24,38,0.9) 0%, rgba(7,2,91,1) 50%, rgba(0,35,115,0.8) 100%)'
      }}>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#121826]/90 to-transparent"></div>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isBottomSectionVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
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
                  <span className="text-gray-300">98% Accuracy</span>
                </li>
              </ul>
            </div>
            <div className={`relative h-[600px] rounded-lg overflow-hidden ${isBottomSectionVisible ? 'animate-slide-in-left' : 'opacity-0'} flex items-center justify-center bg-transparent`}>
              <div className="w-[700px] h-[560px]">
                <video
                  src="https://res.cloudinary.com/dsj1tgvqv/video/upload/v1743952353/verogif_tobhjw.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New More Information section */}
      <div ref={infoSectionRef} className="w-full py-32 relative" style={{
        background: 'linear-gradient(180deg, rgba(0,35,115,0.8) 0%, rgba(0,50,150,0.6) 100%)'
      }}>
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white text-center mb-16">Want to know more?</h3>
            
            <div className="relative flex items-center justify-center">
              {/* GIF on the left */}
              <div className="relative w-[300px] h-[300px] flex items-center justify-center rotate-12 mr-[-50px] z-10 -mt-20">
                <dotlottie-player 
                  src="https://lottie.host/d2cb0e6f-6a13-48a4-bf46-d7d2ab6d736b/4AZAK80Ndu.lottie" 
                  background="transparent" 
                  speed="1" 
                  style={{ width: '300px', height: '300px' }} 
                  loop 
                  autoplay
                ></dotlottie-player>
              </div>

              {/* QR Code offset to the right */}
              <div className="relative h-[250px] w-[250px] rounded-lg overflow-hidden border-4 border-[#7B78FF] ml-16">
                <Image
                  src="/QR.png"
                  alt="QR Code"
                  width={250}
                  height={250}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

