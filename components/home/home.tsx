import Image from 'next/image';
import { Redressed } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Undangan from '@/components/home/undangan';
import { Suspense } from 'react';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  return (
    <section className="min-h-screen bg-home bg-no-repeat bg-cover container mx-auto">
      <div className="flex flex-col items-center">
        <div className="my-4 p-4 h-40 w-10 rounded-xl">
          <Image src="" alt="Photo wedding" className="" width={40} height={160} />
        </div>
        <h1 className={`${redressed.className} text-5xl text-center font-bold `}>Cacan & Cinta</h1>
        <h3 className="font-semibold">Yth. Bapak/Ibu/Saudara/I</h3>
        <Suspense fallback={<span>Loading...</span>}>
          <Undangan />
        </Suspense>
        <p className="capitalize text-muted-foreground">Tanpa mengurangi rasa hormat, kami mengundang anda untuk berhadir di acara pernikahan kami</p>
        <Button asChild>
          <Link href="/wedding">Buka Undangan</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeComponent;
