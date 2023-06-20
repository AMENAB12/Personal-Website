import React from 'react';
//Count up
import CountUp from 'react-countup'
//intersection observer hook
import { useInView } from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
//variant
import {fadeIn} from '../variants'
import { FaLinkedin } from 'react-icons/fa';

const About = () => {

const [ref, inView] = useInView({
  threshold:0.5,
})
  return <section className='section mb-25' id='about' ref={ref}>
   <div className="container mx-auto ">
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/**Image */}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-no-repeat mix-blend-lighten bg-top'></motion.div>
      {/**text */}
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='Flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>I am A Full Stack Web Developer | React | Node | Software Engineering Student @ ALX | </h3>
        <p className='mb-6'>
        From the moment I Write "Hello World" in the console of my first application, I knew I was hooked into the world of software development. Since then, I can't get enough and I have been obsessed with the idea of using software to solve practical problems.

My specialities include quickly learning new skills and programming languages, problem solving, responsive design principles, website optimization, and the Model View Controller (MVC) method of organizing code. So far I have ReactJS, Javascript, HTML, CSS, jQuery, Bootstrap, Node.JS, Express.JS, MongoDB, Photoshop, WordPress, Shopify, and Git/GitHub under my belt. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head.</p>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2 '>
             {
              inView ? 
              <CountUp start={0} end={0} duration={3} /> : null} 
              </div>
          <div className='font-primary texts-sm tracking-[2px]'>
            Years of <br /> experriance
          </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2 '>
             {
              inView ? 
              <CountUp start={0} end={5} duration={3} /> : null} 
              </div>
          <div className='font-primary texts-sm tracking-[2px]'>
            Personal <br /> Projects
          </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2 '>
             {
              inView ? 
              <CountUp start={0} end={3} duration={3} /> : null} 
              </div>
          <div className='font-primary texts-sm tracking-[2px]'>
            Working <br /> On Projects
          </div>
          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
        <button className='btn btn-lg'><a href="https://www.linkedin.com/in/abenezer-megersa/" target="_blank" rel="noopener noreferrer">Contact Me</a>  <FaLinkedin/></button>
        <a href="https://drive.google.com/file/d/1vMSGzbhBKAxrtk3L5hGl6M5St-qR6XPZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className='btn btn-sm'>DOWNLOAD RESUME</button></a>
          </div>
      </motion.div>
    </div>
   </div>
    </section>;
};

export default About;
