import './App.css';
import styled from 'styled-components';
import { Navbar } from './components/navbar';
import { CardStack } from './components/card';
import { Info } from './components/info';
import { useState } from 'react';

const AppPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background-color: #132136;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  color: #fff;

  
  @media (min-width: 421px) {
    height: 90vh;
    margin: 5vh auto;
    border-radius: 20px;
  }
`;

const WelcomeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #132136;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.isExiting ? 0 : 1};
  transition: opacity 0.5s ease-in-out;
  padding: 20px;
  text-align: center;
  border-radius: inherit;
`;

const WelcomeText = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 600;
`;

const WelcomeMessage = styled.p`
  font-size: 1.1rem;
  color: #B8C1CF;
  margin-bottom: 30px;
  line-height: 1.5;
  max-width: 80%;
`;

const ContinueButton = styled.button`
  padding: 12px 24px;
  background-color: #EB5B5D;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleContinue = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 500);
  };

  return (
    <AppPage>
      {(!showWelcome || isExiting) && (
        <>
          <Navbar />
          <Info />
          <CardStack />
        </>
      )}
      {showWelcome && (
        <WelcomeOverlay isExiting={isExiting}>
          <WelcomeText>Welcome! 👋</WelcomeText>
          <WelcomeMessage>
            Thank you for visiting my website. I've created this Monzo-inspired 
            interface to make reading CVs slightly more interesting and show what I can do.
          </WelcomeMessage>
          <ContinueButton onClick={handleContinue}>
            Let's Begin
          </ContinueButton>
        </WelcomeOverlay>
      )}
    </AppPage>
  );
}

export default App;
