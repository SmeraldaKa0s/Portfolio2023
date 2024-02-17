import Image from "next/image";

const ImageNext = ({ src, alt, width, height }) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default ImageNext;