import React from 'react'
import Slider from 'react-slick' 
//React-slick is a great library used for creating carousels. It offers accessibility and responsiveness.
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
    // Above are the settings done to a fan reviews segment using spread(...) operator.
  return(
    <Slider {...settings}>
        {/* this three dot operator is used as a spread operator which allows an iterable such as an array or 
        string to be expanded wherever placed. */}
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in sit, 
            dicta, perferendis voluptatibus adipisci aliquid nisi debitis unde eaque 
            quisquam? Voluptate quisquam fugit pariatur accusamus ducimus quasi impedit eveniet.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                {/* here w and h are denoting width and height */}
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in sit, 
            dicta, perferendis voluptatibus adipisci aliquid nisi debitis unde eaque 
            quisquam? Voluptate quisquam fugit pariatur accusamus ducimus quasi impedit eveniet.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                {/* here w and h are denoting width and height */}
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in sit, 
            dicta, perferendis voluptatibus adipisci aliquid nisi debitis unde eaque 
            quisquam? Voluptate quisquam fugit pariatur accusamus ducimus quasi impedit eveniet.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                {/* here w and h are denoting width and height */}
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in sit, 
            dicta, perferendis voluptatibus adipisci aliquid nisi debitis unde eaque 
            quisquam? Voluptate quisquam fugit pariatur accusamus ducimus quasi impedit eveniet.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                {/* here w and h are denoting width and height */}
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials