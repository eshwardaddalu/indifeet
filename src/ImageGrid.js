import React from 'react';
import image1  from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5  from './images/image5.jpg';
import image6  from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';



const ImageGrid = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ];
    return (
        <div className="indifeet">
            <h1>#INDIFEET</h1>
        <div className="image-grid">
           
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt="casual1" className="zoomable-image" ></img>
                </div>
            ))}
        </div>
        </div>
        


    );
};
export default ImageGrid;