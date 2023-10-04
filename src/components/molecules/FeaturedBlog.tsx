import Link from "../atoms/Link";
import Date from "../atoms/Date";
import Container from "../atoms/Container";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";

interface FeaturedBlogProps {
  /**
   * @displayName Blog Title
   **/
  name?: string;
  /**
   * @displayName Blog Post URL
   **/
  slug?: string;
  /**
   * @displayName Blog Post Image URL
   **/
  src?: string;
  /**
   * @displayName Alt Text
   **/
  alt?: string;
  /**
   * @displayName Blog Description
   **/
  blogStarter_description?: string;
  /**
   * @displayName Date Posted
   **/
  datePosted?: string;
  /**
   * @displayName Image Shape
   **/
  imgShape: "Rectangle" | "Square";
  /**
   * @displayName Date Size
   **/
  dateSize: "XS" | "S" | "M" | "L";
  /**
   * @displayName Title Rank
   **/
  titleRank: "1" | "2" | "3" | "4";
  /**
   * @displayName Description Size
   **/
  descriptionSize: "XS" | "S" | "M" | "L";
}

const FeaturedBlog = ({
  name,
  slug,
  src,
  alt,
  blogStarter_description,
  datePosted,
  imgShape,
  dateSize,
  titleRank,
  descriptionSize,
}: FeaturedBlogProps) => {
  return (
    <Container layout="Row" flexGap="4">
      <Image
        src={src || ""}
        alt={alt || ""}
        aspect={imgShape}
        className="w-40"
      />
      <Container layout="Column" flexGap="2">
        <Date
          date={datePosted}
          color="Dark Gray"
          size={dateSize}
          weight="Light"
        />
        <Container layout="Column" flexGap="2">
          <Link url={`./${slug}`}>
            <Heading rank={titleRank} weight="Semi Bold" text={name || ""} />
          </Link>
          <Text
            size={descriptionSize}
            text={blogStarter_description}
            maxLines="3"
            color="Dark Gray"
            weight="Light"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default FeaturedBlog;
