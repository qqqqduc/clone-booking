import ICLocation from '@/components/Icons/HeaderIcons/ICLocation';
import React from 'react';
import "./SearchResult.scss"
// đang để tạm filterSuggestion ở interface là string[] để test
interface SearchResultProps {
  searchValue: string;
  filterSuggestions: string[];
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  activeSuggestionIndex: number;

}

const SearchResult: React.FC<SearchResultProps> = ({
  searchValue,
  filterSuggestions,
  handleClick,
  activeSuggestionIndex,
}) => {
  return (
    <div className='max-w-full min-w-[430px]'>
      <ul className='list-none'>
        {!searchValue && <span className='py-3 px-2 font-bold text-sm leading-6'>Điểm đến ưa thích gần đây</span>}
        {filterSuggestions.map((city, index) => {
          let className = '';
          if (index === activeSuggestionIndex)
            className = 'search-value-active';
          return (
            <li
              key={city}
              className={`${className} search-value-hover cursor-pointer`}
              onClick={handleClick}
            >
              <div
                className='flex items-center font-bold p-2'
              >
                <span className='mr-2'>
                  <ICLocation
                    width='24px'
                    height='24px'
                    fillColor='text-text-primary'
                  />
                </span>

                <div className='flex flex-col'>
                  <span>{city}</span>
                  {/*fix cứng là Việt Nam luôn */}
                  <span
                    className='font-light text-xs'
                  >
                    Việt Nam
                  </span>
                </div>
              </div>
            </li>
          )})
        }
      </ul>
    </div>
  )
}

export default SearchResult