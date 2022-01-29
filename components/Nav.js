import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex sm:flex-wrap sm:justify-center sm:gap-6 text-lg whitespace-nowrap px-4 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={title}
            onClick={() => router.push(`/?genre=${key}`)}
            className={
              key == router.query.genre
                ? "last: pr-12 sm:last:pr-24 cursor-pointer transition duration-100 transform sm:hover:scale-125 text-green-600 sm:text-2xl"
                : "last: pr-12 sm:last:pr-24 cursor-pointer transition duration-100 transform sm:hover:scale-125 hover:text-white"
            }
          >
            {title} 
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
