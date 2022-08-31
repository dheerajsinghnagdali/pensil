import * as React from "react";
import NextLink from "next/link";
import { Faq } from "./index";

const FaqPage: React.FC = () => {
  return (
    <main className="mx-auto max-w-7xl grow px-4 sm:px-6 lg:px-8">
      <section
        className="flex flex-col items-center py-20 lg:py-32"
        aria-labelledby="hero-title"
      >
        <h1
          className="text-center text-5xl font-extrabold sm:text-6xl"
          id="hero-title"
        >
          <span className="block">Pensil FAQ</span>
          <span className="block text-sky-500">Real people questions</span>
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
              question="Dark them is available?"
              answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <Faq
              question="Can we create any type of community?"
              answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
            <Faq
              question="Members limit in a community?"
              answer="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
