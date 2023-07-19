import HorizontalStack from "./HorizontalStack";
import Link from "./Link";
import Paragraph from "./Paragraph";
import SquareImage from "./SquareImage";
import VerticalStack from "./VerticalStack";
import Date from "./Date";
import MobileOnlyContainer from "./MobileOnlyContainer";
import { HexColor } from "@yext/studio";

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
    <HorizontalStack
      spacing="2"
      leftMargin="0"
      rightMargin="0"
      topMargin="0"
      bottomMargin="0"
      alignment="top"
      verticalOnMobile="false"
    >
      <Link url={`./${slug}`}>
        <SquareImage src={src} alt={alt} size="52" hiddenOnMobile={true} />
      </Link>
      <MobileOnlyContainer>
        <Link url={`./${slug}`}>
          <SquareImage src={src} alt={alt} size="20" />
        </Link>
      </MobileOnlyContainer>
      <VerticalStack
        spacing="2"
        topMargin="0"
        bottomMargin="0"
        leftMargin="0"
        rightMargin="0"
        alignment="left"
      >
        <Date
          date={datePosted}
          textColor={textColor}
          textSize="xs"
          fontWeight="light"
        />
        <Link url={`./${slug}`}>
          <Paragraph
            value={name}
            textSize="xl"
            fontWeight="bold"
            textColor={textColor}
          />
          <Paragraph
            value={blogStarter_description}
            textSize="base"
            fontWeight="light"
            hiddenOnMobile={true}
            textColor={textColor}
          />
        </Link>
      </VerticalStack>
    </HorizontalStack>
  );
};

export default FeaturedBlog;
