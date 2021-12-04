import React, { useContext } from 'react'
import { AppContext } from '../Context'
import no_img from '../No image.png'
import Slider from "react-slick";   
// import Carousel from 'react-elastic-carousel';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey"  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}
const MostViewed = () => {
    const { mostViewed } = useContext(AppContext);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        adaptiveHeight:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
        <section className='container '>
            <h2>Most Viewed</h2>
            <div className='row stock-clr-row'  >
                <Slider {...settings}>
                    {
                        mostViewed.map((single) => {
                            return <div key={single.id} className="card p-4" style={{ width: '12rem' }}>
                                <div style={{height:'100px',overflow:'hidden'}} className='d-flex justify-content-center'>
                                <img src={single.image || no_img} style={{ width: '100px' }} className="card-img-top" alt="" />
                                </div>
                                <div className="card-body p-0">
                                    <h5 className="card-title fs-6">{single.name}</h5>
                                    <p className="card-text fs-7">{single.brand}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className=""><span style={{textDecoration:"line-through"}}>Rs.{single.mrp}</span> Rs.{single.sp}</li>
                                    <li className="">{single.discount}% off</li>
                                    <li className="">{single.flavour}</li>
                                </ul>
                                <div className="my-2 d-flex">
                                    <a href="#" className="btn m-1 px-2 btn-primary fs-8 ">Add to cart</a>
                                    <a href="#" className="btn m-1 px-2 btn-success fs-8 ">Buy Now</a>
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </section>

    )
}

export default MostViewed
