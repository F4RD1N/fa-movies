const PageHandler = ({ page, setPage, totalPages }) => {
  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevState) => prevState + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section>
      {totalPages > 1 && (
        <div className="h-14 my-5 space-x-2 flex justify-between mx-auto md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
          <div
            className={`w-1/2 flex justify-center items-center h-full rounded bg-secondary ${
              page != 1 && "text-white"
            } cursor-pointer`}
            onClick={prevPage}
          >
            Prev
          </div>
          <div
            className={`w-1/2 flex justify-center items-center h-full rounded bg-secondary ${
              page < totalPages && "text-white"
            } cursor-pointer`}
            onClick={nextPage}
          >
            Next
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHandler;
