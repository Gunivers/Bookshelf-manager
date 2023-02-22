import React from "react";
import clsx from 'clsx';

export const Card = ({
    children,
    noPadding,
}: {
    children: React.ReactNode;
    noPadding: boolean;
}) => {
    return (
        <div className={clsx('bg-white shadow rounded overflow-hidden', noPadding ? 'p-0' : 'p-2')}>
            {children}
        </div>
    )
}