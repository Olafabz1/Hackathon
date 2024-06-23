import React from "react";
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <>
     <footer className="pt-5 h-45">
      <div className="w-80">
       <p className="font-extrabold">LOGO</p>
       <p>"Refresh & Recharge! Take a mindful break with our app to boost productivity and well-being. 🌿
        <br/> 
        <b>#TakeABreak</b>"</p>
      </div>

      <div>
       <h2 className="font-bold">Useful Links</h2>
       <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
       </ul>
      </div>

      <div className="block">
       <h1 className="font-bold">Privacy Policy</h1>
       <ul>
        <li><a href="#">Terms and Condition</a></li>
        <li><a href="/cookie-policy">Cookie Policy</a></li>
        <li> <a href="/disclaimer">Disclaimer</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
       </ul>
   
      </div>

      <div>
       <h2 className="font-bold">Contact Us</h2>
       <ul className="flex pt-8 ">
        <li><FaFacebook /></li>
        <li><FaSquareInstagram /></li>
        <li><FaXTwitter /></li>
        <li><FaTiktok /></li>    
       </ul>
       

      </div>
       

     </footer>
    </>
  )
}

export default Footer;
