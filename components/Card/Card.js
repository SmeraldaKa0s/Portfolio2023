import styles from "./styles.module.scss";
import Image from "next/image";

const Card = (props) => {
  const { image = "/Images/colgado.png", title, withBN = false } = props;
  const imageClasses = `${styles.image} ${withBN ? styles.withBN : ""}`;

  return (
    <article className={styles.card}>
      <div className={imageClasses}>
        <Image
          src={image}
          width="600"
          height="550"
          objectFit="cover"
          alt={title}
        />
      </div>
    </article>
  );
};

export default Card;
