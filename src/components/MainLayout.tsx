import { AnalyticsProvider } from "@yext/pages/components";
import Header from "./Header";
import { HexColor } from "@yext/studio";
import { TemplateProps } from "@yext/pages";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
  templateData: TemplateProps;
}

export const initialProps = {
  backgroundColor: "#111827",
};

const MainLayout = ({
  children,
  backgroundColor,
  templateData,
}: MainLayoutProps) => {
  return (
    <AnalyticsProvider templateData={templateData} enableDebugging={true}>
      <div
        className="flex min-h-screen w-full flex-col"
        style={{ backgroundColor }}
      >
        {children}
      </div>
    </AnalyticsProvider>
  );
};

export default MainLayout;
