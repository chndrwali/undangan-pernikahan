import { Redressed } from 'next/font/google';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { TypewriterEffect } from '../ui/type-writter';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Greetings = () => {
  const words = `
  Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
  - QS. Ar-Rum 21
`;

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
    <section id="mempelai" className="bg-black bg-footer opacity-90 w-full flex flex-col items-center">
      <div className="mt-2 mb-8 ">
        <TypewriterEffect words={judul} />
      </div>
      <div className="w-full text-center leading-tight max-w-[480px] mb-0 text-white">
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-base sm:text-xl md:text-3xl lg:text-5xl`}>Ramdani Aditia</span>
          <br />
          <span className="sm:text-sm md:text-base">
            Putra dari pasangan <br /> Bapak Sodikin &#38; Ibu Oneng{' '}
          </span>
        </p>
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-base sm:text-xl md:text-3xl lg:text-5xl`}>Yuliyana Sari</span>
          <br />
          <span className="text-xs  sm:text-sm md:text-base">
            Putri dari pasangan <br /> Bapak Tatang &#38; Ibu Lilis Atikah{' '}
          </span>
        </p>
      </div>
      <div className="text-wrap text-center pl-4 pr-4 italic w-full  mb-4 leading-tight max-w-[480px] ">
        <blockquote>
          <TextGenerateEffect words={words} />
        </blockquote>
      </div>
    </section>
  );
};

export default Greetings;
