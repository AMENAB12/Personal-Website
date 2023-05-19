import React from 'react';
//icons
import {BsArrowUpRight} from 'react-icons/bs'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';
// services data 
const service = [
  {
    name: 'Web Development',
    description: 'I do some research before starting my development to choose the right way for the job.',
    link: 'Learn More',

  },
  {
    name: 'Fully Responsive',
    description: 'I design my websites for every screen size available and I make sure it looks great on every device.',
    link: 'Learn More',

  },
  {
    name: 'Beautiful Code',
    description: ' Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.',
    link: 'Learn More',

  },
  {
    name: 'On Time',
    description: 'Always responsible to complete any given project on time.',
    link: 'Learn More',

  },
  {
    name: 'Quick Learner',
    description: 'I like to learn new things and I have the ability to learn it quickly.',
    link: 'Learn More',

  },
  {
    name: 'Online',
    description: 'Easy to reach and happy to help.',
    link: 'Learn More',

  }
]


const Services = () => {
  return <section className='section ' id='service'>
   <div className='container mx-auto z-20 pt-16' >
    <div className='flex flex-col lg:flex-row lg:mb-20'>
      {/* {text} and Image */}
      <motion.div 
      variants={fadeIn('right', 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.4}}
      className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-22 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>What I Do.</h2>
        <h3 className='h3 max-w-[455px] mb-16'>
        I'm a great team player, and I enjoy working with others. some of my work qualities are listed below.</h3>
          <Link to='work'><button className='btn btn-sm'>See My Work</button></Link> 
      </motion.div>
      {/* Services */}
      <div className='flex-1 '>
        {/* Service list */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}>
          {service.map((services, index) => {
            //destructure service
            const {name, description, link} = services;
            return <div className='border-b border-white/20 mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
              <h3 className='text-[30px] tracking-wider font-primary font-semibold mb-6'>{name}</h3>
              <p className='font-secondary leading-tight mb-[38px]'>{description}</p>
              </div>
              <div className='flex flex-col flex-1 items-end '>
                <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/> </a>
                <a href="#" className='text-gradient text-sm'>{link}</a>
              </div>
            </div>
          })}
        </motion.div>
      </div>
    </div>
    </div>
  </section>;
  
};

export default Services;
