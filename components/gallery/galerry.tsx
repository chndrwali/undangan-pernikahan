'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from '@/components/ui/type-writter';
import { ParallaxScroll } from '@/components/ui/paralax-scroll';

export default function Gallery() {
  const judul = [
    {
      text: 'Moment',
      className: 'text-white dark:text-blue-500',
    },

    {
      text: 'Bahagia ',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Kami ',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  const images = [
    '/home/1.webp',
    '/home/2.webp',
    '/home/3.webp',
    '/home/Gallery_Photo_1.webp',
    '/home/Gallery_Photo_2.webp',
    '/home/Gallery_Photo_3.webp',
    '/home/Gallery_Photo_4.webp',
    '/home/Gallery_Photo_5.webp',
    '/home/Gallery_Photo_6.webp',
    '/home/Gallery_Photo_7.webp',
  ];
  return (
    <section id="galery" className="bg-black bg-footer opacity-90 w-full flex flex-col items-center ">
      <div className="mt-0 mb-2">
        <TypewriterEffect words={judul} />
        <motion.p initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-white text-xl text-center px-4">
          “Aku tidak tahu dimana ujung perjalanan ini, aku tidak bisa menjanjikan apapun. Tapi, selama aku mampu, mimpi-mimpi kita adalah prioritas.”
        </motion.p>
      </div>
      <div className=" py-4 px-10 ">
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
}
