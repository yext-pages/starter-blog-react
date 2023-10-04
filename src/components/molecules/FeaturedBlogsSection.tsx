import Container from "../atoms/Container";
import FeaturedBlog from "./FeaturedBlog";

export interface FeaturedBlogsSectionProps {
  /**
   * @displayName Image Shape
   * @tooltip Controls the shape of the blog image
   */
  imgShape: "Rectangle" | "Square";
  /**
   * @displayName Date Size
   * @tooltip Controls the size of the posted date text
   */
  dateSize: "XS" | "S" | "M" | "L";
  /**
   * @displayName Title Rank
   * @tooltip Controls whether the title is an h1, h2, h3 or h4
   */
  titleRank: "1" | "2" | "3" | "4";
  /**
   * @displayName Description Size
   * @tooltip Controls the size of the description text
   */
  descriptionSize: "XS" | "S" | "M" | "L";
}

const featuredBlogs = [
  {
    blogStarter_description:
      'Looking for an exciting travel adventure? Check out "A Bite of the Big Apple: Chelsea Edition" travel blog, and discover the best places to visit in Chelsea. From trendy cafes to art galleries and boutiques, this guide is perfect for any traveler looking for an immersive experience in one of New York\'s most vibrant neighborhoods. Let us take you on a journey through Chelsea with insider tips, recommendations, and stunning photography!',
    datePosted: "2023-06-01",
    id: "blogStarter_blog-chelsea",
    name: "A Bite of the Big Apple: Chelsea Edition",
    primaryPhoto: {
      image: {
        alternateText: "chelsea",
        height: 1481,
        url: "http://a.mktgcdn.com/p/axidqOu5Fs65SndPmDmDxdUs0cWQzSYQHOWrnzKq6wY/987x1481.jpg",
        width: 987,
      },
    },
    slug: "chelsea",
  },
  {
    blogStarter_description:
      "Looking to explore the financial heart of New York? Follow along with High Finance, a travel blog that explores the city's financial district. Get tips and insights on where to eat, where to stay, and what to see while immersing yourself in the bustling world of Wall Street. Join us for an unforgettable adventure through the Big Apple's most iconic neighborhood.",
    datePosted: "2023-06-12",
    id: "blogStarter_blog-fidi",
    name: "High Finance: Exploring the Heart of New York's Financial District",
    primaryPhoto: {
      image: {
        alternateText: "financial district",
        height: 1380,
        url: "http://a.mktgcdn.com/p/G_jLt9S27Dwyvf26th8ZsXNmCqXTgUh9TEuGfJxtkuo/2070x1380.jpg",
        width: 2070,
      },
    },
    slug: "financial-district",
  },
  {
    blogStarter_description:
      'Explore the vibrant and historic Lower East Side through our travel blog: "Lower East Side: Tenements and Tabletops." Discover the best places to eat, drink, and explore in this iconic New York City neighborhood.',
    datePosted: "2023-06-14",
    id: "blogStarter_blog-les",
    name: "Lower East Side: Tenements and Tabletops",
    primaryPhoto: {
      image: {
        alternateText: "lower east side",
        height: 2001,
        url: "http://a.mktgcdn.com/p/X22JMtSbtXrnxBef_S9h8ZTPGgoaraYmsF3dYYpdJMg/3000x2001.jpg",
        width: 3000,
      },
    },
    slug: "lower-east-side",
  },
  {
    blogStarter_description:
      "Discover the urban-chic vibe of Williamsburg through our travel blog. Follow us as we embark on an odyssey and uncover the hidden gems of this vibrant neighborhood. Get inspired to plan your own adventure with Williamsburg: An Odyssey of Urban Chic!",
    datePosted: "2023-05-24",
    id: "blogStarter_blog-williamsburg",
    name: "Williamsburg: An Odyssey of Urban Chic",
    primaryPhoto: {
      image: {
        alternateText: "williamsburg",
        height: 1381,
        url: "http://a.mktgcdn.com/p/QEuQG2q6h9NzM_ygSgO_MC7Fu1ImGeVDrJqqRM3MFdQ/2071x1381.jpg",
        width: 2071,
      },
    },
    slug: "williamsburg",
  },
];

const FeaturedBlogsSection = ({
  imgShape,
  dateSize,
  titleRank,
  descriptionSize,
}: FeaturedBlogsSectionProps) => {
  return (
    <Container layout="Column" flexGap="8">
      {featuredBlogs.map((blog, i) => (
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
