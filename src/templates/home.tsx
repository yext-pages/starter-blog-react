import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import React from "react";
import BigImage from "../components/BigImage";
import CenteredContainer from "../components/CenteredContainer";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import FeaturedBlog from "../components/FeaturedBlog";
import { BlogStarter_featuredBlogs } from "../types/autogen";
import ComplexHeader from "../components/ComplexHeader";
import { AnalyticsProvider } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"], primary: false },
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
  };
};

export default function Home({ document, __meta }: TemplateProps) {
  console.log(document._site);
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <AnalyticsProvider
        templateData={{ document: document, __meta: __meta }}
        enableDebugging={true}
      >
        <ComplexHeader
          backgroundColor="#FFFFFF"
          textColor="#000000"
          logo={document._site.logo.image.url}
          link1={document._site.blogStarter_headerLinks[0].uRL}
          link2={document._site.blogStarter_headerLinks[1].uRL}
          link3={document._site.blogStarter_headerLinks[2].uRL}
          link4={document._site.blogStarter_headerLinks[3].uRL}
          label1={document._site.blogStarter_headerLinks[0].label}
          label2={document._site.blogStarter_headerLinks[1].label}
          label3={document._site.blogStarter_headerLinks[2].label}
          label4={document._site.blogStarter_headerLinks[3].label}
          companyScreenReaderText={document._site.logo.image.alternateText}
          hoverColor="light"
        />
        <CenteredContainer>
          <VerticalStack
            spacing="8"
            topMargin="10"
            bottomMargin="10"
            leftMargin="2"
            rightMargin="2"
            alignment="left"
          >
            <BigImage
              src={document.blogStarter_coverPhoto.image.url}
              alt={document.blogStarter_coverPhoto.image.alternateText}
            />
            <Title
              value="Featured Articles"
              fontWeight="bold"
              textSize="4xl"
              topMargin="0"
              bottomMargin="0"
              textColor="#000000"
            />
            {document.blogStarter_featuredBlogs.map(
              (item: BlogStarter_featuredBlogs, index: string) => (
                <FeaturedBlog
                  name={item.name}
                  slug={item.slug}
                  src={item.primaryPhoto?.image.url}
                  alt={item.primaryPhoto?.image.alternateText}
                  blogStarter_description={item.blogStarter_description}
                  datePosted={item.datePosted}
                  key={index}
                  textColor="#000000"
                />
              )
            )}
          </VerticalStack>
        </CenteredContainer>
        <Footer
          link1={document._site.blogStarter_footerLinks[0].uRL}
          link2={document._site.blogStarter_footerLinks[1].uRL}
          link3={document._site.blogStarter_footerLinks[2].uRL}
          link4={document._site.blogStarter_footerLinks[3].uRL}
          label1={document._site.blogStarter_footerLinks[0].label}
          label2={document._site.blogStarter_footerLinks[1].label}
          label3={document._site.blogStarter_footerLinks[2].label}
          label4={document._site.blogStarter_footerLinks[3].label}
          backgroundColor="#FFFFFF"
          textColor="#000000"
          hoverColor="light"
        />
      </AnalyticsProvider>
    </MainLayout>
  );
}
