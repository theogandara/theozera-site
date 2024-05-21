import { posts } from "@/mocks/blog";
import Image from "next/image";

interface ArticleProps {
  title: string;
  description: string;
  content: string;
  date: string;
  id: string;
}

const Article = ({ title, description, content, date, id }: ArticleProps) => {
  return (
    <a
      href={`/blog/${id}`}
      className="flex p-4 gap-6 border-2 border-[#5F606A] rounded-md shadow-md cursor-pointer hover:shadow-lg hover:border-2 hover:border-[#172448] transition duration-50 max-h-[250px] overflow-hidden align-middle"
    >
      <div className="flex flex-col gap-4 w-full">
        <div>
          <h3 className="text-xl font-bold text-ellipsis">{title}</h3>
          <p className="text-sm text-gray-600 text-ellipsis">{description}</p>
        </div>

        <article className="text-md">
          <p className="text-justify line-clamp-2 text-ellipsis tracking-tight">
            {content}
          </p>
        </article>

        <footer className="flex items-center justify-between text-xs text-gray-600">
          <p>{`Publicado em: ${date}`}</p>
        </footer>
      </div>

      <div className="min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px]">
        <Image
          width={120}
          height={120}
          src="/test.png"
          alt="Imagem do artigo"
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col gap-12 pt-0">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <h2 className="text-2xl font-bold">Artigos</h2>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((posts) => (
          <Article {...posts} key={posts.id} />
        ))}
      </section>
    </main>
  );
}
