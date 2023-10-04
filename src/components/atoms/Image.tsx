import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const imageVariants = cva(
  "h-full w-full rounded-md object-cover object-center",
  {
    variants: {
      aspect: {
        Square: "aspect-square",
        Rectangle: "aspect-video",
        None: "",
      },
      size: {
        Small: "w-40",
        Medium: "w-96",
        Large: "w-full",
      },
    },
  }
);

export interface ImageProps {
  src: string;
  alt: string;
  aspect: "Square" | "Rectangle" | "None";
  size?: "Small" | "Medium" | "Large";
}

export const initialProps: ImageProps = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Light green backpack with black canvas straps and front zipper pouch.",
  aspect: "Rectangle",
  size: "Large",
};

export default function Image({ src, alt, aspect, size }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        imageVariants({
          aspect,
          size,
        })
      )}
    />
  );
}
