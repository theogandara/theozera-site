interface BreadcrumbProps {
  path: {
    url: string;
    name: string;
  }[];
}

export default function Breadcrumb({ path }: BreadcrumbProps) {
  return (
    <nav className="flex text-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>
        </li>

        {path.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <IconChevronRight />
              <a
                href={item.url}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const IconChevronRight = () => (
  <svg
    className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
);
