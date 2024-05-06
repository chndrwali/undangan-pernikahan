import { Redressed } from 'next/font/google';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Thanks = () => {
  return (
    <section className="bg-black bg-footer opacity-90 w-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center text-white top-[10%]">
        <h1 className="text-2xl sm:text-4xl uppercase">Terima Kasih </h1>
        <p className="text-2xl sm:text-4xl uppercase">Atas kehadiran dan doa restunya</p>
        <p className="text-2xl sm:text-4xl uppercase">Kami yang berbahagia</p>
        <h1 className={`${redressed.className} text-4xl sm:text-7xl my-12`}>Ramdani & Yuli</h1>
      </div>
    </section>
  );
};

export default Thanks;
