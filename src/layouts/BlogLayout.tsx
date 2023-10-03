import Main from "../components/atoms/MainContentWrapper";
import Page from "../components/atoms/PageWrapper";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";

const BlogLayout = () => {
  return (
    <Page>
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <Main></Main>
      <Footer />
    </Page>
  );
};

export default BlogLayout;
