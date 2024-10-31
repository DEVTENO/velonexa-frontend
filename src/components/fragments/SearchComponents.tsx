"use client";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "../MotionDiv";
import Link from "next/link";
import Image from "next/image";
import { Dot, Verified, X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { FetchApiResponse, UserProfile } from "@/lib/types/types";

const SearchComponents = (props: { isOpenSearch: boolean }) => {
  const { isOpenSearch } = props;
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [historys, setHistorys] = useState<UserProfile[]>([]);
  const [userDataSearching, setUserDataSearching] = useState<UserProfile[]>([]);
  const [value, setValue] = useState<string>("");
  const handleRemoveHistoryByUser = (username: string) => {
    const historySlice = historys.slice();
    const deleteHistory = historySlice.filter(
      (item) => item.username !== username
    );
    if (typeof window !== "undefined") {
      if (deleteHistory) {
        localStorage.setItem("history", JSON.stringify(deleteHistory));
      }
      setHistorys((history) =>
        history.filter((item) => item.username !== username)
      );
    }
  };
  const handleSearching = (e: ChangeEvent<HTMLInputElement>) => {
    const target = (e.target as HTMLInputElement).value;
    setValue(target);
    const username = target.trim().toLowerCase();
    setIsSearching(true);
    if (username == "") {
      setIsSearching(false);
      return;
    }
    fetchSearching(username);
  };
  const handleDeleteInput = () => {
    setValue("");
    setIsSearching(false);
  };

  const handleHistory = (user: UserProfile) => {
    if (typeof window !== "undefined") {
      const existingHistory = localStorage.getItem("history");

      const historyArray: UserProfile[] = existingHistory
        ? JSON.parse(existingHistory)
        : [];

      if (!historyArray.find((item) => item.username == user.username)) {
        historyArray.push(user);
        setHistorys([...historys, user]);
        localStorage.setItem("history", JSON.stringify(historyArray));
      }
    }
  };

  const fetchSearching = async (username: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/search?username=${username}`
      );
      const response: FetchApiResponse<UserProfile[]> = await res.json();
      if (!response.success) throw response;
      setUserDataSearching(response.data);
    } catch (error: { message: string; success: boolean; data: [] }) {
      setUserDataSearching(error.data);
    }
  };

  useEffect(() => {
    const existingHistory = localStorage.getItem("history");
    // Parse the history or initialize an empty array if nothing is stored
    const historyArray: UserProfile[] = existingHistory
      ? JSON.parse(existingHistory)
      : [];

    setHistorys(historyArray);
    console.log("get history ini");
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpenSearch && (
          <MotionDiv
            animate={{ x: [-500, 0] }}
            exit={{ x: [0, -500] }}
            transition={{ bounce: 0 }}
            className="fixed top-0 left-[4rem] 2xl:left-[8rem] border border-gray-100 shadow-card bg-white rounded-e-xl w-[25rem] h-screen z-[1]"
          >
            <InputSearching
              handleInput={handleSearching}
              value={value}
              deleteInput={handleDeleteInput}
            />
            {!isSearching ? (
              <HistoryComponents
                historys={historys}
                handleClick={() => setHistorys([])}
                removeHistory={handleRemoveHistoryByUser}
              />
            ) : (
              <main className=" mt-5">
                {/* <div className="size-7 mx-auto border-t-transparent border border-black  rounded-full animate-spin" /> */}
                <ListUserSearch
                  userDataSearching={userDataSearching}
                  handleHistory={handleHistory}
                />
              </main>
            )}
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchComponents;

const InputSearching = (props: {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  deleteInput: () => void;
}) => {
  const { handleInput, value, deleteInput } = props;
  return (
    <header className="px-4 ">
      <div className="font-semibold text-2xl w-full pl-5 mt-5">Cari</div>
      <div className="w-full  bg-neutral-200 rounded-lg  text-slate-200 pr-2 pl-4 py-2 mt-10 flex items-center">
        <input
          onChange={handleInput}
          value={value}
          type="text"
          className="w-full bg-transparent outline-none text-black placeholder:text-black placeholder:font-light"
          placeholder="Cari..."
        />
        <button onClick={deleteInput}>
          <X color="black" size={15} />
        </button>
      </div>
    </header>
  );
};

const HistoryComponents = (props: {
  historys: UserProfile[];
  handleClick: () => void;
  removeHistory: (e: string) => void;
}) => {
  const { handleClick, historys, removeHistory } = props;
  return (
    <main className=" mt-5 h-full overflow-y-scroll ">
      {historys.length > 0 ? (
        <>
          <hr className="mt-6" />
          <section className="w-full flex justify-between text-md mb-5 pr-7 pl-8  ">
            <h1 className="font-semibold">Terbaru</h1>
            <button
              onClick={handleClick}
              className="text-blue-400 hover:text-blue-600 text-sm font-semibold"
            >
              Clear All
            </button>
          </section>
        </>
      ) : null}
      {historys.length > 0 ? (
        historys.map((item) => (
          <div key={item.username} className="relative">
            <Link
              href={`/${item.username}`}
              className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100"
            >
              <Image
                alt={item.username}
                src={item.profileImage}
                width={500}
                height={500}
                className="size-12 rounded-full"
              />
              <div className="text-sm space-y-[-3px]">
                <h1 className="font-semibold ">{item.username}</h1>
                <div className="font-light text-black flex items-center ">
                  {item.name}
                  {item.isVerify ? (
                    <Verified color="white" fill="#3971FF" className="ml-2" />
                  ) : null}
                  <Dot color="gray" />
                  <span className="text-xs">Mengikuti</span>
                </div>
              </div>
            </Link>
            <button
              className="absolute right-7 top-6 z-10  "
              onClick={() => removeHistory(item.username)}
            >
              <X color="gray" />
            </button>
          </div>
        ))
      ) : (
        <main className=" mt-5 font-light text-slate-400 text-center">
          You {"haven't"} search anything
        </main>
      )}
    </main>
  );
};

const ListUserSearch = (props: {
  userDataSearching: UserProfile[];
  handleHistory: (e: UserProfile) => void;
}) => {
  const { userDataSearching, handleHistory } = props;
  return (
    <>
      {userDataSearching.length > 0 ? (
        userDataSearching?.map((item) => (
          <Link
            key={item.username}
            href={`/${item.username}`}
            onClick={() => handleHistory(item)}
            className="w-full pr-7 pl-8  py-2 flex gap-2 items-center group hover:bg-gray-100 "
          >
            <Image
              alt={item.username}
              src={item.profileImage}
              width={500}
              height={500}
              className="size-12 rounded-full"
            />
            <div className="text-sm flex-1">
              <h1 className="font-semibold">{item.username}</h1>
              <p className="font-light text-black flex items-center">
                {item.name}
                {item.isVerify ? (
                  <Verified color="white" fill="#3971FF" />
                ) : null}
                <Dot color="gray" />
                <span>Mengikuti</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="w-full  text-center mx-auto font-poppins font-light text-sm mt-48 ">
          Not Found
        </div>
      )}
    </>
  );
};
