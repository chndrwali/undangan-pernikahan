'use client';

import { Redressed } from 'next/font/google';
import { TypewriterEffect } from '../ui/type-writter';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

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
        <TextGenerateEffect className="text-center px-0 sm:px-20" words={desc} />
      </div>
      <section className=" w-full max-w-auto md:max-w-[700px]">
        <div className="flex flex-row">
          <section className="w-1/2 p-4 ">
            <div className="w-[200px] h-[300px] rounded-3xl">
              <Image alt="" src="/home/laki_latarbiru.webp" width={500} height={500} className=" rounded-3xl h-full w-full object-cover opacity-80" />
            </div>
          </section>

          <main className="w-1/2">
            <div className="p-4">
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="w-full text-end leading-tight max-w-[480px] mb-0 text-white"
              >
                <p className="mb-2">
                  <span className={`${redressed.className} font-bold text-end text-xl md:text-3xl lg:text-5xl`}>Ramdani Aditia</span>
                  <hr />

                  <p className="text-sm md:text-base text-end">
                    <span className="font-bold">Putra dari pasangan</span>
                    <br /> Bapak Sodikin <br /> & Ibu Oneng{' '}
                  </p>
                  <Link href="https://www.instagram.com/ramdaniaditia_" target="_blank" className="flex justify-end items-center">
                    <Instagram size={15} />
                    <span className="ml-2">@ramdaniaditia_</span>
                  </Link>
                </p>
              </motion.div>
            </div>
          </main>
        </div>
      </section>

      <p className="text-center relative text-muted-foreground w-full max-w-6xl px-4 my-4">
        <span className="relative z-10 bg-black bg-footer px-4 text-white text-xl">d e n g a n</span>
        <span className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-300 z-0"></span>
      </p>

      <section className=" w-full max-w-auto md:max-w-[700px]">
        <div className="flex flex-row">
          <main className="w-1/2">
            <div className="p-4">
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="w-full text-start leading-tight max-w-[480px] mb-0 text-white"
              >
                <p className="mb-2">
                  <span className={`${redressed.className} font-bold text-start text-xl md:text-3xl lg:text-5xl`}>Yuliyana Sari</span>
                  <hr />

                  <p className="text-sm md:text-base text-start">
                    <span className="font-bold">Putri dari pasangan</span>
                    <br /> Bapak Tatang <br /> &#38; Ibu Lilis Atikah{' '}
                  </p>
                  <Link href="https://www.instagram.com/yuliynsrr/" target="_blank" className="flex justify-start items-center">
                    <Instagram size={15} />
                    <span className="ml-2">@yuliynsrr</span>
                  </Link>
                </p>
              </motion.div>
            </div>
          </main>
          <section className="w-1/2 p-4 ">
            <div className="w-[200px] h-[300px] rounded-3xl">
              <Image alt="" src="/home/cewe-latarbiru.webp" width={500} height={500} className=" rounded-3xl h-full w-full object-cover opacity-80" />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Greetings;
