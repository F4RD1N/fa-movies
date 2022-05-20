import SearchItem from '../Home/SectionCard'
import { MAIN_IMAGE } from '../../config/Config'
const SearchList = ({data, type}) => {
  
  return(
    <section className="mt-16 grid grid-cols-3">
     {
       data && data.length >= 1 && data.map(item => {
         const { id, poster_path, title, name} = item
         return poster_path && <SearchItem
           key={id}
           poster={MAIN_IMAGE(poster_path)}
           title={title ? title : name}
           movieId={id}
           type={type && type }
           />
       })
     }
    </section>
    )
}
export default SearchList;