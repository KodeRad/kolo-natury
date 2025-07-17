"use client";

import Image from "next/image";
import GalleryComponent from "./components/GalleryComponent";
import { Page, Header, LogoContainer, Logo, Nav, NavLink, HeroSection, HeroContent, HeroLogo, HeroTitle, HeroSubtitle, CTAButton, Section, SectionTitle, ServiceSection, ServiceContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ContactSection, ContactInfo, ContactCard, Footer } from "./components/StyledComponents";

export default function Home() {
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
        <GalleryComponent />
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
    </Page>
  );
}
