'use client';

import { TextGenerateEffect } from '../ui/text-generate-effect';
import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/type-writter';

const Quotes = () => {
  const words = `
  Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
`;
  const judul = [
    {
      text: 'Sebuah',
      className: 'text-white',
    },
    {
      text: 'Kutipan',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <section id="quotes" className="bg-black bg-footer opacity-90 w-full h-screen flex flex-col items-center">
      <div className="mt-2 mb-8 ">
        <TypewriterEffect words={judul} />
      </div>
      <div className="text-wrap px-4 italic w-full  mb-4 leading-tight ">
        <blockquote>
          <TextGenerateEffect words={words} />
        </blockquote>
      </div>
      <motion.span
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="text-base text-center text-white sm:text-xl"
      >
        - QS. Ar-Rum 21
      </motion.span>
    </section>
  );
};

export default Quotes;
