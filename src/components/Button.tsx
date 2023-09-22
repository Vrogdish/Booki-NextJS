import React, { ReactNode } from "react";

interface Props {
  className?: string;
  action?: any;
  children: ReactNode;
  theme?: "standard" | "alert" | "disable";
  loading?: boolean;
  type : "button" | "submit"
}

export default function Button({ className, action, children, theme = "standard",type = "button" }: Props) {
  
  let colorStyle = "";

  switch (theme) {
    case "standard":
      colorStyle = "bg-blue-600";
      break;
    case "alert":
      colorStyle = "bg-red-500";
      break
    case "disable":
      colorStyle = "bg-gray-400";
      break
    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={action}
      className={`${className} ${colorStyle} font-bold text-white p-3 rounded-2xl shadow-lg`}
    >
      {children}
    </button>
  );
}
