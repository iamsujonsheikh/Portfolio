"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  path: string;
  label: string;
  children: React.ReactNode;
}

const ActiveLink = ({ path, label, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  // "/" only matches exactly; other sections also match their sub-pages (e.g. /projects/learnify)
  const active = path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <Link
      href={path}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-5 px-3 md:px-7 py-2 group ${active
          ? "text-brand bg-brand/20 md:rounded-xl rounded-full duration-300"
          : "text-slate-400 md:bg-slate-400/5 md:rounded-xl"
        }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;