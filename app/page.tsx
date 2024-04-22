import Image from 'next/image';
import { Redressed } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Undangan from '@/components/undangan';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <section className="min-h-screen container mx-auto">
      <div className="flex flex-col items-center">
        <div className="my-4">
          <Image src="" alt="Photo wedding" className="" />
        </div>
        <h1 className={`${redressed.className} text-5xl text-center font-bold `}>Cacan & Cinta</h1>
        <h3 className="font-semibold">Yth. Bapak/Ibu/Saudara/I</h3>
        <Undangan />
        <p className="capitalize text-muted-foreground">Tanpa mengurangi rasa hormat, kami mengundang anda untuk berhadir di acara pernikahan kami</p>
        <Button asChild>
          <Link href="/wedding">Buka Undangan</Link>
        </Button>
      </div>
    </section>
  );
}
