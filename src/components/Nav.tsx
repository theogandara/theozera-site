import Link from "next/link";

interface NavProps {
  items: {
    name: string;
    url: string;
  }[];
}

export default function Nav(props: NavProps) {
  return (
    <nav className="mx-auto flex h-[60px] rounded-lg">
      {props.items.map((item, index) => (
        <Link key={item.url} href={item.url}>
          <div className="font-jet bg-[#222325] w-[170px] h-full p-4 text-center border-x border-[#000] text-xl">
            {item.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
