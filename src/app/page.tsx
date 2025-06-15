'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Styled Components
const Page = styled.div`
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d5016;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #2d5016;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #4a7c23;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
              url('/paper-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #2d5016;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroLogo = styled.div`
  margin-top: 5rem;
  
  img {
    width: 400px;
    height: 400px;
    
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
    
    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2d5016;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #4a7c23;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #2d5016, #4a7c23);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 124, 35, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url('/tiny-kolo-natury-transparent.png') no-repeat center;
    background-size: contain;
    opacity: 0.5;
  }
  
  &:hover {
    background: linear-gradient(135deg, #4a7c23, #6b9129);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 124, 35, 0.4);
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d5016;
  font-weight: bold;
`;

const ServiceSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2d5016, #4a7c23);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  box-shadow: 0 4px 15px rgba(74, 124, 35, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: url('/tiny-kolo-natury-transparent.png') no-repeat center;
    background-size: contain;
    opacity: 0.2;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d5016;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

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
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: url('/tiny-kolo-natury-transparent.png') no-repeat center;
    background-size: contain;
    opacity: 0.3;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

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
  max-width: 90vw;
  max-height: 90vh;
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
  width: 600px;
  height: 400px;
  background: #f5f5f5;
  
  @media (max-width: 768px) {
    width: 80vw;
    height: 50vh;
  }
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #2d5016, #4a7c23, #6b9129);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
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

const ContactSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background: #2d5016;
  color: white;
  text-align: center;
  padding: 2rem;
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    { id: 1, title: 'Nowy Młyn', images: ['Zdjęcie 1', 'Zdjęcie 2', 'Zdjęcie 3'] },
    { id: 2, title: 'Okoliczne krajobrazy', images: ['Krajobraz 1', 'Krajobraz 2', 'Krajobraz 3', 'Krajobraz 4'] },
    { id: 3, title: 'Zwierzaki', images: ['Zwierzę 1', 'Zwierzę 2', 'Zwierzę 3'] },
  ];

  const [selectedGallery, setSelectedGallery] = useState<{id: number, title: string, images: string[]} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedGallery]);

  return (
    <Page>
      <Header>
        <LogoContainer>
          <Image 
            src="/tiny-kolo-natury-transparent.png" 
            alt="Koło Natury Logo" 
            width={40} 
            height={40}
          />
          <Logo>Koło Natury</Logo>
        </LogoContainer>
        <Nav>
          <NavLink href="#about">O nas</NavLink>
          <NavLink href="#services">Usługi</NavLink>
          <NavLink href="#gallery">Galeria</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <HeroLogo>
            <Image 
              src="/tiny-kolo-natury-transparent.png" 
              alt="Koło Natury Logo" 
              width={400} 
              height={400}
            />
          </HeroLogo>
          <HeroTitle>Koło Natury Nowy Młyn</HeroTitle>
          <HeroSubtitle>
            Odkryj magię prawdziwej natury w swoim sercu.
          </HeroSubtitle>
          <CTAButton>Zarezerwuj pobyt</CTAButton>
        </HeroContent>
      </HeroSection>

      <Section id="about">
        <SectionTitle>O naszym gospodarstwie</SectionTitle>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          Koło Natury Nowy Młyn to malownicze gospodarstwo agroturystyczne położone w spokojnej okolicy,
          gdzie tradycyjne wiejskie życie spotyka się z nowoczesnym komfortem. Oferujemy autentyczne
          doświadczenia związane z życiem na wsi, ekologiczne produkty z własnej hodowli oraz
          niezapomniane chwile w otoczeniu natury.
        </p>
      </Section>

      <ServiceSection id="services">
        <ServiceContainer>
          <SectionTitle>Nasze usługi</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🏠</ServiceIcon>
              <ServiceTitle>Komfortowe noclegi</ServiceTitle>
              <ServiceDescription>
                Przytulne pokoje w sercu puszczy Rzepińskiej z pełnym wyposażeniem i dostępem do kuchni.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🌳</ServiceIcon>
              <ServiceTitle>Wspaniałe miejsca na spacery</ServiceTitle>
              <ServiceDescription>
                Odkryj malownicze szlaki spacerowe i rowerowe w otoczeniu natury, idealne na relaks i aktywność.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🏕️</ServiceIcon>
              <ServiceTitle>Pole namiotowe</ServiceTitle>
              <ServiceDescription>
                Oferujemy przestronne pole namiotowe w otoczeniu natury, idealne dla miłośników biwakowania.
              </ServiceDescription>
            </ServiceCard>

            {/* TODO: Wypożyczalnia rowerów,  */}

            <ServiceCard>
              <ServiceIcon>🐕</ServiceIcon>
              <ServiceTitle>Hotel dla psów</ServiceTitle>
              <ServiceDescription>
                Oferujemy komfortowy hotel dla psów, gdzie Twój pupil będzie mógł odpocząć, a Ty ze spokojną głową będziesz mógł cieszyć się czasem dla siebie.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🍄‍🟫</ServiceIcon>
              <ServiceTitle>Lasy pełne grzybów</ServiceTitle>
              <ServiceDescription>
                W sezonie grzybobrania oferujemy wycieczki do lasów pełnych grzybów, idealne dla miłośników grzybobrania.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🔥</ServiceIcon>
              <ServiceTitle>Ognisko i grill</ServiceTitle>
              <ServiceDescription>
                Wieczorne ogniska z pieczeniem kiełbasek i opowiadaniem historii pod gwiazdami.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServiceContainer>
      </ServiceSection>

      <Section id="gallery">
        <SectionTitle>Galeria</SectionTitle>
        <Gallery>
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} onClick={() => openModal(index)}>
              {item.title}
            </GalleryItem>
          ))}
        </Gallery>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666', fontStyle: 'italic' }}>
          Zdjęcia przedstawiające piękno naszego gospodarstwa i okolicznych terenów.
        </p>
      </Section>

      <ContactSection id="contact">
        <SectionTitle>Skontaktuj się z nami</SectionTitle>
        <ContactInfo>
          <ContactCard>
            <h3 style={{ color: '#2d5016', marginBottom: '1rem' }}>📍 Adres</h3>
            <p>Nowy Młyn 123<br />12-345 Koło Natury<br />Polska</p>
          </ContactCard>
          
          <ContactCard>
            <h3 style={{ color: '#2d5016', marginBottom: '1rem' }}>📞 Kontakt</h3>
            <p>Tel: +48 123 456 789<br />Email: info@kolonaturynovymlyn.pl</p>
          </ContactCard>
        </ContactInfo>
        
        <div style={{ marginTop: '3rem' }}>
          <CTAButton>Sprawdź dostępność</CTAButton>
        </div>
      </ContactSection>

      <Footer>
        <p>&copy; 2025 Koło Natury Nowy Młyn. Wszystkie prawa zastrzeżone.</p>
      </Footer>

      {isOpen && selectedGallery && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{selectedGallery.title}</ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <SlideContainer>
              <SlideImage>
                {selectedGallery.images[currentImageIndex]}
              </SlideImage>
              <NavigationButton className="prev" onClick={prevImage}>
                &#10094;
              </NavigationButton>
              <NavigationButton className="next" onClick={nextImage}>
                &#10095;
              </NavigationButton>
              <SlideCounter>
                {currentImageIndex + 1} / {selectedGallery.images.length}
              </SlideCounter>
            </SlideContainer>
          </ModalContent>
        </Modal>
      )}
    </Page>
  );
}
