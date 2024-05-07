'use client';

import Link from 'next/link';
import { CopyAlert } from '../ui/copy-alert';
import { TypewriterEffect } from '../ui/type-writter';
import { useEffect, useState } from 'react';
import { Navigation } from 'lucide-react';
import { Button } from '../ui/button';
import { Redressed } from 'next/font/google';
import { motion } from 'framer-motion';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Location = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0819674132927!2d107.5864707105977!3d-6.880783667299223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e68ee2baab87%3A0xad0e8ae684ba1e6b!2sNoLimit%20Indonesia!5e0!3m2!1sid!2sid!4v1714748319679!5m2!1sid!2sid';

  const shareUrl = 'https://maps.app.goo.gl/RqnsdRiMLLyKtpej8';

  const Alamat = 'Jl. Setra Indah Utara II No. 1A, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40163';

  const judul = [
    {
      text: 'Waktu',
      className: 'text-white',
    },
    {
      text: '&',
      className: 'text-white',
    },
    {
      text: 'Tempat',
      className: 'text-blue-500',
    },
  ];

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-06-23T08:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDaysLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="lokasi" className="bg-black text-white bg-footer opacity-90 w-full  flex flex-col items-center">
      <div className="mt-0 mb-8">
        <TypewriterEffect words={judul} />
        <motion.p initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-center text-xl sm:text-2xl my-2">
          Minggu, 23 Juni 2024
        </motion.p>
        <div className="grid grid-cols-4 gap-4 sm:gap-10 sm:grid-cols-4 my-4 font-bold text-center text-2xl sm:text-3xl px-4 ">
          <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="flex flex-col">
            <motion.span initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-3xl sm:text-5xl">
              {daysLeft.toString().padStart(2, '0')}
            </motion.span>
            Hari
          </motion.div>
          <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="flex flex-col">
            <motion.span initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-3xl sm:text-5xl">
              {hoursLeft.toString().padStart(2, '0')}
            </motion.span>
            Jam
          </motion.div>
          <motion.div initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="flex flex-col">
            <motion.span initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-3xl sm:text-5xl">
              {minutesLeft.toString().padStart(2, '0')}
            </motion.span>
            Menit
          </motion.div>
          <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="flex flex-col">
            <motion.span initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-3xl sm:text-5xl">
              {secondsLeft.toString().padStart(2, '0')}
            </motion.span>
            Detik{' '}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <motion.p initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="text-sm sm:text-xl font-bold mb-4 text-center">
          Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih <br />
          cinta-Nya dilakukan dengan sukacita.
        </motion.p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 p-4  mb-4 rounded-xl shadow-2xl border bg-black">
          <div className="flex flex-col items-center">
            <motion.h1 initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className={`${redressed.className}  font-black text-3xl sm:text-5xl my-4`}>
              AKAD
            </motion.h1>
            <div className="mb-4">
              <motion.p initial={{ opacity: 0.0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
                Minggu, 23 Juni 2024
              </motion.p>
              <motion.p initial={{ opacity: 0.0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
                08.00 WIB - Selesai
              </motion.p>
            </div>
            <div className="rounded-lg mb-4 shadow-2xl">
              <iframe className="rounded-lg" src={mapUrl} width="300" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <motion.div
              initial={{ opacity: 0.0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              className="text-wrap pl-4 pr-4 italic w-full text-center mb-4 leading-tight max-w-[480px]"
            >
              <motion.p initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="font-bold">
                NoLimit Indonesia
              </motion.p>
              <CopyAlert description={`${Alamat}`} cp="Lokasi" />
            </motion.div>
            <Button asChild className="rounded-full bg-white hover:bg-transparent hover:text-white text-black border border-blue-500 transition duration-300 ease-out mb-4">
              <Link href={shareUrl} target="_blank">
                <Navigation size={15} className="mr-2" /> Petunjuk Lokasi
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <motion.h1 initial={{ opacity: 0.0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className={`${redressed.className} font-black text-3xl sm:text-5xl my-4`}>
              RESEPSI
            </motion.h1>
            <div className="mb-4">
              <motion.p initial={{ opacity: 0.0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
                Minggu, 23 Juni 2024
              </motion.p>
              <motion.p initial={{ opacity: 0.0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}>
                10.00 WIB - Selesai
              </motion.p>
            </div>
            <div className="rounded-lg mb-4 shadow-2xl">
              <iframe className="rounded-lg" src={mapUrl} width="300" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <motion.div
              initial={{ opacity: 0.0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              className="text-wrap pl-4 pr-4 italic w-full text-center mb-4 leading-tight max-w-[480px]"
            >
              <motion.p initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="font-bold">
                NoLimit Indonesia
              </motion.p>
              <CopyAlert description={`${Alamat}`} cp="Lokasi" />
            </motion.div>
            <Button asChild className="rounded-full bg-white hover:bg-transparent hover:text-white text-black border border-blue-500 transition duration-300 ease-out mb-4">
              <Link href={shareUrl} target="_blank">
                <Navigation size={15} className="mr-2" /> Petunjuk Lokasi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
