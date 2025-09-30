"use client";
import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: any) {
  const base =
    "px-8 py-3 font-semibold rounded-full shadow-sm inline-block transition-colors";
  const variants: any = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-slate-200 text-slate-800 bg-white hover:bg-slate-50",
  };

  return (
    <button
      className={`${base} ${
        variants[variant] ?? variants.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
