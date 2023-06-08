import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Bill William Lesley</h1>
        <p className={styles.desc}>Math Teacher of the Year 2018</p>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
