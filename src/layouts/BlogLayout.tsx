import PageLayout from "../components/PageLayout";

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
      <div className="flex h-full w-full items-center justify-center">
        Insert Content Here
      </div>
    </PageLayout>
  );
};

export default BlogLayout;
