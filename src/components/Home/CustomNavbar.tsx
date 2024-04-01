import { useEffect, useRef, useState } from 'react';
import { fetchSaavanHomeSongs } from '../../redux/home/HomeApi';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CiGlobe, CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import AudioPlayer from '../../Player';

const languageOptions = [
  { value: 'telugu', label: 'Telugu' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'english', label: 'English' },
];

export function CustomNavbar() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['telugu']);

  const handleLanguageChange = (option: string) => {
    if (selectedLanguages.includes(option)) {
      setSelectedLanguages(s => s.filter(e => e == option));

    } else {
      setSelectedLanguages(s => [...s, option]);
    }
  };

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchSaavanHomeSongs(selectedLanguages));
  }, [dispatch, selectedLanguages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSearchClickHandler();
      }
    };

    // Attach event listener
    ref.current?.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      ref.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function onSearchClickHandler() {
    navigate(`/search?q=${ref.current?.value}`);
  }
  const [languagePanel, setLanguagePanel] = useState(false);
  const [searchBarState, setSearchBarState] = useState(false);

  function toggleLanguageSelection(): void {
    setLanguagePanel(b => !b);
  }
  function toggleSearchBarState(): void {
    setSearchBarState(b => !b);
  }

  return (<>
    <div className="fixed z-50 py-3 w-full bottom-0  px-8 backdrop-blur-md bg-dark-gray/75 rounded-md mx-auto flex justify-between">
      <h1 className="text-xl font-medium dark:text-white">Play React</h1>
      <AudioPlayer />
      <div className="flex items-center">
        {/* <select
          value={selectedLanguages}
          onChange={handleLanguageChange}
          className="mr-2 rounded-md p-1 border border-gray-300 focus:outline-none focus:border-blue-500"
          multiple
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input type="search" className="rounded-md p-1" ref={ref} />
        <button onClick={onSearchClickHandler}>Search</button> */}
        <CiSearch size={30} onClick={toggleSearchBarState} className=' dark:text-white mr-4' />

        <CiGlobe size={30} onClick={toggleLanguageSelection} className=' dark:text-white' />
      </div>
    </div>
    {
      languagePanel &&
      <div className="h-screen w-full flex justify-center items-center fixed backdrop-blur-sm bg-blue-gra-300/20 top-0 z-50 " onClick={toggleLanguageSelection}>
        <div className='flex bg-dark-gray-2 text-white p-2 rounded-md'>

          {languageOptions.map((option) => (
            <span className={`px-5  mx-2 rounded-sm p-2 hover:bg-gray-700  ${selectedLanguages.includes(option.value) ? 'bg-purple' : ''}`}
              onClick={() => handleLanguageChange(option.value)}
            >
              {option.label}
            </span>
          ))}

        </div>

      </div>
    }
    {/* search bar  */}
    {
      searchBarState &&
      <div className='
      mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-5
      z-50
      flex
      items-center
        justify-center  bg-dark-gray-2 h-12 text-white p-2 rounded-md'>
        <CiSearch size={30} className='mr-2' onClick={onSearchClickHandler} />
        <input type="text" className='bg-transparent 
          focus:outline-none
          outline-none
          
          active:outline-none

          :
          w-full' placeholder='search..' ref={ref} 
        
          />
        <RxCross1 size={25} className='mr-2' onClick={toggleSearchBarState} />

      </div>
    }
  </>

  );
}
