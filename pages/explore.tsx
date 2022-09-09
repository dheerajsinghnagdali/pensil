import * as React from "react";
import { Card } from ".";
import { Header, NextPageWithLayout, Sidebar } from "./_app";

const ExplorePage: NextPageWithLayout = () => {
  return (
    <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
      <main className="pt-16 pb-10 lg:pl-[17.5rem]">
        <section className="grid gap-6 md:grid-cols-2 lg:mt-10 lg:gap-8">
          <Card
            id={1}
            name="React community"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt autem error repellat nostrum ullam voluptates dignissimos!"
            poster={"https://source.unsplash.com/random"}
            members="23,599"
          />
          <Card
            id={2}
            name="Angular community"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt autem error repellat nostrum ullam voluptates dignissimos!"
            poster={"https://source.unsplash.com/random"}
            members="24,199"
          />
          <Card
            id={3}
            name="Vue community"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt autem error repellat nostrum ullam voluptates dignissimos!"
            poster={"https://source.unsplash.com/random"}
            members="11,399"
          />
        </section>
      </main>
    </div>
  );
};

export default ExplorePage;
