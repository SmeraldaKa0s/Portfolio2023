import styles from "./styles.module.scss";

const Button = ({ title, type, rounded, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles[type]} ${rounded ? styles.rounded : ""}`}
    >
      {title}
    </button>
  );  
};

Button.defaultProps = {
  type: "transparent",
  rounded: false,
};

export default Button;
