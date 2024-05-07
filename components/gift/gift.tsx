'use client';

import * as React from 'react';
import Image from 'next/image';
import { TypewriterEffect } from '../ui/type-writter';
import { Button } from '../ui/button';
import { GiftIcon } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, Slide } from '@mui/material';
import { CopyAlert } from '../ui/copy-alert';
import { motion } from 'framer-motion';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      text: 'Amplop',
      className: 'text-black dark:text-blue-500',
    },

    {
      text: 'Digital',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  const Rekening = '12345678 ';
  const Rekening1 = '12345678 ';
  const Rekening2 = '12345678 ';
  const Rekening3 = '12345678 ';

  return (
    <section id="donasi" className="bg-black bg-footer opacity-90 w-full h-screen flex flex-col items-center ">
      <div className="flex flex-col items-center w-full max-w-xl  border-4">
        <TypewriterEffect words={judul} className="my-4" />
        <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="w-full max-w-[400px] rounded-2xl">
          <Image src="/home/2.webp" alt="" width={500} height={500} className="object-cover rounded-2xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="mt-4 p-4">
          <p className="text-center text-white">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, kami akan senang hati menerimanya yang tentu akan semakin melengkapi kebahagiaan kami.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0.0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="my-6">
          <Button onClick={handleOpenDialog} className=" bg-white hover:bg-transparent hover:text-white text-black border-2 border-blue-500">
            <GiftIcon size={20} className="mr-2" />
            Klik Disini
          </Button>
        </motion.div>
      </div>
      <Dialog open={openDialog} fullWidth TransitionComponent={Transition} keepMounted onClose={handleCloseDialog}>
        <DialogContent className="bg-white text-black">
          <div className="flex flex-col items-center w-full max-w-xl">
            <TypewriterEffect words={payment} />
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <div className="w-full max-w-24 rounded-2xl p-4 ">
                <Image src="/home/bca.jpg" alt="" width={200} height={200} className="object-cover" />
              </div>
              <div>
                <CopyAlert description={`${Rekening}`} cp="Rekening" text="Salin Rekening" />
                <span className="uppercase text-xs">atas nama</span>
                <p className="font-black ">Guest</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <div className="w-full max-w-24 rounded-2xl p-4 ">
                <Image src="/home/bri.png" alt="" width={200} height={200} className="object-cover" />
              </div>
              <div>
                <CopyAlert description={`${Rekening1}`} cp="Rekening" text="Salin Rekening" />
                <span className="uppercase text-xs">atas nama</span>
                <p className="font-black ">Guest</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <div className="w-full max-w-24 rounded-2xl p-4 ">
                <Image src="/home/mandiri.png" alt="" width={200} height={200} className="object-cover" />
              </div>
              <div>
                <CopyAlert description={`${Rekening2}`} cp="Rekening" text="Salin Rekening" />
                <span className="uppercase text-xs">atas nama</span>
                <p className="font-black ">Guest</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <div className="w-full max-w-24 rounded-2xl p-4 ">
                <Image src="/home/seabank.png" alt="" width={200} height={200} className="object-cover" />
              </div>
              <div>
                <CopyAlert description={`${Rekening3}`} cp="Rekening" text="Salin Rekening" />
                <span className="uppercase text-xs">atas nama</span>
                <p className="font-black ">Guest</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gift;
