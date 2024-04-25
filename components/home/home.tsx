import Image from 'next/image';
import { Redressed } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Undangan from '@/components/home/undangan';
import { Suspense } from 'react';
import 'animate.css';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const HomeComponent = () => {
  return (
    <>
      <div className="fixed h-screen w-full overflow-hidden flex-col flex">
        <div className="fixed h-screen w-full top-0 right-0 bottom-0 left-0 transform origin-center">
          <div className="flex flex-col items-center justify-center mx-auto h-full border-8">
            <div className="w-full max-w-[400px] h-screen">
              <div>
                <div>
                  <ul>
                    <li>
                      <div className="relative">
                        <div className="bg-cover min-h-screen rounded-lg" style={{ backgroundImage: 'url(/home/bg.webp)' }}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image src="/home/frame-tl.webp" className="absolute top-0 left-0 w-48 h-48 rounded-tl-lg animate__animated animate__fadeInDown  animate__slower" alt="frame" width={100} height={100} />
                            <Image src="/home/frame-tr.webp" className="absolute top-0 right-0 w-48 h-48 rounded-tr-lg animate__animated animate__zoomIn animate__slower" alt="frame" width={100} height={100} />
                            <Image src="/home/frame-bl.webp" className="absolute bottom-0 left-0 w-48 h-48 rounded-bl-lg animate__animated animate__zoomIn animate__slower" alt="frame" width={100} height={100} />
                            <Image src="/home/frame-br.webp" className="absolute bottom-0 right-0 w-48 h-48 rounded-br-lg animate__animated animate__zoomIn animate__slower" alt="frame" width={100} height={100} />
                          </div>
                          <div className="flex justify-center items-center h-screen w-full">
                            <div style={{ width: '100%' }}>
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
                              <div className="text-center mx-auto" style={{ maxWidth: '300px' }}>
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
                                <div className="z-10">
                                  <Button asChild className="z-10">
                                    <Link href="/wedding">Open Invitation</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              {/* end navigation */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center">
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
      </div> */}
    </>
  );
};

export default HomeComponent;
