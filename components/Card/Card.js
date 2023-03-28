import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { image = "/Images/gatito.jpeg", title, year, caption, id } = props;
  return (
    <Link href={`/projects/${id}`}>
      <a>

      <article className={styles.card}>
        <div className={styles.image}>
          <Image src={image} width="600" height="550" alt={title} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p>{year}</p>
          <p>{caption}</p>
        </div>
      </article>
      </a>
    </Link>
  );
};

export default Card;
