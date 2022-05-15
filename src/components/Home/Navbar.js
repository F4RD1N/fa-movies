const SearchBar = () => {
  return (
    <div className="bg-secondary rounded-md overflow-hidden">
    <div className="flex justify-between items-center px-3 py-2">
     <button className="text-lg"><i className="ri-search-line"></i></button>
     <input 
      className="border-0 outline-0 bg-transparent placeholder:text-sm w-4/5"
      placeholder="Find your movie..."
      maxLength="40"
     />
     <button className="text-lg"><i className="ri-equalizer-line"></i></button>
     </div>
    </div>
    )
}
export default SearchBar;