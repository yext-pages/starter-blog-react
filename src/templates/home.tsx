import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Image from "../components/atoms/Image";
import PageLayout from "../components/PageLayout";
import "../index.css";
import FeaturedBlog from "../components/molecules/FeaturedBlog";
import { BlogStarter_featuredBlogs } from "../types/autogen";
import Heading from "../components/atoms/Heading";
import Container from "../components/atoms/Container";
import FeaturedBlogsSection from "../components/molecules/FeaturedBlogsSection";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"] },
    fields: [
      "id",
      "name",
      "blogStarter_coverPhoto",
      "blogStarter_heading",
      "blogStarter_subHeading",
      "slug",
      "blogStarter_featuredBlogs.id",
      "blogStarter_featuredBlogs.name",
      "blogStarter_featuredBlogs.slug",
      "blogStarter_featuredBlogs.primaryPhoto",
      "blogStarter_featuredBlogs.blogStarter_description",
      "blogStarter_featuredBlogs.datePosted",
    ],
    filter: { entityIds: ["blogStarter_home"] },
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

export default function Home({ document, __meta }: TemplateProps) {
  return (
    <PageLayout
      logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png"
      footerNav={document._site.blogStarter_footerLinks}
      headerNav={document._site.blogStarter_headerLinks}
      document={{ document: document, __meta: __meta }}
    >
      <Container
        layout="column"
        className="gap-6"
        marginTop="24px"
        marginBottom="24px"
      >
        <Image
          src={document.blogStarter_coverPhoto.image.url}
          alt={document.blogStarter_coverPhoto.image.alternateText}
          aspect="Rectangle"
        />
        <Heading text="Featured Articles" align="Left" rank="2" weight="Bold" />
        <FeaturedBlogsSection
          featuredBlogs={document.blogStarter_featuredBlogs}
        />
      </Container>
    </PageLayout>
  );
}
