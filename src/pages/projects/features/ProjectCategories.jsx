const ProjectCategories = () => {
    return (
        <>
            <section className="mt-5">
                <div>
                    <p className="text-lg px-5 md:px-0 font-semibold text-center text-red-700 dark:text-yellow-500">Projects</p>
                    <div className="px-2 py-10  grid md:grid-cols-2 gap-2 md:gap-0">
                        <div className="flex justify-center items-center">
                            <div className='md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2'>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Hardware</p>
                                <p>Hardware projects in disciplines like Electronics and Mechnanical</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className='md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Software</p>
                                <p>Software projects in disciplines like Information Technology and Computer Science</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <hr className="w-3/4" />
            </div>
            <section>
                <div>
                    <p className="text-lg px-5 md:px-0 font-semibold text-center text-red-700 dark:text-yellow-500">What We Offer</p>
                    <div className="px-2 py-10  grid md:grid-cols-4 gap-2 md:gap-0">
                        <div className="flex justify-center items-center">
                            <div className='w-full md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2'>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Images</p>
                                <p>Images of the project either physical or code.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className='w-full md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Synopsis</p>
                                <p>Synopsis of the project.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className='w-full md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2'>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Report</p>
                                <p>A detailed report on the project.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className='w-full md:w-3/4 h-28 shadow py-4 border-s-2 border-red-700 dark:border-yellow-500 ps-2 '>
                                <p className="text-red-700 dark:text-yellow-500 font-semibold">Presentation</p>
                                <p>A brief presentaion on the project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <hr className="w-3/4" />
            </div>
            <section className="flex flex-col items-center px-5">
                <p className="text-lg mb-5 px-5 md:px-0 font-semibold text-center text-red-700 dark:text-yellow-500">Projects On</p>
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                    <div>
                        <p className="text-center md:text-left text-2xl font-semibold mb-5">Electronics</p>
                        <ul className="text-lg px-5 md:px-0">
                            <li>Explore a world of electronics projects created by your fellow students.</li>
                            <li>Showcase your electronic design and innovation - share your projects for inspiration.</li>
                            <li>Discover cutting-edge solutions - download and learn from the electronics community.</li>
                            <li>Collaborate and contribute to the world of electronic engineering innovation.</li>
                        </ul>
                    </div>
                    <img className="h-60 w-60 md:h-96 md:w-96" src="/images/electronics.png" alt="Electronics" />
                </div>
                <div className="border-b-2 border-black w-3/4"></div>
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                    <div>
                        <p className="text-center md:text-left text-2xl font-semibold mb-5">Programming</p>
                        <ul className="text-lg px-5 md:px-0">
                            <li>Discover, upload, and share your programming projects with fellow students.</li>
                            <li>Showcase your coding prowess - share your projects, inspire others.</li>
                            <li>Explore a world of programming languages, download and learn from your peers.</li>
                            <li>Empower your coding journey - contribute and download innovative projects.</li>
                        </ul>
                    </div>
                    <img className="h-60 w-60 md:h-96 md:w-96" src="/images/languages.png" alt="Programming" />
                </div>
                <div className="border-b-2 border-black w-3/4"></div>
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                    <div>
                        <p className="text-center md:text-left text-2xl font-semibold mb-5">Mechanics</p>
                        <ul className="text-lg px-5 md:px-0">
                            <li>Explore a world of mechanical engineering projects created by your peers.</li>
                            <li>Showcase your mechanical design and innovation - share your projects for inspiration.</li>
                            <li>Discover solutions to real-world challenges - download and learn from fellow students.</li>
                            <li>Collaborate and contribute to the world of mechanical engineering innovation.</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center ">
                        <img className=" h-52 w-60 md:h-80 md:w-96" src="/images/mechanical.png" alt="Mechanical" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectCategories