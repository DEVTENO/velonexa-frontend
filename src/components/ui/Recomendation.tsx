import UserRecomendation from "../ui/UserRecommendation";
function Recomenadation() {

  return (
    <>
    <div className="flex items-center h-screen sticky top-0">
      <div className="flex flex-col gap-[10px]  ">
        <p className="font-medium text-[24px]">Recomendation</p>
        <div className="flex flex-col gap-[24px]">
        <UserRecomendation/>
        <UserRecomendation/>
        <UserRecomendation/>
        <UserRecomendation/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Recomenadation;
