"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import GalleryComponent from "./components/GalleryComponent";
import { useState } from "react";
import GalleryModal from "./components/GalleryModal";

// Styled Components
const Page = styled.div`
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;Ŕ
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d5016;
  font-weight: bold;
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
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/paper-background.png");
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
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: url("/tiny-kolo-natury-transparent.png") no-repeat center;
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
  const [selectedGallery, setSelectedGallery] = useState<{
    id: number;
    title: string;
    images: string[];
  } | null>(null);

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
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            color: "#666",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Koło Natury Nowy Młyn to malownicze gospodarstwo agroturystyczne
          położone w spokojnej okolicy, gdzie tradycyjne wiejskie życie spotyka
          się z nowoczesnym komfortem. Oferujemy autentyczne doświadczenia
          związane z życiem na wsi, ekologiczne produkty z własnej hodowli oraz
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
                Przytulne pokoje w sercu puszczy Rzepińskiej z pełnym
                wyposażeniem i dostępem do kuchni.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🌳</ServiceIcon>
              <ServiceTitle>Wspaniałe miejsca na spacery</ServiceTitle>
              <ServiceDescription>
                Odkryj malownicze szlaki spacerowe i rowerowe w otoczeniu
                natury, idealne na relaks i aktywność.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🏕️</ServiceIcon>
              <ServiceTitle>Pole namiotowe</ServiceTitle>
              <ServiceDescription>
                Oferujemy przestronne pole namiotowe w otoczeniu natury, idealne
                dla miłośników biwakowania.
              </ServiceDescription>
            </ServiceCard>

            {/* TODO: Wypożyczalnia rowerów, inne usługi, center it no matter the ammount  */}

            <ServiceCard>
              <ServiceIcon>🐕</ServiceIcon>
              <ServiceTitle>Hotel dla psów</ServiceTitle>
              <ServiceDescription>
                Oferujemy komfortowy hotel dla psów, gdzie Twój pupil będzie
                mógł odpocząć, a Ty ze spokojną głową będziesz mógł cieszyć się
                czasem dla siebie.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🍄‍🟫</ServiceIcon>
              <ServiceTitle>Lasy pełne grzybów</ServiceTitle>
              <ServiceDescription>
                W sezonie grzybobrania oferujemy wycieczki do lasów pełnych
                grzybów, idealne dla miłośników grzybobrania.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🔥</ServiceIcon>
              <ServiceTitle>Ognisko i grill</ServiceTitle>
              <ServiceDescription>
                Wieczorne ogniska z pieczeniem kiełbasek i opowiadaniem historii
                pod gwiazdami.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServiceContainer>
      </ServiceSection>

      <Section id="gallery">
        <SectionTitle>Galeria</SectionTitle>
        <GalleryComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedGallery={selectedGallery}
          setSelectedGallery={setSelectedGallery}
        />
      </Section>

      <ContactSection id="contact">
        <SectionTitle>Skontaktuj się z nami</SectionTitle>
        <ContactInfo>
          <ContactCard>
            <h3 style={{ color: "#2d5016", marginBottom: "1rem" }}>📍 Adres</h3>
            <p>
              Nowy Młyn 123
              <br />
              12-345 Koło Natury
              <br />
              Polska
            </p>
          </ContactCard>

          <ContactCard>
            <h3 style={{ color: "#2d5016", marginBottom: "1rem" }}>
              📞 Kontakt
            </h3>
            <p>
              Tel: +48 123 456 789
              <br />
              Email: info@kolonaturynovymlyn.pl
            </p>
          </ContactCard>
        </ContactInfo>

        <div style={{ marginTop: "3rem" }}>
          <CTAButton>Sprawdź dostępność</CTAButton>
        </div>
      </ContactSection>

      <Footer>
        <p>&copy; 2025 Koło Natury Nowy Młyn. Wszystkie prawa zastrzeżone.</p>
      </Footer>

      {isOpen && selectedGallery && <GalleryModal />}
    </Page>
  );
}
