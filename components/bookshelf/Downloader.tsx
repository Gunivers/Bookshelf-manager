import { DownloaderCard } from "./DownloaderCard";

export const BookshelfDownloader = () => {
    return (
        <div className="flex flex-col min-h-96">
            <header className="bg-white rounded-t dark:bg-black dark:text-white">
                <div className="grid grid-cols-4 gap-2 py-2 px-4">
                    <div>
                        <p className="font-medium">Version: 1.19 - 1.0 Wild<svg className="w-4 h-4 inline-block ml-2" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></p>
                        <p className="font-light text-xs">007204c</p>
                    </div>
                    <div className="self-center">
                        <input type="search" placeholder="search..." className="w-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <label className=""><input type="checkbox" />Libraries <span className="font-light text-xs">(31)</span></label>
                            <label className=""><input type="checkbox" />Systems <span className="font-light text-xs">(2)</span></label>
                        </div>
                        <div>
                            <label className=""><input type="checkbox" />Select All<br /><span className="font-light text-xs">(2 selected)</span></label>
                        </div>
                    </div>
                    <div className="-mx-4 -my-2 flex relative">
                        <button className="rounded-none grow">
                            <div className="flex items-center">
                                <div className="mr-2">
                                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="grow text-left">
                                    <p className="font-bold text-2xl">Download</p>
                                    <p className="text-sm">All in one tool datapack</p>
                                </div>
                            </div>
                        </button>
                        <button title="Other options" className="rounded-none peer h-full border-l border-white border-opacity-50 rounded-tr">
                            <svg className="text-white dark:text-dark w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div className="hidden peer-focus:block hover:block absolute top-full inset-x-0 bg-white border-b border-l border-r border-gray-40 rounded-b overflow-hidden">
                            <button className="rounded-none bg-white text-black dark:bg-black dark:text-white hover:bg-gray-20 dark:hover:bg-gray-90 w-full px-4 py-2">jrkjfekj</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="grow overflow-y-auto rounded-b shadow-inner bg-gray-30 dark:bg-gray-90 dark:border-b dark:border-x dark:border-gray-40">
                <div className="grid grid-cols-4 gap-4 p-4">
                    <DownloaderCard title="Vector" type="library" doc="/docs" image="https://gunivers.net/wp-content/uploads/2020/05/image-3_0015.png" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                    <DownloaderCard title="Link" type="library" doc="/docs" image="https://gunivers.net/wp-content/uploads/2020/05/RW_API.png" summary="Move entites according to other entity location/orientation. Create mirors, moving armor_stand structures or even fourier draws!" />
                    <DownloaderCard title="Move" type="library" doc="/docs" summary="Manage entity movement. Get the actual speed of entities, apply a speed vector etc." />
                    <DownloaderCard title="Vector" type="library" doc="/docs" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                    <DownloaderCard title="Vector" type="library" doc="/docs" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                    <DownloaderCard title="Vector" type="library" doc="/docs" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                    <DownloaderCard title="Vector" type="library" doc="/docs" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                    <DownloaderCard title="Vector" type="library" doc="/docs" summary="Manage position, speed, acceleration etc. Once you get how to deal with vectors, you can do whatever you want!" />
                </div>
            </div>
        </div>
    )
}
