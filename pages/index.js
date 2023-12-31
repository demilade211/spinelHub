import AppLayout from '../layouts/AppLayout';
import styled from 'styled-components';
import HeroSection from '../components/pages/home/HeroSection';
import SecondSection from '../components/pages/home/SecondSection';
import DealsSection from '../components/pages/home/DealsSection';

export default function Home() {
  return (
    <Con>
      <AppLayout>
        <HeroSection />
        <SecondSection />
        <DealsSection />
      </AppLayout>
    </Con>
  );
}

const Con = styled.section`  
  width: 100%;   
`;