// import React, { useState } from 'react';
// import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

// interface ImageSliderProps {
//   images: string[];
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     )
//   }


//   return (
//     <div>
//         <div className=''>
//             <button onClick={handlePrev} className=' absolute cursor-pointer items-center justify-center w-10 h-10 bg-gray-300 rounded-full  lg:-left-[-10px] left-10 top-[40%] lg:flex text-white'>
//             <MdArrowBackIosNew />
//             </button>
//         </div> 
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} width={500} height={500} className='rounded-lg' />
//        <button onClick={handleNext} className=' absolute cursor-pointer items-center justify-center w-10 h-10 bg-gray-300 rounded-full lg:-right-[-10px] right-10 top-[40%] lg:flex text-white'> 
//         <MdOutlineArrowForwardIos/>
//       </button>
    
//     </div>
//   );
// };

// export default ImageSlider;











import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y,EffectCreative} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC <ImageSliderProps>= ({images}) => {


  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCreative]}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // effect
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      className='my-swiper'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
            <img src={image} alt={image} className=' rounded-lg '/>
        </SwiperSlide>
      ))}
    </Swiper>
 
  );
};

export default ImageSlider;

