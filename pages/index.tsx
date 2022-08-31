import type { NextPage } from "next";
import NextLink from "next/link";
import * as React from "react";
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

export const Faq: React.FC<{ question: string; answer: string }> = ({
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

export const Testimonial: React.FC<TestimonialProps> = (props) => {
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

export const Card: React.FC<CardProps> = (props) => {
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
              consequatur? Quia minus placeat corrupti cupiditate eaque officiis
              rerum fuga ullam.
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

      {/* Me */}
      <section className="mt-12 lg:mt-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="order-2 space-y-5 md:order-1">
            <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-left">
              <span className="block">Max is a USA based designer</span>
              <span className="block opacity-50">who lives to tell story</span>
            </h1>

            <div className="flex justify-center text-gray-500 md:justify-start">
              <p className="max-w-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
                laudantium. Lorem ipsum dolor sit amet consectetur.
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
  );
};

export default Home;
