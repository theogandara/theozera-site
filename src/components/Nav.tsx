"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface NavProps {
  items: {
    name: string;
    url: string;
  }[];
}

export default function Nav(props: NavProps) {
  const maxW = props.items.length * 170;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [path, setPath] = useState<string | null | undefined>(pathname);

  const active = (url: string) => {
    if (!path) {
      return "bg-[#222325]";
    }

    if (path.includes("blog") && url === "/blog") {
      return "bg-[#172448]";
    }

    if (path === url) {
      return "bg-[#172448]";
    }
    return "bg-[#222325]";
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname, searchParams]);

  return (
    <div className="flex w-full justify-center">
      <nav
        className={`flex h-[60px] rounded-lg overflow-auto max-w-[${maxW}px]`}
      >
        {props.items.map((item) => (
          <Link key={item.url} href={item.url}>
            <p
              className={`font-jet w-[170px] h-full p-4 text-center border-x border-[#000] text-xl hover:bg-[#172448] transition-ease-in-out duration-50 ${
                active(item.url) || ""
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
