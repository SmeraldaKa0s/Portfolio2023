import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
    
  const { 
    image= "/Images/gatito.jpeg",
     title, 
     year, 
     caption } = props;
  return (
      <article>
        <div>
          <Image
            src={image}
            width="250"
            height="150"
            className={styles.image}
            alt={title}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p>{year}</p>
        <p>{caption}</p>
      </article>
  );
};

export default Card;
