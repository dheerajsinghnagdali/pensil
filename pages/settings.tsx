import * as React from "react";
import { AiFillStar } from "react-icons/ai";
import NextLink from "next/link";
import { Card, Faq, Highlight, Testimonial } from ".";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { IoAdd, IoRemove } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import { NextPageWithLayout, Provider } from "./_app";
import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useRouter } from "next/router";
import { useAppState } from "./_app";

interface Group {
  name: string;
  desc: string;
  poster: string;
  members: string;
}

interface Testimonial {
  thought: string;
  avatar: string;
  name: string;
  profession: string;
}

interface Profile {
  avatar: string;
  name: string;
  about: string;
  linkedinLink: string;
  githubLink: string;
  twitterLink: string;
  instagramLink: string;
}

interface Faq {
  answer: string;
  question: string;
}

export interface State {
  title: string;
  poster: string;
  highlights: { value: string }[];
  groups: Group[];
  testimonials: Testimonial[];
  profile: Profile;
  faqs: Faq[];
}

export const initialState: State = {
  poster: "https://source.unsplash.com/random",
  title: "Programing community",
  highlights: [
    {
      value: "You'll get all type of support by experts developers 24 hours",
    },
    {
      value: "Code review by experts.",
    },
    {
      value: "Open source projects discussion",
    },
  ],
  groups: [
    {
      name: "React community",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
      members: "23,345",
      poster: "https://source.unsplash.com/random",
    },
    {
      name: "Angular community",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
      members: "23,345",
      poster: "https://source.unsplash.com/random",
    },
    {
      name: "Vue community",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
      members: "23,345",
      poster: "https://source.unsplash.com/random",
    },
  ],
  faqs: [
    {
      question: "Does this theme supports plugins?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      question: "Does this theme supports plugins?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      question: "Does this theme supports plugins?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
  ],
  profile: {
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    githubLink: "https://github.com/dheerajsinghnagdali",
    instagramLink: "https://instagram.com/officiallydheeraj",
    linkedinLink: "https://linkedin.com/dheerajsinghnagdali",
    twitterLink: "https://twitter.com/ReactDevDheeraj",
    name: "Alan walker",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  },
  testimonials: [
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
    {
      avatar: "https://source.unsplash.com/random",
      name: "Matt",
      profession: "Frontend enginner",
      thought:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem repudiandae maiores!",
    },
  ],
};

const SettingsPage: NextPageWithLayout = () => {
  const [
    { faqs, groups, highlights, poster, profile, testimonials, title },
    setState,
  ] = React.useState(initialState);
  const [previewMode, setPreviewMode] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const { setAppState } = useAppState();

  const onPreviewMode = () => {
    setPreviewMode(true);
  };

  const offPreviewMode = () => {
    setPreviewMode(false);
  };

  const publish = () => {
    setAppState({
      ...{
        faqs,
        groups,
        highlights,
        poster,
        profile,
        testimonials,
        title,
      },
    });
    router.push("/");
  };

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const { register, handleSubmit, control } = useForm<State>({
    defaultValues: initialState,
  });
  const highLightFieldArrayHandler = useFieldArray({
    name: "highlights",
    control,
  });
  const groupFieldArrayHandler = useFieldArray({
    name: "groups",
    control,
  });
  const testimonialFieldArrayHandler = useFieldArray({
    name: "testimonials",
    control,
  });
  const faqFieldArrayHandler = useFieldArray({
    name: "faqs",
    control,
  });

  const onSubmit: SubmitHandler<State> = (data) => {
    setState({ ...data });
  };

  return (
    <>
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
          onClick={toggleSidebar}
          className="rounded text-black focus-visible:outline-none lg:hidden"
        >
          {isOpen ? (
            <IoMdClose size="1.5rem" />
          ) : (
            <CgMenuLeftAlt size="1.5rem" />
          )}
        </button>

        <nav className={`flex gap-4 ${previewMode ? "hidden" : ""}`}>
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

        <nav className={`flex gap-4 ${previewMode ? "" : "hidden"}`}>
          <button
            onClick={offPreviewMode}
            className="rounded-lg bg-sky-200 px-3 py-2 text-center font-medium text-sky-600 hover:bg-opacity-80 focus-visible:outline-none"
          >
            Edit
          </button>
          <button
            onClick={publish}
            className="rounded-lg bg-sky-500 px-3 py-2 text-center font-medium text-white hover:bg-opacity-80 focus-visible:outline-none"
          >
            Publish
          </button>
        </nav>
      </header>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <aside
          className={`fixed inset-0 top-16 left-[max(0px,calc(50%-45rem))] right-auto z-20 w-[28rem] max-w-[calc(100%-1.75rem)] overflow-x-auto overflow-y-auto border-r bg-white px-4 py-8 font-poppins ${
            isOpen
              ? previewMode
                ? "hidden lg:hidden"
                : ""
              : previewMode
              ? "hidden lg:hidden"
              : "hidden lg:block"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-sm font-medium">Hero</h4>
            <div className="mt-4 space-y-3 rounded bg-white p-4 shadow">
              <div className="space-y-2">
                <label className="text-xs" htmlFor="title">
                  Title
                </label>
                <input
                  {...register(`title`)}
                  className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                  type="text"
                  id="group-name"
                  placeholder="React community"
                />
              </div>

              <div className="mt-3 space-y-2">
                <label className="text-xs" htmlFor="hero-poster">
                  Hero image
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("poster")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    id="hero-poster"
                    type="url"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>

              <div>
                {highLightFieldArrayHandler.fields.map((field, index) => (
                  <div className="space-y-2" key={field.id}>
                    <label className="text-xs" htmlFor="highlight">
                      Hightlight
                    </label>
                    <div className="flex items-center space-x-2">
                      <textarea
                        {...register(`highlights.${index}.value`)}
                        className="w-full flex-auto rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        id="highlight"
                        rows={2}
                      ></textarea>
                      <button
                        onClick={() => highLightFieldArrayHandler.remove(index)}
                        type="button"
                        className="flex-none rounded-full bg-gray-100 p-0.5"
                      >
                        <IoRemove />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() =>
                    highLightFieldArrayHandler.append({ value: "" })
                  }
                  className="mt-1.5 inline-flex items-center space-x-2 text-xs font-medium text-sky-500"
                  type="button"
                >
                  <IoAdd className="flex-none" />
                  <span>Add field</span>
                </button>
              </div>
            </div>

            <div className="py-5">
              <hr className="border-gray-200"></hr>
            </div>

            <h4 className="text-sm font-medium">Groups</h4>
            <div className="mt-4 rounded p-4 shadow">
              <div className="space-y-3">
                {groupFieldArrayHandler.fields.map((field, index) => (
                  <div key={field.id}>
                    <button
                      onClick={() => groupFieldArrayHandler.remove(index)}
                      className="ml-auto block rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-50"
                      type="button"
                    >
                      <HiOutlineTrash size="1.25rem" />
                    </button>

                    <div className="mt-1.5 space-y-2">
                      <label className="text-xs" htmlFor="group-poster">
                        Group image
                      </label>
                      <div className="flex">
                        <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                          <span>https://</span>
                        </div>
                        <input
                          className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                          {...register(`groups.${index}.poster`)}
                          type="url"
                          id="group-poster"
                          placeholder="source.unsplash.com/random"
                        />
                      </div>
                    </div>

                    <div className="mt-3 space-y-2">
                      <label className="text-xs" htmlFor="group-name">
                        Group name
                      </label>
                      <input
                        {...register(`groups.${index}.name`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        type="text"
                        id="group-name"
                        placeholder="React community"
                      />
                    </div>

                    <div className="mt-3 space-y-2">
                      <label className="text-xs" htmlFor="members">
                        Members no.
                      </label>
                      <input
                        {...register(`groups.${index}.members`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        type="text"
                        id="members"
                        placeholder="23,599"
                      />
                    </div>

                    <div className="mt-3 space-y-2">
                      <label className="text-xs" htmlFor="group-desc">
                        Group description
                      </label>
                      <textarea
                        {...register(`groups.${index}.desc`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        id="group-desc"
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  groupFieldArrayHandler.append({
                    desc: "",
                    members: "",
                    name: "",
                    poster: "",
                  })
                }
                className="mt-1.5 inline-flex items-center space-x-2 text-xs font-medium text-sky-500"
                type="button"
              >
                <IoAdd className="flex-none" />
                <span>Add field</span>
              </button>
            </div>

            <div className="py-5">
              <hr className="border-gray-200"></hr>
            </div>

            <h4 className="text-sm font-medium">Testimonial</h4>
            <div className="mt-4 rounded p-4 shadow">
              <div className="space-y-3">
                {testimonialFieldArrayHandler.fields.map((field, index) => (
                  <div key={field.id}>
                    <button
                      onClick={() => testimonialFieldArrayHandler.remove(index)}
                      className="ml-auto block rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-50"
                      type="button"
                    >
                      <HiOutlineTrash size="1.25rem" />
                    </button>

                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="name">
                        Name
                      </label>
                      <input
                        {...register(`testimonials.${index}.name`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        type="text"
                        id="name"
                        placeholder="Matt walker"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="profession">
                        Profession
                      </label>
                      <input
                        {...register(`testimonials.${index}.profession`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        type="text"
                        id="profession"
                        placeholder="Frontend developer"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="avatar">
                        Avatar
                      </label>
                      <div className="flex">
                        <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                          <span>https://</span>
                        </div>
                        <input
                          {...register(`testimonials.${index}.avatar`)}
                          className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                          type="url"
                          id="avatar"
                          placeholder="source.unsplash.com/random"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="thought">
                        Thought
                      </label>
                      <textarea
                        {...register(`testimonials.${index}.thought`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        id="thought"
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  testimonialFieldArrayHandler.append({
                    avatar: "",
                    name: "",
                    profession: "",
                    thought: "",
                  })
                }
                className="mt-1.5 inline-flex items-center space-x-2 text-xs font-medium text-sky-500"
                type="button"
              >
                <IoAdd className="flex-none" />
                <span>Add field</span>
              </button>
            </div>

            <div className="py-5">
              <hr className="border-gray-200"></hr>
            </div>

            <h4 className="text-sm font-medium">Profile</h4>
            <div className="mt-4 space-y-3 rounded p-4 shadow">
              <div className="space-y-2">
                <label className="text-xs" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("profile.name")}
                  className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                  type="text"
                  id="name"
                  placeholder="Matt walker"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="about">
                  About
                </label>
                <textarea
                  {...register("profile.about")}
                  className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                  id="about"
                  rows={2}
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="avatar">
                  Avatar
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("profile.avatar")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    type="url"
                    id="avatar"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="twitter-account">
                  Twitter
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("profile.twitterLink")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    type="url"
                    id="twitter-account"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="instagram-account">
                  Instagram
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("profile.instagramLink")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    type="url"
                    id="instagram-account"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="linkedin-account">
                  Linkedin
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("profile.linkedinLink")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    type="url"
                    id="linkedin-account"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs" htmlFor="github-account">
                  Github
                </label>
                <div className="flex">
                  <div className="inline-flex items-center justify-center rounded-l-lg border-t border-l border-b border-gray-300 bg-gray-50 px-2 text-xs text-gray-500">
                    <span>https://</span>
                  </div>
                  <input
                    {...register("profile.githubLink")}
                    className="flex-auto rounded-r-lg border-gray-300 py-2 text-xs focus:border-sky-500 focus:ring-sky-500"
                    type="url"
                    id="github-account"
                    placeholder="source.unsplash.com/random"
                  />
                </div>
              </div>
            </div>

            <div className="py-5">
              <hr className="border-gray-200"></hr>
            </div>

            <h4 className="text-sm font-medium">Faqs</h4>
            <div className="mt-4 rounded p-4 shadow">
              <div className="space-y-3">
                {faqFieldArrayHandler.fields.map((field, index) => (
                  <div key={field.id}>
                    <button
                      onClick={() => faqFieldArrayHandler.remove(index)}
                      className="ml-auto block rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-50"
                      type="button"
                    >
                      <HiOutlineTrash size="1.25rem" />
                    </button>
                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="question">
                        Question
                      </label>
                      <textarea
                        {...register(`faqs.${index}.question`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        id="question"
                        rows={2}
                      ></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs" htmlFor="question">
                        Answer
                      </label>
                      <textarea
                        {...register(`faqs.${index}.answer`)}
                        className="w-full rounded-lg border-gray-300 text-xs focus:border-sky-500 focus:ring-sky-500"
                        id="Answer"
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  faqFieldArrayHandler.append({
                    question: "",
                    answer: "",
                  })
                }
                className="mt-1.5 inline-flex items-center space-x-2 text-xs font-medium text-sky-500"
                type="button"
              >
                <IoAdd className="flex-none" />
                <span>Add field</span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-end space-x-2">
              <button
                onClick={onPreviewMode}
                className="rounded-lg border bg-gray-50 px-3 py-2 text-sm font-medium hover:bg-gray-100"
                type="submit"
              >
                Preview
              </button>
              <button
                className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-75"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </aside>

        <div className={`pt-16 pb-8 ${previewMode ? "" : "lg:pl-[28rem]"}`}>
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
                alt="Hero image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </section>

          {/* Community */}
          <section className="lg:mt-20">
            <p className="text-center text-gray-600">
              2,157 comminity worldwide
            </p>
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
                  <Faq key={key} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

SettingsPage.Layout = ({ children }) => <>{children}</>;

export default SettingsPage;
