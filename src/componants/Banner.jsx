import React from 'react'
import Slider from 'react-slick';
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import Image from './layer/Image';

//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute right-5 top-1/2 translate-y-[-100%] rounded-full bg-transparent border !flex justify-center items-center'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong  className='text-white'/>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='w-16 h-16 absolute left-5 top-1/2 translate-y-[-100%] rounded-full bg-transparent border !flex justify-center items-center z-50'
    style={{ ...style, display: "block", }}
    onClick={onClick}
  >
    <FaArrowLeftLong className='text-white'/>

  </div>
  );
}

function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:right-5 right-1 top-1/2 translate-y-[-100%] rounded-full bg-transparent border !flex justify-center items-center'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong className='text-white'/>

    </div>
  );
}

function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:left-5 left-1 top-1/2 translate-y-[-100%] rounded-full bg-transparent border !flex justify-center items-center z-50'
    style={{ ...style, display: "block", }}
    onClick={onClick}
  >
    <FaArrowLeftLong className='text-white'/>

  </div>
  );
}

const Banner = () => {

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },    {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          nextArrow: <SampleNextArrow2 />,
          prevArrow: <SamplePrevArrow2 />,

        }
      }
    ]


  };


  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <Image className="w-full lg:h-[830px] h-80 object-cover" src={b1} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
          
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7 }}
          
          className="absolute inset-0 flex justify-center items-center">
            <h2 className='text-[#E3E4E6] lg:text-[56px] text-xl lg:leading-[84px] leading-8 mx-auto text-center lg:w-[1185px] w-[270px] font-Josefin'>
              I’m a designer specialising in Web Development and Interaction Design
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <Image className="w-full lg:h-[830px] h-80 object-cover" src={b2} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
          
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7 }}
          
          className="absolute inset-0 flex justify-center items-center">
            <h2 className='text-[#E3E4E6] lg:text-[56px] text-xl lg:leading-[84px] leading-8 mx-auto text-center lg:w-[1185px] w-[270px] font-Josefin'>
              I’m a designer specialising in Web Development and Interaction Design
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <Image className="w-full lg:h-[830px] h-80 object-cover" src={b3} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
          
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7 }}
          
          className="absolute inset-0 flex justify-center items-center">
            <h2 className='text-[#E3E4E6] lg:text-[56px] text-xl lg:leading-[84px] leading-8 mx-auto text-center lg:w-[1185px] w-[270px] font-Josefin'>
              I’m a designer specialising in Web Development and Interaction Design
            </h2>
          </motion.div>
        </div>



      </Slider>
    </div>
  )
}

export default Banner