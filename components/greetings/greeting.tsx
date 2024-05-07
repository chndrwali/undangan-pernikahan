'use client';

import { Redressed } from 'next/font/google';
import { TypewriterEffect } from '../ui/type-writter';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';

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

  const ramdani = [
    {
      text: 'Ramdani ',
      className: `${redressed.className} text-white font-bold  text-3xl md:text-4xl lg:text-5xl`,
    },
    {
      text: 'Aditia',
      className: `${redressed.className} text-white font-bold  text-3xl md:text-4xl lg:text-5xl`,
    },
  ];
  const yuli = [
    {
      text: 'Yuliyana ',
      className: `${redressed.className} text-white font-bold  text-3xl md:text-4xl lg:text-5xl`,
    },
    {
      text: 'Sari',
      className: `${redressed.className} text-white font-bold  text-3xl md:text-4xl lg:text-5xl`,
    },
  ];
  const desc = 'Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkaikan cinta yang Engkau berikan dalam ikatan pernikahan';
  return (
    <section id="mempelai" className="bg-black bg-footer opacity-90 w-full flex flex-col items-center">
      <div className="mt-2 mb-8 ">
        <TypewriterEffect words={judul} />
        <TextGenerateEffect className="text-center px-0 sm:px-20" words={desc} />
      </div>
      <motion.section
        className="w-full max-w-auto md:max-w-[700px] flex flex-col sm:flex-row items-center sm:items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
      >
        <section className="w-full sm:w-1/2 p-4 flex justify-center sm:justify-start">
          <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="w-[200px] h-[300px] rounded-3xl overflow-hidden">
            <Image alt="" src="/home/laki_latarbiru.webp" width={500} height={500} className="rounded-3xl" />
          </motion.div>
        </section>

        <section className="w-full sm:w-1/2 p-4">
          <motion.div className="w-full text-center sm:text-end  max-w-auto sm:max-w-[480px] mb-0 text-white" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
            <div className="mb-2 ">
              <TypewriterEffect words={ramdani} className="text-center sm:text-end mb-4 sm:my-0 " />
              <Separator className="hidden sm:block my-4" />
              <motion.p initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-sm md:text-base text-center sm:text-end">
                <span className="font-bold">Putra dari pasangan</span>
                <br /> Bapak Sodikin <br /> & Ibu Oneng{' '}
              </motion.p>
              <Link href="https://www.instagram.com/ramdaniaditia_" target="_blank" className="flex justify-center sm:justify-end items-center">
                <Instagram size={15} />
                <motion.span initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="ml-2">
                  @ramdaniaditia_
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </section>
      </motion.section>

      <p className="text-center relative text-muted-foreground w-full max-w-6xl px-4 my-4">
        <motion.span initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="relative z-10 bg-black bg-footer px-4 text-white text-xl sm:text-3xl">
          d e n g a n
        </motion.span>
        <motion.span initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-300 z-0"></motion.span>
      </p>

      <motion.section
        className="w-full max-w-auto md:max-w-[700px] flex flex-col sm:flex-row items-center sm:items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
      >
        <section className="w-full sm:w-1/2 p-4">
          <motion.div className="w-full text-center sm:text-start leading-tight max-w-[480px] mb-0 text-white" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
            <div className="mb-2">
              <TypewriterEffect words={yuli} className="text-center sm:text-start my-4 sm:my-0" />
              <Separator className="hidden sm:block my-4" />
              <motion.p initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-sm md:text-base text-center sm:text-start">
                <span className="font-bold">Putri dari pasangan</span>
                <br /> Bapak Tatang <br /> &#38; Ibu Lilis Atikah{' '}
              </motion.p>
              <Link href="https://www.instagram.com/yuliynsrr/" target="_blank" className="flex justify-center sm:justify-start items-center">
                <Instagram size={15} />
                <motion.span initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="ml-2">
                  @yuliynsrr
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </section>
        <section className="w-full sm:w-1/2 p-4 flex justify-center sm:justify-end">
          <motion.div initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="w-[200px] h-[300px] rounded-3xl overflow-hidden">
            <Image alt="" src="/home/cewe-latarbiru.webp" width={500} height={500} className="rounded-3xl" />
          </motion.div>
        </section>
      </motion.section>
    </section>
  );
};

export default Greetings;
