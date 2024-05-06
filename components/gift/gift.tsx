'use client';

import Image from 'next/image';
import { TypewriterEffect } from '../ui/type-writter';
import { Button } from '../ui/button';
import { GiftIcon } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';

const Gift = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const judul = [
    {
      text: 'Hadiah',
      className: 'text-white dark:text-blue-500',
    },

    {
      text: 'Pernikahan ',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  const payment = [
    {
      text: 'Info ',
      className: 'text-white dark:text-blue-500',
    },

    {
      text: 'E-Wallet ',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <section id="donasi" className="bg-black bg-footer opacity-90 w-full h-screen flex flex-col items-center ">
      <div className="flex flex-col items-center w-full max-w-xl  border-4">
        <TypewriterEffect words={judul} className="my-4" />
        <div className="w-full max-w-[400px] rounded-2xl">
          <Image src="/home/2.webp" alt="" width={500} height={500} className="object-cover rounded-2xl" />
        </div>
        <div className="mt-4 p-4">
          <p className="text-center text-white">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, kami akan senang hati menerimanya yang tentu akan semakin melengkapi kebahagiaan kami.
          </p>
        </div>
        <div className="my-6">
          <Button onClick={handleOpenDialog} className=" bg-white hover:bg-transparent hover:text-white text-black border-2 border-blue-500">
            <GiftIcon size={20} className="mr-2" />
            Klik Disini
          </Button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent className="bg-black text-white " sx={{ width: '550px' }}>
          <div className="flex flex-col items-center">
            <TypewriterEffect words={payment} />
            <div></div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gift;
