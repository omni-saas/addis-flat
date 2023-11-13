import { FC } from "react";
import Image from 'next/image'


const Logo:FC = () =>{
  return(
    <>
      <Image src="/static/logo.svg" height={80} width={150} alt="logo"/>
    </>
  );
}
export default Logo;