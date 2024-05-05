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

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
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

  const images = ['/home/Gallery_Photo_1.jpeg', '/home/Gallery_Photo_2.jpeg', '/home/Gallery_Photo_3.jpeg'];
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
        className="absolute w-full top-[20%] text-center z-50 text-white "
      >
        <Image src="" alt="RamdaniYuliyani" />
        <TypewriterEffect words={judul} />
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
      </motion.div>
    </ImagesSlider>
  );
};

export default HomeComponent;
