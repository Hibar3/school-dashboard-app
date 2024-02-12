// components/Box.tsx
export const Box = (props?: BoxProps) => {
  const { title, subtitle, text, imgSrc, className } = props || {};
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUDO4csrOn9gcdkJjZ8Sl-FZfQ1yjHgIFOA&usqp=CAU";

  return (
    <div className={className}>
      <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-1 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <img
          className="rounded-t-lg md:rounded-none md:rounded-s-lg max-w-12 object-cover"
          src={imgSrc || defaultImg}
          alt="/"
        />
        <div className="flex flex-col p-2 max-h-12 leading-normal">
          <h5 className="font-bold text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
            {title || "Mid-term paper"}
          </h5>
          <p className="font-light text-ellipsis text-gray-700 text-xs dark:text-gray-400 overflow-hidden ">
            {subtitle || "Summer term"}
          </p>
        </div>
        <div className="flex justify-items-center items-center place-items-center justify-center justify-self-center bg-green-300 rounded-full w-full max-w-12">
          <p className="font-semibold text-zinc-900">{text || 98}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
