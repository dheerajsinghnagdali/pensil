import * as React from "react";
import NextLink from "next/link";
import { Testimonial } from "./index";

const ReviewsPage: React.FC = () => {
  return (
    <main className="container grow px-4 sm:px-6 lg:px-8">
      <section
        className="flex flex-col items-center py-20 lg:py-32"
        aria-labelledby="hero-title"
      >
        <h1
          className="text-center text-5xl font-extrabold sm:text-6xl"
          id="hero-title"
        >
          <span className="block">Pensil Reviews</span>
          <span className="block text-sky-500">From real people</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-lg text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
          temporibus placeat repellat ab dolorem.
        </p>

        <div className="mt-8 flex flex-col-reverse gap-4 self-stretch sm:flex-row sm:justify-center">
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
      </section>

      <section aria-labelledby="review-title">
        <p className="text-center text-gray-600">
          2,157 people have said how good Pensil
        </p>
        <h3
          className="mt-2 text-center text-3xl font-bold lg:text-4xl"
          id="review-title"
        >
          Our happy clients say about us
        </h3>
        <div className="container relative mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
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
      </section>
    </main>
  );
};

export default ReviewsPage;
