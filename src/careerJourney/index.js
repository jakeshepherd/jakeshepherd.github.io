import styled from "styled-components";
import { useState } from "react";

const sharedCardStyles = `
    border-radius: 12px;
    padding: 20px;
    position: relative;
`;

const sharedTransactionListStyles = `
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const CardContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 100vh;
`;

const CardPage = styled.div`
    width: 75%;
    height: 220px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 20px;
    color: black;
    ${sharedCardStyles}

    &:first-child {
        margin-top: 0;
    }

    ${({ variant, isActive }) => `
        background: ${variant === 'primary' ? '#A8DADC' : variant === 'tertiary' ? '#B2E0D4' : '#F1FAEE'};
        transform: ${isActive ? 'scale(1.05)' : 'none'};
        z-index: ${isActive ? '10' : 'auto'};
        box-shadow: ${isActive ? '0 4px 20px rgba(0,0,0,0.2)' : 'none'};
        filter: ${!isActive ? 'brightness(0.9)' : 'none'};
    `}

    &:hover {
        transform: scale(1.05);
    }
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
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: black;

    ${({ variant }) => `
        background: ${variant === 'primary' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
    `}
`;

const TransactionsList = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 180px;
    min-height: 200px;
    margin-top: 60px;
    ${sharedTransactionListStyles}
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
    left: 20px;
    right: 20px;
    transform: translateY(-50%);
    text-align: center;
    font-size: 1rem;
`;

const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 80%;
    max-width: 340px;
    max-height: 80vh;
    overflow-y: auto;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    color: black;
    white-space: pre-wrap;

    ${props => props.isVisible && `
        opacity: 1;
        pointer-events: all;
    `}
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 99;

    ${props => props.isVisible && `
        opacity: 1;
        pointer-events: all;
    `}
`;

const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px;
`;

const FixedTransactionsList = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 385px;
    background: white;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
    padding: 20px;
    overflow-y: auto;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: ${props => props.isExpanded ? '98' : '1'};
    opacity: 1;
    transform: translate(-50%, 0);

    ${props => props.isExpanded ? `
        height: 80vh;
        max-height: 600px;
    ` : `
        height: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        overflow: hidden;
    `}

    ${props => props.isExiting && `
        opacity: 0;
        transform: translate(-50%, 100%);
    `}

    @media (min-width: 421px) {
        ${props => !props.isExpanded && `
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            bottom: 20px;
            max-width: 385px;
        `}
    }
`;

const TransactionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const Spacer = styled.div`
    height: 100px;
`
const Title = styled.h2`
    margin: 0;
    color: black;
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    text-align: left;
    padding-left: 60px;
`

export const CareerJourney = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [showTransactions, setShowTransactions] = useState(false);
    const [popupCardId, setPopupCardId] = useState(null);
    const [isTransactionsExpanded, setIsTransactionsExpanded] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const cards = [
        {
            id: 1,
            name: "June '19 - July '20",
            balance: "Mayden",
            description: "Placement year as a full stack developer (PHP, Javascript, MySQL, AJAX)",
            variant: 'primary',
            transactions: [
                {
                    id: 1,
                    title: "Adaptability to work across multiple teams to gain a variety of experiences",
                    icon: "🏋️",
                },
                { id: 2, title: "First experience of working as a professional in technology", icon: "🧑‍💻" },
                { id: 3, title: "Working in an agile team where I was encouraged to share my thoughts", icon: "🧠" },
            ],
            moreInformation: "My placement year was a great opportunity for me to gain experience working on small tickets that were part of larger projects.\n\nAs a newcomer to development, I realised how important it is to be able to pick up new skills and technologies quickly, a skill I have continued evolve throughout my career."
        },
        { id: 2, name: "July '21 - March '24", balance: "Mayden", description: "Returning full stack developer creating features for an application supporting <b>8M+ patients</b>, progressing to senior team member (PHP, Javascript, MySQL)", variant: 'secondary',
            transactions: [
                { id: 6, title: "Taking on a leadership role, facilitating open and transparent team wide discussions as well as contributing with my own opinions to create a safe and secure application.", icon: "🗣️" },
                { id: 5, title: "Cross team communication with stakeholders, product owners & UX teams of the software to discuss and prioritise current work and help garden backlogs", icon: "🪴" },
                { id: 3, title: "Coaching and mentoring more junior members of the team to create an encouraging team environment", icon: "⚽️" },
                { id: 2, title: "Conducting Test Driven Development to ensure the successful deployment of features in a legacy system", icon: "🧪" },
                { id: 1, title: "Involved in strategic decision making about international product progression & wider market adaptation", icon: "📕" },
                { id: 4, title: "Release team - Developing an understanding of the technical infrastructure from a dev ops perpsective and leveraging this knowledge to optimise deployments", icon: "💿" },
            ],
            moreInformation: "When I returned to Mayden, I was able to take on a leadership role in the team which then developed to outside of the team as well.\n\nMy role also moved away from working on individual tickets to assist more with project level planning and ensuring that projects were delivered, whilst also getting involved with the codebase."
        },
        { id: 3, name: "March '24 - Current", balance: "WVS", description: "Mid level engineer diving into existing projects and leading on new projects for the charity (Typescript, NodeJS, Azure, AWS)", variant: 'tertiary',
            transactions: [
                { id: 2, title: "Developing project management skills by leading on new projects such as an authentication server", icon: "✏️" },
                { id: 3, title: "Creating secure, scalable, robust code which has been vital to ensure the charity can continue to get volunteers, donations and record data in the field", icon: "🐕" },
                { id: 1, title: "Working as a mid level developer and most senior member of the team", icon: "🧑‍💻" },
                { id: 4, title: "As one of the first developers to join the technical team, I have been able to help shape and coach a young team", icon: "👔" },
                { id: 5, title: "Building product expertise and knowledge to support growth in the team and aid in communication across the charity", icon: "🧠" },
            ],
            moreInformation: "In my current role, I have spent the last 3 months creating an authentication server for a single point of authentication for all of our volunteers. I have led this project and it's taught me a lot in ways to plan work, break up work and coach and mentor others so they can contribute to the project.\n\nOutside of this, I have been contributing to planning a new project coming up, as well as diving into finishing off an old project that was started before I joined"
        },
    ];

    const handleCardClick = (id) => {
        if (activeCard === id) {
            setShowTransactions(false);
            setTimeout(() => {
                setActiveCard(null);
                setIsExiting(false);
            }, 300);
        } else {
            setIsExiting(true);
            setTimeout(() => {
                setActiveCard(id);
                setTimeout(() => setShowTransactions(true), 100);
            }, 300);
        }
        setIsTransactionsExpanded(false);
    };

    return (
        <>
            <Title>Career Journey</Title>
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
                        <Description dangerouslySetInnerHTML={{ __html: card.description }} />
                        {activeCard !== card.id && (
                            <ActionButton variant={card.variant}>
                                More Information
                            </ActionButton>
                        )}
                        
                        {activeCard === card.id && (
                            <>                                
                                {card.transactions && (
                                    <TransactionsList isVisible={showTransactions}>
                                        <TransactionsTitle>Experience Details</TransactionsTitle>
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

                {(!activeCard || isExiting) && (
                    <FixedTransactionsList 
                        isExpanded={isTransactionsExpanded}
                        isExiting={isExiting || activeCard !== null}
                        onClick={() => setIsTransactionsExpanded(!isTransactionsExpanded)}
                    >
                        <TransactionsHeader>
                            <TransactionsTitle>Other Interests</TransactionsTitle>
                            <span style={{ fontSize: '1.2rem' }}>
                                {isTransactionsExpanded ? '↓' : '↑'}
                            </span>
                        </TransactionsHeader>
                        <TransactionItem >
                                <IconContainer>
                                    ⚽️
                                </IconContainer>
                                <TransactionDetails>
                                    I've recently joined a local futsal team
                                </TransactionDetails>
                            </TransactionItem>
                        <TransactionItem >
                                <IconContainer>
                                    🎾
                                </IconContainer>
                                <TransactionDetails>
                                    I have also joined a local tennis club and attend the weekly group sessions there
                                </TransactionDetails>
                            </TransactionItem>
                        <TransactionItem >
                                <IconContainer>
                                    🧗
                                </IconContainer>
                                <TransactionDetails>
                                    My partner and I have both started climbing in the last year
                                </TransactionDetails>
                            </TransactionItem>
                        <TransactionItem >
                                <IconContainer>
                                    🥾
                                </IconContainer>
                                <TransactionDetails>
                                    In general, getting out and about!
                                </TransactionDetails>
                            </TransactionItem>
                    </FixedTransactionsList>
                )}

                <Spacer />
                <Overlay isVisible={popupCardId !== null} onClick={() => setPopupCardId(null)} />
                {popupCardId && (
                    <Popup isVisible={true}>
                        <CloseButton onClick={() => setPopupCardId(null)}>×</CloseButton>
                        <h2>More Information</h2>
                        <p>{cards.find(card => card.id === popupCardId)?.moreInformation}</p>
                    </Popup>
                )}
            </CardContainer>
        </>
    );
};

