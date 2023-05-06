import React from 'react';
import styled from "styled-components";

interface IProps {
    logo: string;
    title: string;
    text: string;
}

const StyledCard = styled.div`
    width: 256px;
   height: 253px;
  
  h4 {
    font-size: 22px;
    line-height: 22px;
  }
`

const Card = ({logo, title, text} : IProps) => {
    return (
        <StyledCard className="bg-neutral-100 shadow-2xl p-6 rounded-s-lg">
            <img src={logo} alt=""/>
            <h4 className="font-playfair bold my-3">{title}</h4>
            <p className="font-plus-jakarta-sans text-sm text-gray-400">{text}</p>
        </StyledCard>
    );
};

export default Card;