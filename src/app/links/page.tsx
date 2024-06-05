"use client";

import { GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Links() {
  const links = [
    {
      name: "Github",
      url: "https://www.github.com/theogandara",
      icon: <GithubLogo size={24} />,
    },
  ];

  return (
    <main className="flex flex-col gap-12 pt-0">
      <div className="w-[260px] sm:w-[520px] lg:w-[1040px] flex flex-wrap mx-auto">
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <Link target="_blank" href={link.url} className="flex gap-4">
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
