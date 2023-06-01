
import React, {  ReactNode } from "react";


export default function Gallery({
  children,
  title,
  size,
  gridCol,
}: {
  children:ReactNode;
  title: string;
  size: string;
  gridCol : string;
}) {
  return (
    <div className={`${size} bg-gray-100 p-8 md:rounded-2xl`}>
      <h2 className="font-bold mb-6 text-xl">{title}</h2>
      <div className={`grid ${gridCol} gap-6`}>
        {children}
      </div>
    </div>
  );
}
