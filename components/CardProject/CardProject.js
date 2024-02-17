import styles from "./styles.module.scss";
import ImageNext from "../ImageNext";

const CardProject = ({ number, title, image, caption }) => {
  return (
    /*  <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.number}</span>
          <h3>{item.name}</h3>
          <span>{item.tag}</span>
          <ImageNext />
        </div>
      ))}
    </div> */
    <div>
      <div className={styles.content}>
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageNext
            src={image}
            width={600}
            height={550}
            alt={title}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
//se me ocurrio traer el componente card y acá pasarle el resto de las weas. hay que ver si anda.
