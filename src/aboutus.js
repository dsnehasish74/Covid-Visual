import React from 'react'
import image from './image/WhatsApp Image 2020-07-16 at 11.19.03.jpeg'
import image2 from './image/WhatsApp Image 2020-07-16 at 11.25.46.jpeg'
import image3 from './image/WhatsApp Image 2020-07-16 at 11.51.28.jpeg'
import image4 from './image/WhatsApp Image 2020-07-16 at 11.56.27.jpeg'
import image5 from './image/WhatsApp Image 2020-07-16 at 12.29.06.jpeg'
import image6 from './image/WhatsApp Image 2020-07-16 at 12.42.11.jpeg'
import image7 from './image/WhatsApp Image 2020-08-14 at 00.34.29.jpeg'

function About(){
  return(
    <div className="container fade about">
    <div className="type-body">
    <div className="typewriter">
      <h1>Our Team</h1>
      </div>
    </div>
        <div className="row">
        <div className="col-12 image-adjust"><img src={image7} className="mediaimage image" alt="Dinkar"></img>
        <div className="middle">
        <div className="text">
          <h6>Dinkar Kumar</h6>
          <p>Team Head</p>
          <a href="https://www.facebook.com/profile.php?id=100026233124763" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
          <a href="https://www.linkedin.com/in/dinkar-kumar-411666180/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
          <a href="mailto:dinkark4567@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
            <p>Many of our components require the use </p>
        </div>
</div></div>
          <div className="col-12 col-md-6 image-adjust"><img src={image3} className="mediaimage image" alt=" malay"></img>
          <div className="middle">
    <div className="text">
      <h6>Malay Gain</h6>
      <a href="https://www.facebook.com/gain.malay" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
      <a href="https://www.linkedin.com/in/malay-gain-43466419a/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
      <a href="mailto: malaygain10@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
      <p>Many of our components require the use </p>
    </div>
  </div></div>
          <div className="col-12 col-md-6 image-adjust"><img src={image2} alt="Anish" className="mediaimage image"></img>
          <div className="middle">
          <div className="text">
            <h6>Anish De</h6>
            <a href="https://www.facebook.com/anish.de.33" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/anish-de-1b090a193/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
            <a href="mailto:anishde85@gmail.com"><i className="fa fa-envelope about-icon fa-lg" target="blank"></i></a>
            <p>Many of our components require the use </p>
          </div>
  </div></div>
          <div className="col-12 image-adjust"><img src={image} className="mediaimage image" alt="Snehasish"></img>
          <div className="middle">
          <div className="text">
            <h6>Snehasish Dhar</h6>
            <a href="https://www.facebook.com/snehasish.dhar.129" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
            <a href="http://www.linkedin.com/in/snehasish-dhar-b657721a0" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
            <a href="mailto:dsnehasish74@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
              <p>Many of our components require the use </p>
          </div>
  </div></div>
          <div className="col-12 col-md-6 image-adjust"><img src={image4} className="mediaimage image" alt="Devtanu"></img>
          <div className="middle">
          <div className="text">
            <h6>Devtanu Misra</h6>
            <a href="https://www.facebook.com/jhontu.charan.1" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/devtanu-misra-1829441a0/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
            <a href="mailto:devtanumisra@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
              <p>Many of our components require the use </p>
          </div>
  </div></div>
          <div className="col-12 col-md-6 image-adjust"><img src={image5} alt=" sounak" className="mediaimage image"></img>
          <div className="middle">
          <div className="text">
            <h6>Sounak Majumder</h6>
            <a href="https://www.facebook.com/profile.php?id=100008773576079" target="blank"><i className="fa fa-facebook about-icon fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/sounak-majumder-45b183197/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
            <a href=" mailto:Sounakmajumder472@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
              <p>Many of our components require the use </p>
          </div>
  </div></div>
          <div className="col-12 image-adjust"><img src={image6} alt="ahel" className="mediaimage image"></img>
          <div className="middle">
          <div className="text">
            <h6>Ahel Das chatterjee</h6>
            <a href="https://www.linkedin.com/in/ahel-das-chatterjee-5145131a0/" target="blank"><i className="fa fa-linkedin about-icon fa-lg"></i></a>
            <a href="mailto:aheldc@gmail.com" target="blank"><i className="fa fa-envelope about-icon fa-lg"></i></a>
              <p>Many of our components require the use </p>
          </div>
  </div></div>
        </div>
    </div>
  );
}

export default About;
