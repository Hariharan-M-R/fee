    import React from 'react'
    import './Contactus.css'
    import Logo from '../Images/logo4.jpeg'
    const Contactus = () => {
    return (
        <div className='main'>
            <div className='logoimg'>
                <img src={Logo} alt="logo"  />
            </div>
            <div class="college-info">
        <h2 className='heading1'>College Information</h2>

        <div class="college-details">
        <p>Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai</p>
        <p>Accredited by NBA [CSE, EEE, ECE, IT, MECH] & NAAC with A Grade</p>
        <p>Sri Shakthi Nagar, L & T By - Pass,
            Chinniyampalayam Post, Coimbatore - 62.</p>
        </div>
    </div>

    <div class="contact-details">
        <h2 className='heading2'>Contact Details</h2>

        <div class="contact-details-inner">
        <p>Principal E-Mail: <a href="mailto:principal@siet.ac.in">principal@siet.ac.in</a></p>
        <p class="phone-number"></p>
        <p class="phone-number">+91 75041 69999 , +91 94446 20505</p>
        <p>Admissions E-Mail: <a href="mailto:admissions@siet.ac.in">admissions@siet.ac.in</a></p>
        </div>
    </div>
        
        </div>
    )
    }

    export default Contactus