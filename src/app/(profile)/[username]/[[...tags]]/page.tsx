import { Camera } from "lucide-react";

type ProfileProps = {
  params: {
    tags: string;
  };
};

const ProfilePage = async ({ params }: ProfileProps) => {
  const { tags } = params;
  console.log(tags);
  return (
    <div className="w-full h-96  flex flex-col justify-center items-center gap-3">
      <div className="border border-black rounded-full p-5">
        <Camera className="" size={50} />
      </div>
      <div className="mt-5 text-sm w-52 text-center">
        Ketika kamu posting sesuatu, nanti muncul disini
      </div>
    </div>
  );
};

export default ProfilePage;
