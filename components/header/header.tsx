'use client';

import { Gift, Heart, HomeIcon, Images, MapPinned, User } from 'lucide-react';
import { FloatingNav } from '../ui/floating-nav';
export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'Home',
      link: '#home',
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Mempelai',
      link: '#mempelai',
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Kutipan',
      link: '#quotes',
      icon: <Heart className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Gallery',
      link: '#galery',
      icon: <Images className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Lokasi',
      link: '#lokasi',
      icon: <MapPinned className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Donasi',
      link: '#donasi',
      icon: <Gift className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
