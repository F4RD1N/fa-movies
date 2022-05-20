import { useState, useEffect } from 'react'
const PageHandler = ({data, page, setPage, totalPages}) => {
  
  const nextPage = () => {
    if(page < totalPages) {
      setPage(prevState => prevState + 1)
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
  const prevPage = () => {
    if(page > 1){
      setPage(prevState => prevState - 1)
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
  
  return(
    <section>
         {totalPages > 1 && <div className="h-14 my-5 space-x-2 flex justify-between">
       <div className={`w-1/2 flex justify-center items-center h-full rounded bg-secondary ${page != 1 && 'text-white'}`} onClick={prevPage}>Prev</div>
       <div className={`w-1/2 flex justify-center items-center h-full rounded bg-secondary ${page < totalPages && 'text-white'}`} onClick={nextPage}>Next</div>
    </div>}
    </section>
    )
}

export default PageHandler;