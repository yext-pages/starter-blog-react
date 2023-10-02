import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import Image from "../components/atoms/Image";
import MarkdownContent from "../components/atoms/MarkdownContent";
import HorizontalDivider from "../components/atoms/HorizontalDivider";
import Date from "../components/atoms/Date";
import Heading from "../components/atoms/Heading";
import Container from "../components/atoms/Container";
import Text from "../components/atoms/Text";

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

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      },
    ],
  };
};

export default function Blog({ document, __meta }: TemplateProps) {
  return (
    <PageLayout
      logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png"
      footerNav={document._site.blogStarter_footerLinks}
      headerNav={document._site.blogStarter_headerLinks}
      document={{ document: document, __meta: __meta }}
    >
      <Container
        layout="column"
        className="mx-auto max-w-2xl gap-4"
        marginTop="24px"
        marginBottom="24px"
      >
        <Heading text={document.name} align="Left" rank="1" weight="Bold" />
        <Container layout="row" className="items-center gap-2">
          <Text
            text={document.blogStarter_blogAuthor}
            color="Default"
            weight="Light"
            size="M"
          />
          <HorizontalDivider height="16px" color="Default" />
          <Date
            color="Light"
            date={document.datePosted}
            size="M"
            weight="Light"
          />
        </Container>
        <Image
          src={document.primaryPhoto.image.url}
          alt={document.primaryPhoto.image.alternateText}
          aspect="Rectangle"
        />
        <MarkdownContent content={document.blogStarter_body.markdown} />
      </Container>
    </PageLayout>
  );
}
