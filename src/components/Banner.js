 import React from 'react';
//image
import Image from '../assets/Logo.png'
//icon
import {FaGithub, FaYoutube, FaLinkedin, FaEnvelope} from 'react-icons/fa'
// type animation
import {TypeAnimation} from 'react-type-animation'
//motion

import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center ' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/**text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          {/* <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-[20px]'>Abenezer <span>Megersa</span> */}
          {/* </motion.h1> */}
        <motion.div 
         variants={fadeIn('up', 0.5)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>
            I am a 
          </span>
          <TypeAnimation 
          sequence={[
            'Full Stack Web Developer', 2000,
            'You Tuber', 2000,
          ]}speed={70}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
     
        </motion.div>
        <motion.p 
         variants={fadeIn('up', 0.7)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once: false, amount: 0.7}} 
        className='mb-8 max-w-lg mx-auto lg:mx-0'>
            I'm a creative Full Stack Web Developer based in Addis
Ababa, Ethiopia, and I'm very passionate and dedicated
to my work. I have acquired the skills necessary to build
great, appealing, and premium websites that meet the
latest web standards.
          </motion.p>
          <motion.div 
           variants={fadeIn('up', 0.8)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'><a href="https://www.linkedin.com/in/abenezer-megersa/" target="_blank" rel="noopener noreferrer">Contact Me</a>   <FaLinkedin/></button>
            <Link to='work' className='text-gradient btn-link'>My Portfolio</Link> 
          </motion.div>
          {/**Socials */}
          <motion.div 
           variants={fadeIn('down', 0.9)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount: 0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0
          '>
            <a href="https://github.com/AMENAB12" target='_blank'>
              <FaGithub/>
             
            </a>
            <a href="https://www.youtube.com/channel/UCzwInfMsdtOJ53FDTVvPx4Q" target='_blank'>
            <FaYoutube/>
                         
            </a>
            <a href="https://mail.google.com/mail/u/1/#inbox" target='_blank'>
            <FaEnvelope/>
              
                         
            </a>
          </motion.div>
        </div>
        {/**image */}
        <motion.div 
         variants={fadeIn('down', 0.6)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once: false, amount: 0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
    </section>;
};

export default Banner;
