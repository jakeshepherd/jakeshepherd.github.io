import { useState } from 'react';
import styled from 'styled-components';

import jake from '../../jake.jpg';

// Base styles for common patterns
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const NavbarContainer = styled(FlexContainer)`
    position: sticky;
    top: 0;
    width: 100%;
    background: #132136;
    padding: 12px 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 100;
`;

const ProfileContainer = styled(FlexContainer)`
    cursor: pointer;
`;

const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${props => props.imageUrl ? `url(${props.imageUrl})` : '#f0f0f0'};
    background-size: cover;
    background-position: center;
    position: relative;
    margin-left: 20px;
`;

const ContactDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    color: white;
    font-weight: 600;
`;

const Arrow = styled.span`
    margin-left: 4px;
`;

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: ${props => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
    z-index: 1000;
`;

const PopupContent = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    width: 85%;
    max-width: 350px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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

const WhyMonzoButton = styled.button`
    background: transparent;
    color: white;
    border: 1px solid white;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-left: auto;
    margin-right: 24px;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isWhyMonzoOpen, setIsWhyMonzoOpen] = useState(false);

    const contactDetails = [
        {
            icon: "📱",
            label: "Phone",
            value: "+44 777 559 5445"
        },
        {
            icon: "📧",
            label: "Email",
            value: "jakeshepherd98@gmail.com"
        },
        {
            icon: "📍",
            label: "Address",
            value: "Ground Floor Flat, 6 Hardy Road, Poole, BH14 9HN"
        }
    ];

    const whyMonzoReasons = [
        {
            icon: "🚀",
            label: "Innovation",
            value: "The opportunity to innovate and build products that are used by millions of customers daily"
        },
        {
            icon: "💪",
            label: "Impact",
            value: "Putting users at the forefront of technology to give them the best experience"
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

    return (
        <>
            <NavbarContainer>
                <div onClick={() => setIsPopupOpen(true)}>
                    <ProfileContainer>
                        <ProfilePicture imageUrl={jake} />
                        <ContactDetails>
                            Contact Details
                        </ContactDetails>
                    </ProfileContainer>
                </div>
                <WhyMonzoButton onClick={() => setIsWhyMonzoOpen(true)}>
                    Why Monzo?
                </WhyMonzoButton>
            </NavbarContainer>

            <PopupOverlay 
                isOpen={isPopupOpen} 
                onClick={() => setIsPopupOpen(false)}
            >
                <PopupContent onClick={e => e.stopPropagation()}>
                    {contactDetails.map((contact, index) => (
                        <ContactItem key={index}>
                            <IconWrapper>
                                {contact.icon}
                            </IconWrapper>
                            <ContactText>
                                <span>{contact.label}</span>
                                <span>{contact.value}</span>
                            </ContactText>
                        </ContactItem>
                    ))}
                </PopupContent>
            </PopupOverlay>

            <PopupOverlay 
                isOpen={isWhyMonzoOpen} 
                onClick={() => setIsWhyMonzoOpen(false)}
            >
                <PopupContent onClick={e => e.stopPropagation()}>
                    {whyMonzoReasons.map((reason, index) => (
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
        </>
    );
};
