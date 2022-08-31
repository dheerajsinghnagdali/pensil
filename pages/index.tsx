import type { NextPage } from "next";
import NextLink from "next/link";
import * as React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Star: React.FC<{ filled?: boolean }> = ({ filled = true }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`h-5 w-5 ${filled ? "fill-black" : ""}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

const Faq: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="relative space-y-4 rounded-lg border bg-white p-8 shadow-md">
      <h3 className="text-2xl font-semibold">{question}</h3>
      <p className="text-sm text-gray-500">{answer}</p>
    </div>
  );
};

interface TestimonialProps {
  thought: string;
  avatar: { src: string; alt: string };
  name: string;
  profession: string;
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { thought, name, profession, avatar } = props;

  return (
    <article className="space-y-6 rounded bg-white p-6 shadow-md">
      <div className="flex gap-x-0.5">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p>“{thought}”</p>
      <div className="flex items-center gap-x-2">
        <div className="h-10 w-10 flex-none overflow-hidden rounded-full bg-gray-500">
          <img
            src={avatar.src}
            alt={avatar.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm">{profession}</p>
        </div>
      </div>
    </article>
  );
};

const Header: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <NextLink href="/">
        <a className="focus-visible:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 153 50"
            className="w-24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8069 44.8179V32.5092H10.8105L10.8067 21.8889L22.0521 21.8845L22.0556 31.377C27.8687 29.0272 31.9761 23.2758 31.9761 16.5534C31.9761 7.74127 24.9182 0.597656 16.2118 0.597656C7.50539 0.597656 0.44751 7.74127 0.44751 16.5534V31.1416V32.5092V44.8179C0.44751 47.3357 2.46407 49.3767 4.9516 49.3767H6.30283C8.79035 49.3767 10.8069 47.3357 10.8069 44.8179ZM19.4219 15.6793C19.2809 15.7752 19.1099 15.8323 18.9211 15.8324L13.9422 15.8344C13.7535 15.8344 13.5825 15.7774 13.4414 15.6816L11.4613 19.6981C11.1624 20.3044 11.5982 21.0171 12.2677 21.0169L20.5995 21.0137C21.269 21.0134 21.7043 20.3003 21.4049 19.6942L19.4219 15.6793ZM15.3763 10.3989C15.6821 9.64558 16.7361 9.64518 17.0424 10.3983L17.9479 12.624C18.1919 13.224 17.7562 13.8826 17.1152 13.8829L15.3061 13.8836C14.665 13.8838 14.2289 13.2255 14.4725 12.6254L15.3763 10.3989Z"
              fill="#0445FE"
            />
            <path
              d="M56.0786 43.4817H50.8334V14.9566H52.0922L54.1712 17.4446C54.6417 16.9946 55.1567 16.5703 55.7161 16.1717C56.2756 15.7731 56.8542 15.4324 57.4518 15.1495C58.0622 14.8537 58.6919 14.6224 59.3403 14.4552C59.9888 14.288 60.6436 14.2044 61.3047 14.2044C62.7414 14.2044 64.0896 14.4681 65.3479 14.9952C66.6195 15.5095 67.726 16.2424 68.6667 17.1939C69.6208 18.1454 70.3704 19.2961 70.9177 20.6462C71.4643 21.9834 71.7376 23.4685 71.7376 25.1015C71.7376 26.7987 71.4643 28.3287 70.9177 29.6917C70.3704 31.0418 69.6208 32.1926 68.6667 33.144C67.726 34.0826 66.6195 34.8027 65.3479 35.3041C64.0896 35.8056 62.7414 36.0563 61.3047 36.0563C60.8466 36.0563 60.3892 36.0049 59.9312 35.902C59.4864 35.7991 59.041 35.6642 58.5963 35.497C58.1639 35.317 57.7315 35.1177 57.2993 34.8991C56.8796 34.6805 56.4727 34.4555 56.0786 34.2241V43.4817ZM66.5113 25.1015C66.5113 24.2271 66.3715 23.4428 66.0919 22.7485C65.8249 22.0541 65.456 21.4691 64.986 20.9934C64.5153 20.5048 63.9624 20.1319 63.3266 19.8748C62.6908 19.6176 62.0163 19.489 61.3047 19.489C60.5923 19.489 59.9185 19.6176 59.2827 19.8748C58.6595 20.1319 58.113 20.5048 57.6425 20.9934C57.1721 21.4691 56.7969 22.0541 56.5172 22.7485C56.2502 23.4428 56.1167 24.2271 56.1167 25.1015C56.1167 25.9372 56.2502 26.7022 56.5172 27.3966C56.7969 28.0909 57.1721 28.6824 57.6425 29.1709C58.113 29.6596 58.6595 30.0389 59.2827 30.3089C59.9185 30.5789 60.5923 30.7139 61.3047 30.7139C62.0163 30.7139 62.6908 30.5789 63.3266 30.3089C63.9624 30.0389 64.5153 29.6596 64.986 29.1709C65.456 28.6824 65.8249 28.0909 66.0919 27.3966C66.3715 26.7022 66.5113 25.9372 66.5113 25.1015ZM82.762 30.5596C82.9658 30.6239 83.1688 30.6689 83.3726 30.6946C83.5756 30.7074 83.7793 30.7139 83.9824 30.7139C84.491 30.7139 84.9807 30.6432 85.4514 30.5018C85.9221 30.3603 86.3605 30.161 86.7673 29.9039C87.1867 29.6338 87.5556 29.3124 87.8738 28.9395C88.204 28.5538 88.471 28.1295 88.6747 27.6666L92.4896 31.5432C92.0063 32.2375 91.447 32.8611 90.8112 33.4141C90.188 33.9669 89.5073 34.4362 88.7703 34.822C88.0453 35.2077 87.276 35.497 86.4624 35.6899C85.6608 35.8956 84.8346 35.9985 83.9824 35.9985C82.5457 35.9985 81.1918 35.7285 79.9202 35.1884C78.6612 34.6484 77.5547 33.8962 76.6014 32.9319C75.6606 31.9675 74.9166 30.8232 74.37 29.4988C73.8228 28.1616 73.5495 26.6958 73.5495 25.1015C73.5495 23.4685 73.8228 21.977 74.37 20.627C74.9166 19.2769 75.6606 18.1261 76.6014 17.1746C77.5547 16.2231 78.6612 15.4838 79.9202 14.9566C81.1918 14.4295 82.5457 14.1658 83.9824 14.1658C84.8346 14.1658 85.6678 14.2687 86.4814 14.4744C87.2949 14.6802 88.0642 14.9759 88.7893 15.3616C89.5269 15.7474 90.2133 16.2231 90.8492 16.7888C91.485 17.3418 92.0442 17.9654 92.5275 18.6597L82.762 30.5596ZM85.4325 19.7011C85.1908 19.6111 84.9491 19.5533 84.7074 19.5276C84.4784 19.5019 84.2367 19.489 83.9824 19.489C83.2707 19.489 82.597 19.624 81.9611 19.894C81.338 20.1512 80.7914 20.5241 80.3207 21.0126C79.8626 21.5013 79.5008 22.0927 79.2331 22.7871C78.9662 23.4685 78.8327 24.24 78.8327 25.1015C78.8327 25.2943 78.839 25.5129 78.8516 25.7572C78.8776 26.0015 78.9092 26.2523 78.9472 26.5094C78.9985 26.7537 79.0554 26.9915 79.1193 27.223C79.1825 27.4544 79.2654 27.6602 79.3673 27.8402L85.4325 19.7011ZM100.367 35.6127H95.1593V14.9566H96.4183L98.1353 16.9625C98.9742 16.191 99.9212 15.5995 100.977 15.1881C102.045 14.7637 103.158 14.5516 104.315 14.5516C105.561 14.5516 106.737 14.7959 107.843 15.2845C108.95 15.7602 109.916 16.4224 110.743 17.271C111.569 18.1068 112.217 19.0904 112.688 20.2219C113.171 21.3406 113.412 22.5363 113.412 23.8093V35.6127H108.206V23.8093C108.206 23.2692 108.104 22.7613 107.901 22.2856C107.697 21.797 107.417 21.3727 107.061 21.0126C106.705 20.6527 106.292 20.3698 105.821 20.164C105.351 19.9583 104.849 19.8554 104.315 19.8554C103.768 19.8554 103.253 19.9583 102.77 20.164C102.287 20.3698 101.867 20.6527 101.511 21.0126C101.155 21.3727 100.875 21.797 100.672 22.2856C100.469 22.7613 100.367 23.2692 100.367 23.8093V35.6127ZM128.347 35.6127H116.445V30.3667H128.347C128.703 30.3667 129.008 30.2381 129.263 29.981C129.517 29.7239 129.644 29.4153 129.644 29.0552C129.644 28.6824 129.517 28.4381 129.263 28.3223C129.008 28.2066 128.703 28.1488 128.347 28.1488H122.931C122.028 28.1488 121.182 27.9752 120.394 27.628C119.605 27.2809 118.918 26.8116 118.334 26.2201C117.749 25.6158 117.285 24.915 116.941 24.1178C116.61 23.3206 116.445 22.4656 116.445 21.5527C116.445 20.6398 116.61 19.7848 116.941 18.9875C117.285 18.1904 117.749 17.4961 118.334 16.9046C118.918 16.3132 119.605 15.8502 120.394 15.5159C121.182 15.1688 122.028 14.9952 122.931 14.9952H133.478V20.2412H122.931C122.574 20.2412 122.269 20.3698 122.014 20.627C121.76 20.8841 121.633 21.1927 121.633 21.5527C121.633 21.9256 121.76 22.247 122.014 22.517C122.269 22.7742 122.574 22.9028 122.931 22.9028H128.347C129.237 22.9028 130.076 23.0571 130.865 23.3656C131.653 23.6614 132.34 24.0792 132.924 24.6193C133.51 25.1593 133.973 25.8086 134.317 26.5673C134.66 27.3258 134.832 28.1552 134.832 29.0552C134.832 29.9682 134.66 30.8232 134.317 31.6204C133.973 32.4047 133.51 33.0991 132.924 33.7033C132.34 34.2948 131.653 34.7641 130.865 35.1112C130.076 35.4456 129.237 35.6127 128.347 35.6127ZM143.758 9.34416C143.758 9.83279 143.663 10.2892 143.472 10.7136C143.294 11.1378 143.046 11.5107 142.729 11.8322C142.41 12.1408 142.035 12.3915 141.603 12.5844C141.184 12.7644 140.732 12.8543 140.249 12.8543C139.766 12.8543 139.308 12.7644 138.876 12.5844C138.456 12.3915 138.087 12.1408 137.769 11.8322C137.464 11.5107 137.216 11.1378 137.025 10.7136C136.847 10.2892 136.758 9.83279 136.758 9.34416C136.758 8.86847 136.847 8.41842 137.025 7.99408C137.216 7.55696 137.464 7.18406 137.769 6.87546C138.087 6.55406 138.456 6.30329 138.876 6.12327C139.308 5.93046 139.766 5.83398 140.249 5.83398C140.732 5.83398 141.184 5.93046 141.603 6.12327C142.035 6.30329 142.41 6.55406 142.729 6.87546C143.046 7.18406 143.294 7.55696 143.472 7.99408C143.663 8.41842 143.758 8.86847 143.758 9.34416ZM142.862 35.6127H137.617V14.9566H142.862V35.6127ZM152.093 35.6127H146.848V6.74048H152.093V35.6127Z"
              fill="#0445FE"
            />
          </svg>
        </a>
      </NextLink>

      <button onClick={toggle} className="rounded hover:bg-gray-100 lg:hidden">
        <CgMenuLeftAlt size="1.5rem" />
      </button>

      <div
        className={`absolute inset-x-0 top-full bg-white px-4 pb-4 shadow-lg lg:contents ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-x-4 lg:flex-row">
          <NextLink href="/features">
            <a className="rounded-lg px-1.5 py-2 hover:bg-gray-100 focus-visible:outline-none lg:p-0 lg:hover:bg-transparent lg:hover:text-gray-500">
              Features
            </a>
          </NextLink>
          <NextLink href="/pricing">
            <a className="rounded-lg px-1.5 py-2 hover:bg-gray-100 focus-visible:outline-none lg:p-0 lg:hover:bg-transparent lg:hover:text-gray-500">
              Pricing
            </a>
          </NextLink>
          <NextLink href="/automation">
            <a className="rounded-lg px-1.5 py-2 hover:bg-gray-100 focus-visible:outline-none lg:p-0 lg:hover:bg-transparent lg:hover:text-gray-500">
              Automation
            </a>
          </NextLink>
        </nav>

        <nav className="mt-2 flex flex-col-reverse gap-4 lg:mt-0 lg:flex-row">
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
      </div>
    </header>
  );
};

interface CardProps {
  title: string;
  desc: string;
  avatars: {
    src: string;
    alt: string;
  }[];
  id: number;
  poster: {
    src: string;
    alt: string;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { title, desc, avatars, id, poster } = props;

  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <img
        className="aspect-video object-cover"
        src={poster.src}
        alt={poster.alt}
      />
      <div className="p-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1.5 text-sm">{desc}</p>

        <div className="mt-8 flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-xs font-medium text-gray-600">Members</span>
            <div className="flex -space-x-2">
              {avatars.map(({ src, alt }, key) => (
                <div
                  key={key}
                  className="h-6 w-6 overflow-hidden rounded-full border-2"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={src}
                    alt={alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-2">
            <NextLink href={{ pathname: "/community", query: { id } }}>
              <a className="rounded-lg bg-sky-200 px-4 py-2 text-sm font-medium text-sky-500 hover:bg-opacity-80 focus-visible:outline-none">
                View
              </a>
            </NextLink>
            <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus-visible:outline-none">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="lg:flex lg:gap-x-4">
          <div className="flex flex-col items-center py-20 lg:flex-none lg:items-start lg:pt-32 lg:pb-40">
            <h1 className="text-center text-5xl font-extrabold sm:text-6xl lg:text-left">
              <span className="block">One platform for all </span>
              <span className="block text-sky-500">your community needs</span>
            </h1>

            <p className="mt-6 max-w-xl text-center text-lg text-gray-500 sm:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              enim temporibus placeat repellat ab dolorem.
            </p>

            <div className="mt-8 flex flex-col-reverse gap-4 self-stretch sm:flex-row sm:justify-center lg:justify-start">
              <NextLink href="/sing-in">
                <a className="rounded-xl bg-sky-200 px-4 py-3 text-center font-medium text-sky-500 hover:bg-opacity-80 sm:text-lg">
                  Sing in
                </a>
              </NextLink>
              <NextLink href="/sign-up">
                <a className="rounded-xl bg-sky-500 px-4 py-3 text-center font-medium text-white hover:bg-opacity-80 sm:text-lg">
                  Try for free
                </a>
              </NextLink>
            </div>
          </div>

          <div className="relative hidden flex-auto [clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)] lg:block">
            <img
              src="https://source.unsplash.com/random"
              alt="random image from unsplash"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Community */}
        <section className="lg:mt-20">
          <p className="text-center text-gray-600">2,157 comminity worldwide</p>
          <h3 className="mt-2 text-center text-3xl font-bold lg:text-4xl">
            Explore communities
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
            <Card
              avatars={[
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
              ]}
              poster={{
                alt: "random image from unsplash",
                src: "https://source.unsplash.com/random",
              }}
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!"
              title="React community"
              id={1}
            />
            <Card
              avatars={[
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
              ]}
              poster={{
                alt: "random image from unsplash",
                src: "https://source.unsplash.com/random",
              }}
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!"
              title="Angular community"
              id={2}
            />
            <Card
              avatars={[
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
                {
                  alt: "random image from unsplash",
                  src: "https://source.unsplash.com/random",
                },
              ]}
              poster={{
                alt: "random image from unsplash",
                src: "https://source.unsplash.com/random",
              }}
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!"
              title="Vue community"
              id={3}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button className="rounded-lg bg-sky-200 px-4 py-2 font-medium text-sky-500 hover:opacity-80 focus-visible:outline-none sm:text-lg">
              Load more
            </button>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-12 lg:mt-20">
          <p className="text-center text-gray-600">
            2,157 people have said how good Rareblocks
          </p>
          <h3 className="mt-1.5 text-center text-3xl font-bold lg:text-4xl">
            Our happy clients say about us
          </h3>

          <div className="relative mt-8 p-2 lg:mt-10">
            <div className="absolute inset-0 bg-gradient-to-b from-green-300 via-purple-300 to-yellow-300 blur-xl md:bg-gradient-to-r"></div>

            <div className="relative grid gap-6 md:grid-cols-3">
              <Testimonial
                avatar={{
                  src: "https://source.unsplash.com/random",
                  alt: "random image from unsplash",
                }}
                name="Leslie Alexander"
                profession="Frontend developer"
                thought="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
              />
              <Testimonial
                avatar={{
                  src: "https://source.unsplash.com/random",
                  alt: "random image from unsplash",
                }}
                name="Leslie Alexander"
                profession="Frontend developer"
                thought="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
              />
              <Testimonial
                avatar={{
                  src: "https://source.unsplash.com/random",
                  alt: "random image from unsplash",
                }}
                name="Leslie Alexander"
                profession="Frontend developer"
                thought="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <NextLink href="/reviews">
              <a className="cursor-pointer font-medium underline focus-visible:outline-none">
                check all 2,345 reviews
              </a>
            </NextLink>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 lg:mt-20">
          <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div className="space-y-6">
              <span className="font-medium uppercase text-gray-500">faq</span>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Discover the most common questions.
              </h1>
              <p className="text-gray-500 sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                consequatur? Quia minus placeat corrupti cupiditate eaque
                officiis rerum fuga ullam.
              </p>
            </div>
            <div className="space-y-6 px-2">
              <div className="relative py-2">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-300 via-indigo-300 to-pink-300 blur-xl"></div>
                <Faq
                  question="Does this theme supports plugins?"
                  answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
              <Faq
                question=" Dark them is available?"
                answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />

              <div className="flex justify-center lg:justify-start">
                <NextLink href="/faq">
                  <a className="inline-block font-medium underline focus-visible:outline-none">
                    Check all common questions
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mt-12 lg:mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 space-y-5 md:order-1">
              <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-left">
                <span className="block">Max is a USA based designer</span>
                <span className="block opacity-50">
                  who lives to tell story
                </span>
              </h1>

              <div className="flex justify-center text-gray-500 md:justify-start">
                <p className="max-w-lg text-center md:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni, laudantium. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-x-4 md:justify-start">
                <a href="https://github.com/dheerajsinghnagdali/">
                  <BsGithub size="1.25rem" />
                </a>
                <a href="https://instagram.com/officiallydheeraj/">
                  <BsInstagram size="1.25rem" />
                </a>
                <a href="https://www.linkedin.com/in/dheerajsinghnagdali">
                  <BsLinkedin size="1.25rem" />
                </a>
                <a href="https://twitter.com/ReactDevDheeraj/">
                  <BsTwitter size="1.25rem" />
                </a>
              </div>
            </div>

            <div className="relative order-1 place-self-center md:order-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                alt="Max portrait"
                className="aspect-square w-full object-cover object-top [@media(min-width:336px)]:w-80"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-12 border-t sm:px-6 lg:mt-20">
        <div className="flex flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between lg:px-8">
          <span className="text-gray-500">
            @2020 Workflows, Inc. All rights reserved
          </span>
          <div className="flex gap-x-4">
            <a href="#" className="text-gray-500">
              <BsGithub size="1.25rem" />
            </a>
            <a href="#" className="text-gray-500">
              <BsInstagram size="1.25rem" />
            </a>
            <a href="#" className="text-gray-500">
              <BsLinkedin size="1.25rem" />
            </a>
            <a href="#" className="text-gray-500">
              <BsTwitter size="1.25rem" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
