import { BlogStarter_featuredBlogs } from "../../types/autogen";
import FeaturedBlog from "./FeaturedBlog";

export interface FeaturedBlogsSectionProps {
  featuredBlogs: Array<BlogStarter_featuredBlogs>;
}

const FeaturedBlogsSection = ({ featuredBlogs }: FeaturedBlogsSectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      {featuredBlogs.map((blog, i) => (
        <FeaturedBlog
          key={i}
          datePosted={blog.datePosted}
          name={blog.name}
          slug={blog.slug}
          src={blog.primaryPhoto?.image.url}
          alt={blog.primaryPhoto?.image.alternateText}
          blogStarter_description={blog.blogStarter_description}
        />
      ))}
    </section>
  );
};

export default FeaturedBlogsSection;
