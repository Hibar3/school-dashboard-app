// components/Card.tsx
import { Card } from "flowbite-react";

export const ProductCard = (props?: Props) => {
  const { title, subtitle, text, imgSrc, className } = props || {};
  const defaultImg = "https://www.flowbite-react.com/images/blog/image-4.jpg";

  return (
    <>
      <a
        href="#"
        className="flex flex-col p-1 overflow-hidden bg-white border border-gray-200 rounded-lg shadow md:flex-row md:mr-2 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover rounded-t-lg h-64 sm:h-auto sm:w-40 md:rounded-none md:rounded-s-lg"
          src={imgSrc || defaultImg}
          alt="/"
        />
        <div className="flex flex-col p-2 leading-normal max-h-min">
          <h5 className="text-xl text-ellipsis overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Noteworthy technology acquisitions 2021"}
          </h5>
          <p className="text-xs font-light text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400 ">
            {subtitle}
          </p>
          <p className="text-xs font-normal text-ellipsis overflow-hidden text-gray-800 dark:text-gray-400 ">
            {text}
          </p>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
