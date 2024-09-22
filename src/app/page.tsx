"use client";
import FeedCard from "../components/ui/FeedCard";
import { Import } from "lucide-react";
import Recomenadation from "@/components/ui/Recomendation";

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
