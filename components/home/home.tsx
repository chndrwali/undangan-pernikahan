'use client';

import { Suspense } from 'react';
import { Redressed } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Undangan from '@/components/home/undangan';
import { TypewriterEffect } from '../ui/type-writter';
import { ImagesSlider } from '../ui/image-slider';
import { useRouter } from 'next/navigation';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  const router = useRouter();
  const judul = [
    {
      text: 'Undangan',
      className: 'text-white dark:text-blue-500',
    },

    {
      text: 'Pernikahan',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  const images = ['/home/Gallery_Photo_1.jpeg', '/home/Gallery_Photo_2.jpeg', '/home/Gallery_Photo_4.jpeg'];

  const OnClick = () => {
    router.push('#mempelai');
  };
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        id="home"
        className="absolute w-full top-[10%] flex flex-col items-center  text-center z-50 text-white "
      >
        <TypewriterEffect words={judul} />
        <div className=" w-full max-w-[50px] min-h-[100px] h-full  text-black bg-white rounded-full my-4">
          <div className="flex flex-col items-center p-2">
            <span className="text-[1.7rem]">R</span>
            <hr className="w-full h-[2px] border border-black" />
            <span className="text-[1.7rem]">Y</span>
          </div>
        </div>
        <div className={`${redressed.className} mb-4 font-bold text-2xl sm:text-3xl`}>
          <span>Ramdani Aditia</span>
          <br />
          <span className="text-5xl">&#38;</span>
          <br />
          <span>Yuliyana Sari</span>
        </div>
        <p className="mb-6 text-base sm:text-xl">
          23 Juni 2024
          <br />
          NoLimit Indonesia
        </p>
        <p>Yth. Bapak/Ibu/Saudara/i</p>
        <Suspense fallback={<span>Loading...</span>}>
          <Undangan />
        </Suspense>
        <div className="my-4 ">
          <Button className="rounded-full bg-white hover:bg-white/50 text-black border border-blue-500" onClick={OnClick}>
            {' '}
            Lihat Undangan
          </Button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
};

export default HomeComponent;
