import { SearchIcon } from '../svgs/SearchIcon'
import './search.scss'

export const Search = () => {
  return (
    <div className='search'>
        <div className='search-icon-container'>
            <SearchIcon />
        </div>
        <input type="text" className="search-input" placeholder='Search' />
        <div className="shortcuts">
            <span className="shortcuts-ctrl">ctrl</span>
            <span className="shortcuts-k">k</span>
        </div>
    </div>
  )
}
