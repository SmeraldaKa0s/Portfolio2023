import styles from "./styles.module.scss";
import ImageNext from "../ImageNext";

const Card = (props) => {
  const {
    image = "/Images/colgado.png",
    number,
    title,
    caption,
    withBN = false,
  } = props;
  const imageClasses = `${styles.image} ${withBN ? styles.withBN : ""}`;

  return (
    <article className={styles.card}>
      <div className={imageClasses}>
        <ImageNext 
        src={image}
        width={600}
        height={550}
        alt={title}
        className={styles.image}
        />
      </div>
    </article>
  );
};

export default Card;
