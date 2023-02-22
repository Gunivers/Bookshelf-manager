import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-20 text-black font-sans"> {children} </body>
    </html>
  );
}
