import Icon from "../Icon";
import styles from "./styles.module.scss";

const Button = ({ title, type, rounded, className, onClick, iconId, iconSize}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles[type]} ${rounded ? styles.rounded : ""}`}
    >
      { iconId && <Icon id={iconId} className={`mx-1 h-${iconSize} w-${iconSize}`}/>}
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
