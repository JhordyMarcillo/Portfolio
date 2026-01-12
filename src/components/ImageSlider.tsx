import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
}

export const ImageSlider = ({ images, autoSlide = false, interval = 5000 }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation(); 
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!autoSlide || isModalOpen) return;
    const timer = setInterval(() => next(), interval);
    return () => clearInterval(timer);
  }, [current, autoSlide, interval, isModalOpen]);

  // Teclado
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const Modal = () => (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
      
      {/* Detener la imagen para que no se cierre*/}
      <img
        src={images[current]}
        className="modal-image fade"
        alt="fullscreen"
        onClick={(e) => e.stopPropagation()} 
      />

      <button className="modal-nav left" onClick={(e) => { e.stopPropagation(); prev(); }}>
        ‹
      </button>
      <button className="modal-nav right" onClick={(e) => { e.stopPropagation(); next(); }}>
        ›
      </button>
    </div>
  );

  return (
    <>
      <div className="slider">
        <button className="nav left" onClick={prev}>‹</button>

        <img
          src={images[current]}
          className="slider-image fade"
          onClick={() => setIsModalOpen(true)}
          alt="project"
        />

        <button className="nav right" onClick={next}>›</button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={(e) => {
                e.stopPropagation(); 
                setCurrent(index);
            }}
          >
            ●
          </span>
        ))}
      </div>

      {/*Renderiza el Modal fuera del árbol*/}
      {isModalOpen && createPortal(<Modal />, document.body)}
    </>
  );
};