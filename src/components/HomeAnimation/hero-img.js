import { AnimatedHeroImage } from "./lib";

const HeroImage = ({ src, alt, ...props }) => {
  return <AnimatedHeroImage src={src} alt={alt} {...props} />;
};
export default HeroImage;
