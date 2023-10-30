import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@yext/sites-components";

export interface HeaderProps {
  /**
   * @displayName Logo
   * @tooltip Controls the logo to display in the header
   */
  logo: string;
}

const navigation = [
  { label: "About", uRL: "#" },
  { label: "Membership", uRL: "#" },
  { label: "Contribute", uRL: "#" },
  { label: "Contact", uRL: "#" },
];

export default function Header({ logo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function clickHandler() {
    setMobileMenuOpen(true);
  }

  return (
    <header className="h-20 border-b text-sm text-gray-900">
      <nav
        className="mx-auto flex h-full items-center justify-between px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="./index.html" eventName="headerhome">
            <span className="sr-only">Company logo</span>
            <img className="h-8 w-auto" src={logo} alt="Company logo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.uRL}
              eventName={`header${item.label}`}
            >
              <span className="text-sm font-semibold text-gray-900 hover:text-gray-600">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link
            href="#"
            className="hidden text-gray-900 hover:text-gray-600 lg:block lg:text-sm lg:font-semibold lg:leading-6"
            eventName="headerlogin"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="mr-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 lg:mr-0"
            eventName="headersignup"
          >
            Sign up
          </Link>
        </div>
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
            <Link href="#" eventName="headerhome">
              <span className="sr-only">Company logo</span>
              <img className="h-8 w-auto" src={logo} alt="Company logo" />
            </Link>
            <Link
              href="#"
              className="ml-auto mr-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
              eventName="headersignup"
            >
              Sign up
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
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.uRL}
                    eventName={`header${item.label}`}
                  >
                    <span className="text-sm font-semibold text-gray-900 hover:text-gray-600">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-zinc-50"
                  eventName="headerlogin"
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
