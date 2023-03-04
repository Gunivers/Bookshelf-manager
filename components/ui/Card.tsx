import React from "react";
import clsx from 'clsx';

export const Card = ({
    children,
    color = 'white',
    noPadding,
    innerBox,
    noShadow,
}: {
    children: React.ReactNode;
    color?: string;
    noPadding?: boolean;
    innerBox?: boolean;
    noShadow?: boolean,
}) => {
    return (
        <div className={clsx(
            'rounded overflow-hidden relative',
            ({ 'white': innerBox ? 'bg-gray-30 dark:bg-gray-90' : 'bg-white dark:bg-black', 'primary': 'bg-primary' })[color],
            noPadding ? 'p-0' : 'p-2',
            !noShadow && (innerBox ? 'shadow-inner' : 'shadow'),
        )}>
            {children}
        </div>
    )
}