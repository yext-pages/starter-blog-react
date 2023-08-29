import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HexColor } from "@yext/studio";
import Link from "./Link";

export interface ComplexHeaderProps {
  logo?: string;
  companyScreenReaderText?: string;
  backgroundColor?: HexColor;
  textColor?: HexColor;
  link1: string;
  label1: string;
  link2: string;
  label2: string;
  link3: string;
  label3: string;
  link4: string;
  label4: string;
  hoverColor: "dark" | "light";
}

export default function ComplexHeader({
  logo,
  companyScreenReaderText,
  backgroundColor,
  textColor,
  link1,
  label1,
  link2,
  label2,
  link3,
  label3,
  link4,
  label4,
  hoverColor,
}: ComplexHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: label1, href: link1 },
    { name: label2, href: link2 },
    { name: label3, href: link3 },
    { name: label4, href: link4 },
  ];

  const hoverColorVariants = {
    dark: "hover:bg-gray-700",
    light: "hover:bg-gray-50",
  };

  function clickHandler() {
    setMobileMenuOpen(true);
  }

  return (
    <header className="border-b" style={{ backgroundColor }}>
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-6"
        aria-label="Global"
      >
        <Link url="./index.html" tailwindClasses="p-1.5">
          <span className="sr-only">{companyScreenReaderText}</span>
          <img
            className="h-8 w-auto"
            src={logo}
            alt={companyScreenReaderText}
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2.5"
            style={{ color: textColor }}
            onClick={clickHandler}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              url={item.href}
              tailwindClasses={`rounded-lg px-4 py-2 text-sm font-semibold leading-6 ${hoverColorVariants[hoverColor]}`}
              textColor={textColor}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:px-6"
          style={{ backgroundColor }}
        >
          <div className="flex items-center justify-between">
            <Link url="#" tailwindClasses="p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt={companyScreenReaderText}
              />
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5"
              style={{ color: textColor }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    url={item.href}
                    tailwindClasses={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${hoverColorVariants[hoverColor]}`}
                    textColor={textColor}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  url="#"
                  tailwindClasses={`block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${hoverColorVariants[hoverColor]}`}
                  textColor={textColor}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
