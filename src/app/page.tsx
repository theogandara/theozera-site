import Header from "@/components/Header";
import Nav from "@/components/Nav";

const items = [
  { name: "home", url: "/" },
  { name: "projetos", url: "/projects" },
  { name: "sobre", url: "/about" },
  { name: "objetivos", url: "/objectives" },
  { name: "planner", url: "/planner" },
  { name: "blog", url: "blog" },
  { name: "weeklyCheck", url: "/weeklyCheck" },
  { name: "discord", url: "/discord" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-24 pt-0">
      <Header />
      <Nav items={items} />
    </main>
  );
}
