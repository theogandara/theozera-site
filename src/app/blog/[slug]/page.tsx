import Breadcrumb from "@/components/Breadcrumb";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-8 pt-0">
      <Breadcrumb path={[{ name: "Blog", url: "/blog" }]} />

      <h1 className="text-4xl font-bold text-center">Título</h1>
      <h2 className="text-2xl font-bold">Subtitulo</h2>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        alksdjas
      </section>
    </main>
  );
}
