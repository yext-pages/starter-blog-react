import { cva } from "cva";
import { cn } from "../../utils";

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
  /**
   * @displayName Source
   * @tooltip The URL of the image to display
   */
  src: string;
  /**
   * @displayName Alternate Text
   * @tooltip Controls the alternate text of the img tag
   */
  alt: string;
  /**
   * @displayName Aspect Ratio
   * @tooltip Controls the aspect ratio of the image
   */
  aspect: "Square" | "Rectangle" | "None";
  /**
   * @displayName Size
   * @tooltip Controls the size of the image
   */
  size?: "Small" | "Medium" | "Large";
}

export const initialProps: ImageProps = {
  src: "https://placehold.co/1920x1280",
  alt: "Gray placeholder image.",
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
