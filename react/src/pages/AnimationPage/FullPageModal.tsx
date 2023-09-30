import React, { useEffect, useRef } from "react";
import { useModalContext } from "src/hooks/useModalContext";
import "./AnimationPage.css";

import image1 from "/images/landing/bg1.jpg";
import image2 from "/images/landing/bg2.jpeg";
import image3 from "/images/landing/bg3.jpeg";

const images = [image1, image2, image3];

const randomImage = images[Math.floor(Math.random() * images.length)];

const FullPageModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isVisible, closeModal } = useModalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideModalSmoothly();
    }, 6400);

    return () => clearTimeout(timer);
  }, []);

  const hideModalSmoothly = () => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.style.opacity = "0";
      setTimeout(() => {
        closeModal(); // This uses the closeModal from the context
      }, 1000); // 1s transition
    }
  };

  hideModalSmoothly();

  if (!isVisible) return null;

  return (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full transition-opacity duration-1000"
      style={{ opacity: 1, zIndex: 9999 }}
    >
      <div
        style={{
          backgroundImage: `url(${randomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="text-gray-100 mb-6 flex flex-col items-center gap-3">
          <div className="logo text-[10pt]">
            <span className="party">N</span>
            <span className="party">E</span>
            <span className="party">W</span>
            <span className="party">R</span>
            <span className="party">E</span>
            <span className="party">L</span>
            <span className="party">I</span>
            <span className="party">G</span>
            <span className="party">I</span>
            <span className="party">O</span>
            <span className="party">N</span>
            <span className="x">X</span>
          </div>

          <h2 className="text-gray-300 font-bold text-[12pt] mb-2 font-mono">
            The most destructive plan
          </h2>
        </div>
        <button
          onClick={() => hideModalSmoothly()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-lg hover:shadow-xl"
        >
          Go to Website
        </button>
      </div>
    </div>
  );
};

export default FullPageModal;
