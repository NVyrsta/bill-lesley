import React from "react";
import "./contacts.scss";
import {
  TfiLocationPin,
  TfiEmail,
  TfiFacebook,
  TfiLinkedin,
  TfiTwitterAlt
} from 'react-icons/tfi';
import { SlPhone } from 'react-icons/sl';

export const metadata = {
  // title: "Lama Dev Contact Information",
  // description: "This is Contact Page",
};

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title page-title">Contact Me</h2>
      <h3 className="contacts__subtitle">
        If you have any questions about my work, my projects, or services I
        provide, feel free to get in touch with me.
      </h3>

      <div className="contacts__cards wrapper">
        <div className="contacts__card">
          <TfiLocationPin />

          <h4>Address</h4>

          <p>London - 36 Regent St.</p>
        </div>
        <div className="contacts__card">
          <SlPhone />

          <h4>Phone</h4>

          <a href="tel:+12345678900">+1 (234) 567 89 00</a>
        </div>
        <div className="contacts__card">
          <TfiEmail />

          <h4>E-mail</h4>

          <a href="mailto:bill.lesley@email.com">bill.lesley@email.com</a>
        </div>
      </div>

      <h3 className="contacts__follow">Follow me</h3>
      <div className="contacts__socials wrapper">
        <a href="https://www.facebook.com/" target='_blank' className="contacts__social">
          <TfiFacebook />
        </a>
        <a href="https://twitter.com/" target='_blank' className="contacts__social">
          <TfiTwitterAlt />
        </a>
        <a href="https://www.linkedin.com/" target='_blank' className="contacts__social">
          <TfiLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
