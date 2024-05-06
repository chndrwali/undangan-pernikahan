// MusicButton.tsx
import { Music, Pause } from 'lucide-react';

interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  togglePlayPause: () => void;
}

const MusicButton: React.FC<Props> = ({ audioRef, isPlaying, togglePlayPause }) => {
  return (
    <div
      className={`fixed min-h-[44px] min-w-[44px] z-50 cursor-pointer justify-center items-center bottom-6 p-4 right-6 h-11 w-11 bg-white bg-footer rounded-full shadow shadow-dark/50 hover:shadow-lg hover:shadow-dark/30 hover:opacity-90 transition-all duration-200 ease-in-out `}
    >
      <button onClick={togglePlayPause} className="flex items-center justify-center h-full w-full">
        {isPlaying ? <Music size={20} className="animate-spin" /> : <Pause size={20} className="line-through" />}
      </button>
      <audio ref={audioRef} src="/nano.mp3" />
    </div>
  );
};

export default MusicButton;
