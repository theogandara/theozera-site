"use client";

import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Links() {
  const links = [
    {
      name: "Github",
      url: "https://www.github.com/theogandara",
      icon: <GithubLogo size={24} />,
    },
    {
      name: "Gitlab",
      url: "https://www.gitlab.com/theogandara",
      icon: <GitlabLogo size={24} />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/theogandara",
      icon: <LinkedinLogo size={24} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/theogandara",
      icon: <InstagramLogo size={24} />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCTOR2K0FpE80iB5ZSERr1Ww",
      icon: <YoutubeLogo size={24} />,
    },
  ];

  return (
    <main className="flex flex-col gap-12 pt-0">
      <div className="w-[260px] sm:w-[520px] lg:w-[1040px] flex flex-wrap mx-auto">
        <ul className="flex flex-col lg:flex-row gap-5 lg:justify-between lg:w-full">
          {links.map((link) => (
            <li className="flex" key={link.url}>
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
