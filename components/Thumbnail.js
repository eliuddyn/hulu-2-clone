import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Link
        href={
          result?.media_type
            ? result?.media_type == "movie"
              ? `/movies/${result?.id}`
              : `/tv/${result?.id}`
            : `/movies/${result?.id}` || `/tv/${result?.id}`
        }
      >
        <a>
          <Image
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            width={1920}
            height={1080}
            priority="true"
          />

          <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2
              className="mt-1 text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-bold"
            >
              {result.title || result.original_name}
            </h2>
          </div>
        </a>
      </Link>
    </div>
  );
});

export default Thumbnail;
