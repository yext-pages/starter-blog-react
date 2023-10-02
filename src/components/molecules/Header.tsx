import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "../atoms/Link";
import Text from "../atoms/Text";

export interface HeaderProps {
  logo: string;
  navItems?: {
    uRL: string;
    label: string;
  }[];
}

export default function Header({ logo, navItems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function clickHandler() {
    setMobileMenuOpen(true);
  }

  return (
    <header className="text-default border-b text-sm">
      <nav
        className="mx-auto flex items-center justify-between p-6"
        aria-label="Global"
      >
        <Link url="./index.html">
          <span className="sr-only">Company logo</span>
          <img className="h-8 w-auto" src={logo} alt="Company logo" />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2.5"
            onClick={clickHandler}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems &&
            navItems.map((item) => (
              <Link key={item.label} url={item.uRL}>
                <Text
                  text={item.label}
                  color="Default"
                  size="S"
                  weight="Semi Bold"
                />
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:px-6">
          <div className="flex items-center justify-between">
            <Link url="#">
              <span className="sr-only">Company logo</span>
              <img className="h-8 w-auto" src={logo} alt="Company logo" />
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-2 py-6">
                {navItems &&
                  navItems.map((item) => (
                    <Link key={item.label} url={item.uRL}>
                      <Text
                        text={item.label}
                        color="Default"
                        size="S"
                        weight="Semi Bold"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
