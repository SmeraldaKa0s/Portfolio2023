import iconArrow from "./Icons/iconArrow";
import sound from "./Icons/sound";
import close from "./Icons/close";

const ICONS = {
  iconArrow,
  sound, 
  close, 
};

const Icon = (props) => {
  const Component = ICONS[props.id];
  if (!Component) return <>Invalid Icon Id</>;

  return <Component {...props} />;
};

export default Icon;
