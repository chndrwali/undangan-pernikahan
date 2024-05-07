'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const Undangan = () => {
  const router = useRouter();
  const [recipientName, setRecipientName] = useState('');

  const params = useSearchParams();

  useEffect(() => {
    const name = params.get('to');
    if (!name) {
      setRecipientName('Guest name');
    } else {
      setRecipientName(name);
    }
  }, [params, router]);

  return (
    <>
      <motion.span initial={{ opacity: 0.0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }} className="relative font-bold text-lg mb-1">
        {recipientName}
      </motion.span>
    </>
  );
};

export default Undangan;
