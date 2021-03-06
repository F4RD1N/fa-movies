import Cast from "./Cast";
const MoreInfo = ({ data }) => {
  return (
    <section>
      <ul className="flex">
        <li className="mr-5 text-white text-lg font-semibold border-b-4 border-primary">
          CAST
        </li>
      </ul>
      <Cast data={data} />
    </section>
  );
};

export default MoreInfo;
