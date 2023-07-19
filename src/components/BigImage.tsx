export interface BigImageProps {
  src: string;
  alt: string;
}

export const initialProps: BigImageProps = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Light green backpack with black canvas straps and front zipper pouch.",
};

export default function BigImage({ src, alt }: BigImageProps) {
  return (
    <div className="aspect-video rounded-md">
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-md object-cover object-center"
      />
    </div>
  );
}
