import "../tailwind.css";

import type { AppProps } from "next/app";
import NextLink from "next/link";
import * as React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";
import { Disclosure } from "@headlessui/react";
import { initialState, State } from "./settings";
import { NextPage } from "next";
import { useRouter } from "next/router";

const createContext = <TState,>(initialState?: TState) => {
  const Context = React.createContext<TState | undefined>(
    initialState ?? undefined
  );
  const useContext = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error("useContext: must be used inside Context.Provider");
    }
    return context;
  };
  return [useContext, Context.Provider] as const;
};

export const [useAppState, AppStateProvider] = createContext<{
  appState: State;
  setAppState: React.Dispatch<State>;
}>();

export const Header: React.FC<{ toggle: () => void; isOpen: boolean }> = ({
  isOpen,
  toggle,
}) => {
  return (
    <header className="fixed inset-x-0 z-50 mx-auto flex max-w-[90rem] items-center justify-between px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
      <NextLink href="/">
        <a className="hidden focus-visible:outline-none lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            className="w-16"
          >
            <path
              d="M15.464 0C12.4055 0 9.41569 0.904944 6.87266 2.6004C4.32964 4.29585 2.34755 6.70566 1.17713 9.52511C0.00669961 12.3445 -0.299537 15.447 0.297141 18.4401C0.893823 21.4332 2.36663 24.1825 4.52929 26.3402C6.69196 28.4982 9.44741 29.9678 12.4471 30.5633C15.4468 31.1586 18.5561 30.853 21.3818 29.6854C24.2075 28.5173 26.6224 26.5396 28.3218 24.0022C30.021 21.4648 30.9279 18.4816 30.9279 15.4298C30.9279 11.3376 29.2987 7.41294 26.3986 4.5193C23.4985 1.62564 19.5653 0 15.464 0ZM24.9631 17.6848C24.9631 17.9934 23.567 18.0375 23.567 18.3461C23.567 18.6547 24.9478 19.0735 24.9478 19.499C24.9478 20.0191 22.1024 20.0962 22.1024 20.6165C22.1024 21.172 24.2607 21 24.2607 21.6018C24.2607 22.3116 18.8395 21.9809 18.8395 22.7194C18.8395 23.0014 19.5333 23.1183 20.4015 23.211C20.8786 23.2638 20.7747 23.4974 20.5031 23.6519C18.9854 24.5757 17.2419 25.0647 15.464 25.0647C13.6861 25.0647 11.9426 24.5757 10.4249 23.6519C10.1554 23.4865 10.0494 23.2529 10.5265 23.211C11.3947 23.1183 12.0906 22.9905 12.0906 22.7194C12.0906 21.9809 6.66716 22.3116 6.66716 21.6018C6.66716 21 8.82773 21.1609 8.82773 20.6165C8.82773 20.0962 5.98017 20.0191 5.98017 19.499C5.98017 19.0735 7.3631 18.6613 7.3631 18.3461C7.3631 18.0309 5.96469 17.9956 5.96469 17.6848C5.96469 17.374 6.98533 17.1734 6.98533 16.953C6.98533 16.5364 5.79899 17.2947 5.79899 15.4298C5.79899 12.8722 6.81731 10.4193 8.62983 8.61077C10.4424 6.80222 12.9007 5.78619 15.464 5.78619C18.0273 5.78619 20.4856 6.80222 22.2982 8.61077C24.1107 10.4193 25.1289 12.8722 25.1289 15.4298C25.1289 17.2947 23.9427 16.532 23.9427 16.953C23.9427 17.1734 24.9631 17.352 24.9631 17.6848Z"
              fill="#4F46E5"
            />
          </svg>
        </a>
      </NextLink>

      <button
        onClick={toggle}
        className="rounded text-black focus-visible:outline-none lg:hidden"
      >
        {isOpen ? <IoMdClose size="1.5rem" /> : <CgMenuLeftAlt size="1.5rem" />}
      </button>

      <nav className="flex gap-4">
        <NextLink href="/sing-in">
          <a className="rounded-lg bg-sky-200 px-3 py-2 text-center font-medium text-sky-600 hover:bg-opacity-80 focus-visible:outline-none">
            Sing in
          </a>
        </NextLink>
        <NextLink href="/sign-up">
          <a className="rounded-lg bg-sky-500 px-3 py-2 text-center font-medium text-white hover:bg-opacity-80 focus-visible:outline-none">
            Try for free
          </a>
        </NextLink>
      </nav>
    </header>
  );
};

export const Link: React.FC<{
  link: string;
  label: string;
  icon: React.ReactNode;
}> = (props) => {
  const { icon, label, link } = props;
  const { pathname } = useRouter();
  const isSelected = pathname === link;

  return (
    <NextLink href={link}>
      <a
        className={`relative flex rounded-r-lg focus-visible:outline-none ${
          isSelected ? "bg-slate-100" : ""
        }`}
      >
        {isSelected && (
          <motion.span
            layoutId="underline"
            className="absolute inset-y-0 inline-flex w-1 rounded-r-lg bg-sky-500"
          ></motion.span>
        )}
        <div
          className={`flex grow items-center space-x-1.5 py-2 pl-8 ${
            isSelected ? "" : "text-gray-500"
          }`}
        >
          {icon}
          <span className="inline-flex text-xs font-medium">{label}</span>
        </div>
      </a>
    </NextLink>
  );
};

export const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`scrollbar fixed right-auto top-16 left-[max(0px,50%-45rem)] z-20 h-full w-[17.5rem] overflow-y-auto bg-white font-poppins lg:block ${
        isOpen ? "" : "hidden"
      }`}
    >
      <nav className="pt-14">
        <ul className="space-y-1.5">
          {[
            { link: "/", icon: TbSmartHome, label: "Home" },
            { link: "/explore", icon: MdOutlineExplore, label: "Explore" },
            { link: "/events", icon: HiOutlineCalendar, label: "Events" },
            { link: "/settings", icon: HiOutlineCalendar, label: "Settings" },
          ].map(({ link, icon: Icon, label }) => {
            return (
              <li key={label}>
                <Link
                  icon={<Icon size="1.25rem" />}
                  label={label}
                  link={link}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-12 px-8">
        <div className="border-t pt-6">
          <div className="flex justify-between">
            <span className="text-xs font-medium">Groups</span>
            <button className="flex-none focus-visible:outline-none">
              <IoAddCircleOutline className="text-gray-500" size="1.25rem" />
            </button>
          </div>

          <div className="mt-8">
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="group flex w-full items-center py-2">
                    <Disclosure.Button className="flex grow items-center space-x-2">
                      {open ? (
                        <FaCaretDown className="flex-none" size="0.75rem" />
                      ) : (
                        <FaCaretRight className="flex-none" size="0.75rem" />
                      )}
                      <span className="text-xs font-medium">Introduction</span>
                    </Disclosure.Button>

                    <button className="pointer-events-none invisible flex-none pl-2 focus-visible:outline-none group-hover:pointer-events-auto group-hover:visible">
                      <IoMdMore size="1.25rem" />
                    </button>
                  </div>

                  <Disclosure.Panel>
                    <div className="group flex">
                      <NextLink href="/">
                        <a className="flex grow items-center space-x-2 py-2 text-gray-500 focus-visible:outline-none">
                          <BsChat className="flex-none" size="1.25rem" />
                          <span className="text-xs font-medium">
                            Group chat
                          </span>
                        </a>
                      </NextLink>
                      <button className="pointer-events-none invisible flex-none pl-2 text-gray-500 focus-visible:outline-none group-hover:pointer-events-auto group-hover:visible">
                        <IoMdMore size="1.25rem" />
                      </button>
                    </div>
                    <div className="group flex items-center">
                      <NextLink href="/">
                        <a className="flex grow items-center space-x-2 py-2 text-gray-500 focus-visible:outline-none">
                          <HiOutlineSpeakerphone
                            className="flex-none"
                            size="1.25rem"
                          />
                          <span className="text-xs font-medium">
                            Announcement
                          </span>
                        </a>
                      </NextLink>
                      <button className="invisible flex-none pl-2 text-gray-500 focus-visible:outline-none group-hover:pointer-events-auto group-hover:visible">
                        <IoMdMore size="1.25rem" />
                      </button>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Provider = ({ children }) => {
  const [state, setState] = React.useState(initialState);
  return (
    <AppStateProvider value={{ appState: state, setAppState: setState }}>
      {children}
    </AppStateProvider>
  );
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: React.JSXElementConstructor<string | any>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CommonLayout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Header isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />
      <Sidebar isOpen={isOpen} />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? CommonLayout;

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
