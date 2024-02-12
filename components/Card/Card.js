import styles from "./styles.module.scss";
import Image from "next/image";

const Card = (props) => {
  const { image = "/Images/colgado.png", title } = props;
  return (
      <article className={styles.card}>
        <div className={styles.image}>
          <Image src={image} width="600" height="550" objectFit="cover" alt={title} />
        </div>
      </article>
   
  );
};

export default Card;
