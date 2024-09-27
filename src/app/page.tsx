
import FeedCard from "../components/ui/FeedCard";
import { Import } from "lucide-react";
import Recomenadation from "@/components/ui/Recomendation";
import { useState } from "react";
import React from "react";
import { EllipsisVertical, Heart, Share2, Bookmark } from "lucide-react";
import { ChooseFile } from "@/components/fragments/ChooseFile";

function Home() {
  return (
    <>
    <div className="flex justify-center gap-[84px] ">
    <div className="flex gap-20 flex-col py-20">
      <FeedCard/>
      <FeedCard/>
    </div>
    <Recomenadation/>
    </div>
    </>
  );
}

export default Home;
