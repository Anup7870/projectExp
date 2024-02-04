import FlipCard from './FlipCard';
import './about.css';
const About = () => {
  return (
    <div className="bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text">
      <section className="p-5 text-center">
        <p className=" text-3xl md:text-4xl font-bold">About Project Expo..</p>
        <p className="pt-3 text-lg">
          {`We are an initiative dedicated to creating a unified platform for students from all walks of life. Our mission is to provide a space where students can effortlessly showcase their projects and ideas to a global audience. Whether you're working on a groundbreaking scientific experiment, a creative arts project, or an innovative technological solution, Prayog is here to help you share your work with the world.
    
          At Prayog, we believe in the power of knowledge sharing and collaboration. We want to foster an environment where students can connect, learn from one another, and inspire new ideas. By offering a seamless and user-friendly platform for uploading and sharing projects, we aim to break down barriers and make education and innovation accessible to all.

          Join us in our journey to empower students to reach their full potential and contribute to a brighter future through the exchange of knowledge and creativity. Explore the diverse projects and ideas from students around the globe, and be a part of this exciting educational community. Together, we can make a difference through Prayog!`}
        </p>
      </section>
      <section className='p-5'>
        <h3 className='text-center text-3xl font-medium'>What We Do?</h3>
        <div className="pt-3 md:px-20 grid md:grid-cols-3 gap-5 md:h-32">
          <div className='text-black rounded-lg shadow text-center p-2  bg-orange-500' >
            <p className="text-lg font-medium">Project Showcase</p>
            <p>Prayog offers a platform for students to display their projects, fostering recognition and inspiration.</p>
          </div>
          <div className='text-black rounded-lg shadow text-center p-2  bg-green-500'>
            <p className="text-lg font-medium">Knowledge Exchange Hub</p>
            <p>We connect students from diverse backgrounds, enabling them to learn, share, and engage in meaningful discussions.</p>
          </div>
          <div className='text-black rounded-lg shadow text-center p-2  bg-cyan-500'>
            <p className="text-lg font-medium">Educational Empowerment</p>
            <p>Prayog breaks down barriers, ensuring all students have access to resources and opportunities for personal growth and learning.</p>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <p className="text-center text-3xl font-medium">Our Team</p>
        <div className='grid md:grid-cols-6 gap-3 pt-3 justify-center'>
          <FlipCard
            name='Anup Kumar'
            position='Team Leader'
            contribution='Worked on Backend'
          // connect='linkedin.com/in/divyanshu-naugai'
          />
          <FlipCard
            name='Faiz '
            contribution='Worked on Frontend.'
          // connect='linkedin.com/in/divyanshu-naugai'
          />
          <FlipCard
            name='Md Saif Alam'
            contribution='Worked on Backend.'
          // connect='linkedin.com/in/divyanshu-naugai'
          />
          <FlipCard
            name='Pratik Ranjan'
            contribution='Worked on Frontend.'
            // connect='linkedin.com/in/divyanshu-naugai'
          />
          <FlipCard
            name='Aminul Hasan'
            contribution='Worked on Frontend.'
            // connect='linkedin.com/in/divyanshu-naugai'
          />
          <FlipCard
            name='Pallavi'
            contribution='Worked on Frontend.'
            // connect='linkedin.com/in/divyanshu-naugai'
          />
        </div>
      </section>
      <section className='pt-5 text-center'>
        <p className=' text-3xl font-medium'>Join Project Expo</p>
        <p className='text-lg font-medium pt-3'>Join us in our efforts. <a className='font-bold' href="#">Contact</a></p>
      </section>
    </div>
  )
}

export default About