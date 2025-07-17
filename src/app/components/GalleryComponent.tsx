"use client";

import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #2d5016, #4a7c23, #6b9129);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: url("/tiny-kolo-natury-transparent.png") no-repeat center;
    background-size: contain;
    opacity: 0.3;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

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
  }, [isOpen, selectedGallery]);

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
