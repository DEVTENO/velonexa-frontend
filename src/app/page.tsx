"use client";
import Recomenadation from "@/components/ui/Recomendation";
import React from "react";
import { ChooseFile } from "@/components/fragments/ChooseFile";
import CommentOverlay from "@/components/ui/CommentOverlay";
import FeedCard from "../components/ui/FeedCard";
import { useState,useEffect } from "react";
import { Key } from "lucide-react";

function Home() {
  
  const [ExpandOverlay, setExpandOverlay] = useState(false);
  const [TotalLike, setTotalLike] = useState(0);
  const [feeds, setFeeds] = useState([
    {
      id : 1,
      isLike : false,
      user : "wahyu",
      address : "Pamulang, Tangerang selatan, Banten",
      upload_time : '5s',
      foto : 'https://images.unsplash.com/photo-1728268267596-bdc11589bd44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
      id : 2,
      isLike : false,
      user : "diar",
      address : "ciledug, Tangerang selatan, Banten",
      upload_time : '5s',
      foto : 'https://images.unsplash.com/photo-1728268267596-bdc11589bd44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id : 3,
      isLike : false,
      user : "rafi",
      address : "pondok aren, Tangerang selatan, Banten",
      upload_time : '5s',
      foto : 'https://images.unsplash.com/photo-1728268267596-bdc11589bd44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]);

  function handleExpandOverlay() {
    setExpandOverlay(!ExpandOverlay);
  }

  function handleLike(id:number) {
    // Like ? setTotalLike(TotalLike + 1) : setTotalLike(TotalLike - 1);
    // setLike(!Like);
    
    console.log(id);
    console.log('kena');
    
    setFeeds((pref)=>
    pref.map((feed ) => 
      feed.id === id ? {...feed, isLike:!feed.isLike} : feed
    )
    )
      console.log(feeds)
  }

  useEffect(() => {
    console.log('Data updated:', feeds);
  }, [feeds]);
  return (
    <>
      <div className=" relative w-full -ml-60">
        
      </div>

      <div className="flex justify-center gap-[84px] z-10">
        <div className="flex gap-20 flex-col py-20">
          {feeds.map((feed)=> (
            <FeedCard 
            ExpandOverlay = {ExpandOverlay}
            id={feed.id}
            key={feed.id} 
            user={feed.user}
            address={feed.address}
            upload_time={feed.upload_time}
            foto={feed.foto}
            handleExpandOverlay={handleExpandOverlay}
            Like={feed.isLike}
            handleLike={handleLike}
            TotalLike={TotalLike}
          />
          ))}
          
          
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
