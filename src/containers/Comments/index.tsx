import { Dropdown } from "flowbite-react";
import Image from "next/image";

type CommentProps = {
  name?: string;
  comment?: string;
  date?: string;
  isReplied?: boolean;
};

export const Comments = () => {
  const renderReplies = () => {
    return (
      <article className="bg-white dark:bg-gray-900 mb-3 ml-6 lg:ml-12 p-6 rounded-lg text-base">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 font-semibold text-gray-900 text-sm dark:text-white">
              <Image
                className="mr-2 rounded-full w-6 h-6"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
                width={200}
                height={200}
              />
              Jese Leos
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400">
              <time dateTime="2022-02-12" title="February 12th, 2022">
                Feb. 12, 2022
              </time>
            </p>
          </div>
          <button
            id="dropdownComment2Button"
            data-dropdown-toggle="dropdownComment2"
            className="inline-flex items-center bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 p-2 rounded-lg font-medium text-center text-gray-500 text-sm dark:text-gray-40 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Much appreciated! Glad you liked it ☺️
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <button
            type="button"
            className="flex items-center font-medium text-gray-500 text-sm dark:text-gray-400 hover:underline"
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>
    );
  };

  const renderComment = (props?: CommentProps) => {
    const { name, comment, date, isReplied = false } = props || {};
    return (
      <>
        <article className="bg-white dark:bg-gray-900 rounded-lg text-base">
          <footer className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 font-semibold text-gray-900 text-sm dark:text-white">
                <Image
                  className="mr-2 rounded-full w-6 h-6"
                  src="https://i.pravatar.cc/300"
                  alt="Michael Gough"
                  width={200}
                  height={200}
                />
                {name || "Michael Gough"}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  {date || "Feb. 8, 2022"}
                </time>
              </p>
            </div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 p-2 rounded-lg font-medium text-center text-gray-500 text-sm dark:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
              )}
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Remove</Dropdown.Item>
              <Dropdown.Item>Report</Dropdown.Item>
            </Dropdown>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            {comment ||
              "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tool are as important as the creation of the design strategy."}
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <button
              type="button"
              className="flex items-center font-medium text-gray-500 text-sm dark:text-gray-400 hover:underline"
            >
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
        {isReplied && renderReplies()}
      </>
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 rounded antialiased">
      <div className="mx-auto px-4 sm:max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="mt-2 font-bold text-gray-900 text-lg lg:text-2xl dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <form className="mb-4">
          <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mb-4 px-4 py-2 border rounded-lg rounded-t-lg">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              className="border-0 dark:bg-gray-800 px-0 w-full text-gray-800 text-sm focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 px-4 py-2.5 rounded-lg font-medium text-center text-white text-xs focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
          >
            Post comment
          </button>
        </form>
        {renderComment({ isReplied: true })}
        {renderComment({
          name: "Bonnie Green",
          date: "Mar. 12, 2022",
          comment:
            "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
        })}
      </div>
    </section>
  );
};

export default Comments;
