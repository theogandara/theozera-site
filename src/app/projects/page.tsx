import { projects } from "@/mocks/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col gap-12 pt-0">
      <div className="w-[260px] sm:w-[520px] lg:w-[1040px] flex flex-wrap mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}

const ProjectCard = ({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="w-[260px] h-[260px] max-h-[260px] max-w-[260px] relative hover:cursor-pointer">
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
    </Link>
  );
};
