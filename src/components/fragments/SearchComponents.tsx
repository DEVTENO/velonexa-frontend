import { AnimatePresence } from "framer-motion";
import MotionDiv from "../MotionDiv";
import Link from "next/link";
import Image from "next/image";
import { Dot, X } from "lucide-react";

const SearchComponents = (props: { isOpenSearch: boolean }) => {
  const { isOpenSearch } = props;
  return (
    <>
      <AnimatePresence>
        {isOpenSearch && (
          <MotionDiv
            animate={{ x: [-500, 0] }}
            exit={{ x: [0, -500] }}
            transition={{ bounce: 0 }}
            className="fixed top-0 left-[4rem] 2xl:left-[8rem] border border-gray-100 shadow-card bg-white rounded-e-xl w-[25rem] h-screen z-[10]"
          >
            <header className="px-4 ">
              <div className="font-semibold text-2xl w-full pl-5 mt-5">
                Cari
              </div>
              <div className="w-full  bg-neutral-200 rounded-lg  text-slate-200 pr-2 pl-4 py-2 mt-10 flex items-center">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none text-black placeholder:text-black placeholder:font-light"
                  placeholder="Cari..."
                />
                <button>
                  <X color="black" size={15} />
                </button>
              </div>
            </header>
            <hr className="mt-6" />
            <main className=" mt-5 h-full overflow-y-scroll ">
              <section className="w-full flex justify-between text-md mb-5 pr-7 pl-8  ">
                <h1 className="font-semibold">Terbaru</h1>
                <button className="text-blue-400 hover:text-blue-600 text-sm font-semibold">
                  Hapus Semua
                </button>
              </section>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
              <Link
                href={`/user-1`}
                className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
              >
                <Image
                  alt="photo-profile"
                  src={"/user-profile.jpg"}
                  width={500}
                  height={500}
                  className="size-12 rounded-full"
                />
                <div className="text-sm flex-1">
                  <h1 className="font-semibold">user-1</h1>
                  <p className="font-light text-black flex items-center">
                    User Biasa
                    <Dot color="gray" />
                    <span>Mengikuti</span>
                  </p>
                </div>
                <button>
                  <X />
                </button>
              </Link>
            </main>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchComponents;
