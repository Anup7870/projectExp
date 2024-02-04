import {FaArrowRightLong} from 'react-icons/fa6';
const Home = () => {

  return (
    <div className="bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text">
      <section className="grid md:grid-cols-2 pt-5 px-2">
        <div className="my-auto">
          <div className="text-xl text-center md:text-5xl font-[sura]">
            <p>अनेकसंशयोच्छेदि, परोक्षार्थस्य दर्शकम् ।</p>
            <p>सर्वस्य लोचनं शास्त्रं, यस्य नास्त्यन्ध एव सः ॥</p>
          </div>
          <div className="flex justify-center">
            <span className="border-b-4 border-black my-5 w-40 flex"></span>
          </div>
          <div className="text-lg text-center md:text-2xl font-serif">
            <p>It blasts many doubts, foresees what is not obvious</p>
            <p>Science is the eye of everyone, one who has not got it, is like a blind</p>
          </div>
        </div>
        <div className="flex px-10 py-7 md:px-20 md:py-10 justify-center items-center">
          <img className="hidden md:flex"  src="/svg/innovation.svg" alt="innovation" />
          <img className="md:hidden" src="/svg/learning.svg" alt="learning" />
        </div>
      </section>

      {/* <section className="p-5">
        <div className="text-center font-semibold"> 
          <p className="text-red-700 dark:text-yellow-500  m-0 text-lg">Stats</p>
          <p className="text-red-700 dark:text-yellow-500 m-0 text-2xl">Platform Made for Students by Students</p>
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-2 text-lg">
          <div className='shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
            <p className="text-red-700 dark:text-yellow-500 font-semibold">1k+ Institutes</p>
            <p>An ever-growing number of institutes pan India.</p>
          </div>
          <div className='shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
            <p className="text-red-700 dark:text-yellow-500 font-semibold">2.5k+ Students</p>
            <p>Students Enrolled for Prayog Initiative.</p>
          </div>
          <div className='shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
            <p className="text-red-700 dark:text-yellow-500 font-semibold">5k+ Projects</p>
            <p>A Huge Database of Projects on Various Subjects</p>
          </div>
        </div>
        <div className="flex mt-5 justify-center">
          <button 
          className=" flex gap-2 items-center font-medium text-base p-1 hover:rounded border-b-2 border-purple-700 hover:bg-purple-700 transition-colors">
            Get Started <FaArrowRightLong/>
            </button>
        </div>
      </section> */}
    </div>
  )
}

export default Home