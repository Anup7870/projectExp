import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom";
import SearchResult from "./features/SearchResult";
import WorkshopsCategories from "./features/WorkshopsCategories";
const Workshops = () => {
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
                        <p className="text-md font-medium text-red-700 dark:text-yellow-500">Workshop Directory</p>
                        <p className="text-2xl ">Be updated on any past or future event.</p>
                    </div>
                    <div className="mt-5 flex flex-col items-center md:items-start">
                        <p>{`Stay in the know about past and upcoming events, ensuring you're always up-to-date and ready to seize valuable opportunities in your area of interest.`}</p>
                        <input
                            onInput={handelSearchInput}
                            id='searchIp'
                            type="text"
                            className="mt-5 w-3/4 h-10 border-2 border-purple-500 rounded-lg text-base text-lightTheme-text ps-2"
                            placeholder="Search by Category or Subject"
                        />
                        <Link
                            to='view'>
                            <button
                                className='mt-3 ms-1 border-2 border-purple-700 p-1 rounded-lg flex gap-2 items-center text-base font-medium hover:bg-purple-700 transition-colors'>
                                View All <FaArrowRightLong />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex mt-0 items-start justify-center">
                    <img className="" src="/svg/seminar.svg" alt="Time Machine" />
                </div>
            </section>
            <section>
                {
                    typed
                        ? <SearchResult keyword={keyword} />
                        : <WorkshopsCategories />
                }
            </section>
        </div>
    )
}

export default Workshops