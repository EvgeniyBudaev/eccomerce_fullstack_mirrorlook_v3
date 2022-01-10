import Image from "next/image";
import React from "react";
import useInView from "react-cool-inview";
import styles from "./Advantages.module.scss";

const slide1 = "/images/advantages-1.jpg";
const slide2 = "/images/advantages-2.jpg";
const slide3 = "/images/advantages-3.jpg";

export const Advantages: React.FC = () => {
  const { observe, inView } = useInView({ unobserveOnEnter: true });

  return (
    <div className={styles.AdvantagesWrapper} ref={observe}>
      {inView && (
        <section className={styles.Advantages}>
          <div className={styles.AdvantagesContainer}>
            <div className={styles.AdvantagesUnit1}>
              <div className={styles.AdvantagesImage}>
                <Image src={slide1} alt={""} height="630" width="492" />
              </div>
              <p className={styles.AdvantagesText1}>Качество и стиль</p>
            </div>
            <div className={styles.AdvantagesUnit2}>
              <div className={styles.AdvantagesText2}>
                В основу производства и разработки дизайна выпускаемых зеркал
                положены главные для нас постулаты:
                <ul>
                  <li>качество и долговечность</li>
                  <li>оригинальность и стильный дизайн</li>
                  <li>удобство и функциональность</li>
                  <li>индивидуальный подход</li>
                  <li>экологичность</li>
                </ul>
              </div>
              <div className={styles.AdvantagesImage}>
                <Image src={slide2} alt={""} height="630" width="840" />
              </div>
            </div>
            <div className={styles.AdvantagesUnit3}>
              <div className={styles.AdvantagesImage}>
                <Image src={slide3} alt={""} height="958" width="718" />
              </div>
              <div className={styles.AdvantagesText3}>
                Безопасные для вашего здоровья материалы
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
