'use client';

import { Music } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const MusicButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false); // Set isPlaying menjadi false hanya saat tombol musik diklik dan audio sedang diputar
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Gunakan useEffect untuk mengatur visibilitas tombol saat halaman pertama kali dimuat
  useEffect(() => {
    if (audioRef.current && audioRef.current.paused) {
      setIsPlaying(false);
    }
  }, []);

  return (
    <div
      className={`fixed min-h-[44px] min-w-[44px] z-50 cursor-pointer justify-center items-center bottom-4 p-4 right-4 h-11 w-11 bg-white bg-footer rounded-full shadow shadow-dark/50 hover:shadow-lg hover:shadow-dark/30 hover:opacity-90 transition-all duration-200 ease-in-out ${
        isPlaying ? 'block' : 'hidden'
      }`}
    >
      <button onClick={togglePlayPause} className="block h-3 w-3">
        <Music size={20} className="mx-2" />
      </button>
      <audio ref={audioRef} src="/nano.mp3" />
    </div>
  );
};

export default MusicButton;
