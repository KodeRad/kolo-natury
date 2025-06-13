'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%234a7c23" width="1200" height="600"/><rect fill="%236b9129" x="0" y="300" width="1200" height="300"/><circle fill="%23ffd700" cx="1000" cy="100" r="60"/><polygon fill="%232d5016" points="200,300 400,200 600,300 400,400"/><polygon fill="%232d5016" points="700,300 900,250 1100,300 900,350"/></svg>');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background: #4a7c23;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 124, 35, 0.3);
  
  &:hover {
    background: #5d9129;
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
  background: #4a7c23;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const GalleryItem = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #4a7c23, #6b9129);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
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
  return (
    <Page>
      <Header>
        <Logo>Koło Natury</Logo>
        <Nav>
          <NavLink href="#about">O nas</NavLink>
          <NavLink href="#services">Usługi</NavLink>
          <NavLink href="#gallery">Galeria</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Koło Natury Nowy Młyn</HeroTitle>
          <HeroSubtitle>
            Odkryj magię wiejskiego życia w sercu natury
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

      <Section id="services">
        <SectionTitle>Nasze usługi</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🏠</ServiceIcon>
            <ServiceTitle>Komfortowe noclegi</ServiceTitle>
            <ServiceDescription>
              Przytulne pokoje w klimacie wiejskim z pełnym wyposażeniem i dostępem do kuchni.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🌾</ServiceIcon>
            <ServiceTitle>Aktywności na farmie</ServiceTitle>
            <ServiceDescription>
              Udział w codziennych pracach gospodarskich, karmienie zwierząt, zbiór warzyw i owoców.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🥕</ServiceIcon>
            <ServiceTitle>Ekologiczne produkty</ServiceTitle>
            <ServiceDescription>
              Świeże warzywa, owoce, jaja i produkty mleczne prosto z naszego gospodarstwa.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🚴</ServiceIcon>
            <ServiceTitle>Wypożyczalnia rowerów</ServiceTitle>
            <ServiceDescription>
              Zwiedzaj okolicę na rowerach i odkrywaj piękne szlaki po malowniczej okolicy.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🍯</ServiceIcon>
            <ServiceTitle>Warsztaty kulinarne</ServiceTitle>
            <ServiceDescription>
              Naucz się przygotowywać tradycyjne potrawy z lokalnych, sezonowych składników.
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
      </Section>

      <Section id="gallery">
        <SectionTitle>Galeria</SectionTitle>
        <Gallery>
          <GalleryItem>Pole z uprawami</GalleryItem>
          <GalleryItem>Zwierzęta na pastwisku</GalleryItem>
          <GalleryItem>Pokoje gościnne</GalleryItem>
          <GalleryItem>Ogród warzywny</GalleryItem>
          <GalleryItem>Sala jadalna</GalleryItem>
          <GalleryItem>Okoliczne krajobrazy</GalleryItem>
        </Gallery>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666', fontStyle: 'italic' }}>
          * Zdjęcia będą wkrótce dodane - to są placeholdery
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
    </Page>
  );
}
