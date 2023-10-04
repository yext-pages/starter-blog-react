import Link from "../atoms/Link";
import Date from "../atoms/Date";
import Container from "../atoms/Container";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";

interface FeaturedBlogProps {
  /**
   * @displayName Blog Title
   * @tooltip Controls the title of the blog to display
   */
  name?: string;
  /**
   * @displayName Blog URL
   * @tooltip Controls the URL the blog redirects to
   */
  slug?: string;
  /**
   * @displayName Blog Image URL
   * @tooltip Source URL of the blog image
   */
  src?: string;
  /**
   * @displayName Blog Image Alternate Text
   * @tooltip Alternate text for the blog image
   */
  alt?: string;
  /**
   * @displayName Blog Description
   * @tooltip Controls the description to display for the blog
   */
  blogStarter_description?: string;
  /**
   * @displayName Date Posted
   * @tooltip Controls the posted date to display for th eblog
   */
  datePosted?: string;
  /**
   * @displayName Image Shape
   * @tooltip Controls the shape of the blog image
   */
  imgShape: "Rectangle" | "Square";
  /**
   * @displayName Date Size
   * @tooltip Controls the size of the posted date text
   */
  dateSize: "XS" | "S" | "M" | "L";
  /**
   * @displayName Title Rank
   * @tooltip Controls whether the title is an h1, h2, h3 or h4
   */
  titleRank: "1" | "2" | "3" | "4";
  /**
   * @displayName Description Size
   * @tooltip Controls the size of the description text
   */
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
      <Image src={src || ""} alt={alt || ""} aspect={imgShape} size="Small" />
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
