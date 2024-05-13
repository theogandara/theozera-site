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
      className="flex flex-col gap-4 p-4 border-2 border-[#5F606A] rounded-md shadow-md cursor-pointer hover:shadow-lg hover:border-2 hover:border-[#172448] transition duration-50"
    >
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <article className="text-lg">
        <p className="text-justify">{content}</p>
      </article>

      <footer className="flex items-center justify-between text-sm text-gray-600">
        <p>{`Publicado em: ${date}`}</p>
      </footer>
    </a>
  );
};

const articles = [
  {
    title: "Primeira corrida",
    description: "Descrição do artigo 1",
    content: "Conteúdo do artigo 1",
    date: "01/01/2021",
    id: "1",
  },
  {
    title: "Academia",
    description: "Descrição do artigo 2",
    content: "Conteúdo do artigo 2",
    date: "02/01/2021",
    id: "2",
  },
  {
    title: "Portugal",
    description: "Descrição do artigo 3",
    content: "Conteúdo do artigo 3",
    date: "03/01/2021",
    id: "3",
  },
  {
    title: "Coragem pra ser diferente",
    description: "Descrição do artigo 1",
    content: "Conteúdo do artigo 3",
    date: "03/01/2021",
    id: "3",
  },
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col gap-12 pt-0">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <h2 className="text-2xl font-bold">Artigos</h2>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </section>
    </main>
  );
}
