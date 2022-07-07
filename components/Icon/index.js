import iconArrow from "./Icons/iconArrow";
import sound from "./Icons/sound";
import close from "./Icons/close";
import github from "./Icons/github";
import linkedin from "./Icons/linkedin";
import email from "./Icons/email";
import download from "./Icons/download";

const ICONS = {
  iconArrow,
  sound, 
  close, 
  github,
  linkedin,
  email,
  download,
};

const Icon = (props) => {
  const Component = ICONS[props.id];
  if (!Component) return <>Invalid Icon Id</>;

  return <Component {...props} />;
};

export default Icon;
