import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from "../variants"
//image
import Img1 from '../assets/appleR.jpeg'
import Img2 from '../assets/Amazon.png'
import Img3 from '../assets/netflix.png'
import Img4 from '../assets/appleB.jpeg'
import { FaLinkedin } from 'react-icons/fa';

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto z-20 pt-16">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent '>
              PORTFOLIO
              </h2>
              <p className='max-w-sm mb-16 '>
              "You must understand that seeing is believing, but also know that believing is seeing."
              </p>
              <button className='btn btn-sm'><a href="https://www.linkedin.com/in/abenezer-megersa/" target="_blank" rel="noopener noreferrer">GIVE ME A COMMENT</a>   <FaLinkedin/></button>
          </div>
        
          {/* image */}
          <motion.div 
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.4}}
          className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/75 w-full h-full absolute z-40 translate-all duration-300'></div>
            {/* image */}
            <img className='group-hover:scale-125 translation-all duration-500' src={Img1} alt="" />
            {/* Pretuitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-3xl text-white'> Apple replica website built
from scratch using React</span>
<br /> <span className='text-gradient relative'>
              <a className='btn btn-sm'href="https://github.com/AMENAB12/Apple-Replica" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </span>
<br /> <span className='text-gradient relative'>
              <a className='btn btn-sm'href="https://apple-clone-by-abenezer.web.app" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
              </div>
            {/* title */}
        
            
          </motion.div>
          
        </div>
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.4}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* Amazon */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/75 w-full h-full absolute z-40 translate-all duration-300'></div>
            {/* image */}
            <img className='group-hover:scale-125 translation-all duration-500' src={Img2} alt="" />
            {/* Pretuitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-3xl text-white'>Amazon replica website built
from scratch using React</span> <br />
              <span className='text-gradient '> <a className='btn btn-sm'href="https://github.com/AMENAB12/Build-Amazon-Clone" target="_blank" rel="noopener noreferrer">GitHub Link</a>
             
              </span> <br />
              <span className='text-gradient relative'>
              <a className='btn btn-sm'href="https://replica-d8934.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              
            </div>
            
          </div>
          {/* netflix */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/75 w-full h-full absolute z-40 translate-all duration-300'></div>
            {/* image */}
            <img className='group-hover:scale-125 translation-all duration-500' src={Img3} alt="" />
            {/* Pretuitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-3xl text-white'>Netflix replica website built
from scratch using React</span><br />
              <span className='text-gradient '>
              <a className='btn btn-sm'href="https://github.com/AMENAB12/Building-Netflix-Clone" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </span>
              <span className='text-gradient '> <a  className='btn btn-sm' href="https://netflix-clone-by-abenezer.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a> </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
             
            </div>
            
          </div>  
        
          
        </motion.div>
      </div>
      
    </div>
    </section>;
};

export default Work;
