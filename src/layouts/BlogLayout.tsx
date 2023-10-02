import Main from "../components/Main";
import Heading from "../components/atoms/Heading";
import Page from "../components/atoms/Page";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";

const BlogLayout = () => {
  return (
    <Page>
      <Header
        navItems={[
          { label: "About", uRL: "#" },
          { label: "Membership", uRL: "#" },
          { label: "Contribute", uRL: "#" },
          { label: "Login", uRL: "#" },
        ]}
        logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png"
      />
      <Main>
        <Heading text="Insert Page Content Here" />
      </Main>
      <Footer
        navItems={[
          { label: "Privacy", uRL: "#" },
          { label: "Terms", uRL: "#" },
          { label: "Settings", uRL: "#" },
          { label: "Help", uRL: "#" },
        ]}
      />
    </Page>
  );
};

export default BlogLayout;
