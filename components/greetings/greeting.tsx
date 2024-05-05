'use client';

import { Redressed } from 'next/font/google';
import { TypewriterEffect } from '../ui/type-writter';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Greetings = () => {
  const judul = [
    {
      text: 'Pasangan',
      className: 'text-white',
    },
    {
      text: 'Mempelai',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  const desc = 'Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan';
  return (
    <section id="mempelai" className="bg-black bg-footer opacity-90 w-full flex flex-col items-center">
      <div className="mt-2 mb-8 ">
        <TypewriterEffect words={judul} />
        <TextGenerateEffect className="text-center px-20" words={desc} />
      </div>
      <div>
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image alt="" src="/home/laki_latarbiru.jpg" width={500} height={500} className="absolute inset-0 h-full w-full object-cover" />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
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
              </motion.div>
            </div>
          </main>
        </div>
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
