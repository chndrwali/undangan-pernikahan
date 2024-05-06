'use client';

import Link from 'next/link';
import { CopyAlert } from '../ui/copy-alert';
import { TypewriterEffect } from '../ui/type-writter';
import { useEffect, useState } from 'react';

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
        <p className="text-center text-sm sm:text-xl my-2">Minggu, 23 Juni 2024</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 my-4 font-bold text-center">
          <div className="flex flex-col">
            <span>{daysLeft}</span>
            Hari
          </div>
          <div className="flex flex-col">
            <span>{hoursLeft}</span>
            Jam
          </div>
          <div className="flex flex-col">
            <span>{minutesLeft}</span>
            Menit
          </div>
          <div className="flex flex-col">
            <span>{secondsLeft}</span>
            Detik{' '}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="text-xl font-bold mb-4">Bertempat di</h1>
        <div className="rounded-lg mb-4 shadow-2xl">
          <iframe className="rounded-lg" src={mapUrl} width="300" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text-wrap pl-4 pr-4 italic w-full text-center mb-4 leading-tight max-w-[480px]">
          <CopyAlert description={`${Alamat}`} cp="Lokasi" />
        </div>

        <Link
          href={shareUrl}
          target="_blank"
          className="cursor-pointer capitalize relative flex items-center justify-content-center font-semibold border rounded-full px-4 text-base text-white bg-[#738e9b] min-h-[44px] min-w-[44px] hover:bg-cyan-700 hover:brightness-110 hover:translate-y-[1px] lg:mx-4 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out"
        >
          Petunjuk Lokasi
        </Link>
      </div>
    </section>
  );
};

export default Location;
