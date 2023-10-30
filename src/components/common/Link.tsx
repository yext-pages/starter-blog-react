import { Link as SitesLink } from "@yext/sites-components";
import { cn } from "../../utils";
import { cva } from "cva";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "",
      "button-dark":
        "w-fit rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600",
      "button-light":
        "rounded-md w-fit bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition px-3 py-2 hover:ring-zinc-400 text-gray-600",
    },
    shape: {
      default: "",
      round: "rounded-full p-3",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "default",
  },
});

export interface LinkProps {
  children: React.ReactNode;
  /**
   * @displayName URL
   * @tooltip Controls the URL the link should redirect to
   */
  url: string;
  /**
   * @displayName Analytics Label
   * @tooltip Controls the label the click is tagged with in analytics
   */
  analyticsLabel?: string;
  /**
   * @displayName Variant
   * @tooltip Controls the style of the link
   */
  variant?: "default" | "button-dark" | "button-light";
  /**
   * @displayName Shape
   * @tooltip Controls the border radius of the link
   */
  shape?: "default" | "round";
}

const Link = ({ children, url, analyticsLabel, variant, shape }: LinkProps) => {
  return (
    <SitesLink
      href={url}
      className={cn(linkVariants({ variant, shape }))}
      eventName={analyticsLabel ?? "blog-click"}
    >
      {children}
    </SitesLink>
  );
};

export default Link;
