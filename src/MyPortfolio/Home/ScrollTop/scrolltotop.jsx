import React from 'react'
import { useState,useEffect } from 'react'
import './scrolltotop.css';
import { FaAngleDoubleUp } from 'react-icons/fa';
export const ScrollToTop = () => {

    const [showScrollTopButton,setshowScrollTopButton] =useState(false);

     useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if(window.scrollY >300){
            setshowScrollTopButton(true);
        }else{
            setshowScrollTopButton(false);
        }
       });
     },[]);

     const scrollTop = (elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  return (
    <div>
       
          { showScrollTopButton &&(
           <FaAngleDoubleUp className='top-btn-position top-btn-style' onClick={scrollTop}/>
           )}
    </div>
  )
}
