import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import Image from "../components/common/Image";
import MarkdownContent from "../components/common/MarkdownContent";
import HorizontalDivider from "../components/common/HorizontalDivider";
import Date from "../components/common/Date";
import Heading from "../components/common/Heading";
import Container from "../components/common/Container";
import Text from "../components/common/Text";
import PageWrapper from "../components/common/PageWrapper";
import MainContentWrapper from "../components/common/MainContentWrapper";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Link from "../components/common/Link";
import ArrowIcon from "../components/blog/ArrowIcon";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "name",
      "slug",
      "datePosted",
      "primaryPhoto",
      "blogStarter_body",
      "blogStarter_blogAuthor",
      "blogStarter_description",
      "blogStarter_metaDescription",
      "blogStarter_keywords",
    ],
    filter: {
      entityTypes: ["blogStarter_blog"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps<{ name: string }>
> = ({ document }): HeadConfig => {
  return {
    title: document.name,
  };
};

export default function Blog({ document }: TemplateProps) {
  return (
    <PageWrapper backgroundColor="White">
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <MainContentWrapper>
        <Container
          layout="Column"
          maxWidth="M"
          flexGap="8"
          marginTop="32px"
          marginBottom="32px"
          marginLeft="Auto"
          marginRight="Auto"
        >
          <Link
            url="/index.html"
            variant="button-light"
            shape="round"
            analyticsLabel="backclick"
          >
            <ArrowIcon height="10px" />
          </Link>
          <Container layout="Row" flexGap="2" itemAlignment="Center">
            <Text
              text={document.blogStarter_blogAuthor}
              color="Light Gray"
              weight="Light"
              textSize="M"
            />
            <HorizontalDivider height="16px" color="Light Gray" />
            <Date
              color="Light Gray"
              date={document.datePosted}
              textSize="M"
              weight="Light"
            />
          </Container>
          <Heading
            text={document.name}
            align="Left"
            rank="1"
            weight="Bold"
            color="Dark Gray"
          />
          <Image
            src={document.primaryPhoto.image.url}
            alt={document.primaryPhoto.image.alternateText}
            aspect="Rectangle"
            size="Large"
          />
          <MarkdownContent content={document.blogStarter_body.markdown} />
        </Container>
      </MainContentWrapper>
      <Footer />
    </PageWrapper>
  );
}
