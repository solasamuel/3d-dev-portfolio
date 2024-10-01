import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";


import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number,
  title: string,
  icon: string
}

const ServiceCard = (props: ServiceCardProps) => {

  // const defaultOptions = {
  //   reverse: false,  // reverse the tilt direction
  //   max: 35,     // max tilt rotation (degrees)
  //   perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000,   // Speed of the enter/exit transition
  //   transition: true,   // Set a transition on enter/exit.
  //   axis: null,   // What axis should be disabled. Can be X or Y.
  //   reset: true,    // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  // }

  const options = {
    max: 45,
    scale: 1,
    speed: 450,
  }
  return (
    <Tilt options={options}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div

          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={props.icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A Technical Architect with a strong foundation in software engineering, cloud technologies, and full-stack development, specializing in scalable, robust solutions for complex systems. With expertise in JavaScript, Python, C#, and PostgreSQL, this professional has extensive experience in SDLC, Agile methodologies, and microservices architecture. 
        They bring a deep understanding of CI/CD pipelines, Web APIs, test-driven development, and cloud platforms such as AWS and Azure, coupled with containerization and orchestration tools like Docker and Kubernetes. 
        This Technical Architect’s diverse skill set, combined with a proven track record in delivering large-scale, data-driven platforms, positions them as a versatile leader in modern software development, capable of driving innovation and efficiency in any organization.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");