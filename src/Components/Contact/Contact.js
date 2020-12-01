import React, { useContext, useState } from 'react';
import './Contact.css';
import { NavContext } from '../../App';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive('contact')

    // const [messageSend, setMessageSend] = useState('SEND')
    const [disabled, setDisabled] = useState('enabled')

    const changeInput = () => {
        setDisabled('enabled')
    }

    function sendEmail(e) {
        e.preventDefault()
        setDisabled('progress')

        emailjs.sendForm('service_zscxdc8', 'template_nh92cna', e.target, 'user_1o9J2hdysFdbjLeOYb3aK')
          .then((result) => {
              alert("Your message has been sent. Please wait for their response.");
            //   setMessageSend('SENT')
              setDisabled('disabled')
          }, (error) => {
              alert("Unable to send your message, Please check your network connection and try again.");
          });
      }
    return (
        <div className="contact container">
            <h1 className="text-center text-white animate__animated animate__fadeInDown">Get in Touch</h1>
            <div className="message-area">
                <div className="col-lg-6 col-md-12 animate__animated animate__fadeInLeft">
                    <h2 className="text-center text-white message-me">Message Me</h2>
                    <div>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="name-email">
                                <div className="name_email input_name">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="client_name" id="name" placeholder="Your Full Name Here..." onChange={changeInput} required/>
                                </div>
                                <div className="name_email input_email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="client_mail" id="email" placeholder="Your Email Here..." onChange={changeInput} required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message Here..." onChange={changeInput} required></textarea>
                            </div>
                            {
                                disabled === 'enabled' ? <button type="submit" className="btn hvr-shutter-out-horizontal mt-3">SEND</button> : 
                                disabled === 'progress' ? <button type="submit" className="btn hvr-shutter-out-horizontal mt-3 disabledSendBtn progressBtn" disabled>
                                    <div class="spinner-border text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button> : 
                                <button type="submit" className="btn hvr-shutter-out-horizontal mt-3 disabledSendBtn" disabled>SENT</button>
                            }
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 animate__animated animate__fadeInRight">
                    <div className="contact-area">
                        <h2 className="text-white contact-info">Contact Info</h2>
                        <p className="feel-free">Always available for freelance work if the right project comes along, Feel free to contact me anytime!</p>
                        <div className="contact-page-detail">
                            <h4>MD. Maruf Hossain</h4>
                            <h4>hossain815265@gmail.com</h4>
                            <h4>+88 01993-980666</h4>
                            <h4>Satkhira, Bangladesh</h4>
                        </div>
                        <a target="_blank" href="https://drive.google.com/file/d/1x8AXNylw8dfnBpGD1InbrE_rLalYGSzE/view?usp=sharing"><button className="btn btn-danger px-4 py-2 mt-4">DOWNLOAD RESUME</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;