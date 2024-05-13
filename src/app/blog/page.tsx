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
      <div className="flex flex-col gap-4">
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

const articles = [
  {
    title: "Primeira corrida",
    description: "Uma emocionante história de corrida automotiva.",
    content:
      "Em uma manhã ensolarada, os motores roncaram na pista enquanto os pilotos se preparavam para a emocionante corrida. Cada curva representava um desafio único, testando a habilidade e a coragem dos competidores. O público aplaudia com entusiasmo, enquanto o líder cruzava a linha de chegada em uma vitória emocionante.",
    date: "01/01/2021",
    id: "1",
  },
  {
    title: "Academia",
    description: "Benefícios do exercício físico regular.",
    content:
      "O exercício físico regular é essencial para manter uma vida saudável. Além de fortalecer os músculos e melhorar a resistência, ele reduz o estresse e melhora o humor. Recomenda-se dedicar pelo menos 30 minutos diários a atividades físicas, como caminhadas, corridas ou exercícios aeróbicos.",
    date: "02/01/2021",
    id: "2",
  },
  {
    title: "Portugal",
    description: "Explorando a rica cultura e história portuguesa.",
    content:
      "Portugal é um país encantador, conhecido por suas belas praias, vinícolas renomadas e cidades históricas. Lisboa, a capital, é famosa por sua arquitetura única e vibrante cena cultural. O Porto é conhecido por seu vinho do Porto e a região do Algarve é um paraíso para os amantes do sol e do mar.",
    date: "03/01/2021",
    id: "3",
  },
  {
    title: "Coragem pra ser diferente",
    description: "A importância de abraçar sua singularidade.",
    content:
      "Abraçar sua singularidade é uma virtude. A sociedade muitas vezes valoriza a conformidade, mas é a individualidade que traz inovação e criatividade. Tenha coragem de seguir seus próprios valores e paixões, mesmo que isso signifique ser diferente dos outros. Abrace quem você é e inspire os outros a fazer o mesmo.",
    date: "03/01/2021",
    id: "4",
  },
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col gap-12 pt-0">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <h2 className="text-2xl font-bold">Artigos</h2>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </section>
    </main>
  );
}
