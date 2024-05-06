'use client';

import { TextGenerateEffect } from '../ui/text-generate-effect';
import { motion } from 'framer-motion';
import { TypewriterEffect } from '../ui/type-writter';
import { ImagesSlider } from '../ui/image-slider';

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

  const images = ['/home/Gallery_Photo_1.jpeg', '/home/Gallery_Photo_2.jpeg', '/home/Gallery_Photo_4.jpeg'];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className=" absolute w-full top-[5%] flex flex-col items-center  text-center z-50 text-white">
        <div className="mt-2 mb-8 ">
          <TypewriterEffect words={judul} />
        </div>
        <div className="text-wrap px-4 italic w-full  mb-4 leading-tight ">
          <blockquote>
            <TextGenerateEffect className="px-0 sm:px-20" words={words} />
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
      </div>
    </ImagesSlider>
  );
};

export default Quotes;
