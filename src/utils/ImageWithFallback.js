const ImageWithFallback = ({src, alt, ...delegated}) => {
  let path = `${process.env.PUBLIC_URL}/${src}`;

  return (
    <picture>
      <source srcSet={`${path}.webp`} type="image/webp" />
      <img src={`${path}.png`} alt={alt} width={"100%"} {...delegated} />
    </picture>
  );
};

export default ImageWithFallback;
