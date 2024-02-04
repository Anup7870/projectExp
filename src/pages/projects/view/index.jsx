import { useNavigate } from "react-router-dom"

const View = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text">
      <section className="px-5 py-10">
        <div className="flex justify-center">
          <input
            id='searchIp'
            type="text"
            className="mt-5 w-3/4 h-10 border-2 border-purple-500 rounded-lg text-base text-lightTheme-text ps-2"
            placeholder="Search by Category or Subject"
          />
        </div>
      </section>
      <section>
        <div className='px-5 md:px-20 grid md:grid-cols-2 gap-3'>
          {Array.from({ length: 50 }, (_, i) => (
            <article
              onClick={() => navigate('/projects/qazwsxedc')}
              key={i}
              className="py-4 px-2 grid md:grid-cols-2 border border-lightTheme-primary dark:border-darkTheme-primary    rounded hover:shadow-lg cursor-pointer"
            >
              <div className='md:order-2'>
                <img src="/images/p1.jpg" sizes='' alt="..." />
              </div>
              <div className='md:order-1'>
                <div className="flex flex-col ">
                  <h5 className="text-2xl">Self Directoning Rover</h5>
                  <p className="text-base line-clamp-3">
                    Arduino-powered self-directing rover is an autonomous vehicle project. It uses Arduino microcontrollers,
                    sensors, and programming to navigate and adapt to its environment independently, offering an engaging and
                    educational experience in robotics.
                  </p>
                  <p className=""><small>Electronics</small></p>
                  <p className=""><small>22-3-2023</small></p>
                  <p className=""><small>{22} Views</small></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default View