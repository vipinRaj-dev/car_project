"use client";
import { customButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title ,containerStyle ,btnType, handleClick ,isDisabled , rightIcon,textStyles}:customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`} 
      onClick={() => {handleClick}}
      
    >
       <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          className="object-contain"
        />
      </div>
    )}
    </button>
  );
};

export default CustomButton;
