import React from 'react'
import "./About.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';




function About() {
  return (
    <div>
      <h2 className='about'> Welcome to RINGBELT <PROPERTIES></PROPERTIES> </h2>
      <div className="aboutus-content">
        <p>
        In a dynamic online discussion, four innovative minds came together to develop 
        RingBelt—a next-generation platform aimed at transforming the home-search experience.
         United by a common vision, they aspired to build a service that goes beyond 
         standard property listings, creating a seamless and user-centric approach 
         for both renters and property owners. This platform reimagines the way people find homes,
          making the process easier, smarter, and more inclusive for everyone involved.
          <br /> The creators set out to simplify and expedite the entire process after being inspired by the difficulties of property seeking and the laborious procedure of matching landlords and tenants. Everything started over a friendly chat at a neighborhood nyamachoma restaurant, where        The creators expressed their dissatisfaction with the conventional renting     procedure.
          <br /> Driven by a shared passion for making a meaningful difference, the founders conceived the idea for RingBelt Properties. The name itself reflects their dedication to crafting a platform that feels both personal and inviting. By combining their varied expertise in technology, design, and business, they set out to create a user-friendly website. RingBelt Properties soon developed into a sophisticated online hub where tenants could easily explore available properties and connect with landlords. With its intuitive design and advanced search capabilities, the platform quickly became the preferred choice for individuals searching for their ideal home.
          <br />
          Happy House Searching
        </p>
      </div>

      <div className="mission--vision">
        <div className="mission">
          <h1 className="mission--title">Our Mission</h1>
          <p>
            Ringbelt is dedicated to simplifying the rental experience by
            connecting tenants with house owners seamlessly. Our mission is to
            create a user-friendly online platform that fosters trust,
            community, and convenience, ensuring that finding the perfect home
            becomes a delightful journey for everyone involved.
          </p>
        </div>
        <div className="vision">
          <h1 className="vision--title">Our Vision</h1>
          <p>
            Our vision at RingBelt  great
          </p>
        </div>
      </div>

      <div className="contact-details">
        <div className="phone">
          <h3>
            <PhoneIcon /> <br></br>Phone: +254701956902
          </h3>
        </div>

        <div className="email">
          <h3>
            <EmailIcon /> <br />
            Email: Rinngbelt@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About