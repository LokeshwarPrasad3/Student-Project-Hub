import React from 'react';

const CustomRating = ({ value, fillColor, emptyColor }) => {
    const maxStars = 5;

    // Define an array of star elements based on the value
    const stars = Array.from({ length: maxStars }, (_, index) => (
        <span
            key={index}
            style={{
                color: index < value ? fillColor : emptyColor,
                fontSize: '24px', // Adjust the star size as needed
                cursor: 'pointer', // Add cursor pointer for interaction (optional)
            }}
        >
            ★
        </span>
    ));

    return (
        <>
            <div className='flex  justify-center items-center' >
                <span>Rating : </span>
                {stars}
            </div>
        </>
    )
};

export default CustomRating;