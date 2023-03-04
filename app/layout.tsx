import { Sidebar } from '@/components/ui/Sidebar';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap'
});


const themeConfig = resolveConfig(tailwindConfig)


export const metadata = {
  title: {
    default: 'Bookshelf Minecraft datapack library',
    template: '%s • Bookshelf',
  },
  description: 'Minecraft Datapack library by Gunivers',
  applicationName: 'Bookshelf Library',
  keywords: ['Minecraft', 'datapack', 'library', 'Bookshelf', 'Gunivers'],
  creator: 'Gunivers',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themeConfig.theme?.colors?.primary && themeConfig.theme?.colors.primary['DEFAULT'] },
    { media: '(prefers-color-scheme: dark)', color: themeConfig.theme?.colors?.gray && themeConfig.theme?.colors.gray['80'] },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
