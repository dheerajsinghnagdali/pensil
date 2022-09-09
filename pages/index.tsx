import type { NextPage } from "next";
import NextLink from "next/link";
import * as React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPatchCheck,
  BsTwitter,
} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { IoAddOutline, IoRemoveSharp } from "react-icons/io5";
import { NextPageWithLayout, useAppState } from "./_app";

export const Faq: React.FC<{
  question: string;
  answer: string;
  defaultOpen?: boolean;
}> = ({ question, answer, defaultOpen }) => {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className="relative rounded-lg border bg-white p-8 shadow-md">
          <Disclosure.Button className="flex w-full justify-between space-x-2">
            <span className="text-left text-lg font-semibold sm:text-xl">
              {question}
            </span>
            {open ? (
              <IoRemoveSharp className="flex-none" size="1.5rem" />
            ) : (
              <IoAddOutline className="flex-none" size="1.5rem" />
            )}
          </Disclosure.Button>

          <Disclosure.Panel className="mt-4 text-sm text-gray-500">
            {answer}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

interface TestimonialProps {
  thought: string;
  avatar: string;
  name: string;
  profession: string;
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { thought, name, profession, avatar } = props;

  return (
    <article className="space-y-6 rounded bg-white p-6 shadow-md">
      <div className="flex gap-x-0.5">
        <AiFillStar className="text-black" size="1.25rem" />
        <AiFillStar className="text-black" size="1.25rem" />
        <AiFillStar className="text-black" size="1.25rem" />
        <AiFillStar className="text-black" size="1.25rem" />
        <AiFillStar className="text-black" size="1.25rem" />
      </div>
      <p>“{thought}”</p>
      <div className="flex items-center gap-x-2">
        <div className="h-10 w-10 flex-none overflow-hidden rounded-full bg-gray-500">
          <img
            src={avatar}
            alt="Testimonial image"
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
  name: string;
  desc: string;
  id: number | string;
  poster: string;
  members: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { name, desc, id, poster, members } = props;

  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <img
        className="aspect-video object-cover"
        src={poster}
        alt="Community poster"
      />
      <div className="p-3">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="mt-1.5 text-sm">{desc}</p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gray-500"></span>
            <p className="text-sm font-medium">
              <span>{members}</span> members
            </p>
          </div>

          <div className="flex gap-x-2">
            <NextLink href={{ pathname: "/community/[id]", query: { id } }}>
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

export const Highlight: React.FC<{ highlight: string }> = ({ highlight }) => {
  return (
    <div className="flex space-x-2">
      <BsPatchCheck className="flex-none text-blue-500" size="1rem" />
      <span className="inline-flex text-sm text-gray-500">{highlight}</span>
    </div>
  );
};

const HomePage: NextPageWithLayout = () => {
  const { appState } = useAppState();
  const { faqs, groups, highlights, poster, profile, testimonials, title } =
    appState;

  return (
    <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <main className="pt-16 pb-10 lg:pl-[17.5rem]">
        <section className="lg:flex lg:gap-x-4">
          <div className="flex flex-col items-center py-20 backdrop-blur-sm lg:max-w-xs lg:flex-none lg:items-start lg:pt-32 lg:pb-40 lg:backdrop-blur-0">
            <h1 className="max-w-xl text-center text-4xl font-extrabold sm:text-5xl lg:text-left">
              {title}
            </h1>

            <div className="mt-10">
              <NextLink href="/sign-up">
                <a className="rounded-xl bg-sky-500 px-4 py-3 text-center font-medium text-white shadow-xl shadow-sky-500/20 hover:bg-opacity-80 sm:text-lg">
                  Join community
                </a>
              </NextLink>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5 self-stretch lg:mt-8 lg:flex-col">
              {highlights.map((highlight, key) => (
                <Highlight key={key} highlight={highlight.value} />
              ))}
            </div>

            <div className="mt-6 space-y-2.5 lg:mt-8">
              <p className="text-center lg:text-left">Joined by 50k+ users</p>

              <div className="flex items-center gap-x-2">
                <div className="flex gap-x-1">
                  <AiFillStar className="text-black" />
                  <AiFillStar className="text-black" />
                  <AiFillStar className="text-black" />
                  <AiFillStar className="text-black" />
                  <AiFillStar className="text-black" />
                </div>
                <span className="text-sm font-medium">4.1/5</span>
                <span className="text-sm font-medium text-gray-500">
                  (14K Reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden flex-auto [clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)] lg:block">
            <img
              src={poster}
              alt="random image from unsplash"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Community */}
        <section className="lg:mt-20">
          <p className="text-center text-gray-600">2,157 comminity worldwide</p>
          <h3 className="mt-2 text-center text-3xl font-bold lg:text-4xl">
            Explore groups
          </h3>

          <div className="container mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:gap-8">
            {groups.map((group, key) => (
              <Card key={key} id={1} {...group} />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="rounded-lg bg-sky-500 px-4 py-2 font-medium text-white hover:opacity-80 focus-visible:outline-none">
              Show more...
            </button>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-12 lg:mt-20">
          <p className="text-center text-gray-600">
            2,157 people have said how good programing community
          </p>
          <h3 className="mt-1.5 text-center text-3xl font-bold lg:text-4xl">
            Our happy members say about us
          </h3>

          <div className="relative mt-8 p-2 lg:mt-10">
            <div className="absolute inset-0 bg-gradient-to-b from-green-300 via-purple-300 to-yellow-300 blur-xl lg:bg-gradient-to-r"></div>

            <div className="container relative grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, key) => (
                <Testimonial key={key} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Me */}
        <section className="mt-12 lg:mt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 space-y-5 md:order-1">
              <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-left">
                <span className="block">{profile.name}</span>
              </h1>

              <div className="flex justify-center text-gray-500 md:justify-start">
                <p className="max-w-lg text-center md:text-left">
                  {profile.about}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-x-4 md:justify-start">
                <a href={profile.githubLink}>
                  <BsGithub size="1.25rem" />
                </a>
                <a href={profile.instagramLink}>
                  <BsInstagram size="1.25rem" />
                </a>
                <a href={profile.linkedinLink}>
                  <BsLinkedin size="1.25rem" />
                </a>
                <a href={profile.twitterLink}>
                  <BsTwitter size="1.25rem" />
                </a>
              </div>
            </div>

            <div className="order-1 place-self-center md:order-2">
              <img
                src={profile.avatar}
                alt="Max portrait"
                className="aspect-square w-full rounded-xl object-cover object-top [@media(min-width:272px)]:w-60"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 lg:mt-24">
          <div className="grid gap-y-12 lg:gap-x-8 xl:grid-cols-2">
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
              {faqs.map((faq, key) => (
                <Faq key={key} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
