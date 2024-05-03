import moment from 'moment';

const Footer = () => {
  return (
    <footer className="bg-[#D7CCC8] bg-footer opacity-60 text-center w-full h-[100px] flex items-center justify-center flex-col">
      <span>&copy; {moment().format('YYYY')} Azhar Digital </span>
    </footer>
  );
};

export default Footer;
