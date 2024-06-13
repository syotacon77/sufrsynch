import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between pl-16">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" width={36} height={36} alt="Logo" />
        <div className="text-4xl font-bold">Surfsynch B.V.</div>
      </div>

      <div className="flex h-20 items-center rounded-l-full bg-gray-50 px-16">
        <ul className="flex items-center gap-16 text-xl">
          <li className="flex items-center space-x-2 duration-300 hover:font-bold">
            {" "}
            <span>About Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center space-x-2 duration-300 hover:font-bold">
            <span>What We Do</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center space-x-2 duration-300 hover:font-bold">
            <span>Articles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex items-center space-x-2 duration-300 hover:font-bold">
            <span>Careers</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="duration-300 hover:font-bold">Contact Us</li>
        </ul>
      </div>
    </header>
  );
}
