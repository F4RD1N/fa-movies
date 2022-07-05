import { MAIN_BACKDROP } from "../../config/Config";
import { sliceYearFromDate, getFullLanguageName } from "../../utils/functions";

const Header = ({ data }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    name,
    genres,
    release_date,
    first_air_date,
    vote_average,
    original_language,
    tagline,
  } = data;

  return (
    <header className="relative h-half md:h-80vh">
      <img
        src={
          backdrop_path
            ? MAIN_BACKDROP(backdrop_path)
            : MAIN_BACKDROP(poster_path)
        }
        className="w-full md:h-80vh h-half object-cover object-top"
      />

      <div className="absolute bottom-0 w-full h-1/2 sliderGradient"></div>

      <div className="absolute bottom-0 left-0 right-0 px-6 flex flex-col">
        <h2 className="text-white text-2xl font-semibold break-all">
          {title ? title : name}
        </h2>
        <h3 className="mt-2 text-base truncate w-full">
          {tagline && tagline.replaceAll(".", "")}
        </h3>
        <ul className="mt-4 space-x-2 flex items-center">
          <li className="badge2">
            {original_language && getFullLanguageName(original_language)}
          </li>
          <li className="badge2">
            {release_date
              ? sliceYearFromDate(release_date)
              : first_air_date && sliceYearFromDate(first_air_date)}
          </li>
          <li className="badge2 text-yellow-500">
            {vote_average ? (
              vote_average
            ) : (
              <span className="text-sm">Not Released</span>
            )}
          </li>
          <li className="badge2">
            {genres && genres.length && genres[0].name}
          </li>
          {/*<li className="badge2">+{genres && genres.length && getAgeLimit(genres[0].name)}</li>*/}
        </ul>
      </div>
    </header>
  );
};

export default Header;
