import PageLayout from "../components/PageLayout";
import Heading from "../components/atoms/Heading";

const BlogLayout = () => {
  return (
    <PageLayout
      logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png"
      footerNav={[
        { label: "Privacy", uRL: "#" },
        { label: "Terms", uRL: "#" },
        { label: "Settings", uRL: "#" },
        { label: "Help", uRL: "#" },
      ]}
      headerNav={[
        { label: "About", uRL: "#" },
        { label: "Membership", uRL: "#" },
        { label: "Contribute", uRL: "#" },
        { label: "Login", uRL: "#" },
      ]}
    >
      <Heading text="Insert Page Content Here" />
    </PageLayout>
  );
};

export default BlogLayout;
