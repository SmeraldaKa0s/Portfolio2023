import styles from "./styles.module.scss";
import ImageNext from "../ImageNext";

const CardHome = ({ title, image, caption, titleClassName }) => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.card}>
          <div className={styles.image}>
            <ImageNext
              src={image}
              width={800}
              height={650}
              alt={title}
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <h3 className={`${styles.title} ${titleClassName}`}>{title}</h3>
            <p className={styles.text}>{caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHome;
