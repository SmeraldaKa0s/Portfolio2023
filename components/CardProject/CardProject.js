import styles from "./styles.module.scss";
import ImageNext from "../ImageNext";

const CardProject = ({ number, title, image, caption, titleClassName }) => {
  
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <span>{number}</span>
          <h3 className={`${styles.title} ${titleClassName}`}>{title}</h3>
          {/*  <p>{caption}</p> */}
        </div>
        <p className={styles.text}>{caption}</p>
      </div>
      <div className={`${styles.line} ${styles.sizeLeft}`}></div>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageNext
            src={image}
            width={800}
            height={450}
            alt={title}
            objectFit="cover"
          />
        </div>
      </div>
      <div className={`${styles.line} ${styles.sizeRight}`}></div>
    </section>
  );
};

export default CardProject;
