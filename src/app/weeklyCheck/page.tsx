import Image from "next/image";

export default function WeeklyCheck() {
  return (
    <main className="flex min-h-screen flex-col gap-12 md:p-24 pt-0">
      <h1 className="text-4xl font-jet text-center text-blue-500">
        <a
          className="text-blue-500 hover:underline"
          href="/theozera-weekly-check.pdf"
        >
          Clique para baixar
        </a>
      </h1>

      <div className="flex ">
        <Image
          width={1400}
          quality={100}
          height={100}
          src="/weekly-ad.png"
          alt="test"
        />
      </div>
    </main>
  );
}
