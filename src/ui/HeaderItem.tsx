import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    text: string;
}

const HeaderItem = ({text} : IProps) => {
    return (
        <li><h6 className="font-poppins mb-10 sm:mr-6 sm:mb-0 lg:mr-14 tracking-wider text-xl text-black sm:text-sm uppercase transition-colors hover:text-blue-500 "><Link to={text}>{text}</Link></h6></li>
    );
};

export default HeaderItem;