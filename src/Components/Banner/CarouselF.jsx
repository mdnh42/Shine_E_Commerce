// CarouselDefault.jsx
import React from 'react';
import { Carousel } from "@material-tailwind/react";

const CarouselF = ({ slides }) => {
    return (
        <Carousel className="rounded-xl" interval={100}>
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`image ${index + 1}`}
                    className="h-full w-full object-cover"
                />
            ))}
        </Carousel>
    );
};

export default CarouselF;
