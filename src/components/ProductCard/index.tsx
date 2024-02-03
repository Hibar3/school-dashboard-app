// components/Card.tsx
import { Progress } from "flowbite-react";

export const ProductCard = (props?: Props) => {
  const { title, subtitle, text, imgSrc, className } = props || {};
  const defaultImg = "https://www.flowbite-react.com/images/blog/image-4.jpg";

  return (
    <>
      <a
        href="#"
        className="flex flex-col p-1 overflow-hidden bg-white border border-gray-200 rounded-lg shadow md:flex-row md:mr-2 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover p-2 rounded-t-lg md:max-h-44 max-w-md md:w-44 md:rounded-none md:rounded-s-lg"
          src={imgSrc || defaultImg}
          alt="/"
        />
        <div className="flex flex-col p-2 leading-normal justify-between max-w-md md:w-96 max-h-min">
          <div>
            <h5 className="text-xl text-ellipsis overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
              {title || "Noteworthy technology acquisitions 2021"}
            </h5>
            <p className="text-xs font-light text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400">
              {subtitle}
            </p>
            <p className="text-xs font-normal text-ellipsis overflow-hidden text-gray-800 dark:text-gray-400">
              {text}
            </p>
          </div>
          <div className="">
            <Progress progress={50} size="sm" />
            <div className="grid grid-rows-1 grid-flow-col justify-between">
              <p className="text-xs font-extralight text-ellipsis overflow-hidden text-gray-800 dark:text-gray-400">
                Status
              </p>
              <p className="text-xs font-extralight text-ellipsis overflow-hidden text-gray-800 dark:text-gray-400">
                50% completed
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
