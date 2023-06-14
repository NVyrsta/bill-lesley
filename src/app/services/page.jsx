import React from "react";
import Image from 'next/image';
import "./services.scss";
import Arrows from 'public/arrows.svg';
import Dashboard from 'public/dashboard.svg';
import Hat from 'public/hat.svg';
import Persentage from 'public/persentage.svg';
import Person from 'public/person.svg';
import Professional from 'public/professional.svg';

const Services = () => {
  return (
    <section className="services">
      <h2 className="services__title page-title">What I Do</h2>
      <p className="services__intro">
        I always knew that I wanted to become a teacher. I have a
        bachelor&apos;s degree in mathematics and a master&apos;s degree in
        mathematics education. I have more than 10 years of experience including
        teaching mathematics in middle and high schools and delivering lectures
        at the State University. This year I became a member of the mathematics
        department at Woodland High School. I look forward to working with
        parents and students. We will study mathematics as a problem-solving
        tool. We hope that everyone will leave the class with their math skills
        improved.
      </p>
      <div className="services__items">
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Person} alt="icon" width={40} height={40} />
          </div>
          <p>Business Consulting</p>
        </div>
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Hat} alt="icon" width={40} height={40} />
          </div>
          <p>Graduate Student Program Facilitator</p>
        </div>
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Dashboard} alt="icon" width={40} height={40} />
          </div>
          <p>Teaching and Facilitating Experience</p>
        </div>
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Professional} alt="icon" width={40} height={40} />
          </div>
          <p>Professional Development</p>
        </div>
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Persentage} alt="icon" width={40} height={40} />
          </div>
          <p>Professional Contributions</p>
        </div>
        <div className="services__item">
          <div className="services__item-img">
            <Image src={Arrows} alt="icon" width={40} height={40} />
          </div>
          <p>Feedback and Evaluations</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
