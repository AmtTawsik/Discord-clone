import React from 'react';
import img from '../../Media/our-left.svg';

const OurClients = () => {
    return (
        <div data-aos="zoom-out-right" data-aos-duration="1000" className='grid grid-cols-12 w-11/12 mx-auto items-center py-20 md:px-10 gap-8' id='Benefits'>
        <div className='col-span-12 md:hidden'>
            <img src={img} alt="" />
        </div>
        <div className='md:col-span-6 col-span-12'>
            <h3 className='md:text-5xl text-3xl font-bold'>Where hanging out is easy</h3>
            <p className='text-xl mt-5'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
        </div>
        <div className='md:col-span-6 col-span-12 hidden md:flex'>
            <img src={img} alt="" />
        </div>
    </div>
    );
};

export default OurClients;