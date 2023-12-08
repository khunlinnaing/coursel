import React, { useState, useEffect } from 'react';

const AutoRotatingCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const numberOfSlides = 8; // Adjust the number of slides as needed

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next slide
            setCurrentSlide((prevSlide) => (prevSlide + 1) % numberOfSlides);
        }, 3000); // Change the interval as needed (3000 milliseconds = 3 seconds)

        return () => clearInterval(interval);
    }, [currentSlide]);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div>
            <div style={{ display: 'flex', overflow: 'hidden', width: '300px' }}>
                {Array.from({ length: numberOfSlides }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '0 0 100%',
                            transition: 'transform 0.5s ease',
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >

                        <h3>Slide {index + 1}</h3>
                        <div>
                            <img src={"/upload/"+(index + 1)+".jpg"} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '10px' }}>
                {Array.from({ length: numberOfSlides }).map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AutoRotatingCarousel;
