import '@/styles/globals.css'
import { Sidebar } from '@/ui/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="min-h-screen bg-gray-20 text-black font-sans flex">
        <div className='sticky top-0 left-0 h-screen min-w-[220px] box-border p-8 pr-0'>
          <Sidebar />
        </div>
        <div className='flex-grow py-8 px-16'>
          {children}
        </div>
      </body>
    </html>
  );
}
