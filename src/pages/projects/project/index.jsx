import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/loader';
function Project() {
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        // Simulate loading project data based on the id from the URL
        fetchProjectData().then((data) => {
            setProjectData(data);
        });
    }, [id]);

    if (projectData === null) {
        // Display a loading indicator while data is being fetched
        return <Loader />;
    }

    // Render the project data once it's loaded
    return (
        <div className='pt-5 px-10 md:px-20 min-h-screen bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text'>

            <section>
                <div className='flex justify-center md:justify-start'>
                    <div className=' inline-block '>
                        <div className='flex flex-col'>
                            <p className='text-2xl md:text-5xl'>Self Directoning Rover</p>
                            <span className=' mt-3 border border-b-2 border-lightTheme-text dark:border-darkTheme-text'></span>
                        </div>
                    </div>
                </div>
                <div className='mt-5 grid md:grid-cols-2'>
                    <div className='md:order-2 flex justify-center'>
                        <img src="/images/p1.jpg" className="" alt="..." />
                    </div>
                    <div className='md:order-1'>

                        <p className='text-lg text-center md:text-start'>
                            Arduino-powered self-directing rover is an autonomous vehicle project. It uses Arduino microcontrollers,
                            sensors, and programming to navigate and adapt to its environment independently, offering an engaging and
                            educational experience in robotics.
                        </p>
                        <br />
                        <div className='text-center md:text-start'>
                            <p className='text-xl font-medium'>Project Owner</p>
                            <p>Divyanshu Naugai</p>
                            <p>BTKIT Dwarahat</p>
                            <a className='' href="mailto:youremail@example.com">Contact <i className="fa-solid fa-xs fa-arrow-up-right-from-square"></i></a>
                        </div >
                    </div>

                </div>
            </section>
            <div className="mt-5 flex justify-center">
                <hr className="w-3/4" />
            </div>
            <section className=''>
                <p className='text-center text-2xl mb-3'>Gallery</p>
                <div className='grid md:grid-cols-2'>
                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>

                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>

                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className='p-2 col-md-6'>
                        <img src="/images/p1.jpg" className="img-fluid" alt="..." />
                    </div>
                </div>
            </section>
            <div className="mt-5 flex justify-center">
                <hr className="w-3/4" />
            </div>
            <section>
                <p className='text-center text-2xl mb-3'>Synopsis</p>
                <p className='text-lg text-center md:text-start'>
                    {`The Arduino-powered self-directing rover represents a fascinating leap into the world of autonomous vehicles, seamlessly blending cutting-edge technology with educational exploration. At its core, this project harnesses the power of Arduino microcontrollers, sensors, and ingenious programming to create a rover that possesses the remarkable ability to navigate and adapt to its surroundings autonomously.

            The heart of this rover is the Arduino microcontroller, serving as its brain. Equipped with a plethora of sensors such as ultrasonic, infrared, and cameras, it gathers data from its environment in real-time, allowing it to make informed decisions. This sensory input forms the basis for a complex algorithmic framework that guides the rover's movements, enabling it to detect obstacles, chart paths, and even respond to dynamic changes in its environment.

            What sets this project apart is its immersive educational value. Aspiring roboticists and enthusiasts can delve into the intricate world of robotics, honing their skills in coding, electronics, and problem-solving. By designing, building, and programming this rover, individuals gain hands-on experience in artificial intelligence, machine learning, and automation, setting the stage for future innovations in this field.

            Ultimately, the Arduino-powered self-directing rover is more than just a technical marvel; it's a vehicle of discovery, offering a captivating journey through the captivating realm of robotics and inspiring the next generation of engineers and innovators.`}
                </p>
            </section>
            <div className="mt-5 flex justify-center">
                <hr className="w-3/4" />
            </div>
            <section>
                <p className='text-center text-2xl mb-3'>References</p>
                <div className='grid md:grid-cols-2 gap-3'>
                    <div className='text-center'>
                            <h4>Related Topics</h4>

                            <p>Arduino UNO</p>

                            <p>Basic Electronics</p>

                            <p> IR Sensor</p>

                            <p> IR Sensor</p>
                    </div>
                    <div className='text-center'>
                        <h4 >Useful Links</h4>

                        <p><a className=' text-decoration-none' href="#">Link 1</a></p>

                        <p><a className='text-decoration-none' href="#">Link 2</a></p>

                        <p><a className='text-decoration-none' href="#">Link 3</a></p>

                        <p><a className='text-decoration-none' href="#">Link 4</a></p>
                    </div>
                </div>
            </section>

        </div>
    );
}

function fetchProjectData() {
    // Simulate fetching project data from your database
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ /* Your project data based on id */ });
        }, 2000); // Simulate a 2-second delay
    });
}


export default Project;
