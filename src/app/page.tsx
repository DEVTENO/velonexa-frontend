import FeedCard from "../components/ui/FeedCard";
import Recomenadation from "@/components/ui/Recomendation";
import React from "react";
import { ChooseFile } from "@/components/fragments/ChooseFile";

function Home() {
  return (
    <>
      <div className="flex justify-center gap-[84px] ">
        <div className="flex gap-20 flex-col py-20">
          <FeedCard />
          <FeedCard />
        </div>
        <div className="sticky top-0 h-screen mt-10 font-poppins">
          <p className="font-poppins font-medium text-2xl mb-7">Create</p>
          <ChooseFile />
          <Recomenadation />
        </div>
      </div>
    </>
  );
}

export default Home;
