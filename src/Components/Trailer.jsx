import React, { useState } from "react";

const Trailer = () => {
  const slides = [
    { src: "https://www.youtube.com/embed/Po3jStA673E" },
    { src:"https://www.youtube.com/embed/a3rB6he7q4c?si=M7x-b904m72bL0O-" },
    { src:"https://www.youtube.com/embed/8yh9BPUBbbQ?si=CkzJqVoN6yRmhEot"  },
    { src:"https://www.youtube.com/embed/Y5BeWdODPqo?si=Pg5K4U-ShCZ2WSk2"},
    {src:"https://www.youtube.com/embed/dyzraT_np8w?si=iiyezStnQqwsPguH"},
    {src:"https://www.youtube.com/embed/fZOwwAzI9jM?si=_dIfydzPW7IQavBF"},
    {src:"https://www.youtube.com/embed/g79CvhHaj5I?si=jD6dIOe22QNPpgiq"}
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-10">
      
      {/* Video Slide */}
      <div className="h-56 md:h-96 overflow-hidden rounded-xl">
        <iframe
          className="w-full h-full"
          src={slides[current].src}
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 h-full px-4 flex items-center"
      >
        <span className="bg-black/50 text-white p-2 rounded-full">◀</span>
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 h-full px-4 flex items-center"
      >
        <span className="bg-black/50 text-white p-2 rounded-full">▶</span>
      </button>
    </div>
  );
};

export default Trailer;