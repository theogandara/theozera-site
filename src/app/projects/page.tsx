import Image from "next/image";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col gap-12 pt-0">
      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="flex flex-wrap justify-center">
        <ProjectCard name="Ivo Vaz Imobiliária" image="/ivo-vaz.png" />
        <ProjectCard name="App Ifuture" image="/ifuture.png" />
        <ProjectCard name="Site da Nuxt IT" image="/nuxt.png" />
        <ProjectCard name="Solução FoodFy" image="/foodfy.png" />
      </div>
    </main>
  );
}

const ProjectCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="w-[300px] h-[300px] max-h-[300px] max-w-[300px] relative hover:cursor-pointer">
      <Image
        width={300}
        height={300}
        quality={100}
        src={image}
        alt="Imagem do projeto"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-200 z-10">
        <h3 className="text-white text-xl font-bold text-center">
          Visitar
          <br />
          {name}
        </h3>
      </div>
    </div>
  );
};
