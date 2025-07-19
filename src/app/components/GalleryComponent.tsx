"use client";

import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import { Gallery, GalleryItem } from "./StyledComponents";

export default function GalleryComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<{
    id: number;
    title: string;
    images: string[];
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Nowy Młyn",
      images: ["/mlyn1.jpg", "/mlyn2.jpg", "/mlyn3.jpg"],
    },
    {
      id: 2,
      title: "Okoliczne krajobrazy",
      images: ["/krajobraz1.jpg", "/krajobraz2.jpg", "/krajobraz3.jpg"],
    },
    {
      id: 3,
      title: "Zwierzaki",
      images: ["/zwierze1.jpg", "/zwierze2.jpg", "/zwierze3.jpg"],
    },
  ];

  const openModal = (galleryIndex: number) => {
    setSelectedGallery(galleryItems[galleryIndex]);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen) {
        switch (event.key) {
          case "Escape":
            closeModal();
            break;
          case "ArrowLeft":
            prevImage();
            break;
          case "ArrowRight":
            nextImage();
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedGallery, nextImage, prevImage]);

  return (
    <>
      <Gallery>
        {galleryItems.map((item, index) => (
          <GalleryItem key={item.id} onClick={() => openModal(index)}>
            {item.title}
          </GalleryItem>
        ))}
      </Gallery>
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Zdjęcia przedstawiające piękno naszego gospodarstwa i okolicznych
        terenów.
      </p>
      {isOpen && selectedGallery && (
        <GalleryModal
          selectedGallery={selectedGallery}
          closeModal={closeModal}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </>
  );
}
