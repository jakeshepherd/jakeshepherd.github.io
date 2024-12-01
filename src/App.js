import styled from 'styled-components';
import './App.css';
import { LandingPage } from './landing';
import { CareerJourney } from './careerJourney';

const AppPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background-color: #F2EDE3;
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

function App() {
  return (
    <AppPage>
    <LandingPage />
    <CareerJourney />
    </AppPage>
  );
}

export default App;
