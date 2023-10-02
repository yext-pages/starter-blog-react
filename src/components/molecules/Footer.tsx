import Link from "../atoms/Link";

interface FooterProps {
  navItems?: {
    uRL: string;
    label: string;
  }[];
}

const Footer = ({ navItems }: FooterProps) => {
  return (
    <footer
      className="mt-auto w-full border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <ul className="text-default flex w-full items-center justify-center gap-6 p-6 md:gap-10 lg:px-6">
        {navItems &&
          navItems.map((item, i: number) => {
            return (
              <Link key={i} url={item.uRL}>
                <li className="rounded-lg text-sm font-medium leading-6 text-slate-900 md:px-4">
                  {item.label}
                </li>
              </Link>
            );
          })}
      </ul>
    </footer>
  );
};

export default Footer;
