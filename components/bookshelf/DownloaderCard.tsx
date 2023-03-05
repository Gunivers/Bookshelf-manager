'use client';

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/Card";

export const DownloaderCard = ({
    title,
    type,
    image = 'https://gunivers.net/wp-content/uploads/2020/05/image-3_0015.png',
    doc,
    summary,
}: {
    title: string;
    type?: 'library' | 'systems';
    image?: string;
    doc?: string;
    summary?: string;
}) => {
    const [selected, setSelected] = React.useState(false)
    return (
        <div className={clsx('relative overflow-hidden rounded bg-white dark:bg-black dark:text-white shadow ring-0 ring-offset-0 ring-primary transition hover:scale-105', selected && '!ring-4')}>
            <input type="checkbox" className="absolute top-2 right-2 scale-150" checked={selected} onChange={() => {setSelected(!selected)}}/>
            <article className="flex flex-col h-full cursor-pointer" onClick={() => {setSelected(!selected)}}>
                <Image src={image} alt={title} width={240} height={237} className="aspect-video w-full object-cover bg-gray-20" />
                <div className="mx-4 mb-4">
                    <header className="mb-2">
                        {doc && <Link href="/docs" className="float-right -mr-4 px-2 py-1 rounded-bl bg-primary text-white hover:bg-white hover:text-primary transition-colors"><svg className="w-4 h-4 inline-block mr-1" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg><span>Docs</span></Link>}
                        <p className="text-lg font-semibold pt-2 capitalize">{title}</p>
                        {type && <p className="text-sm font-light capitalize">{type}</p>}
                    </header>
                    {summary && <p>{summary}</p>}
                </div>
            </article>
        </div>
    )
}