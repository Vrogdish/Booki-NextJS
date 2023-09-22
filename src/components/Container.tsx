import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
  color?: "light" | "gray";
  columns?: "1" | "2" | "3" | "4";
}

export default function Container({
  children,
  title,
  className,
  columns ="1",
  color,
}: Props) {

let gridStyle = ""
switch (columns) {
  case "1":
    gridStyle = "grid grid-cols-1 `"
    break;
  case "2": 
    gridStyle = "grid grid-cols-1 md:grid-cols-2 `"
    break
  case "3" : 
   gridStyle="grid grid-cols-1 md:grid-cols-3 `"
   break
   case "4": 
   gridStyle="grid grid-cols-1 md:grid-cols-4 `"
   break
  default:
    break;
}  


  let colorStyle = "bg-white";
  switch (color) {
    case "light":
      colorStyle = "bg-white";
      break;
    case "gray":
      colorStyle = "bg-gray-100";
      break;
    default:
      break;
  }

  return (
    <section className={`p-8 md:rounded-2xl ${colorStyle} ${className}`}>
      <h2 className="font-bold mb-6 text-xl">{title}</h2>
      <div className={`${gridStyle} gap-6`}>{children}</div>
    </section>
  );
  
}
