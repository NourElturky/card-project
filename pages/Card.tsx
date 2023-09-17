import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { TbBrandTwitter } from 'react-icons/tb';
import { BiBath, BiBed, BiLogoFacebook } from 'react-icons/bi';
import { LiaShareAltSolid } from 'react-icons/lia';
import { BsHouseDoorFill, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import ImageSlider from './ImageSlider';
import { MdCompare } from 'react-icons/md';
import { HiShare } from 'react-icons/hi';
import { PiLinkSimpleBold } from 'react-icons/pi';

import { useState,useEffect} from 'react';
// import data from "./UnitsData.json"

 export interface CardProps {
  title: string;
  address: string;
  price:number
  payment:number 
  month:number 
  bedroom:number 
  bathroom:number 
  area:number 
  uaddress:string
}


const Card: React.FC<CardProps> = (
  { title, address,price, payment,month,bedroom,bathroom,area,uaddress}
  ) => {
  

  const imageUrls = [
    '/images/image2.jpg',
    '/images/image1.jpg',
    '/images/image5.jpg',
  ];


  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  
  const [compare, setCompare] = useState(false);
  const toggleCompare = () => {
    setCompare(!compare);
  };

  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };


 
  return (
    <div className="relative bg-white shadow rounded-lg w-[30%] mt-20 ml-20">
       
    <div className="relative ">
      <div>
      <ImageSlider  images={imageUrls}   />

      </div>

      <div className=" flex "> 
      <div className=" absolute z-10 flex items-center justify-center right-[10px] bottom-4 text-gray-400  
      text-[25px] top-4  h-9 w-9 bg-white rounded-full">
      <button   className={`cursor-pointer ${liked ? 'text-red-600' : 'text-gray-400'}`}
        onClick={toggleLike}>
        <AiFillHeart/>

      </button>
      </div>

  

      <div className=" absolute z-10 flex items-center justify-center right-[50px]  text-gray-400  text-[20px] top-4  h-9 w-9 bg-white rounded-full  ">
        <button className={`cursor-pointer ${compare ? 'inline-flex items-center justify-center bg-[#4cb087] h-9 w-9 rounded-full text-white ' : 'text-gray-400'}`}
        onClick={toggleCompare}>

        <MdCompare  />
        </button>
      </div>
      
      <button className="flex z-10 items-center justify-center h-8 px-3 text-xs top-4 font-medium text-black bg-white rounded-3xl  
      absolute left-[20px]  flex items-center p-4
      "> 
      From Developer
      </button>
      <div className="absolute z-10 bottom-0 left-0 flex items-center justify-between w-full p-4">
      <button className="flex items-center gap-1 bg-[#E8FFF5] py-1 justify-center px-3 text-xs font-medium text-black  rounded-3xl">
      <BsHouseDoorFill className="text-[#4cb087]"/>
      <p className='text-[#4cb087]'>Office</p>
      </button>
     
      </div>
      </div>
    </div>
    {/* end image */}


        
    <div className=' '>
    <div className="flex items-center w-full px-5 py-3 bg-gray-90">
      <p
        className="min-w-[50%] text-xs font-medium text-black "
      >
       {title}
     
      </p>
      <p className="min-w-[50%] text-xs font-medium text-black ">
        delivery 2023
      </p>
    </div>
    <div className="flex flex-col w-full px-5 gap-y-4">
      <div className="grid grid-cols-2 gap-[0.5px]">
        <div className="space-y-1">
          <div>
            <span className="text-xs font-normal  text-black/60">
              Starting Price
            </span>
            <div className="text-lg font-bold text-black">
              {price}
              <span className="text-sm"> EGP</span>
            </div>
          </div>
          <span className="text-[10px] sm:text-xs font-normal   text-black/60">
            {address}
          </span>
        </div>
        <div className="space-y-1">
          <div>
            <span className="text-xs font-normal text-black/60">
              Down Payments
            </span>
            <div className="text-lg font-bold text-black">
              {payment}
              <span className="text-sm"> EGP</span>
            </div>
          </div>
           <span className="text-[10px] sm:text-xs font-normal  text-black/60">
            <span className="font-bold">
              {month}
              </span>
            Monthly / 7 Years
          </span> 
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full px-5 my-2 gap-y-3">
      <div className="flex items-center gap-1">
        <div className="flex items-center w-full gap-1 text-xs  text-gray-400 ">
          <span className="flex text-gray-400">
            <GrLocation className="text-gray-400"/>
            {uaddress}
            </span>
        </div>
      </div>
      <div className="flex items-center justify-start w-full gap-x-4 ">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center w-8 h-8 border border-solid rounded-sm bg-bg-of-wight border-bg-of-wight text-gray-400">

          <BiBed/>

          </div>
          <span className="text-sm font-medium uppercase text-text-gray">
            {bedroom}
          </span>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center w-8 h-8 border border-solid rounded-sm bg-bg-of-wight border-bg-of-wight text-gray-400">

            <BiBath />
          </div>
          <span className="text-sm font-medium uppercase text-text-gray ">
            {bathroom}
          </span>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center w-8 h-8 border border-solid rounded-sm bg-bg-of-wight border-bg-of-wight text-gray-400">
          <LiaShareAltSolid/>
          </div>
          <span className="text-sm font-medium uppercase truncate text-text-gray">
            {area} 
              m <sup>2</sup>
          </span>
        </div>
      </div>
    
     <div className="flex flex-col w-full gap-5 px-6 ">
      <div className="flex items-center justify-around w-full py-4 mt-3 border-t border-solid border-border-top ">
        <a href="/" className="grid duration-300 cursor-pointer w-9 place-content-center fill-fill-icons hover:fill-text-[#4cb087]">
        <BsTelephoneFill className="w-5 h-5 duration-300  text-[#4cb087]"/>
        </a> 
          <a href="/"
           className="grid text-center duration-300 cursor-pointer w-9 place-content-center ">
            <BsWhatsapp className="w-6 h-6 duration-300 text-[#4cb087]"/>
          </a>


          <div className=''>
          <a 
           className="grid text-center duration-300 cursor-pointer w-9 place-content-center ">
            <button  onClick={toggleMessage}>
            <HiShare className="w-6 h-6 duration-300 text-[#4cb087]" />
            </button>
            
          </a>

          {showMessage && (
        <div className="">
        <div className=" absolute inset-0  flex  items-center justify-center gap-x-6 bg-white/80 backdrop-blur-sm text-[25px] w-100 h-[200px] top-[300px] ">
          <a href='/'><BiLogoFacebook/></a>
          <a href='/'className=""><TbBrandTwitter/></a>
          <a href='/'className=" "><BsWhatsapp/></a>
          <button className=" ">
            <PiLinkSimpleBold/>
          </button>
        </div>
        </div>
      )}
          </div>
          </div>
          </div>
    </div>
  </div>
  </div>
  
  );
  
};

export default Card;
