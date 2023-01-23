import styles from "./PhotoCarousel.module.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import settings from "./settings.module.scss";

interface PhotoCarouselProps {
  photosData: string[];
}

const PhotoCarousel = ({ photosData }: PhotoCarouselProps) => {
  return (
    <div className={styles.carousel}>
      <AwesomeSlider className={settings.aws} bullets={false}>
        {photosData.map((photo) => (
          <div key={photo} data-src={photo} className={styles.image} />
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default PhotoCarousel;
