import React from 'react'
import './side.css'
export const SideIcon = () => {
  return (
    <div className="sidebar">
        <a href="https://wa.me/" target="blank" className="icon whatsapp">
            <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://facebook.com/your-profile" target="blank" className="icon facebook">
            <i className="fab fa-facebook-f"></i>
        </a>
        
    </div>
  )
}
