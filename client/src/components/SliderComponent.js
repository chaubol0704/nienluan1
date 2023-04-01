import React, { useState, useRef} from 'react';
import Slider from 'react-slick';

const SliderComponent = ({arrImages}) => {
  const ref = useRef({});
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    className: 'z-10'
  };
  return (
           <div className='w-full relative z-40'>
              <Slider  {...settings}>
                  {arrImages.map((item) => {
                    return (
                      <img
                      className='w-full h-[600px]'
                        key={item}
                        src={item}
                      />
                    )
                  })}
              </Slider>
            
           </div>
  );
};

export default SliderComponent;
