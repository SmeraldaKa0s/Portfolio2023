import styles from "./styles.module.scss";

const List = ({ items }) => {
  return (
    <div>
      <ul className={styles.container}>
        {items.map((item) => (
          <li key={item.id} className={`${styles.list} ${styles.top}`}>
            <div className={styles.box}>
              <p className={styles.title}>{item.name}</p>
            </div>
            <div>
              <p className={styles.title}>{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
