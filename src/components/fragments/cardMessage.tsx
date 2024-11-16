import Image from "next/image";
import Link from "next/link";

type MessageProp = {
  username: string;
  name: string;
  image: string;
  message: {
    messageId: number;
    message: string;
  };
};
const CardMessage = (prop: MessageProp) => {
  const { image, message, name, username } = prop;
  return (
    <Link
      href={`/direct/inbox/t/${username}`}
      className="w-full flex items-center gap-3 hover:bg-slate-100 cursor-pointer pl-10 py-2"
    >
      <header className="">
        <div className="size-12 relative rounded-full overflow-hidden">
          <Image
            src={image}
            width={500}
            height={500}
            alt={username}
            className="absolute inset-0 size-12 object-cover"
          />
        </div>
      </header>

      <div className=" w-full">
        <h1 className="font-semibold">{name}</h1>
        <p className="font-light text-xs line-clamp-1">{message.message}</p>
      </div>
    </Link>
  );
};
export default CardMessage;
