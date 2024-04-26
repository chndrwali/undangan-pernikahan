import { Redressed } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Undangan from '@/components/home/undangan';
import { Suspense } from 'react';
import 'animate.css';
import PageWrap from '../ui/pageWrap';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  return (
    <PageWrap>
      <div className="text-center editable animate__animated animate__fadeInDown animate__slower mb-1 text-sm" style={{ letterSpacing: '0.2rem' }}>
        THE WEDDING OF
      </div>
      <div
        className="mb-4 flex flex-col justify-center animate__animated animate__zoomIn animate__slower image-editable"
        style={{ width: '80%', margin: 'auto', overflow: 'hidden', aspectRatio: '1/1', backgroundImage: 'url(/home/circle.webp)', backgroundSize: '100%' }}
      >
        <div className="text-center">
          <div>
            <h1 className={`${redressed.className} text-4xl text-center font-bold leading-none `}>
              Ajeng <br /> & <br /> Aril
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mx-auto relative z-10" style={{ maxWidth: '300px' }}>
        <div className="text-center mb-3 p-2 animate__animated animate__zoomIn animate__slower rounded" style={{ fontSize: '14px' }}>
          <div className="editable mb-1">
            Dear
            <br />
            Mr/Ms/Brother/Sisters
          </div>
          <Suspense fallback={<span>Loading...</span>}>
            <Undangan />
          </Suspense>
        </div>

        <Button asChild className="z-10">
          <Link href="/wedding">Open Invitation</Link>
        </Button>
      </div>
    </PageWrap>
  );
};

export default HomeComponent;
