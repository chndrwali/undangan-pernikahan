import { Redressed } from 'next/font/google';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Greetings = () => {
  return (
    <section className="bg-[#efebe9] bg-footer opacity-60 w-full flex flex-col items-center">
      <div className="mt-2 mb-8">
        <p className="font-bold text-xl">Akan menikah</p>
      </div>
      <div className="w-full text-center leading-tight max-w-[480px] mb-0">
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-xl`}>Ramdani Aditia</span>
          <br />
          <span>
            Putra dari pasangan <br /> Bapak Sodikan &#38; Ibu Oneng{' '}
          </span>
        </p>
        <p className="mb-2">
          <span className={`${redressed.className} font-bold text-xl`}>Yuliyana Sari</span>
          <br />
          <span>
            Putri dari pasangan <br /> Bapak Tatang &#38; Ibu Lilis Atikah{' '}
          </span>
        </p>
      </div>
      <div className="text-wrap pl-4 pr-4 italic w-full text-center mb-4 leading-tight max-w-[480px]">
        <blockquote>
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
          yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir
          <br />- QS. Ar-Rum 21{' '}
        </blockquote>
      </div>
    </section>
  );
};

export default Greetings;
