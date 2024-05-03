'use client';

import { HomeIcon, MessageCircle, User } from 'lucide-react';
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
      name: 'Gallery',
      link: '#galery',
      icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Lokasi',
      link: '#lokasi',
      icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
