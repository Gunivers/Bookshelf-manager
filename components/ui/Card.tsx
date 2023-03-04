import React from "react";
import clsx from 'clsx';

export const Card = ({
    children,
    color = 'white',
    noPadding,
    innerBox,
    noShadow,
    className,
}: {
    children: React.ReactNode;
    color?: 'white' | 'primary';
    noPadding?: boolean;
    innerBox?: boolean;
    noShadow?: boolean;
    className?: string;
}) => {
    return (
        <div className={clsx(
            'rounded overflow-hidden relative',
            ({ 'white': innerBox ? 'bg-gray-30 text-black dark:bg-gray-90 dark:text-white' : 'bg-white dark:bg-black dark:text-white', 'primary': 'bg-primary text-white' })[color],
            noPadding ? 'p-0' : 'p-4',
            !noShadow && (innerBox ? 'shadow-inner' : 'shadow'),
            className,
        )}>
            {children}
        </div>
    )
}