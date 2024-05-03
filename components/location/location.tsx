import Link from 'next/link';

const Location = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0819674132927!2d107.5864707105977!3d-6.880783667299223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e68ee2baab87%3A0xad0e8ae684ba1e6b!2sNoLimit%20Indonesia!5e0!3m2!1sid!2sid!4v1714748319679!5m2!1sid!2sid';

  const shareUrl = 'https://maps.app.goo.gl/RqnsdRiMLLyKtpej8';
  return (
    <section className="bg-[#efebe9] bg-footer opacity-60 w-full flex flex-col items-center">
      <div className="mt-0 mb-8">
        <p className="font-bold mb-0 text-xl">Lokasi </p>
      </div>
      <div className="rounded-lg mb-4 shadow-2xl">
        <iframe className="rounded-lg" src={mapUrl} width="300" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="mt-2 flex flex-col text-center items-center p-4">
        <h1 className="text-xl font-bold mb-4">Bertempat di</h1>
        <p className="text-sm italic mb-4 px-4 text-nowrap">Jl. Setra Indah Utara II No. 1A, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40163</p>
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
