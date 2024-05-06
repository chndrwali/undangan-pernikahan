import { Facebook, Instagram, PhoneCall } from 'lucide-react';
import moment from 'moment';
import { Redressed } from 'next/font/google';
import Link from 'next/link';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400',
});

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center w-full flex items-center justify-center flex-col">
      <span className={`${redressed.className} font-bold text-2xl my-2`}>Azhar Digital</span>
      <p>Digital Wedding Invitation &copy; {moment().format('YYYY')}. All Rights Reserved </p>
      <div className="flex flex-row my-4">
        <Link href="" target="_blank" rel="noreferrer" title="facebook azhar digital" aria-label=" facebook azhar digital" className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300">
          <Facebook size={20} />
        </Link>
        <Link href="" target="_blank" rel="noreferrer" title="instagram azhar digital" aria-label=" instagram azhar digital" className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300">
          <Instagram size={20} />
        </Link>
        <Link href="" target="_blank" rel="noreferrer" title="whatsapp azhar digital" aria-label=" whatsapp azhar digital" className="mx-2 text-gray-50 hover:text-blue-500  transition duration-300">
          <PhoneCall size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
