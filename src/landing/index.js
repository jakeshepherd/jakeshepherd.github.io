// src/landing/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import jake from '../jake.png';
import jakeCV from '../cv-jake-shepherd.pdf';

const LandingContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #F2EDE3;
    color: #39211A;
`;

const Greeting = styled.h1`
    font-size: 22px;
    font-weight: 200;
`;

const WorkRecommendation = styled.div`
    margin-bottom: 30px;
`;

const RecommendationCard = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const CardContent = styled.div`
    padding: 20px;
`

const Subtitle = styled.h3`
    font-size: 18px;
    margin: 10px 0;
`;

const Description = styled.p`
    font-size: 14px;
    color: #39211A;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 1.5rem;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
`;

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #F2EDE3;
    z-index: 10;
    border-bottom: 1px solid gray;
    padding: 10px 20px;
    margin-bottom: 20px;
`;

const PopupContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 12px;
    padding: 24px;
    width: 85%;
    max-width: 350px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    
    span:first-child {
        font-weight: 600;
        color: #333;
        margin-bottom: 4px;
    }
    
    span:last-child {
        color: #666;
        font-size: 14px;
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
        border-bottom: none;
    }
`;

export const LandingPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const contactInfoList = [
        {
            icon: "📞",
            title: "Phone",
            description: "+44 7775595445"
        },
        {
            icon: "✉️",
            title: "Email",
            description: "jakeshepherd98@gmail.com"
        },
        {
            icon: "📍",
            title: "Address",
            description: "Ground Floor Flat, 6 Hardy Road, Poole, BH14 9HN"
        }
    ];

    const toggleContactPopup = () => {
        setIsContactPopupOpen(!isContactPopupOpen);
    };

    const whyUnmind = [
        {
            icon: "💪",
            label: "Impact",
            value: "Putting users first to improve lives"
        },
        {
            icon: "🚀",
            label: "Innovation",
            value: "The opportunity to innovate in a startup environment"
        },
        {
            icon: "🌱",
            label: "Growth",
            value: "Exceptional learning and development opportunities"
        },
        {
            icon: "🧑‍🍳",
            label: "Culture",
            value: "A welcoming environment to help it's employees grow"
        }
    ];

    // Function to determine the greeting based on the current time
    const getGreetingMessage = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "👋 Good morning";
        } else if (hour < 18) {
            return "👋 Good afternoon";
        } else {
            return "👋 Good evening";
        }
    };

    return (
        <LandingContainer>
            <Navbar>
                <Greeting>{getGreetingMessage()}</Greeting>
                <div onClick={togglePopup} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#F2EDE3', borderRadius: '5px', border: '1px solid gray' }}>
                    Why Unmind?
                </div>
            </Navbar>
            {isPopupOpen && (
                <PopupOverlay onClick={togglePopup}>
                <PopupContent onClick={e => e.stopPropagation()}>
                    {whyUnmind.map((reason, index) => (
                        <ContactItem key={index}>
                            <IconWrapper>
                                {reason.icon}
                            </IconWrapper>
                            <ContactText>
                                <span>{reason.label}</span>
                                <span>{reason.value}</span>
                            </ContactText>
                        </ContactItem>
                    ))}
                </PopupContent>
                </PopupOverlay>
            )}
            <WorkRecommendation>
                <RecommendationCard>
                    <img src={jake} alt="Managing Stress" style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                    <CardContent>
                        <Subtitle>Hello, I'm <strong>Jake</strong></Subtitle>
                        <Description>I'm a software developer with a passion 
                for using technology to make a difference in people's lives.</Description>

                        <Description><a 
                            href={jakeCV} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            For more information, take a look at my CV
                        </a>.</Description>
                        <Buttons>
                            <Button onClick={toggleContactPopup}>Contact Information →</Button>
                        </Buttons>
                    </CardContent>
                </RecommendationCard>
            </WorkRecommendation>
            {isContactPopupOpen && (
                <PopupOverlay onClick={toggleContactPopup}>
                    <PopupContent onClick={e => e.stopPropagation()}>
                        {contactInfoList.map((contactInfo, index) => (
                            <ContactItem key={index}>
                                <IconWrapper>
                                    {contactInfo.icon}
                                </IconWrapper>
                                <ContactText>
                                    <span>{contactInfo.title}</span>
                                    <span>{contactInfo.description}</span>
                                </ContactText>
                            </ContactItem>
                        ))}
                    </PopupContent>
                </PopupOverlay>
            )}
            {/* Additional content can go here */}
        </LandingContainer>
    );
}