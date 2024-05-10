import Logo from "./logo";

export default function Header() {
  return (
    <div className="flex w-full mt-4 h-[60px] p-[6px]">
      <div className="mx-auto">
        <Logo />
      </div>
    </div>
  );
}
