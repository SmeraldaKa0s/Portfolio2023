import Image from "next/image";

const ImageNext = ({ src, alt, width, height, objectFit = "cover" }) => {
  return <Image src={src} width={width} height={height} alt={alt} style={{ objectFit }} />;
};

export default ImageNext;