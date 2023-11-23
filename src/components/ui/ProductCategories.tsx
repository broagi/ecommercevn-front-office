import Image from "next/image";
import Link from "next/link";

export const ProductCategoriies = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-5">
      <Link href="/products">
        <div className="relative group flex justify-center items-center h-48 overflow-hidden w-full">
          <Image
            className="object-center object-cover w-full"
            src="/images/girl.png"
            fill
            alt="girl-image"
          />
          <button  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Women
          </button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </Link>
      <Link href="/products">
        <div className="relative group flex justify-center items-center h-48 overflow-hidden w-full">
          <Image
            className="object-center object-cover h-full w-full"
            src="/images/girl.png"
            fill
            alt="girl-image"
          />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Women
          </button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </Link>
      <Link href="/products">
        <div className="relative group flex justify-center items-center h-48 overflow-hidden w-full">
          <Image
            className="object-center object-cover h-full w-full"
            src="/images/girl.png"
            fill
            alt="girl-image"
          />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Women
          </button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </Link>
      <Link href="/products">
        <div className="relative group flex justify-center items-center h-48 overflow-hidden w-full">
          <Image
            className="object-center object-cover h-full w-full"
            src="/images/girl.png"
            fill
            alt="girl-image"
          />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Women
          </button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </Link>
    </div>
  );
};
