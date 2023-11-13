import { FC } from "react";
import Image from 'next/image'


const Logo:FC = () =>{
  return(
    <>
      <Image src="/static/logo.svg" priority={true} height={20} width={150} alt="logo"/>
    </>
  );
}
export default Logo;