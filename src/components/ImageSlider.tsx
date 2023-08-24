// ImageSlider.tsx
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set the autoplay speed (in milliseconds)
  };

  const handlePause = () => {
    console.log(sliderRef.current);
    if (sliderRef.current) {
      sliderRef.current.slickPause(); // Pause the slideshow
      console.log("Paused");
    }
  };

  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Play the slideshow
      console.log("Played");
    }
    // console.log("Played");
  };

  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  return (
    <div className="image-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div className="image-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} onClick={handleImageClick} className="image-content" />
          </div>
        ))}
      </Slider>
      <div className="play-pause-div text-center">
        <button onClick={handlePause} type="button" className="btn btn-outline-light pause-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pause"
            viewBox="0 0 16 16"
          >
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"></path>
          </svg>
        </button>
        <button onClick={handlePlay} type="button" className="btn btn-outline-light play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-play"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
          </svg>
        </button>

        {/* <button onClick={handlePause}></button>
        <button onClick={handlePlay}>Play</button> */}
      </div>
    </div>
  );
};

export default ImageSlider;
