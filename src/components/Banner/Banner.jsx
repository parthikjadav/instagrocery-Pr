import React from 'react';
import BannerImg from '../../assets/images/Banner/Banner-1.jpg';
import Banner2 from '../../assets/images/Banner/Banner-2.jpg';
import Banner3 from '../../assets/images/Banner/Banner-3.jpg';
import Banner4 from '../../assets/images/Banner/Banner-4.jpg';

const Banner = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="w-full h-[215px] bg-cover bg-center rounded-lg hidden sm:block"
                    style={{ backgroundImage: `url(${BannerImg})` }}>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                    <div className="px-2 w-full">
                        <img src={Banner2} alt="" className='w-full h-auto rounded-lg' />
                    </div>
                    <div className="px-2 w-full">
                        <img src={Banner3} alt="" className='w-full h-auto rounded-lg' />
                    </div>
                    <div className="px-2 w-full md:block">
                        <img src={Banner4} alt="" className='w-full h-auto rounded-lg' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;