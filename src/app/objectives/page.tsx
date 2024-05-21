import { objectives } from "@/mocks/objectives";

export default function Objectives() {
  return (
    <main className="flex min-h-screen flex-col gap-12 pt-0">
      <h1 className="text-4xl font-bold text-center">Objetivos</h1>
      <h2 className="text-xl font-bold text-center">Meus objetivos públicos</h2>
      <section className="grid grid-cols-1 gap-8">
        {objectives.map((objective) => (
          <Objective {...objective} key={objective.id} />
        ))}
      </section>
    </main>
  );
}

const Objective = ({ done, description, date }: any) => {
  return (
    <div className="flex p-2 px-4 border shadow-md rounded-md space-between items-center">
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-base">{description}</p>
        <p className="text-xs">{date}</p>
      </div>

      {done ? (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="7"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M25.4624 1.53763C25.6328 1.70788 25.768 1.91005 25.8603 2.13259C25.9525 2.35513 26 2.59367 26 2.83457C26 3.07547 25.9525 3.31401 25.8603 3.53655C25.768 3.75909 25.6328 3.96126 25.4624 4.13151L12.6305 16.9634C12.4602 17.1338 12.258 17.2691 12.0355 17.3613C11.813 17.4536 11.5744 17.501 11.3335 17.501C11.0926 17.501 10.8541 17.4536 10.6316 17.3613C10.409 17.2691 10.2068 17.1338 10.0366 16.9634L4.53721 11.464C4.19324 11.1201 4 10.6535 4 10.1671C4 9.68064 4.19324 9.21411 4.53721 8.87014C4.88118 8.52618 5.3477 8.33294 5.83415 8.33294C6.3206 8.33294 6.78712 8.52618 7.13109 8.87014L11.3335 13.0749L22.8685 1.53763C23.0387 1.36719 23.2409 1.23199 23.4634 1.13973C23.686 1.04748 23.9245 1 24.1654 1C24.4063 1 24.6449 1.04748 24.8674 1.13973C25.0899 1.23199 25.2921 1.36719 25.4624 1.53763Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="7"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
};
