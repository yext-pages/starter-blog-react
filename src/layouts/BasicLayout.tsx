import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
import Image from "../components/atoms/Image";
import MainContentWrapper from "../components/atoms/MainContentWrapper";
import PageWrapper from "../components/atoms/PageWrapper";
import Text from "../components/atoms/Text";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";

const BasicLayout = () => {
  return (
    <PageWrapper backgroundColor="White">
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <MainContentWrapper>
        <Container
          layout="Column"
          flexGap="6"
          itemAlignment="Center"
          paddingBottom="32px"
          paddingLeft="16px"
          paddingRight="16px"
          paddingTop="32px"
        >
          <Heading
            text="This is an example of a layout."
            rank="1"
            weight="Bold"
            color="Dark Gray"
          />
          <Text
            text="Welcome to your blank canvas."
            size="L"
            weight="Regular"
            color="Dark Gray"
            align="Center"
          />
          <Image
            src="https://images.unsplash.com/photo-1573184426556-05c59aca2e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Painting of the beach on a white wall"
            aspect="Rectangle"
          />
          <Text
            text="Use the variety of components and containers this template provides to transform this layout into a new page for your site."
            size="L"
            weight="Regular"
            color="Dark Gray"
            align="Center"
          />
        </Container>
      </MainContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default BasicLayout;
