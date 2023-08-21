import React from 'react';
//motion
import {motion} from 'framer-motion';
import useAnalyticsEventTracker from "../util/useAnalyticsEventTracker.jsx"
//variant
import {fadeIn} from '../variants'
import { FaEnvelope, FaGithub, FaYoutube } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const gaEventTracker = useAnalyticsEventTracker('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0f4cdbp', 'template_55ybuhp', form.current, '7p3cjsLKioukyd2d2')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return <section className='py-16 lg:section:' id='contact'>
    <div className="container mx-auto">
<div className='flex flex-col lg:flex-row'>
  {/* text */}
  <motion.div 
  variants={fadeIn('right', 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.4}}
  className='flex-1'>
    <div>
      <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
      <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12'>Let's work <br /> together! 
      </h2>
    </div>
  </motion.div>
  {/* form */}
  <motion.form ref={form} onSubmit={sendEmail}
  variants={fadeIn('left', 0.5)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.4}}
  className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
    <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your email' name="to_name" />
    <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-10' type="text" placeholder='Your name' name='from_name'/>
   <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' name="message"></textarea>
   <button type='submit' value='send' onClick={()=>gaEventTracker('email')} className='btn btn-lg'>Send Message </button>
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
  </motion.form>
</div>

    </div>
    </section>;
};

export default Contact;
