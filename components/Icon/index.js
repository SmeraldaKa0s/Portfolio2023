import iconArrow from "./Icons/iconArrow";
import sound from "./Icons/sound";

const ICONS = {
  iconArrow,
  sound, 
};

const Icon = (props) => {
  const Component = ICONS[props.id];
  if (!Component) return <>Invalid Icon Id</>;

  return <Component {...props} />;
};

export default Icon;
