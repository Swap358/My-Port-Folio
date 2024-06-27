import React from 'react'
import './contact.css'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact =React.forwardRef ((props,ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const form = useRef();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const sendEmail = async (e) => {
        e.preventDefault();
    
        await emailjs
          .sendForm("service_p20mq3q", "template_frtkkrg", form.current, {
            publicKey: "y19gzrMRNFEsAVJuJ",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              alert("your message is sent");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        e.target.reset();
    
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      };
    
  return (
    <footer id="contact" ref={ref} className='bg-white'>
        
    <div className="container">
       <h3 className='about-me-heading'>Contact Me</h3>
        <div className="footer-content">
            <div className="row">
                {/* <!-- ***** Contact Form Start ***** --> */}
                <div className="col-lg-6 col-md-12 col-sm-12 cont-bgn">
                    <div className="contact-form">
                        <form id="contact"  ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Full Name" value={formData.name}
                  onChange={handleChange}
                  required
                                            style={{backgroundColor:"white"}}
                                            // style="background-color: rgba(250,250,250,0.3);"
                                            />
                                    </fieldset>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="text" id="email" placeholder="E-Mail Address"
                                            required="" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            // style="background-color: rgba(250,250,250,0.3);"
                                            style={{backgroundColor:"white"}}
                                            />
                                    </fieldset>
                                </div>
                                <div className="col-md-6 col-sm-12" style={{width:"100%"}}>
                                    <fieldset >
                                        <input name="subject" type="text" id="subject" placeholder="Subject"
                                            required="" 
                                            value={formData.subject}
                                            onChange={handleChange}
                                            style={{backgroundColor:"white",width:"100%"}}
                                            />
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                            required="" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            // style="background-color: rgba(250,250,250,0.3);"
                                            style={{backgroundColor:"white"}}
                                            ></textarea>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button">Send</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- ***** Contact Form End ***** --> */}
                
                <div className="right-content col-lg-6 col-md-12 col-sm-12">
                    <h2>More About <em>Me</em></h2>
                    <p>Connect me on social media and hier me with my best Experience.
                        {/* <br><br>If you need this contact form to send email to your inbox, you may follow our 
                        <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact</a> 
                        page for more detail. */}
                        </p>
                    <ul className="social">
                        <li><a href="https://fb.com/"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://instragram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://wa.me/9096837746"><i className="fa-brands fa-whatsapp"></i></a></li>
                        <li><a href="/"><i className="fab fa-youtube-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/swapnil-sansare-5aa84a248"><i className="fa-brands fa-linkedin"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="sub-footer">
                    <p>Copyright &copy; 2024 My PortFolio
                    | All Rights Reserved <a rel="nofollow" href="/"> Swapnil</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>

  )
});
