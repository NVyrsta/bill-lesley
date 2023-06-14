import Image from "next/image";
import "./home.scss";
import Hero from "public/hero.jpg";

export default function Home() {
  return (
    <section className="intro container">
      <div className="intro__content wrapper">
        <h1 className="intro__title">Bill William Lesley</h1>
        <p className="intro__subtitle">Math Teacher of the Year 2018</p>
      </div>
      
      <Image src={Hero} alt="Bill William Lesley" className="intro__img" />
    </section>
  );
}
