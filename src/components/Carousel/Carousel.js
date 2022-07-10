import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

import MTN from "../../images/mtn.png";
import NEDC from "../../images/NEDC.png";
import FRSC from "../../images/FRSC.png";
import AEA from "../../images/AEA.jpg";
import AICL from "../../images/AICL.jpg";
import CBN from "../../images/CBN.jpg";
import DelSG from "../../images/DelSG.png";
import EdSG from "../../images/EdSG.jpg";
import FedMOF from "../../images/FedMOF.png";
import GIS from "../../images/GIS.png";
import KadSG from "../../images/KadSG.jpg";
import Raeanna from "../../images/raeanna.png";

const SliderImages = [
  {id: 1, logo:MTN, alt_text:"MTN logo"},
  {id: 2, logo:NEDC, alt_text:"NEDC logo"},
  {id: 3, logo:FRSC, alt_text:"FRSC logo"},
  {id: 4, logo:AEA, alt_text:"AEA logo"},
  {id: 5, logo:AICL, alt_text:"AICL logo"},
  {id: 6, logo:CBN, alt_text:"CBN logo"},
  {id: 7, logo:DelSG, alt_text:"DelSG logo"},
  {id: 8, logo:EdSG, alt_text:"EdSG logo"},
  {id: 9, logo:FedMOF, alt_text:"EdSG logo"},
  {id: 10, logo:GIS, alt_text:"GIS logo"},
  {id: 11, logo:KadSG, alt_text:"NEDC logo"},
  {id: 12, logo:Raeanna, alt_text:"NEDC logo"}
];

function Carousel() {
    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <div className='carousel'>
        <Slider {...settings}>
          {
            SliderImages.map((SliderImage) => {
                return (
                    <div className='slide_image_container' key={SliderImage.id}>
                        <img src={SliderImage.logo} alt={SliderImage.alt_text}/>
                    </div>
                )
            })
          }
        </Slider>
      </div>
  )
}

export default Carousel