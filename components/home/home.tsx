import { Redressed } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Undangan from '@/components/home/undangan';
import { Suspense } from 'react';
import Image from 'next/image';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  return (
    <>
      <section id="home" className="w-full h-screen overflow-hidden mx-auto my-0 relative">
        <video autoPlay loop muted playsInline={true} className="bg-[#aeb8b3] opacity-90 object-cover object-center w-full h-full min-h-[480px] ">
          <source src="/home/BackgroundVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full top-[20%] text-center  animate-in">
          <Image src="" alt="RamdaniYuliyani" />
          <p className=" text-base sm:text-xl mb-4">Undangan Pernikahan</p>
          <p className={`${redressed.className} mb-4 font-bold text-2xl sm:text-3xl`}> Ramdani Aditia &#38; Yuliyana Sari</p>
          <p className="mb-6 text-base sm:text-xl">
            23 Juni 2024
            <br />
            Nolimit Indonesia
          </p>
          <p>Yth. Bapak/Ibu/Saudara/i</p>
          <Suspense fallback={<span>Loading...</span>}>
            <Undangan />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
