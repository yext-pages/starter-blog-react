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
            textSize="L"
            weight="Regular"
            color="Dark Gray"
            align="Center"
          />
          <Image
            src="https://placehold.co/1920x1280"
            alt="Gray placeholder image."
            aspect="Rectangle"
            size="Large"
          />
          <Text
            text="Use the variety of components and containers this template provides to transform this layout into a new page for your site."
            textSize="L"
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
