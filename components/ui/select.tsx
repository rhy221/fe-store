"use client";
import React from "react";

export function Select({ options = [], ...props }: any) {
  return (
    <select
      {...props}
      className={`w-full px-4 py-3 rounded-2xl border border-slate-200 ${
        props.className ?? ""
      }`}
    >
      {options.map((op: any) => (
        <option value={op.value} key={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  );
}
