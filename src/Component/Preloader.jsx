import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);

            gsap.to('.main-content', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="flex items-center justify-center h-screen bg-White">
                    <div className='flex items-center justify-center w-24 h-24 rounded-full border-s-2 border-Accent2 animate-spin bg-Transparent'>
                    <div className='w-20 h-20 rounded-full border-s-2 bg-Transparent border-Black animate-spin'></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;