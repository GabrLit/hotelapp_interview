import styles from "./HeroSection.module.scss";
import heroBackgroundImg from "../../assets/images/hero_image.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection_container}>
      <img src={heroBackgroundImg} alt="hero_background_image" />
    </div>
  );
};

export default HeroSection;
