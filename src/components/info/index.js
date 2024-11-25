import styled from 'styled-components';
import { useState } from 'react';
import resumePDF from '../../career-journey.pdf';

const InfoBanner = styled.div`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    align-items: center;
    background-color: #EBF5FF;
    border-radius: 8px;
    padding: 25px;
    margin: 16px;
    position: relative;
    gap: 12px;
    width: 60%;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0066FF;
    font-size: 20px;
`;

const TextContainer = styled.div`
    flex: 1;
    color: #1A1A1A;
    font-size: 16px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    font-size: 18px;
    padding: 4px;
    
    &:hover {
        color: #333;
    }
`;

export const Info = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <InfoBanner isVisible={isVisible}>
            <IconContainer>
                👋
            </IconContainer>
            <TextContainer>
                Hello, I'm <strong>Jake!</strong> I'm a software developer with a passion for using technology to make a difference in people's lives.{' '}
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    For more information, take a look at my CV
                </a>
            </TextContainer>
            <CloseButton onClick={() => setIsVisible(false)}>
                ✕
            </CloseButton>
        </InfoBanner>
    );
};