import React from 'react';
import styled from "styled-components";

const StyledMessageCard = styled.div`
  position: relative;
  padding: 32px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);
  max-width: 540px;

  &:after {
    content: "";
    position:absolute;
    margin-top:-6px;
    margin-left:-5px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid white;
    transform:rotate(-180deg);
    right: 50%;
    bottom: -10px;
  }
`

interface IProps {
title: string;
text: string;
}

const MessageCard = ({title, text} : IProps) => {
    return (
        <StyledMessageCard>
            <h6 className="text-gray-950 font-poppins font-medium text-xl">{title}</h6>
            <p className="text-gray-900 font-poppins mt-4">{text}</p>
        </StyledMessageCard>
    );
};

export default MessageCard;