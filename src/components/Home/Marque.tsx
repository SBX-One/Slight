import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<GSAPTween | null>(null);

    useEffect(() => {
        if (marqueeRef.current) {
            const element = marqueeRef.current;

            const duplicate = element.innerHTML;
            element.innerHTML += duplicate;

            animationRef.current = gsap.to(element, {
                x: '-50%',
                ease: 'linear',
                duration: 30,
                repeat: -1,
            });

            const handleMouseEnter = () => {
                animationRef.current?.pause();
            };

            const handleMouseLeave = () => {
                animationRef.current?.resume();
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                animationRef.current?.kill();
            };
        }
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap py-20 hidden lg:block w-full relative">
            <div ref={marqueeRef} className="inline-block text-[158px] font-medium whitespace-nowrap" style={{ whiteSpace: 'nowrap' }}>
                <span className="text-primary">-</span> SHIPPING | MARITIME
            </div>
        </div>
    );
};

export default Marquee;
