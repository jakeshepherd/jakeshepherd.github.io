import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-image: linear-gradient(to bottom, mediumpurple, dodgerblue);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
  .nav-link {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <NavLink className={"nav-link"} to="/">Home</NavLink>
            <NavLink className={"nav-link"} to="/projects">Projects</NavLink>
            <NavLink className={"nav-link"} to="/cv">CV</NavLink>
            <NavLink className={"nav-link"} to="/contact">Contact</NavLink>
        </Ul>
    )
}

export default RightNav