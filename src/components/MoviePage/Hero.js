import { MAIN_BACKDROP, TRAILER_LINK } from "../../config/Config";

const Hero = ({ data, trailer }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    name,
    genres,
    overview,
    release_date,
    first_air_date,
    vote_average,
    original_language,
    production_countries,
    runtime,
    tagline,
  } = data;
  return (
    <section>
      <div className="px-6 mt-6">
        <button className="w-full flex md:w-52 justify-center items-center py-3 mb-5 rounded bg-primary text-white font-bold active:bg-secondary">
          <i className="ri-download-line"></i>
          <span className="mx-2">Download</span>
        </button>

        <p className="md:w-2/3">
          <span className="text-textSecondary font-bold">Story:</span>{" "}
          {overview}
        </p>
        <div className="mt-8 rounded">
          {trailer && trailer.key && (
            <iframe
              className="mb-10 w-full md:w-2/3 md:mx-auto  aspect-video bg-secondary rounded"
              src={TRAILER_LINK + trailer.key}
              title="Trailer"
              frameBorder="0"
              allow="encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};
export default Hero;
