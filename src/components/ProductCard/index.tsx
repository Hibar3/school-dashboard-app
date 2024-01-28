// components/Card.tsx
import { Card } from "flowbite-react";

export const ProductCard = (props?: Props) => {
  const { title, text, imgSrc } = props || {};
  return (
    <>
      {/* <Card
        className="max-w-sm max-h-60 p-2"
        horizontal
        imgSrc={
          imgSrc || "https://www.flowbite-react.com/images/blog/image-4.jpg"
        }
      >
        <div className="max-w-sm max-h-60 p-2 text-ellipsis overflow-hidden">
          <h5 className="text-xl text-ellipsis overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Noteworthy technology acquisitions 2021"}
          </h5>
          <p className="max-h-fit text-sm font-normal text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </Card> */}
      <a
        href="#"
        className="flex flex-col p-2 items-center text-ellipsis overflow-hidden bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={
            imgSrc || "https://www.flowbite-react.com/images/blog/image-4.jpg"
          }
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-xl text-ellipsis overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Noteworthy technology acquisitions 2021"}
          </h5>
          <p className="max-h-fit text-sm font-normal text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
