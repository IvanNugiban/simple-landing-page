import React from 'react';
import styled from "styled-components";

interface StyledButtonProps {
    padding: string;
    borderRadius?: string;
}

interface IProps extends StyledButtonProps{
 text: string;
 onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({padding}) => padding};
  border-radius: ${({borderRadius}) => borderRadius};

  
`

const Button = ({ text, onClick, padding, borderRadius = "8px"} : IProps) => {
    return (
        <StyledButton padding={padding} borderRadius={borderRadius} onClick={onClick} className="bg-main text-white font-plus-jakarta-sans font-bold">
            {text}
        </StyledButton>
    );
};

export default Button;