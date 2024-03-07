import Image from "next/image";

const ImageNext = ({ src, alt, width, height, objectFit = "cover", ...rest }) => {
  return <Image src={src} width={width} height={height} alt={alt} objectFit={objectFit} {...rest} />;
};

export default ImageNext;