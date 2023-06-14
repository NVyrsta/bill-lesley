import React from "react";
import './about-me.scss';

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title page-title">About Me</h2>

      <div className="about__content wrapper">
        <div className="about__desc">
          <h3>Hi, I am Bill</h3>
          <p>
            I’ve been fascinated by math from a young age. The ability to work
            with numbers is one of the most useful and essential skills one can
            develop in school and college. I also believe that mathematical
            sciences can be fun and exciting to learn if you teach them the
            right way. I always strive to improve my skills and develop
            innovative and more effective teaching strategies.
          </p>
        </div>

        <div className="about__desc-img">
        </div>

        <div className="about__desc-img">
        </div>

        <div className="about__desc">
          <p>
            I am an outgoing Middle School Math Teacher dedicated to building an
            atmosphere that will encourage efficient learning of primary math
            concepts. Working closely with students, I can easily determine all
            their strengths and weaknesses needed to create personalized lesson
            plans. I focus on the development and implementation of flexible
            programs that meet curriculum standards.
          </p>
          <p>
            Being a math teacher for more than 10 years I take great
            responsibility for developing and supporting learning programs for
            faculty, teachers, staff, and students. I also have extensive
            experience in the classroom and working in mixed student and
            academic affairs. My research interests include issues related to
            first-year students, high achievers, and educational institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
