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
    fields: [
      "name",
      "blogStarter_coverPhoto",
      "blogStarter_featuredBlogs.id",
      "blogStarter_featuredBlogs.name",
      "blogStarter_featuredBlogs.slug",
      "blogStarter_featuredBlogs.primaryPhoto",
      "blogStarter_featuredBlogs.blogStarter_description",
      "blogStarter_featuredBlogs.datePosted",
    ],
    filter: { entityTypes: ["blogStarter_homePage"] },
  },
};
export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
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

export default function Home({ document }: TemplateProps) {
  return (
    <PageWrapper>
      <Header
        logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png"
        navItems={document._site.blogStarter_headerLinks}
      />
      <MainContentWrapper>
        <Container
          layout="column"
          className="gap-8"
          marginTop="48px"
          marginBottom="48px"
        >
          <Image
            src={document.blogStarter_coverPhoto.image.url}
            alt={document.blogStarter_coverPhoto.image.alternateText}
            aspect="Rectangle"
          />
          <Heading
            text="Featured Articles"
            align="Left"
            rank="2"
            weight="Bold"
            color="Default"
          />
          <FeaturedBlogsSection
            featuredBlogs={document.blogStarter_featuredBlogs}
            dateSize="XS"
            descriptionSize="M"
            titleRank="4"
            imgShape="Square"
          />
        </Container>
      </MainContentWrapper>
      <Footer links={document._site.blogStarter_footerLinks} />
    </PageWrapper>
  );
}
