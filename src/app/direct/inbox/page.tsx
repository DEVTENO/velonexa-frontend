import { FetchApiResponse } from "@/lib/types/types";
import React from "react";
import dynamic from "next/dynamic";
const CardMessage = dynamic(() => import("@/components/fragments/cardMessage"));
type TMessage = {
  username: string;
  name: string;
  messages: { messageId: number; message: string }[];
  image: string;
};

const MockMessage: FetchApiResponse<TMessage[]> = {
  message: "ok",
  success: true,
  data: [
    {
      image: "/user-profile.jpg",
      messages: [
        {
          message: "le. nanti ada yang ke rumah kamu jam 3 pagi",
          messageId: 1,
        },
      ],
      name: "Mulyono",
      username: "user-1",
    },
    {
      image: "/user-profile.jpg",
      messages: [{ message: "bau ketek jir", messageId: 1 }],
      name: "kaesang",
      username: "user-2",
    },
    {
      image: "/user-profile.jpg",
      messages: [{ message: "woy fufufafa", messageId: 1 }],
      name: "Fufufafa",
      username: "user-3",
    },
    {
      image: "/user-profile.jpg",
      messages: [
        { message: "woy fufufafa", messageId: 1 },
        {
          message:
            "Maju lo FufuFafa gua tau lu lagi sembunyi di belakang bapak lo. Taik lu fufufafa",
          messageId: 1,
        },
      ],
      name: "Fufufafa",
      username: "user-4",
    },
  ],
};

const Page = () => {
  return (
    <section className="w-full max-w-[400px] h-full min-h-screen border-r border-r-black  pt-14 ">
      <h1 className="2xl:text-[27px] xl:text-2xl font-medium ml-7">Message</h1>
      <div className="mt-7">
        {MockMessage.data.map((item) => (
          <div key={item.username}>
            <CardMessage
              username={item.username}
              name={item.name}
              image={item.image}
              message={item.messages[item.messages.length - 1]}
            />
          </div>
        ))}
      </div>
    </section>
  );
  ``;
};

export default Page;
