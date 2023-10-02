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
    },
  }
);

export interface ImageProps {
  src: string;
  alt: string;
  aspect: "Square" | "Rectangle" | "None";
  className?: string;
}

export const initialProps: ImageProps = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Light green backpack with black canvas straps and front zipper pouch.",
  aspect: "Rectangle",
  className: "",
};

export default function Image({ src, alt, aspect, className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        imageVariants({
          aspect,
          className,
        })
      )}
    />
  );
}
