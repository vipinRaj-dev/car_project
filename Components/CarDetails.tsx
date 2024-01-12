import { CarProps } from "@/types";
import Image from "next/image";

interface carDetailsProps {
    isOpen : boolean;
    closeModel : () =>void;
    car:CarProps
}

const CarDetails = ({isOpen , closeModel , car}:carDetailsProps) => {
  return (
    <div>
      cardetails
    </div>
  )
}

export default CarDetails
