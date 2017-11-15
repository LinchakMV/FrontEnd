import React from 'react';
import photo from '../img/photo.jpg';

function About() {
  return (
    <section className="about">
      <a name="About" />
      <h3 className="about_title">About</h3>
      <div className="about_content">
        <div className="about_content_goals">
          <h5>Goals</h5>
          <p>
            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec
            phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
            Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis
            adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan
            eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
            integer ut dignissim harum
          </p>
        </div>
        <img src={photo} alt="avatar" />
        <div className="about_content_dreams">
          <h5>Dreams</h5>
          <p>
            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec
            phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
            Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis
            adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan
            eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
            integer ut dignissim harum.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
