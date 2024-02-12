// components/Card.tsx
import { Progress } from "flowbite-react";

export const ProductCard = (props?: CardProps) => {
  const { title, subtitle, text, imgSrc, className } = props || {};
  const defaultImg = "https://www.flowbite-react.com/images/blog/image-4.jpg";

  return (
    <>
      <a
        href="#"
        className="flex flex-col md:flex-row bg-white hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 shadow md:mr-2 p-1 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
      >
        <img
          className="p-2 rounded-t-lg md:rounded-none md:rounded-s-lg md:w-44 max-w-md md:max-h-44 object-cover"
          src={imgSrc || defaultImg}
          alt="/"
        />
        <div className="flex flex-col justify-between p-2 md:w-96 max-w-md max-h-min leading-normal">
          <div>
            <h5 className="font-bold text-ellipsis text-gray-900 text-xl dark:text-white tracking-tight overflow-hidden">
              {title || "Noteworthy technology acquisitions 2021"}
            </h5>
            <p className="font-light text-ellipsis text-gray-700 text-xs dark:text-gray-400 overflow-hidden">
              {subtitle}
            </p>
            <p className="font-normal text-ellipsis text-gray-800 text-xs dark:text-gray-400 overflow-hidden">
              {text}
            </p>
          </div>
          <div className="">
            <Progress progress={50} size="sm" />
            <div className="grid grid-rows-1 grid-flow-col justify-between">
              <p className="font-extralight text-ellipsis text-gray-800 text-xs dark:text-gray-400 overflow-hidden">
                Status
              </p>
              <p className="font-extralight text-ellipsis text-gray-800 text-xs dark:text-gray-400 overflow-hidden">
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
