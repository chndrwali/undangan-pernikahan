'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Redressed } from 'next/font/google';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Undangan from '@/components/home/undangan';
import { TypewriterEffect } from '../ui/type-writter';
import { ImagesSlider } from '../ui/image-slider';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import MusicButton from './music-button';
import Greetings from '../greetings/greeting';
import Quotes from '../quotes/quotes';
import Gallery from '../gallery/galerry';
import Location from '../location/location';
import Footer from '../Footer/footer';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const judul = [
    {
      text: 'Undangan',
      className: 'text-white dark:text-blue-500',
    },

    {
      text: 'Pernikahan',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  const images = ['/home/Gallery_Photo_1.jpeg', '/home/Gallery_Photo_2.jpeg', '/home/Gallery_Photo_4.jpeg'];

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const OnClick = () => {
    document.body.style.overflow = 'auto';
    togglePlayPause();
    router.push('#mempelai');
  };

  useEffect(() => {
    // Mengatur overflow menjadi hidden saat halaman pertama kali dimuat
    document.body.style.overflow = 'hidden';

    // Mengembalikan overflow menjadi auto saat komponen dilepas
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          id="home"
          className="absolute w-full top-[5%] flex flex-col items-center  text-center z-50 text-white "
        >
          <TypewriterEffect words={judul} />
          <div className=" w-full max-w-[50px] min-h-[100px] h-full  text-black bg-white rounded-full my-4">
            <div className="flex flex-col items-center p-2">
              <span className="text-[1.7rem]">R</span>
              <hr className="w-full h-[2px] border border-black" />
              <span className="text-[1.7rem]">Y</span>
            </div>
          </div>
          <div className={`${redressed.className} mb-4 font-bold text-2xl sm:text-3xl`}>
            <span>Ramdani Aditia</span>
            <br />
            <span className="text-5xl">&#38;</span>
            <br />
            <span>Yuliyana Sari</span>
          </div>
          <p className="mb-6 text-base sm:text-xl">
            23 Juni 2024
            <br />
            NoLimit Indonesia
          </p>
          <p>Yth. Bapak/Ibu/Saudara/i</p>
          <Suspense fallback={<span>Loading...</span>}>
            <Undangan />
          </Suspense>
          <p className="text-xs sm:text-sm">
            Tanpa mengurangi rasa hormat, <br />
            kami mengundang anda untuk menghadiri <br /> acara pernikahan kami.
          </p>
          <div className="my-4 ">
            <Button className="rounded-full bg-white hover:bg-transparent hover:text-white text-black border border-blue-500" onClick={OnClick}>
              {' '}
              <Mail size={20} className="mx-2" /> Lihat Undangan
            </Button>
          </div>
        </motion.div>
      </ImagesSlider>
      <Greetings />
      <Quotes />
      <Gallery />
      <Location />
      <Footer />
      <MusicButton audioRef={audioRef} isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
    </>
  );
};

export default HomeComponent;
