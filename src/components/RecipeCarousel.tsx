import React from 'react';
import { Box } from '@mui/material';

import Slider from 'react-slick';
import '../styles/Carousel.css';  // 스타일 파일을 import

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const RecipeCarousel: React.FC = () => {
    const images = [
      "https://cdn.pixabay.com/photo/2018/09/29/04/19/fried-rice-3710741_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/26/02/25/kimchi-3838674_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/20/12/12/egg-sandwiches-2422902_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/12/15/08/47/pork-7657190_1280.jpg",
    ];
  
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500, // 3초마다 자동 전환
      arrows: true, // 화살표 버튼 표시
    };
  
    return (
      <Box className="carousel-container">  {/* CSS 클래스 적용 */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`carousel-${index}`} className="carousel-image" />  {/* CSS 클래스 적용 */}
            </div>
          ))}
        </Slider>
      </Box>
    );
  };
  
  export default RecipeCarousel;
