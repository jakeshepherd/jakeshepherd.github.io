import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

const CardPage = styled.div`
    width: 75%;
    height: 200px;
    border-radius: 12px;
    padding: 20px;
    position: relative;
    margin: -120px 0 0 0;
    transition: all 0.3s ease;
    cursor: pointer;

    ${props => props.variant === 'primary' && `
        background: linear-gradient(45deg, #EB5B5D, #EB5B5D);   
        color: white;
    `}
    ${props => props.variant === 'secondary' && `
        background: linear-gradient(45deg, #FFFFFF, #FFFFFF);   
        color: black;
    `}

    &:first-child {
        margin-top: 0;
    }

    ${props => props.isActive && `
        transform: scale(1.05);
        z-index: 10;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    `}

    ${props => !props.isActive && `
        filter: brightness(0.9);
    `}
`;

const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: bold;
    font-size: 1.2rem;
`;

const Balance = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.4rem;
    font-weight: bold;
`;

const ActionButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    color: white;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    
    &:first-of-type {
        left: 20px;
    }
    
    &:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
    }

    ${props => props.variant === 'primary' && `
        background: linear-gradient(45deg, #EB5B5D, #EB5B5D);   
        color: white;
    `}

    ${props => props.variant === 'secondary' && `
        background: linear-gradient(45deg, #FFFFFF, #FFFFFF);   
        color: black;
    `}
`;

const MenuButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    ${props => props.variant === 'primary' && `
        background: linear-gradient(45deg, #EB5B5D, #EB5B5D);   
        color: white;
    `}
    
    ${props => props.variant === 'secondary' && `
        background: linear-gradient(45deg, #FFFFFF, #FFFFFF);   
        color: black;
    `}
`;

const TransactionsList = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 180px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
    z-index: 1;
    min-height: 200px;
    max-height: calc(80vh - 180px);
    height: auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    margin-top: 60px;
    overflow-y: auto;
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    scrollbar-width: none;
    
    ${props => props.isVisible && `
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    `}
`;

const TransactionsTitle = styled.h3`
    margin: 0 0 16px 0;
    color: #333;
    font-size: 1.2rem;
`;

const TransactionItem = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
        border-bottom: none;
    }
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
`;

const TransactionDetails = styled.div`
    flex: 1;
    color: #333;
`;

const Description = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1rem;
    max-width: 80%;
`;

export const CardStack = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [showTransactions, setShowTransactions] = useState(false);

    const cards = [
        { 
            id: 1, 
            name: "June '19 - July '20", 
            balance: "Mayden",
            description: "Placement full stack developer (PHP, Javascript, MySQL, AJAX)",
            variant: 'primary',
            transactions: [
                { id: 1, title: "Adaptability to work across multiple teams to gain a variety of experiences", amount: "-£32.50", icon: "🏋️", type: 'debit' },
                { id: 2, title: "First experience of working as a professional in technology", amount: "+£2,500.00", icon: "🧑‍💻", type: 'credit' },
                { id: 3, title: "Working in an agile team where I was encouraged to share my thoughts", amount: "-£15.99", icon: "🧠", type: 'debit' },
            ]
        },
        { id: 2, name: "July '21 - March '24", balance: "Mayden", description: "Full stack developer (PHP, Javascript, MySQL, Laravel, Symfony, AJAX, React, TDD, Devops)", variant: 'secondary',
            transactions: [
                { id: 1, title: "Involved in strategic decision making about international product progression & wider market adaptation", amount: "-£32.50", icon: "📕", type: 'debit' },
                { id: 2, title: "Conducting Test Driven Development to ensure the successful deployment of features in a legacy system", amount: "+£2,500.00", icon: "🧪", type: 'credit' },
                { id: 3, title: "Coaching and mentoring more junior members of the team", amount: "-£15.99", icon: "⚽️", type: 'debit' },
                { id: 4, title: "Deploy user - Developing an understanding of the technical infrastructure from a dev ops perpsective and leveraging this knowledge to optimise deployments", amount: "-£9.99", icon: "💿", type: 'debit' },
                { id: 5, title: "Communication with stakeholders and product owners of the software to discuss and prioritise current work and help garden backlogs", amount: "-£9.99", icon: "🪴", type: 'debit' },
                { id: 6, title: "Taking on a leadership role, facilitating open and transparent team wide discussions", amount: "-£9.99", icon: "🗣️", type: 'debit' },
            ] },
        { id: 3, name: "March '24 - Current", balance: "WVS",description: "Full stack developer (Javascript, NextJS, ExpressJS, Azure, AWS)", variant: 'primary',
            transactions: [
                { id: 1, title: "Working as a mid level developer and most senior member of the team", amount: "-£32.50", icon: "🧑‍💻", type: 'debit' },
                { id: 2, title: "Developing project management skills by leading on new projects", amount: "+£2,500.00", icon: "✏️", type: 'credit' },
                { id: 3, title: "Creating secure, scalable, robust code which has been vital to ensure the charity can continue to get volunteers, donations and record data in the field", amount: "-£15.99", icon: "🐕", type: 'debit' },
                { id: 4, title: "As one of the first developers to join the technical team, I have been able to help shape a young team", amount: "-£9.99", icon: "👔", type: 'debit' },
                { id: 5, title: "Building product expertise and knowledge to support growth", amount: "-£9.99", icon: "🧠", type: 'debit' },
            ] },
    ];

    const handleCardClick = (id) => {
        if (activeCard === id) {
            setShowTransactions(false);
            setTimeout(() => setActiveCard(null), 300); // Wait for transition before hiding card
        } else {
            setActiveCard(id);
            setTimeout(() => setShowTransactions(true), 100); // Slight delay before showing transactions
        }
    };

    return (
        <CardContainer>
            {cards.map((card) => (
                <CardPage 
                    key={card.id}
                    isActive={activeCard === card.id}
                    onClick={() => handleCardClick(card.id)}
                    style={{ zIndex: activeCard === card.id ? 2 : 1 }}
                    variant={card.variant}
                >
                    <Logo>{card.name}</Logo>
                    <Balance>{card.balance}</Balance>
                    <Description>{card.description}</Description>
                    {activeCard === card.id && (
                        <>
                            <ActionButton variant={card.variant}>Pay</ActionButton>
                            <ActionButton variant={card.variant}>Send</ActionButton>
                            <MenuButton variant={card.variant}>⋮</MenuButton>
                            {card.transactions && (
                                <TransactionsList isVisible={showTransactions}>
                                    <TransactionsTitle>Experience & Achievements</TransactionsTitle>
                                    {card.transactions.map(transaction => (
                                        <TransactionItem key={transaction.id}>
                                            <IconContainer>
                                                {transaction.icon}
                                            </IconContainer>
                                            <TransactionDetails>
                                                {transaction.title}
                                            </TransactionDetails>
                                        </TransactionItem>
                                    ))}
                                </TransactionsList>
                            )}
                        </>
                    )}
                </CardPage>
            ))}
        </CardContainer>
    );
};

