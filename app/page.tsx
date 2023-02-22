import { Card } from "@/ui/Card";
import Image from "next/image";
import bookshelfThumbnailImg from '@/public/img/bookshelf-gunivers-thumbnail.jpg'

export default function Page() {
  return (
    <main>
      <Card noPadding>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Image src={bookshelfThumbnailImg} alt="Bookshelf thumbnail" width={248} height={124} className="w-full min-h-fit object-cover" />
          </div>
          <div className="col-span-3 flex flex-row items-center px-8 py-4">
            <div className="flex-grow">
              <p className="text-2xl font-bold">Bookshelf World</p>
              <p>All the libraries and the systems contained in a Minecraft Map that show you plenty of possible things to do with Booshelf</p>
            </div>
              <div>
                Download
              </div>
          </div>
        </div>
      </Card>
      <hr />

    </main>
  );
}
