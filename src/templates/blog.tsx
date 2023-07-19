import * as React from "react";
import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import Container from "../components/Container";
import BlogLayout from "../components/BlogLayout";
import Main from "../components/layouts/Main";
import { formatDate } from "../utils/formatDate";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "id",
      "name",
      "slug",
      "datePosted",
      "c_coverPhoto",
      "c_body",
      "c_description",
      "c_metaDescription",
      "c_keywords",
    ],
    filter: {
      entityTypes: ["ce_blog"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.c_metaDescription,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "keywords",
          content: document.c_keywords,
        },
      },
    ],
  };
};

const Blog = ({ document }: TemplateRenderProps) => {
  const { name, datePosted, c_body, c_coverPhoto } = document;

  return (
    <Main>
      <Container>
        <BlogLayout
          title={name}
          date={formatDate(datePosted)}
          content={c_body}
          image={c_coverPhoto}
        />
      </Container>
    </Main>
  );
};

export default Blog;
