import React from 'react';

interface IProps {
    logo: string;
    title: string;
    text: string;
}

const UserCard = ({logo, title, text} : IProps) => {
    return (
        <div className="flex items-center">
            <img src={logo} alt=""/>

            <div className="ml-2 pt-1 ">
                <h6 className="font-inter font-bold  text-gray-900 text-lg">{title}</h6>
                <p className="font-inter text-gray-800">{text}</p>
            </div>
        </div>
    );
};

export default UserCard;