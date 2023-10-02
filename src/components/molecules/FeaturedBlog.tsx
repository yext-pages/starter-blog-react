import Link from "../atoms/Link";
import Date from "../atoms/Date";
import { HexColor } from "@yext/studio";
import Container from "../atoms/Container";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";

interface FeaturedBlogProps {
  name?: string;
  slug?: string;
  src?: string;
  alt?: string;
  blogStarter_description?: string;
  datePosted?: string;
  textColor: HexColor;
}

const FeaturedBlog = ({
  name,
  slug,
  src,
  alt,
  blogStarter_description,
  datePosted,
  textColor,
}: FeaturedBlogProps) => {
  return (
    <Container layout="row" className="gap-4">
      <Image
        src={src || ""}
        alt={alt || ""}
        aspect="Square"
        className="w-24 md:w-40"
      />
      <Container layout="column" className="gap-2">
        <Date date={datePosted} color="Default" size="XS" weight="Light" />
        <Container layout="column" className="gap-2">
          <Link url={`./${slug}`}>
            <Heading rank="4" weight="Semi Bold" text={name || ""} />
          </Link>
          <Text
            size="M"
            text={blogStarter_description}
            className="line-clamp-3"
            color="default"
            weight="Light"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default FeaturedBlog;
