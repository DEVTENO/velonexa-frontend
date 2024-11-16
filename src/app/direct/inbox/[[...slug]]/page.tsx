const Page = (props: { params: { slug: string[] } }) => {
  const { params } = props;
  console.log(params);
  return (
    <div className="text-center w-full h-full flex justify-center items-center">
      Click user to Message
    </div>
  );
};

export default Page;
