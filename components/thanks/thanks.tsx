'use client';
import { Redressed } from 'next/font/google';
import { motion } from 'framer-motion';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Thanks = () => {
  return (
    <section className="bg-black bg-footer opacity-90 w-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center text-white top-[10%]">
        <motion.h1 initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-2xl sm:text-4xl uppercase">
          Terima Kasih{' '}
        </motion.h1>
        <motion.p initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-2xl sm:text-4xl uppercase">
          Atas kehadiran dan doa restunya
        </motion.p>
        <motion.p initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-2xl sm:text-4xl uppercase">
          Kami yang berbahagia
        </motion.p>
        <motion.h1 initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className={`${redressed.className} text-4xl sm:text-7xl my-12`}>
          Ramdani & Yuli
        </motion.h1>
      </div>
    </section>
  );
};

export default Thanks;
