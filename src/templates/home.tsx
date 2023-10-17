import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import MainContentWrapper from "../components/atoms/MainContentWrapper";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import Image from "../components/atoms/Image";
import PageWrapper from "../components/atoms/PageWrapper";
import FeaturedBlogsSection from "../components/molecules/FeaturedBlogsSection";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"] },
    fields: ["name", "slug", "blogStarter_coverPhoto"],
    filter: { entityTypes: ["blogStarter_homePage"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps<{ name: string }>
> = ({ document }): HeadConfig => {
  return {
    title: "Blog Home",
  };
};

export default function Home({ document }: TemplateProps) {
  return (
    <PageWrapper backgroundColor="White">
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <MainContentWrapper>
        <Container
          layout="Column"
          flexGap="8"
          marginTop="48px"
          marginBottom="48px"
        >
          <Image
            src={document.blogStarter_coverPhoto.image.url}
            alt={document.blogStarter_coverPhoto.image.alternateText}
            aspect="Rectangle"
            size="Large"
          />
          <Heading
            text="Featured Articles"
            align="Left"
            rank="2"
            weight="Bold"
            color="Dark Gray"
          />
          <FeaturedBlogsSection
            dateSize="XS"
            descriptionSize="M"
            titleRank="4"
            imgShape="Square"
          />
        </Container>
      </MainContentWrapper>
      <Footer />
    </PageWrapper>
  );
}
