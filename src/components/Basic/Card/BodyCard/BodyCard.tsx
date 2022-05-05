import React from "react";
import CardProps from "../CardProps";

const BodyCard: React.FC<CardProps> = ({ children }) => {
	return <div className='text-gray-400'> {children} </div>;
};

export default BodyCard;
