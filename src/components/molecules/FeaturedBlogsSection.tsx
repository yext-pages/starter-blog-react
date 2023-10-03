import { BlogStarter_featuredBlogs } from "../../types/autogen";
import Container from "../atoms/Container";
import FeaturedBlog from "./FeaturedBlog";

export interface FeaturedBlogsSectionProps {
  /**
   * @displayName Featured Blogs
   **/
  featuredBlogs: Array<BlogStarter_featuredBlogs>;
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

const FeaturedBlogsSection = ({
  featuredBlogs,
  imgShape,
  dateSize,
  titleRank,
  descriptionSize,
}: FeaturedBlogsSectionProps) => {
  return (
    <Container layout="Column" flexGap="8">
      {featuredBlogs &&
        featuredBlogs.map((blog, i) => (
          <FeaturedBlog
            key={i}
            datePosted={blog.datePosted}
            name={blog.name}
            slug={blog.slug}
            src={blog.primaryPhoto?.image.url}
            alt={blog.primaryPhoto?.image.alternateText}
            blogStarter_description={blog.blogStarter_description}
            imgShape={imgShape}
            dateSize={dateSize}
            titleRank={titleRank}
            descriptionSize={descriptionSize}
          />
        ))}
    </Container>
  );
};

export default FeaturedBlogsSection;
