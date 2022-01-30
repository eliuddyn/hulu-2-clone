import {
  ThumbUpIcon,
  CashIcon,
  ClockIcon,
  StarIcon,
  CalendarIcon,
  GlobeIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

const Tv = ({ movie }) => {
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

  const firstDate = new Date(movie.first_air_date);
  const lastDate = new Date(movie.last_episode_to_air.air_date);

  const fullFirstDate =
    days[firstDate.getUTCDay()] +
    " " +
    months[firstDate.getMonth()] +
    " " +
    firstDate.getUTCDate() +
    " " +
    firstDate.getUTCFullYear();

  const fullLastDate =
    days[lastDate.getUTCDay()] +
    " " +
    months[lastDate.getMonth()] +
    " " +
    lastDate.getUTCDate() +
    " " +
    lastDate.getUTCFullYear();

  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      <section className="w-full h-full pt-4 sm:pt-12 text-gray-600 body-font">
        <div className="mx-auto flex px-5 py-4 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mt-4 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {movie.name}
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

      {/* Creator */}
      <section className="w-full px-5 py-2 mx-auto">
        <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
          {movie?.created_by.length > 1 ? "CREATORS" : "CREATOR"}
        </h2>

        <div className="w-full flex justify-center gap-5">
          {movie?.created_by.map((creator) => (
            <div key={creator.id}>
              <div>
                <Image
                  layout="fixed"
                  src={`${BASE_URL}${creator?.profile_path}`}
                  width={140}
                  height={156}
                  priority="true"
                  className="rounded"
                />
              </div>

              <div className="mt-1 text-center">
                <h3 className="text-green-600 sm:text-lg">{creator?.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cast */}
      <section className="w-full px-5 py-4 mx-auto">
        <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
          CAST
        </h2>

        <div className="relative">
          <div className="flex gap-6 whitespace-normal overflow-x-auto">
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

      {/* Seasons */}
      <section className="w-full px-5 py-4 mx-auto">
        <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
          SEASONS
        </h2>

        <div className="relative">
          <div className="flex gap-6 whitespace-normal overflow-x-auto">
            {movie?.seasons.map((season) => (
              <div key={season.id}>
                <div className="">
                  <Image
                    layout="fixed"
                    src={`${BASE_URL}${season?.poster_path}`}
                    width={140}
                    height={190}
                    priority="true"
                    className="rounded"
                  />
                </div>
                <div className="mt-1 text-center">
                  <h3 className="text-green-600 text-lg">{season.name}</h3>
                  <h2 className="text-white text-sm pb-2">
                    {season.episode_count} Episodes
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
            <div className="p-1.5 w-1/2 lg:w-1/4">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <VideoCameraIcon className="text-white w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-2xl text-green-600">
                  {movie.in_production ? "YES" : "NO"}
                </h2>
                <p className="leading-relaxed">In Production</p>
              </div>
            </div>

            {movie.origin_country && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <GlobeIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  {movie.production_countries.map((pC) =>
                    pC.iso_3166_1 == movie.origin_country[0] ? (
                      <h2
                        key={pC.iso_3166_1}
                        className="title-font font-medium text-xl text-green-600"
                      >
                        {pC.name}
                      </h2>
                    ) : null
                  )}

                  <p className="leading-relaxed">Origin Country</p>
                </div>
              </div>
            )}

            {movie.first_air_date && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <CalendarIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {fullFirstDate}
                  </h2>
                  <p className="leading-relaxed">First Release Date</p>
                </div>
              </div>
            )}

            {movie.last_episode_to_air && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <CalendarIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {fullLastDate}
                  </h2>
                  <p className="leading-relaxed">Last Release Date</p>
                </div>
              </div>
            )}

            {movie.episode_run_time[0] > 0 && (
              <div className="p-1.5 w-1/2 lg:w-1/4">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <ClockIcon className="text-white w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-2xl text-green-600">
                    {movie.episode_run_time[0]} minutes
                  </h2>
                  <p className="leading-relaxed">Episode Duration</p>
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
                  <h2 className="title-font font-medium text-md lg:text-2xl text-green-600">
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
                  <h2 className="title-font font-medium text-md lg:text-2xl text-green-600">
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

      {/* Networks */}
      <section className="text-gray-600 body-font">
        <div className="w-full px-5 py-4 mx-auto">
          <h2 className="text-amber-600 font-bold text-xl sm:text-2xl mb-4">
            NETWORKS
          </h2>

          <div className="flex flex-wrap gap-2 justify-center">
            {movie.networks.map((network) => (
              <div key={network.id}>
                <div className="bg-gray-100 p-0.5 rounded">
                  <Image
                    layout="fixed"
                    src={`${BASE_URL}${network?.logo_path}`}
                    width={167}
                    height={50}
                    priority="true"
                  />
                </div>

                <h2 className="text-md text-green-600 font-medium text-center">
                  {network.name}
                </h2>

                <h2 className="text-md text-white font-medium text-center">
                  {network.origin_country}
                </h2>
              </div>
            ))}
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

export default Tv;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${context.query.id}?api_key=${process.env.API_KEY}`
  );

  const res2 = await fetch(
    `https://api.themoviedb.org/3/tv/${context.query.id}/credits?api_key=${process.env.API_KEY}`
  );

  const credits = await res2.json();

  let movie = await res.json();
  movie.cast = credits.cast;

  return { props: { movie } };
}
