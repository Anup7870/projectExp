const Footer = () => {
  return (
    <footer className="bg-lightTheme-primary text-lightTheme-text dark:bg-darkTheme-primary dark:text-darkTheme-text">
      <div className="container mx-auto py-8 px-2 border-t-[1px] border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">Email: support@projectexpo.com</p>
            <p className="mb-2">Phone: 125-233-648</p>
            <p>Address: Ranchi, Jharkhand</p>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Important Links</h2>
            <ul className="space-y-2">
              <li><a href="https://www.india.gov.in/" target='_blank' rel="noreferrer">Government of India</a></li>
              <li><a href="https://dst.gov.in/" target='_blank' rel="noreferrer">Department of Science and Technology</a></li>
              <li><a href="https://www.aicte-india.org/" target='_blank' rel="noreferrer">AICTE</a></li>
              <li><a href="https://www.ugc.gov.in/" target='_blank' rel="noreferrer">UGC</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-1">
        <div className="flex justify-center"><span className="w-full border-b-[1px] border-black"></span></div>
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ProjectExpo </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
