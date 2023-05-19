import React, { useEffect, useState } from 'react';
//images
import logo from'../assets/Logo.png'
import { Link } from 'react-scroll';

const Header = () => {
  const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			// window.removeEventListener("scroll");
		};
	}, []);
  return <header className='py-8'>
  <div className={`container mx-auto fixed top-0  z-50 ${show && ''}`}>

    <div className='flex justify-between items-center '>
      {/**logo */}
      <Link to='home'>
        <img className='w-1/2 h-1/2' src={logo} alt="" />
      </Link>
      {/*button */}
      <a href="https://drive.google.com/file/d/1vMSGzbhBKAxrtk3L5hGl6M5St-qR6XPZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className='btn btn-sm'>Resume</button></a>
    </div>
  </div>

  
  </header>;
};

export default Header;
