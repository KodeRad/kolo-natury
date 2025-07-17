'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { SelectedGallery } from '../types';

type GalleryModalProps = {
    selectedGallery: SelectedGallery
    closeModal: () => void;
    currentImageIndex: number;
    nextImage: () => void;
    prevImage: () => void;
};

export default function GalleryModal ({selectedGallery, closeModal, currentImageIndex, nextImage, prevImage}: GalleryModalProps) {

    const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 2rem;
    `;

    const ModalContent = styled.div`
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    const ModalHeader = styled.div`
    padding: 1rem 2rem;
    background: #2d5016;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

    const ModalTitle = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    `;

    const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    `;

    const SlideContainer = styled.div`
    position: relative;
    width: 900px;
    height: 600px;
    background: #f5f5f5;
    
    @media (max-width: 1024px) {
        width: 85vw;
        height: 60vh;
    }
    
    @media (max-width: 768px) {
        width: 90vw;
        height: 55vh;
    }
    
    @media (max-width: 480px) {
        width: 95vw;
        height: 50vh;
    }
    `;

    const SlideImage = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(45deg, #2d5016, #4a7c23, #6b9129);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    `;

    const NavigationButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;

    &:hover {
    background: rgba(0, 0, 0, 0.7);
    }

    &.prev {
    left: 1rem;
    }

    &.next {
    right: 1rem;
    }
    `;

    const SlideCounter = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    `;



    return (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{selectedGallery?.title}</ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <SlideContainer>
              <SlideImage>
                {selectedGallery?.images[currentImageIndex].startsWith('/') ? (
                  <Image
                    src={selectedGallery.images[currentImageIndex]}
                    alt={`${selectedGallery.title} - ${currentImageIndex + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  selectedGallery?.images[currentImageIndex]
                )}
              </SlideImage>
              <NavigationButton className="prev" onClick={prevImage}>
                &#10094;
              </NavigationButton>
              <NavigationButton className="next" onClick={nextImage}>
                &#10095;
              </NavigationButton>
              <SlideCounter>
                {currentImageIndex + 1} / {selectedGallery?.images.length}
              </SlideCounter>
            </SlideContainer>
          </ModalContent>
        </Modal>
    )
}