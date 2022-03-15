import React from 'react'
import './Page.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';

const Page = () => {
    return (
      <div className="footer">
        <p>All rights reserved @2022 </p>
         <h3>  <BsFacebook/></h3>  
         <h3>  <FaInstagram/></h3>
         <h3> <ImYoutube2/> </h3>  

      </div>
    )
  }
  

  export default Page;
  