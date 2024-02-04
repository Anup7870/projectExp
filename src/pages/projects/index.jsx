import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SearchResult from './features/SearchResult';
import ProjectCategories from './features/ProjectCategories';
const Projects = () => {

  const [keyword, setKeyword] = useState('');
  const [typed, setTyped] = useState(false);
  const handelSearchInput = (e) => {
    const keyword = e.target.value.trim()
    if (keyword.length > 0) {
      setTyped(true)
      setKeyword(keyword);
    } else {
      setTyped(false)
    }
  }
  return (
    <div className="min-h-screen bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text">
      <section className="shadow-lg py-10 md:pt-16 md:px-32 grid md:grid-cols-2">
        <div className="flex flex-col justify-center text-center md:text-left">
          <div>
            <p className="text-md font-medium text-red-700 dark:text-yellow-500">Project Directory</p>
            <p className="text-2xl ">Explore all the Projects Submitted by Students</p>
          </div>
          <div className="mt-5 flex flex-col items-center md:items-start">
            <p>Catalyze your exploration on our platform as you effortlessly uncover a rich tapestry of projects spanning an extensive range of disciplines, where diverse communities converge to collaborate, share insights, and spark innovative endeavors.</p>
            <input
              onInput={handelSearchInput}
              id='searchIp'
              type="text"
              className="mt-5 w-3/4 h-10 border-2 border-purple-500 rounded-lg text-base text-lightTheme-text ps-2"
              placeholder="Search by Category or Subject"
            />
            <Link
              to='/projects/view'>
              <button
                className='mt-3 ms-1 border-2 border-purple-700 p-1 rounded-lg flex gap-2 items-center text-base font-medium hover:bg-purple-700 transition-colors'>
                View All <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex mt-0 items-start justify-center">
          <img className="w-96 h-96" src="/svg/time-machine.svg" alt="Time Machine" />
        </div>
      </section>
      {
        typed
          ? <SearchResult keyword={keyword} />
          : <ProjectCategories />
      }
    </div>
  )
}

export default Projects