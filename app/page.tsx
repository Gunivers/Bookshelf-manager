import { BookshelfDownloader } from '@/components/bookshelf/Downloader';
import { Card } from '@/components/ui/Card';
import bookshelfThumbnailImg from '@/public/img/bookshelf-gunivers-thumbnail.jpg';
import Image from "next/image";

export const metadata = {
  title: 'Bookshelf Manager',
}

export default function Page() {
  return (
    <main className="max-h-max">
      <Card noPadding>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Image src={"/img/bookshelf-gunivers-thumbnail.jpg"} alt="Bookshelf thumbnail" width={248} height={124} className="w-full min-h-fit object-cover" />
          </div>
          <div className="col-span-3 flex flex-row items-center px-8 py-4">
            <div className="flex-grow">
              <p className="text-2xl font-bold">Bookshelf World</p>
              <p>All the libraries and the systems contained in a Minecraft Map that show you plenty of possible things to do with Booshelf</p>
            </div>
            <button className="shrink-0 ml-2 shadow">
              <div className="flex items-center">
                <div className="mr-2">
                  <svg className='w-8 h-8' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div className="grow text-left">
                  <p className="">Download</p>
                  <p className="text-xs">demo map</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </Card>
      <hr />
      <BookshelfDownloader />
    </main>
  );
}
