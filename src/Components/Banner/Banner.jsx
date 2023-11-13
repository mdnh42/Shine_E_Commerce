// Banner.js
import React from 'react';
import CarouselF from './CarouselF';


const Banner = () => {
    let slides = [
        "https://img.ltwebstatic.com/images3_ccc/2023/11/13/ed/16998548609777a5110e187c8c0b9e492aef580f7a_thumbnail_2000x.webp",
        "https://img.ltwebstatic.com/images3_ccc/2023/11/08/15/16994343499566fdd49b851c71a11eb340b601c65b_thumbnail_2000x.webp",
        "https://img.ltwebstatic.com/images3_ccc/2023/11/06/0c/16992624473287c674056e6b5be5ddedd6c8a4bb53_thumbnail_2000x.webp"
    ];

    return (
        <div className='w-[90%] m-auto my-5'>
            {/* Render the CarouselDefault component with the provided slides */}
            <CarouselF slides={slides} />
        </div>
    );
};

export default Banner;
