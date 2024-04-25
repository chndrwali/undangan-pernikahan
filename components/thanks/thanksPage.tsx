import Image from 'next/image';

const ThanksPage = () => {
  return (
    <section className="fixed h-screen w-full overflow-hidden flex-col flex">
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
                            {/* content */}
                            <div className="grid h-auto place-content-center bg-background px-4 relative">
                              <div className="text-center">
                                <h1 className="text-4xl font-black text-gray-200">it&apos;s our hope and pleasure to have you on our big day</h1>
                                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kind Regards</p>
                                <p className="mt-4 text-gray-500">Ajeng & Aril</p>
                              </div>
                            </div>
                            {/* content */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksPage;
