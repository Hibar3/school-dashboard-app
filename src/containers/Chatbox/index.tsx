import Image from "next/image";
import { IoSendSharp } from "react-icons/io5";

export const Chatbox = () => {
  return (
    <div className="flex flex-col bg-stone-800 dark:bg-gray-800 border-dashed border-gray-700 max-h-94 rounded">
      <div className="flex flex-col shadow-md sm:h-96 rounded">
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <div className="pl-2">
              <div className="font-semibold">
                <a className="hover:underline" href="#">
                  Live Chat
                </a>
              </div>
              <p className="text-gray-500 text-xs">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-slate-900 p-2 overflow-y-auto">
          {/* Chat LTR */}
          <div className="flex items-start gap-2.5 mb-4">
            <Image
              className="rounded-full w-8 h-8"
              src="https://i.pravatar.cc/300"
              width={200}
              height={200}
              alt="placeholder"
            />
            <div className="flex flex-col bg-gray-700 dark:bg-gray-700 p-4 border-gray-200 rounded-e-xl rounded-es-xl w-full max-w-44 leading-1.5">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-semibold text-xs ">Bonnie Green</span>
                <span className="font-normal text-gray-400 text-xs dark:text-gray-500">
                  11:46
                </span>
              </div>
              <p className="py-2 font-normal text-xs">
                That is awesome. I think our users will really appreciate the
                improvements.
              </p>
              <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>

          {/* Chat RTL */}
          <div className="flex flex-row-reverse mb-4">
            <div className="flex flex-col bg-gray-100 dark:bg-gray-700 p-2.5 border-gray-200 rounded-ee-xl rounded-s-xl w-full max-w-[320px] leading-1.5">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-semibold text-gray-900 text-xs dark:text-white">
                  You
                </span>
                <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="py-2 font-normal text-gray-900 text-xs dark:text-white">
                That is awesome. I think our users will really appreciate the
                improvements.
              </p>
              <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center p-2 border-t">
          <div className="mx-2 w-full">
            <input
              className="bg-slate-600 border border-gray-200 rounded-full sm:w-full"
              type="text"
              defaultValue=""
              placeholder="Aa"
            />
          </div>
          <div>
            <button
              className="inline-flex hover:bg-indigo-50 p-2 rounded-full"
              type="button"
            >
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
