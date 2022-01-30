import {
  ThumbUpIcon,
  CashIcon,
  ClockIcon,
  StarIcon,
  CalendarIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

const Movie = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const months = [
    "Jan",
    "Febr",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Frid", "Sat"];

  const d = new Date(movie.release_date);
  const fullDate =
    days[d.getUTCDay()] +
    " " +
    months[d.getMonth()] +
    " " +
    d.getUTCDate() +
    " " +
    d.getUTCFullYear();

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      <section className="w-full h-full pt-4 sm:pt-12 text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-4 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mt-4 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {movie.title}
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-300">
              {movie.overview}
            </p>
            <div className="flex justify-center sm:justify-start flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <button
                  key={genre.id.toString()}
                  className="text-white bg-green-600 border-0 py-1 px-1.5 focus:outline-none rounded text-lg"
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Image
              layout="responsive"
              src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
              width={1920}
              height={1080}
              priority="true"
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="w-full px-5 py-2 mx-auto">
        <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
          DIRECTOR
        </h2>

        <div className="w-full flex justify-center">
          <div>
            <div>
              <Image
                layout="fixed"
                src={`${BASE_URL}${movie?.director?.profile_path}`}
                width={140}
                height={156}
                priority="true"
                className="rounded"
              />
            </div>

            <div className="mt-1 text-center">
              <h3 className="text-green-600 sm:text-lg">
                {movie?.director?.name}
              </h3>
              <h2 className="text-white text-md pb-2">
                {movie?.director?.job}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Cast */}
      <section className="w-full px-5 py-4 mx-auto">
        <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
          CAST
        </h2>

        <div className="relative">
          <div className="flex sm:justify-start gap-4 whitespace-normal overflow-x-auto">
            {movie?.cast.map((character) => (
              <div key={character.id} className="w-full">
                  <Image
                    layout="fixed"
                    src={`${BASE_URL}${character?.profile_path}`}
                    width={140}
                    height={156}
                    priority="true"
                    className="rounded"
                  />
                <div className="mt-1 text-center">
                  <h3 className="text-green-600">{character.name}</h3>
                  <h2 className="text-white text-sm pb-2">
                    {character.character}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="text-white text-lg body-font">
        <div className="w-full px-5 py-4 mx-auto">
          <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
            STATISTICS
          </h2>

          <div className="flex flex-wrap text-center">
            {movie.production_countries.length > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <GlobeIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  {movie.production_countries.map((pC) => (
                    <h2
                      key={pC.iso_3166_1}
                      className="title-font font-medium text-xl text-green-600"
                    >
                      {pC.name}
                    </h2>
                  ))}

                  <p className="leading-relaxed">Production Country</p>
                </div>
              </div>
            )}

            {movie.release_date && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <CalendarIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {fullDate}
                  </h2>
                  <p className="leading-relaxed">Release Date</p>
                </div>
              </div>
            )}

            {movie.runtime > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <ClockIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {movie.runtime} minutes
                  </h2>
                  <p className="leading-relaxed">Duration</p>
                </div>
              </div>
            )}

            {movie.popularity > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <StarIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {movie.popularity.toLocaleString("en-US", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </h2>
                  <p className="leading-relaxed">Popularity</p>
                </div>
              </div>
            )}

            {movie.vote_average > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <ThumbUpIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {movie.vote_average}
                  </h2>
                  <p className="leading-relaxed">Vote Average</p>
                </div>
              </div>
            )}

            {movie.vote_count > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <ThumbUpIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {movie.vote_count}
                  </h2>
                  <p className="leading-relaxed">Vote Count</p>
                </div>
              </div>
            )}

            {movie.budget > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <CashIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-md lg:text-xl text-green-600">
                    US${" "}
                    {movie.budget.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h2>
                  <p className="leading-relaxed">Budget</p>
                </div>
              </div>
            )}

            {movie.revenue > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <CashIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-md lg:text-xl text-green-600">
                    US${" "}
                    {movie.revenue.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h2>
                  <p className="leading-relaxed">Revenue</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Producction Companies */}
      <section className="text-gray-600 body-font">
        <div className="w-full px-5 py-4 mx-auto">
          <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
            PRODUCCTION COMPANIES
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {movie.production_companies.map((pCompany) => (
              <div key={pCompany.id}>
                <div className="bg-gray-100 p-0.5 rounded">
                  <Image
                    layout="fixed"
                    src={`${BASE_URL}${pCompany?.logo_path}`}
                    width={167}
                    height={50}
                    priority="true"
                  />
                </div>

                <h2 className="text-md text-green-600 font-medium text-center text-wrap">
                  {pCompany.name}
                </h2>

                <h2 className="text-md text-white font-medium text-center">
                  {pCompany.origin_country}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${process.env.API_KEY}`
  );

  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}/credits?api_key=${process.env.API_KEY}`
  );

  const credits = await res2.json();

  let movie = await res.json();
  movie.director = credits.crew.find((c) => c.job == "Director");
  movie.cast = credits.cast;

  return { props: { movie } };
}
