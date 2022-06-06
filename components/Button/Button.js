import Icon from "../Icon";
import styles from "./styles.module.scss";

const Button = ({ title, type, rounded, className, onClick, iconId, iconClassName}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles[type]} ${rounded ? styles.rounded : ""}`}
    >
      { iconId && <Icon id={iconId} className={`mx-1 ${iconClassName}`}/>}
      {title}
    </button>
  );  
};

Button.defaultProps = {
  type: "transparent",
  rounded: false,
  className: "",
};

export default Button;
