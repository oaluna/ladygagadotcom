
import { AnimatedHeroImage, AnimatedWideImage } from "./lib";

export const HeroImage = ({ src, alt, ...props }) => {
  return <AnimatedHeroImage src={src} alt={alt} {...props} />;
};

export const WideImage = ({ src, alt, ...props }) => {
  return <AnimatedWideImage src={src} alt={alt} {...props} />
}
