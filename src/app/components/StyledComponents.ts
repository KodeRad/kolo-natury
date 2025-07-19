import styled from '@emotion/styled';
    
export const Modal = styled.div`
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

export const ModalContent = styled.div`
position: relative;
max-width: 95vw;
max-height: 95vh;
height: 85vh;
background: white;
border-radius: 15px;
overflow: hidden;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.51);
`;

export const ModalHeader = styled.div`
padding: 0rem 1rem;
background: #2d5016;
color: white;
display: flex;
justify-content: right;
align-items: center;
`;

export const ModalTitle = styled.h3`
margin: 0;
font-size: 1.5rem;
`;

export const CloseButton = styled.button`
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

export const SlideContainer = styled.div`
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

export const SlideImage = styled.div`
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

export const NavigationButton = styled.button`
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

export const SlideCounter = styled.div`
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

export const Page = styled.div`
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

export const Header = styled.header`
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


export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d5016;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #2d5016;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4a7c23;
  }
`;

export const HeroSection = styled.section`
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

export const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

export const HeroLogo = styled.div`
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

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2d5016;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #4a7c23;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CTAButton = styled.button`
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

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ServiceCard = styled.div`
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

export const ServiceIcon = styled.div`
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

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d5016;
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const ContactSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
  text-align: center;
`;

export const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const Footer = styled.footer`
  background: #2d5016;
  color: white;
  text-align: center;
  padding: 2rem;
`;

export const Gallery = styled.div`
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

export const GalleryItem = styled.div`
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