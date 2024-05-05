'use client';

import { Redressed } from 'next/font/google';
import { TypewriterEffect } from '../ui/type-writter';
import { motion } from 'framer-motion';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Greetings = () => {
  const judul = [
    {
      text: 'Akan',
      className: 'text-white',
    },
    {
      text: 'Menikah',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <section id="mempelai" className="bg-black bg-footer opacity-90 w-full h-screen flex flex-col items-center">
      <div className="mt-2 mb-8 ">
        <TypewriterEffect words={judul} />
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="w-full text-center leading-tight max-w-[480px] mb-0 text-white"
      >
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-xl md:text-3xl lg:text-5xl`}>Ramdani Aditia</span>
          <br />
          <span className="text-sm md:text-base">
            Putra dari pasangan <br /> Bapak Sodikin &#38; Ibu Oneng{' '}
          </span>
        </p>
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-xl md:text-3xl lg:text-5xl`}>Yuliyana Sari</span>
          <br />
          <span className="text-sm md:text-base">
            Putri dari pasangan <br /> Bapak Tatang &#38; Ibu Lilis Atikah{' '}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Greetings;
