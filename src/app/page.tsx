import { posts } from "@/mocks/blog";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  title: string;
  description: string;
  date: string;
  id: string;
}

const Article = ({ title, description, date, id }: ArticleProps) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="flex p-4 gap-6 border border-[#fff] cursor-pointer max-h-[250px] overflow-hidden align-middle"
    >
      <div className="min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px]">
        <Image
          width={120}
          height={120}
          src="/test.png"
          alt="Imagem do artigo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="h-full">
          <h3 className="text-xl font-bold text-ellipsis">{title}</h3>
          <p className="text-sm text-ellipsis">{description}</p>
        </div>

        <footer className="flex items-center justify-between text-xs">
          <p>{`Publicado em: ${date}`}</p>
        </footer>
      </div>
    </Link>
  );
};

export default function Blog() {
  return (
    <main className="flex flex-col">
      <section className="grid grid-cols-1 w-full max-w-[1040px] mx-auto">
        {posts.map((posts) => (
          <Article {...posts} key={posts.id} />
        ))}
      </section>
    </main>
  );
}
