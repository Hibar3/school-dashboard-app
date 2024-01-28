// components/Box.tsx

export const Box = (props?: Props) => {
  const { title, subtitle, text, imgSrc, className } = props || {};
  const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUDO4csrOn9gcdkJjZ8Sl-FZfQ1yjHgIFOA&usqp=CAU";

  return (
    <div className="flex p-1 mb-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover rounded-t-lg max-w-12 md:rounded-none md:rounded-s-lg"
        src={imgSrc || defaultImg}
        alt="/"
      />
      <div className="flex flex-col p-2 leading-normal max-h-12">
        <h5 className="text-sm text-ellipsis overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
          {title || "Mid-term paper"}
        </h5>
        <p className="text-xs font-light text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400 ">
          {subtitle || "Summer term"}
        </p>
      </div>
    </div>
  );
};

export default Box;
