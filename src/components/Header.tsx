import Link from "next/link";
import Logo from "./Logo";

interface NavProps {
  items: {
    name: string;
    url: string;
  }[];
}

export default function Header(props: NavProps) {
  return (
    <div className="flex w-full px-8 py-4 mb-10">
      <div className="flex flex-col sm:flex-row items-center mx-auto justify-between w-full gap-4">
        <div className="w-[168px]">
          <Logo />
        </div>

        <nav className="flex flex-col sm:flex-row items-center w-full">
          {props.items.map((item) => (
            <Link key={item.url} href={item.url}>
              <p
                className={`font-jet w-[170px] h-full p-4 text-center border-x border-[#000] text-xl`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
