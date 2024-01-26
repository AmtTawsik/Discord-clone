import React from 'react';
import img from '../../Media/Benifits/b-left.svg'

const Benefits = () => {
    return (
        <div data-aos="fade-in-left" data-aos-duration="2000" id='Benefits'>
            <div className='grid grid-cols-12 w-11/12 mx-auto items-center py-20 md:px-10 gap-8'>
                <div className='md:col-span-6 col-span-12'>
                    <img src={img} alt="" />
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <h3 className='md:text-5xl text-3xl font-bold'>From few to a fandom</h3>
                    <p className='text-xl mt-5'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;