import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full flex">
        <section className="w-full max-w-[400px] h-full min-h-screen border-r border-r-black">
          <h1 className="2xl:text-[27px] xl:text-2xl font-medium mt-14 ml-7">
            Message
          </h1>
        </section>
        <section className="w-full xl:min-w-[calc(38rem+1px)] 2xl:max-w-[calc(38rem+1px)] bg-red-500">
          <header></header>
          <main></main>
          <footer></footer>
        </section>
      </div>
    </>
  );
  ``;
};

export default Page;
