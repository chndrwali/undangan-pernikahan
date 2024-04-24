'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Undangan = () => {
  const router = useRouter();
  const [recipientName, setRecipientName] = useState('');

  const params = useSearchParams();

  useEffect(() => {
    const name = params.get('to');
    if (!name) {
      router.push('/');
    } else {
      setRecipientName(name);
    }
  }, [params, router]);

  return (
    <>
      <span className="font-bold">{recipientName}</span>
    </>
  );
};

export default Undangan;
