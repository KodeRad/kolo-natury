'use client';

import Image from 'next/image';
import { SelectedGallery } from '../types';
import { Modal, ModalContent, ModalHeader, CloseButton, SlideContainer, SlideImage, NavigationButton, SlideCounter } from './StyledComponents';

type GalleryModalProps = {
    selectedGallery: SelectedGallery
    closeModal: () => void;
    currentImageIndex: number;
    nextImage: () => void;
    prevImage: () => void;
};

export default function GalleryModal ({selectedGallery, closeModal, currentImageIndex, nextImage, prevImage}: GalleryModalProps) {


    return (
        <Modal>
          <ModalContent>
            <ModalHeader>
              {/* <ModalTitle>{selectedGallery?.title}</ModalTitle> */}
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