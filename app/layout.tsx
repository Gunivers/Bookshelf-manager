import { Sidebar } from '@/components/ui/Sidebar';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={clsx("min-h-screen bg-gray-20 text-black dark:bg-gray-90 dark:text-white font-sans flex", inter.variable)}>
        <div className='sticky top-0 left-0 h-screen min-w-[250px] box-border p-8 pr-0'>
          <Sidebar />
        </div>
        <div className='flex-grow py-8 px-16'>
          {children}
        </div>
      </body>
    </html>
  );
}
