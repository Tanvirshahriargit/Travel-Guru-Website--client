import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from "../../../Banner/banner1.png"
import Banner2 from "../../../Banner/banner2.png"
import Banner3 from "../../../Banner/banner3.png"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="Banner slider 1"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Banner slider 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Banner slider 3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;