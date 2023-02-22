import React from "react";

export const Card = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="bg-white shadow rounded p-2">
            {children}
        </div>
    )
}